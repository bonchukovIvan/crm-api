import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export abstract class IBaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;
  
    @CreateDateColumn({ name: 'create_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt:Date;
}