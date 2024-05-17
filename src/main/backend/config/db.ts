// import 'reflect-metadata'
// import path from 'node:path'
// import { app } from '@electron/remote'
// import { DataSource } from 'typeorm'
// import { BankCashCheque } from '../bank/bank_cash_cheque/bank_cash_cheque.entity'

// const dbPathProd: string = path.join(app.getPath('userData'), 'zauvijek.db')

// // const dbPathDev: string = path.join(__dirname, 'zauvijek.db')

// export default class Database {
//   public dataSource: DataSource

//   constructor() {
//     this.init()
//   }

//   public async init(): Promise<void> {
//     this.dataSource = new DataSource({
//       type: 'sqlite',
//       database: dbPathProd,
//       synchronize: true,
//       logging: false,
//       entities: [BankCashCheque],
//       migrations: ['./migrations/*{.ts,.js}'],
//       migrationsRun: false,
//       subscribers: []
//     })

//     if (this.dataSource.isInitialized) {
//       this.dataSource.synchronize()
//     } else {
//       this.dataSource.initialize()
//     }
//   }
// }
import 'reflect-metadata'
import path from 'node:path'
import { app } from '@electron/remote'
import { DataSource } from 'typeorm'
import { BankCashChequ } from '../bank/bank_cash_cheque/bank_cash_cheque.entity'

const dbPathProd: string = path.join(app.getPath('userData'), 'zauvije.db')

// const dbPathDev: string = path.join(__dirname, 'zauvijek.db')

export default class Database {
  public dataSource: DataSource = new DataSource({
    // Provide a default value
    type: 'sqlite',
    database: dbPathProd,
    synchronize: true,
    logging: false,
    entities: [BankCashChequ],
    migrations: ['./migrations/*{.ts,.js}'],
    migrationsRun: false,
    subscribers: []
  })

  constructor() {
    this.init()
  }

  public async init(): Promise<void> {
    if (this.dataSource.isInitialized) {
      await this.dataSource.synchronize()
    } else {
      await this.dataSource.initialize()
    }
  }
}
