import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "src/roles/roles.models";
import { RolesModule } from "src/roles/roles.module";
import { RolesService } from "src/roles/roles.service";
import { UserRoles } from "src/roles/user-roles.model";
import { UsersController } from "./users.controller";
import { User } from "./users.models";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule],
  exports: [UsersService],
})
export class UsersModule {}
