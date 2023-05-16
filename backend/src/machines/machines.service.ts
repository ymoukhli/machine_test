import { Injectable } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Machine } from './entities/machine.entity';
import { DeleteResult, Repository } from 'typeorm';
import { MachineProduction } from './entities/machineProduction.entity';

@Injectable()
export class MachinesService {

  constructor(
    @InjectRepository(Machine)
    private machineRepository: Repository<Machine>,
    @InjectRepository(MachineProduction)
    private machineProductionRepository: Repository<MachineProduction>
  ){}
  create(createMachineDto: CreateMachineDto): Promise<Machine> {
    return this.machineRepository.save(createMachineDto)
  }

  findAll(): Promise<Machine[]> {
    return this.machineRepository.find();
  }

  findProductionOne(id: number): Promise<MachineProduction> {
    return this.machineProductionRepository.findOneBy({ id });
  }

  findOne(id: number): Promise<Machine> {
    return this.machineRepository.findOneBy({ id });
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return `This action updates a #${id} machine`;
  }

  remove(id: number): Promise<DeleteResult> {
    return this.machineRepository.delete(id);
  }
}
