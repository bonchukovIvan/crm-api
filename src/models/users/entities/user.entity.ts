import { IBaseEntity } from '@Interfaces/database.interface';
import { Entity, Column } from 'typeorm';

@Entity()
export class UserEntity extends IBaseEntity{

  @Column({ type: "varchar", unique: true, length: 36, })
  login: string;

  @Column({ type: 'varchar', unique: true, }) 
  email: string;

  @Column({ type: 'varchar', default: '', unique: true, })
  phoneNumber: string;

  @Column({ type: 'varchar', select: false, length: 24, })
  password: string;

  @Column({ type: 'varchar', })
  firstName: string;

  @Column({ type: 'varchar', })
  lastName: string;

  @Column({ type: 'varchar', default: '', })
  address: string;

  @Column({ type: 'varchar', default: '', name: 'avatar_path', })
  avatarPath: string;

  @Column({ type: 'boolean', default: false, })
  isBanned: boolean;
}