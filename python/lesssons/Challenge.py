gender = str(input("What is your gender ?(M/F)")).strip().upper()[0]
while gender not in "MF":
            gender=str(input("Invalid gender, please enter again:")).strip().upper()[0]
if gender in "MF":
    print(f"Gender {gender} registred!")