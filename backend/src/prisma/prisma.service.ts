import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    console.log("📡 Conectando ao banco de dados...");
    await this.$connect();
    console.log("✅ Banco de dados conectado com sucesso!");
  }

  async onModuleDestroy() {
    console.log("❌ Desconectando do banco de dados...");
    await this.$disconnect();
  }
}
