import discord
from discord.ext import commands
bot = commands.Bot("!")

@bot.event
async def on_ready():
    print(f"CHEGUEI COMO")

@bot.command(name="oi")
async def send_hi(ctx):
    name = ctx.author.name

    response = "Olá, " + name
    await ctx.send(response)



bot.run("OTU2NTk2NzQ1NzIxMjQ1NzY2.YjyiJA.PfJXB_WFo2xYZWo-dis--x_24Xw")