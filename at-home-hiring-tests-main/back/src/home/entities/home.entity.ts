import { IdentifiableEntity } from "src/shared/identifiable.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BusinessData } from "./businessData.entity";

@Entity("home")
export class Home extends IdentifiableEntity {
  // -------
  // ADDRESS
  // -------

  @Column({ name: "zip_code" })
  zipcode!: string;
  @Column({ name: "street_number", nullable: true })
  streetNumber?: string;
  @Column({ name: "street_name", nullable: true })
  streetName?: string;
  @Column({ name: "city", nullable: true })
  city?: string;

  // ----------
  // PROPERTIES
  // ----------

  @Column({ name: "surface_m2", nullable: true, type: "float" })
  surfaceM2?: number;
  @Column({ name: "house_land_surface_m2", nullable: true, type: "float" })
  houseLandSurfaceM2?: number;
  @Column({
    name: "house_buildable_surface_m2",
    nullable: true,
    type: "float",
  })
  houseBuildableSurfaceM2?: number;
  @Column({ name: "num_rooms", nullable: true, type: "int" })
  numRooms?: number;
  @Column({ name: "num_bedrooms", nullable: true, type: "int" })
  numBedrooms?: number;
  @Column({ name: "num_bathrooms", nullable: true, type: "int" })
  numBathrooms?: number;
  @Column({ name: "num_floors", nullable: true, type: "int" })
  numFloors?: number;
  @Column({ name: "construction_year", nullable: true, type: "int" })
  constructionYear?: number;
  @Column({ name: "num_secured_parking_spots", nullable: true, type: "int" })
  numSecuredParkingSpots?: number;
  @Column({
    name: "num_unsecured_parking_spots",
    nullable: true,
    type: "int",
  })
  numUnsecuredParkingSpots?: number;

  // ----------
  // RELATIONS
  // ----------

  @Column({ name: "business_data_uuid", nullable: true })
  businessDataUuid?: string;
  @OneToOne(() => BusinessData, (bd) => bd.home)
  @JoinColumn({ name: "business_data_uuid" })
  businessData?: Promise<BusinessData>;
}
