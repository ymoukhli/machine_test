import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
