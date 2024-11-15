import { Inject } from "@nestjs/common";
import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION',
        Inject:[ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource= new DataSource({
                type:'postgres',
                host:config.get ('host'),
                port: +config.get('PORT_DB'),
                username:config.get('USERNAME'),
                password:String(config.get('PASSWORD')),
                database:config.get('DATABASE')
            });

            return dataSource.initialize();
        },
        inject:[ConfigService]
    },
]