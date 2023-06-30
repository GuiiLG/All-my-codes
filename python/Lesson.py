"""CONTEÚDOS DAS AULAS
age = 16
weight = 62,8
name = 'Alex'
 
print("I'm learning python")
print(7+4)
print ("7"+"4")
print (age, weight)
name2=input("What is your name ?")
age2=input("How old are you ??")
weight2=input("What is your weight ?")
print ("My name is:", name2)
 
#int = inteiro 
#float = reais 
#bool =  True and False  
#str = tem que esta entre aspas
#print (variavel.isnumeric())
#print (variavel.isalpha())
#print (variavel.isalnum())
# + = adição
# - = menos
# * = multiplicação
# / = divisão
# ** = potência
# // = divisão inteira
# % = resto da divisão
#1- ()
#2- ** = pow(n)
#3-*,/,//,%
#4-+,-
raizQ=64**(1/2)
print(raizQ)
print ("aa \n aaaa",end=" ")
print ("aaaaaaa")
import math
from math import sqrt, ceil
import random
a1 = input('Primeiro aluno:')
a2 = input('Segundo aluno:')
a3 = input('Terceiro aluno:')
a4 = input('Quarto aluno:')
lista = [a1, a2, a3, a4]
ordem = random.sample(lista, k=4)
print('A ordem de apresentação será {}'.format(ordem))

AULA-9
SÓ PARA CONTEXTUALIZAR ESSA FRASE que eu usei varias vezes É QUALQUER VARIAVÉL:
print (frase[2:2:2])
print ('''oooooooo
ooooooooo
ooooooooo
ooooooooo''')(ERA PARA SER DUAS ASPAS MAS DA ERRO AQUI)

len(variavel)- conta quantos bits tem a frase
frase.count (oque quer contar)-conta quantas coisa tem na frase ex:('o')
frase.find (qualquer coisa)ou 'qualuer coisa' in frase in - conta a primeira vez que encontrou qualquer coisa
frase.replace('qualquercoisa', 'outra coisa')
frase.upper()- deixa a frase em maiúscula.
frase.lower()-deixa a frase em minúscula.
frase.capitalize()- coloca toda a frase em minúscula menos a primeira letra da primeira palavra
frase.title()-conta quantas palavras tem e deixa em maiúscula a primeira letra de cada uma
frase.strip()-remove todos os espaços inúteis(aqueles que não ligam uma palavra a outra)
---TEM ALGUNS FUNCIONALIDADE DO PYTHON QUE ACRESCENTANDO R(RIGHT) ou L(LEFT) MUDA UM POUCO ELA:
frase.r/lstrip()- remove apenas os ultimos espaços inuteis (direita) ou da esquerda
----------Divisão de strings:
frase.split()- dividi a frase ( cada palavra é colocada dentro de uma outra lista)
'-'.join(frase)- irá juntar cada string como no caso coloquei '-' então vai ter isso no meio delas.

frase.upper().count('qualquer coisa')

AULA 10 -------------------------------------------
if variavel.método():
bloco True
else:
bloco False

AULA 11 -----------------------------------------------
Sempre quando quiser representar uma cor em python terá q começar com-> \033[m   <-e entre o cochetes e o m 
coloca-se um código. E informa:
STYLE: q  o código da fonte basicamente SÃO ELES:
0- NONE(nada)
1- NEGRITO(BOLD)
4-SUBLINHADO(underline)
7 -inverte as configurações(negative)

TEXT: Q É O código do texto SÃO ELES:
30-white 
31-red
32-green
33-yellow
34-blue
35-purple
36-light blue
37-gray

BACK : código da cor de fundo
40-white 
41-red
42-green
43-yellow
44-blue
45-purple
46-light blue
47-gray
TODOS ELES SEPARADOS COM ;(PONTO E VÍRGULA)
EX: \033[0;33;44m
print("\033[0;35;40mOlá mundo")

AULA12-------------------------------------------------------
elif

AULA13--------------------------------------------------------
for c(que é uma varíavel qualquer masgeralmente se usa essa) in range(intervalo./ex:1,10):

AULA14-------------------------------------------------------------------------
WHILE

 
C1-------
x=input("Enter something:")
print("Is it a number ?",x.isnumeric())
print ("Is it a letter?", x.isalpha())
print ("Is it a decimal ?", x.isdecimal())
print ("Is it a digit ?", x.isdigit())
print ("Is it a alpha number ?",x.isalnum())
print ("Is it a printable ?",x.isprintable())
print ("Is it a espace?", x.isspace())
print ("Is it a identifier ? ",x.isidentifier())
print ("Is it a title? ", x.istitle())
print ("Is it in caps lock ?",x.isupper())
#tem mais to com preguiça
 
 
C2-----
month=input ("What month were you born ?")
day =input ("What day were you born ?")
year=input ("What year were you born?")
print ("You borned in", month, day, ",", year+".","Right ?")
 
 
C3----
number1=input("Enter a number: ")
number2=input("Enter another number: ")
result = (int(number1) +int(number2))
print (f"O resultado de {number1} e {number2} é :{result}")
print (number1.isnumeric())
 
 
C4----
???
 
 
C5----
n1=int(input("Enter a number:"))
print (f"The precending number is {n1-1} and the successor number  is {n1+1}")
 
 
C6-----
n = float(input("Enter a number:"))
print (f"O dobro desse número é {n*2}, o triplo é {n*3} e a raiz quadrada é {n**(1/2)}")
 
 
C7--------------
n=float(input ("Enter a number in meters:"))
print (f"The number in centimeters is {n*100} and the number in millimeter is {n*1000}")
 
 
C8--------------------------
g= float(input("Enter the first grade:"))
g2= float(input("Enter the second grade:"))
g3= float(input("Enter the third grade:"))
 
print(f"The student average is {(g+g2+g3)/3}")
 
 
C9-----------------
n=int(input("Which times table do you?"))
print("="*12)
print (f"{n} x 1 = {n*1}")
print (f"{n} x 2 = {n*2}")
print (f"{n} x 3 = {n*3}")
print (f"{n} x 4 = {n*4}")
print (f"{n} x 5 = {n*5}")
print (f"{n} x 6 = {n*6}")
print (f"{n} x 7 = {n*7}")
print (f"{n} x 8 = {n*8}")
print (f"{n} x 9 = {n*9}")
print (f"{n} x 10 = {n*10}")
print ("="*12)
 
 
C10--------------
money = float(input("How much money do you have in REAL ?"))
print (f"You have {money/5.26} dollars")
 
 
C11--------------------------------
width = float(input ("Enter the width:"))
height = float (input("Enter the height:"))
print(f"The area of the wall is {width*height} and the ink needed is {(width*height)/2}")
 
 
C12--------------------------
price =  float (input("Enter the price of the product: "))
print (f"The price with discount is : {((-price*5)/100)+price}")
 
 
C13----------------------------------
salary = float (input("What is your salary ?"))
increase = float(input("What is your percentage increase? "))
print(f"Your salary will be {(salary*increase/100)+salary}")
 
 
C14----------------------------
temperature = float (input("What is the temperature in C°?"))
print (f"The temperature in F° is : {(temperature*9+160)/5}")
 
 
C15----------------------------
x = float(input('Quantos kilometros foi andado com o carro?'))* 0.15
y = int(input('Quantos dias ele foi usado?'))* 60
print(f'Então será cobrado {x + y :.2f} reais .')
 
 
C16-----------------------------
import math
n = float (input("Enter a number:"))
print (f"The number typed number was {n} and the whole number is {math.trunc(n)}")
 
 
C17-----------------------------------
from math import sqrt
cA = float (input("Enter the adjacent leg:"))
cO =  float(input("Enter the opposite  leg:"))
print (f"The hypotenuse is : {sqrt((cA**2)+ cO**2): .2f}")
 
 
C18--------------------------------
from math import sin, tan, cos, radians
n = float(input("Enter a angle:"))
print (f"The sine, tangent and cossine of the angle {n} is : {(radians(sin(n)), (tan(n)), (cos(n))):.2f}")
 
 
C19------------------------------
import random
student = str(input("First student:"))
student2 =  str(input ("Second student:"))
student3 = str(input ("Third student:"))
print (f"The student drawn is :{random.choice([student, student2, student3])}")
 
 
C20----------------------------------
import random
s1 =  (input("First student:"))
s2 = (input("Second student:"))
s3 =  (input ("Third student:"))
s4 =  (input ("Forth student:"))
a = [s1,s2,s3,s4]
random.shuffle(a)
print (f"The order is : ")
print (f"{a}")
 
 
C21----------------------------
import pygame
 
pygame.mixer.init()
pygame.mixer.music.load('Queen - I Want to Break Free (Official)')
pygame.mixer.music.play()


C22------------------------------
name = str(input("Enter your name:")).strip()
aa = name.split()
print (f"Your name in capital is:{name.upper()}
Your in lower case is:{name.lower()}
Your name has {len(name)-name.count(' ')} letters
Your first name has {len(aa[0])} letters

")
#COMENTÁRIO: ESSE EXERCÍCIO ERA PARA TER TRÊS DOUBLE ASPAS MAS ESTAVA DANDO ERRO NA HORA DE PASSAR PARA AQUI

C23-----------------------------
number = int(input("Enter a number up to 9999:"))
number1 = str(number)
print (f"Analyzing the number {number} we have:
unit:{number1[3]}
ten:{number1[2]}
hundred:{number1[1]}
thousand:{number1[0]}
")
#n funciona ocrretamente

C24-----------------------------------
city = input ("Enter the name of your city:").strip()
city1 = city[0:5]
print(city1.capitalize() == 'Santo')

C25-------------------------------------
name = str(input("Enter your name:")).strip()
print(f"Is there Silva in your name ?{'SILVA' in name.upper()}")
 

C26------------------------------------------
phrase = str(input("Enter a phrase:")).strip()
print(f"The letter a appears {phrase.upper().count('A')}
The first time it 'a' appears was in {phrase.upper().find('A')+1}
The last time it 'a' appears was in {phrase.upper().rfind('A')+1}


")

C27--------------------------------------------
name = str(input("Enter your name:")).strip().upper() 
n = name.split() 
print(f"The first name is: {n[0]} 
The last name is: {n[len(n)-1]}

")

C28---------------------------------------------
import random
print ("=====I will think a number between 0 and 5 try to get it right=====")
computer = random.randint(0,5)
player = int(input("What number did I think ?"))
if computer == player:
    print ("You're right! I thought in the same number.")
else:
    print(f"You missed! I thought in the number {computer}")

C29---------------------------------------------------
speed = int(input("What is the current speed of the car ?"))
trafficTicket = (speed - 80)*7
if speed > 80:
    print (f"You exceeded the limit of speed you will must pay {trafficTicket} dollars.")
print("Drive carefully!")

C30---------------------------------------------------
number = int(input("Enter a number:"))
if (number%2) == 0 :
    print ("The number is even.")
else:
    print("The number is odd.")

C31-------------------------------------------------
distance = float(input("Enter the traveled distance in KM/h: "))
passportPrice = distance 
if distance <= 200:
    print(f"The passport price is:{distance * 0.50}")
else:
    print(f"The passport price is: R${distance *0.45:.2f} dollars.")

C32-----------------------------------------------------
import datetime
year = int(input("What year do you want to analyze ? Enter 0 to analyze the current year."))
if year == 0:
    year=datetime.date.today().year

if year%4 == 0 and year%100 !=0 or year%400 ==0:
    print(f"The year {year} is leap.")
else:
    print(f"The year {year} isn't leap.")

C33-------------------------------------------------------
number1 = int(input("Enter the first number:"))
number2 = int(input("Enter the second number"))
number3 = int(input("Enter the thrid number:"))

if number1 > number2 and number1 >number3:
    print (f"The number {number1} is the higher number. ")
if number2 > number1 and number2 > number3:
    print(f"The number {number2} is the higher number.")
if number3 > number1 and number3 > number2:
    print(f"The number {number3} is the higher number.")
if number1 < number2 and number1 < number3:
    print(f"The number {number1} is the smallest number.")
if number2 < number1 and number2 < number3:
    print(f"The number {number2} is the smallest number.")
if number3 < number1 and number3 < number2:
    print(f"The number {number3} is the smallest number.")

C34--------------------------------------
salary = float(input("What is your salary ?"))
a15 = ((salary*15)/100)+salary
a10 = ((salary*10)/100)+salary

if salary > 1250:
    print(f"The increase will be R${a10: .2f}")
else:
    print(f"The increase will be R${a15: .2f}")

C35------------------------------------------
side1 = float(input("Enter a side:"))
side2 = float (input("Enter other side:"))
side3 = float(input("Enter other side:"))
if side1 + side2 > side3 and side1+side3 >side2 and side2+side3 > side1:
    print("With these measurements you can make a triangle.")
else:
    print("You can't make a triangle.")

C36---------------------------------------------
housePrice = float(input("Enter the house value:"))
salary = float(input("Enther your salary:"))
year = float(input("How many years will you pay for the house ?"))
if housePrice/(year*12) >= (salary*30)/100:
    print (f"Provision refused.")
else:
    print("Provision accepted.")


C37--------------------------------------------
number = int(input("Enter a number:"))
choice = int(input('''Choice[1]: Binary 
Choice[2]: octal
Choice[3]: hexadecimal
'''))
if choice == 1:
    print(f"The number{number} in binary is {bin(number)[2:]}")
elif choice ==2:
    print(f'The number {number} in octal is {oct(number)[2:]}')
elif choice == 3:
    print(f'The number {number} in hexadecimal is {hex(number)[2:]}')
else: 
    print("INVALID OPTION.")

C38----------------------------------
n1 = int(input("Enter the first number:"))
n2 = int(input("Enter the second number:"))
if n1 > n2:
    print("The first number is biggest")
elif n1 < n2:
    print('The second number is biggest')
elif n1 == n2:
    print('The numbers are same')

C39------------------------------------------
import datetime
year = int(input("What year were you born ? "))
age = datetime.date.today().year - year
print(f"Who borned in {year} will have {age} in {datetime.date.today().year}")
if age > 18:
    print (f"You can't join the army. You had to have joined {age -18} year ago")
    print (f"You enlistment was in {datetime.date.today().year - (age - 18)} ")
elif age < 18:
    print(f"You will have to join in the army in {18 - age } years in {datetime.date.today().year + age-18}.")
elif age == 18:
    print (f'You have to join in the army this year!')

C40----------------------------------------------
grade1 = float(input("Enter the first grade:"))
grade2 = float(input("Enter the second grade:"))

average= (grade1 + grade2)/2
print (f"average:{average}")
if average < 5:
    print("DISAPROVED!!!")
elif average >= 5 and average <= 6.9:
    print ("RECOVERY!!!")
else:
    print ("APROVED!!!")

C41---------------------------------------------
import datetime
year = int(input("What year were you born?"))
age = datetime.date.today().year - year
if age <= 9:
    print("MIRIM!!")
elif age > 9 and age <= 14:
    print("INFALTIL!!")
elif age > 14 and age <=19:
    print("JÚNIOR")
elif age > 19 and age <=25:
    print("SÊNIOR!")
else:
    print("MASTER!!")
print(f"O atleta tem {age} in {datetime.date.today().year}")


C42---------------------------------------------------------------------
side1 = float (input("Enter the first side:"))
side2 = float(input("Enter the second side:"))
side3 = float(input("Enter the third side:"))
if side1 + side2 < side3 or side1 + side3 < side2 or side2 + side3 < side1:
    print("Its not possible make a triangle whit these measurements.")
else:
    print("Its possible.")

if side1 == side2 == side3:
    print("This triangle is EQUILATERAL!")
elif side1 == side2 != side3 or side1 == side3 != side2 or side2 == side3 != side1:
    print("This triangle is ISOSCELES.")
else:
    print ("This triangle is SCALENE.")


C43-------------------------------------------------------------------------------------
height = float(input("What is your height in m ?"))
weight = float(input("What is your weight in kg ?"))
imc = (weight/(height**2))
print (f"IMC:{imc}")
if imc < 18.5:
    print("Under weight.")
elif 18.5 <= imc < 25:
    print ("Ideal weight.")
elif  25 <= imc <30:
    print("Overweight.")
elif 30<= imc < 40:
    print("Obesity")
else:
    print("Morbid obesity")

C44--------------------------------------------------------------------------------------
produtPrice = float(input("Enter the produt price: R$"))
print("CHOICE A PAYMENT METHOD:")
choice = int(input('''[1]In cash;
[2]Sight in card;
[3]2x in card;
[4]3x or more on the card;'''))
if choice == 1:
    print(f"With this payment method the discount is 10% so the produt price will be: R${produtPrice-((produtPrice*10)/100): .2f}")
elif choice == 2:
    print(f"With this payment method the discount is 5% so the produt price will be: R${produtPrice-((produtPrice*5)/100): .2f}")
elif choice ==3:
    print(f'With payment method the price will be: R${produtPrice :.2f}')
elif choice ==4:
    print(f"Whit this payment method the fees is 20% so the produt price will be : R${produtPrice + ((produtPrice*20)/100): .2f}")
else:
    print("INVALID NUMBER!!")

C45----------------------------------------------------------------------------------------------------------------------------------
import random
print("CHOICE ONE OF THE OPTIONS BELOW:")
choice1 = int(input('''[1]PAPER
[2]STONE
[3]SCISSORS
'''))
list1 = random.choice([1 , 2 , 3])
if list1 == 1:
    print("I choiced paper")
elif list1 == 2:
    print("I choiced stone")
elif list1 == 3:
    print("I choiced scissors")

if choice1 == list1:
    print("DRAW")
elif choice1 == 1 and list1 ==2 or choice1 == 2 and list1 == 3 or choice1 == 3 and list1 == 1:
    print('YOU WIN!!')
elif choice1 == 1 and list1 == 3 or choice1 == 2 and list1 == 1 or choice1==3 and list1 == 2:
    print("YOU LOSE!!")


C46-----------------------------------------------------------------------------------------------------
import time
for c in range(10,-1, -1):
    print(c)
    time.sleep(1)
print("POW POW! BUMMMMMM!")

C47--------------------------------------------------------------------------------------------------------
for c in range(1,51):
    if c%2 ==0:
        print(f"{c}", end= " ")

C48-------------------------------------------------------------------------------------------------------
count1 = 0
sum = 0
for c in range(1, 501, 2):
    if c % 3 == 0:
        sum = sum+ c
        count1 = count1 + 1

print(f"The count is {count1} and the sum is {sum}")


C49------------------------------------------------------------------------------------------------------
n = int(input("Enter a number:"))
for c in range(1,11):
    print(f"{n}x{c} = {n*c}")
print("END")

C50-----------------------------------------------------------------------------------------------------
count = 0
sum = 0
for c in range (1,7):
    n = int(input("Enter a number:"))
    if n%2 == 0:
        sum = sum + n
        count = count + 1
    
    
if count == 0:
    print ("There is no even numbers.")
else:
    print(f"The sum is :{sum} and have count {count} even numbers. ")

C51------------------------------------------------------------------------------------------------------
firsTerm = int(input("Enter the first term:"))
ration = int(input("Enter the ration:"))
for c in range(firsTerm, 11 , ration):
    print(c, end=" ->")
print("Acabou")


C52-------------------------------------------------------------------------------------------------------
sum = 0
number = int(input("Enter a number:"))
for c in range(1,number+1):
    if number%c == 0:
        print(f"\033[32m{c}", end=" ")
        sum = sum + 1
        
    else:
        print(f"\033[31m{c}", end=" ")
print()
if sum == 2:
    print(f"\033[33m{number} is prime number.", )
else:
    print(f"\033[33m{number} isn't a prime number.")
    

C53-------------------------------------------------------------------------------------------------------- 
phrase= str(input("Enter one phrase:")).strip().upper()
division = phrase.split() 
conection = "".join(division)
inverso = ''
for c in range(len(conection) -1,-1,-1):
     inverso += conection[c]
print(inverso.capitalize())
if inverso == conection:
    print("Palíndromo")
else:
    print("NEGATIVO")


C54---------------------------------------------------------------------------------------------------------
import datetime
sumOver = 0
sum = 0

for c in range(1,8):
    year = int(input(f"What year the {c}st person born:"))
    if datetime.date.today().year - year >= 21:
        
        sumOver = sumOver +1
    else:
        
        sum = sum +1
print(f"There {sumOver} over 21 and {sum } under 21.")


C55----------------------------------------------------------------------------------------------------------
maior = 0
menor =0
for c in range(1,6):
    weight = float(input(f"Enter the {c}st weight:"))
    if c == 1:
        maior = weight
        menor = weight
    elif: 
        if weight > maior:
            maior = (maior -maior) + weight
        else:


C56----------------------------------------------------------------------------------------------

sumAVERAGE = 0
oldest = ""
oldestAGE = 0
for c in range(1,5):
    print(f"----------{c}st person----------")
    name = str(input(f"Enter the name:")).strip()
    age = int(input("Enther the age:"))
    gender = str(input("Enter the gender(F/M):")).strip().upper()
    sumAVERAGE =+ sumAVERAGE + age
    if c == 1 and gender in "M":
        oldestAGE == age 
        oldest == name
    if gender in "M"  and age > oldestAGE:
        oldestAGE == age
        oldest == name

   

        
sumAVERAGE = sumAVERAGE/4
print(f"The average is:{sumAVERAGE}")
print(f"The oldest person is :{oldest}")


C57--------------------------------------------------------------------------------------------------

gender = str(input("What is your gender ?(M/F)")).strip().upper()[0]
while gender not in "MF":
            gender=str(input("Invalid gender, please enter again:")).strip().upper()[0]
if gender in "MF":
    print(f"Gender {gender} registred!")


C58------------------------------------------------------------------------------------------------------------
import random
sum = 0
print("===================== I wil think a number between 0 and 10! TAKE A GUESS!=====================")
computer = random.randint(0 , 10)
player = int(input("What number did I think ?"))
while player != computer:
    player = int(input("You missed! Try again:"))
    sum == sum + 1
if player == computer:
    print ("You right! Congratulations!")
    print (f"You needed to win {sum} guesses!")



"""
    












