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
