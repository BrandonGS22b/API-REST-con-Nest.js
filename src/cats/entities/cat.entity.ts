
import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Cat {

    //@PrimaryGeneratedColumn()
    @Column({primary:true, generated: true}) //va estar auto generada acada rato
//estas  van hacer nuestras columnas de nuestras tablas 
//el gato va tener un id, un nombre , anos , raza
    id:number;

    @Column ()
name:string;

@Column ()
age:number;

@Column () // para hacer las columnas esto viene de typeorm
breed:string;

@DeleteDateColumn ()
    deletedAt:Date;


}
//como ultimo paso nos tenemos que ir a cats.module y donde dice imports ponemos [TypeOrmModule.forFeature]