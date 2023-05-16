import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Machine } from './machine.entity'

@Entity()
export class MachineProduction {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Machine)
    machineID: string;

    @Column()
    totalProduction: number;
}
