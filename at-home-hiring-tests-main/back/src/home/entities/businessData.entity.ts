import { IdentifiableEntity } from "src/shared/identifiable.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Home } from "./home.entity";

@Entity("business_data")
export class BusinessData extends IdentifiableEntity {
  @Column({ name: "initial_offer_price", nullable: true, type: "float" })
  initialOfferPrice?: number;

  @Column({ name: "final_offer_price", nullable: true, type: "float" })
  finalOfferPrice?: number;

  @Column({ name: "target_sale_price", nullable: true, type: "float" })
  targetSalePrice?: number;

  @Column({ name: "service_fees", nullable: true, type: "float" })
  serviceFees?: number;

  @Column({ name: "negociation_margin", nullable: true, type: "float" })
  negociationMargin?: number;

  @Column({ name: "home_uuid", nullable: true })
  homeUuid?: string;
  @OneToOne(() => Home, (home) => home.businessData)
  @JoinColumn({ name: "home_uuid" })
  home?: Promise<Home>;
}
