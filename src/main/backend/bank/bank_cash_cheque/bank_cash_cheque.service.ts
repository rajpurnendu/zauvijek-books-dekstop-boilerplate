import Database from '../../config/db'
import { BankCashChequ } from './bank_cash_cheque.entity'

export default class BankCashChequeService extends Database {
  constructor() {
    super()
    this.init()
    this.createBankCashCheque = this.createBankCashCheque.bind(this)
    this.getAll = this.getAll.bind(this)
  }

  async createBankCashCheque(params: any): Promise<BankCashChequ[]> {
    const bankCashChequeRepository = this.dataSource.getRepository(BankCashChequ)
    const newBankCashCheque = bankCashChequeRepository.create(params)
    await bankCashChequeRepository.save(newBankCashCheque)
    return newBankCashCheque
  }

  public async getAll(): Promise<BankCashChequ[]> {
    const bankCashChequeRepository = this.dataSource.getRepository(BankCashChequ)
    const queryBuilder = bankCashChequeRepository.createQueryBuilder('bank_cash_cheque')

    await queryBuilder.orderBy('bank_cash_cheque.created_at', 'DESC').getMany()

    const { entities } = await queryBuilder.getRawAndEntities()

    return entities
  }
}
