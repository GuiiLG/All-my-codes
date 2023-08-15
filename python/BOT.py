import discord
from discord.ext import commands

# Configuração inicial
TOKEN = 'OTU2NTk2NzQ1NzIxMjQ1NzY2.Gk_eZI.mWUnAwZ4Kcv3pfwbu_ruOCUa_jmJOGG6rsUsQI'  # Substitua pelo seu token
prefixo = '!'  # Prefixo para os comandos do bot

# Definição dos intents
intents = discord.Intents.default()
intents.typing = False
intents.presences = False

# Criação do objeto bot com intents
bot = commands.Bot(command_prefix=prefixo, intents=intents)

# Evento de inicialização
@bot.event
async def on_ready():
    print(f'Bot conectado como {bot.user.name}')

# Comando !hello
@bot.command()
async def hello(ctx):
    await ctx.send(f'Olá, {ctx.author.mention}!')

# Comando !ping
@bot.command()
async def ping(ctx):
    await ctx.send('Pong!')

# Comando !oi
@bot.command()
async def oi(ctx):
    await ctx.send('Olá, senhor!')

# Execução do bot
bot.run(TOKEN)