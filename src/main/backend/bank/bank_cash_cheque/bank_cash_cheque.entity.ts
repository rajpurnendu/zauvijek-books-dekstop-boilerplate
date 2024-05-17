import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class BankCashChequ {
  @PrimaryGeneratedColumn('uuid')
  id: string = ''

  @Column({
    type: 'uuid',
    nullable: false,
    name: 'business_id'
  })
  business_id: string = ''

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
    name: 'account_type'
  })
  account_type: string = ''
}
