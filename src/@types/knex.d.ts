import {  Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
      transactions: {
        id: string
        title: string
        amount: number
        cretead_at: string
        session_id?: string
    }
  }
}