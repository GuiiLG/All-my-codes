import pygame
from sys import exit

pygame.init()



screen = pygame.display.set_mode((800, 400))
pygame.display.set_caption('firstGame')  # Changes the game tittle

# Window Icon
icon = pygame.image.load('python/pygame/assets/myers.jpg')
pygame.display.set_icon(icon) #Changes the icon

# Surfaces-----------------------



#Creating a surface image
sky_Surface = pygame.image.load('python/pygame/gameFiles/graphics/Sky.png').convert() #SKY

ground_Surface = pygame.image.load('python/pygame/gameFiles/graphics/ground.png').convert()  #GROUND

snail_Surface = pygame.image.load('python/pygame/gameFiles/graphics/snail/snail1.png').convert_alpha()  #Snail
snail_rect = snail_Surface.get_rect(midbottom = (600,300))
snail_x = 600

player_Surface = pygame.image.load('python/pygame/gameFiles/graphics/Player/player_walk_1.png').convert_alpha()
player_rect = player_Surface.get_rect(midbottom = (80,300))


# Font:
score_font = pygame.font.Font('python/pygame/gameFiles/font/Pixeltype.ttf', 50)
score = 0
score_Surface = score_font.render(f'Score:{score}', False, (64, 64, 64))
score_Rect = score_Surface.get_rect(center = (400,50))

gravity = 0
game_active = False

# Menu
press_Start_Font = pygame.font.Font('python/pygame/gameFiles/font/Pixeltype.ttf',80)
press_Start_Surface = press_Start_Font.render('Press space to start the game', False,  (64, 64, 64))
press_Start_Rect = press_Start_Surface.get_rect(center = (400,80))



clock = pygame.time.Clock()

while True:
    # all the code will run here
    score_Surface = score_font.render(f'Score:{score}', False, (64, 64, 64))
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        
        if game_active:
            if event.type == pygame.KEYDOWN and player_rect.bottom == 300:
                if event.key == pygame.K_SPACE:
                    print('jump')
                    gravity = -20
        else:
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    game_active = True

                
                
    if game_active:
        screen.blit(sky_Surface, (0,0) ) #sKY
        screen.blit(ground_Surface, (0,300)) #ground
        pygame.draw.rect(screen, '#c0e8ec', score_Rect,10)
        pygame.draw.rect(screen, '#c0e8ec', score_Rect)
        screen.blit(score_Surface,score_Rect)#text
        

        if snail_rect.left <= -80:
            snail_rect.left = 900
        else:
            snail_rect.left -= 6
        screen.blit(snail_Surface, snail_rect) #Snail

        score += 1
        gravity +=1
        player_rect.y += gravity
        
        if player_rect.bottom > 300: player_rect.bottom = 300 
        screen.blit(player_Surface,player_rect)

        if player_rect.colliderect(snail_rect) == 1: #Checks collision between two rectanguels
            snail_rect.left = 900
            print('collision')
            game_active = False
            

        mouse = pygame.mouse.get_pos()
        if player_rect.collidepoint(mouse): #Check collision between a rectanguel and some posision in this case the position that the mouse is:
            print('collision mouse')  

    else:
        score = 0
        screen.fill('#c0e8ec') 
        screen.blit(press_Start_Surface, press_Start_Rect)

        

   

    
           



    pygame.display.update()
    clock.tick(60)