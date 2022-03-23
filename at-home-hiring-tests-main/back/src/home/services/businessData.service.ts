import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial } from "typeorm";
import { BusinessData } from "../entities/businessData.entity";
import BusinessDataCustomRepository from "../repositories/businessData.custom.repository";
import HomeService from "./home.service";

@Injectable()
export default class BusinessDataService {
  constructor(
    @InjectRepository(BusinessDataCustomRepository)
    private readonly businessDataRepository: BusinessDataCustomRepository,
    private readonly homeService: HomeService
  ) {}

  async generateBusinessDataForHome(
    homeUuid: string,
    initialOfferPrice: number,
    finalOfferPrice: number,
    targetSalePrice: number
  ): Promise<BusinessData> {
    const maxNegociationMargin = 0.07;
    const zipCode = "75001";

    let serviceFees = await this.computeServiceFees(finalOfferPrice, zipCode);
    let negociationMargin = await this.computeNegociationMargin(targetSalePrice, finalOfferPrice, maxNegociationMargin);

    const businessData = await this.createBusinessData({
      homeUuid,
      initialOfferPrice,
      finalOfferPrice,
      targetSalePrice,
      serviceFees,
      negociationMargin
    });
    await this.homeService.updateHome(homeUuid, {
      businessDataUuid: businessData.uuid,
    });
    return businessData;
  }

  async findBusinessDataByHomeUuid(homeUuid: string): Promise<BusinessData> {
    const results = await this.businessDataRepository.find({ homeUuid });
    if (results.length !== 1) {
      throw Error(
        `Could not find business data from home with uuid ${homeUuid}`
      );
    }
    return results[0];
  }

  async findBusinessData(uuid: string): Promise<BusinessData> {
    const results = await this.businessDataRepository.findByIds([uuid]);
    if (results.length !== 1) {
      throw Error(`Could not find business data with uuid ${uuid}`);
    }
    return results[0];
  }

  async createBusinessData(
    inputBusinessData: DeepPartial<BusinessData>
  ): Promise<BusinessData> {
    const businessData = await this.businessDataRepository.create(
      inputBusinessData
    );
    return this.businessDataRepository.save(businessData);
  }

  async deleteBusinessData(uuid: string): Promise<number> {
    const result = await this.businessDataRepository.delete({ uuid: uuid });
    if (!result.affected) {
      throw Error(`Could not delete business data with uuid ${uuid}`);
    }
    return result.affected;
  }

  async computeNegociationMargin(targetSalePrice:number,finalOfferPrice:number,maxNegociationMargin:number) :Promise<number>{
    let result = await Math.min(targetSalePrice / finalOfferPrice-1,maxNegociationMargin);
    return result;
  }
  async computeServiceFees(finalOfferPrice:number,zipCode:string) :Promise<number>{
    
    let serviceFee = 0;
    const supportedZipCodes = [59,75,92,93,94,44,69];
    let zip_first2 = zipCode[0] + zipCode[1]; // first two chars
    let departement = parseInt(zip_first2);
    if(!supportedZipCodes.includes(departement)){ // postcode not supported
      return -1;
    }

    /* Price categories
      cat0 for < 100 000€
      cat1 for 100 000€ <= price < 145 000€
      cat2 for 145 000€ <= price < 200 000€
      cat3 for 200 000€ <= price < 400 000€
      cat4 for 400 000€ <= price < 650 000€
      cat5 for price >= 600 000€ 
     */

    let priceCategory = -1;
    switch (true){
      case (finalOfferPrice < 100000):priceCategory = 0;break;
      case (finalOfferPrice < 145000):priceCategory = 1;break;
      case (finalOfferPrice < 200000):priceCategory = 2;break;
      case (finalOfferPrice < 400000):priceCategory = 3;break;
      case (finalOfferPrice < 650000):priceCategory = 4;break;
      default:priceCategory = 5;break;
    }
    if(departement == 59){ // Lille
      switch(priceCategory){
        case 0:serviceFee = 15000;break;
        case 1:serviceFee = 19000;break;
        case 2:serviceFee = 20000;break;
        case 3:serviceFee = finalOfferPrice*0.1;break;
        case 4:serviceFee = finalOfferPrice*0.08;break;
        case 5:serviceFee = finalOfferPrice*0.3;break;
        default:break;
      }
    }
    if(departement == 75 || departement == 92 || departement == 93 || departement == 94){ // Paris regions
      switch(priceCategory){
        case 0:serviceFee = 20000;break;
        case 1:serviceFee = 22000;break;
        case 2:serviceFee = 23000;break;
        case 3:serviceFee = finalOfferPrice*0.11;break;
        case 4:serviceFee = finalOfferPrice*0.08;break;
        case 5:serviceFee = finalOfferPrice*0.1;break;
        default:break;
      }
    }
    if(departement == 44 || departement == 69){ // Nantes & Lyon
      switch(priceCategory){
        case 0:serviceFee = 20000;break;
        case 1:serviceFee = 22000;break;
        case 2:serviceFee = 23000;break;
        case 3:serviceFee = finalOfferPrice*0.11;break;
        case 4:serviceFee = finalOfferPrice*0.08;break;
        case 5:serviceFee = finalOfferPrice*0.999999;break;
        default:break;
      }
    }
    return serviceFee;
  }
}
