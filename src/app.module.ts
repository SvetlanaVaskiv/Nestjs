import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.models";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.models";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';


@Module({
	controllers:[],
	providers:[],
	imports: [
		ConfigModule.forRoot({
envFilePath: `${process.env.NODE_ENV}.env`
		}),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASWWORD,
      database: process.env.MYSQL_DB,
      models: [User, Role, UserRoles],
			autoLoadModels:true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule{

}