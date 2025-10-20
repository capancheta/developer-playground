
import pygame
import random

# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 400
GRID_SIZE = 20
GRID_WIDTH = SCREEN_WIDTH // GRID_SIZE
GRID_HEIGHT = SCREEN_HEIGHT // GRID_SIZE

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

# Snake properties
SNAKE_SPEED = 10

# Set up the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Snake Game')

# Clock for controlling frame rate
clock = pygame.time.Clock()

# Fonts
font_style = pygame.font.SysFont(None, 50)
score_font = pygame.font.SysFont(None, 35)

def draw_grid():
    for x in range(0, SCREEN_WIDTH, GRID_SIZE):
        pygame.draw.line(screen, BLACK, (x, 0), (x, SCREEN_HEIGHT))
    for y in range(0, SCREEN_HEIGHT, GRID_SIZE):
        pygame.draw.line(screen, BLACK, (0, y), (SCREEN_WIDTH, y))

def draw_snake(snake_list):
    for segment in snake_list:
        pygame.draw.rect(screen, GREEN, [segment[0], segment[1], GRID_SIZE, GRID_SIZE])

def display_score(score):
    value = score_font.render("Your Score: " + str(score), True, WHITE)
    screen.blit(value, [10, 10])

def message(msg, color):
    mesg = font_style.render(msg, True, color)
    screen.blit(mesg, [SCREEN_WIDTH / 6, SCREEN_HEIGHT / 3])

def game_loop():
    game_over = False
    game_close = False

    # Initial snake position and length
    x1 = GRID_WIDTH // 2 * GRID_SIZE
    y1 = GRID_HEIGHT // 2 * GRID_SIZE
    x1_change = 0
    y1_change = 0
    snake_list = []
    length_of_snake = 1

    # Initial food position
    foodx = round(random.randrange(0, GRID_WIDTH - 1)) * GRID_SIZE
    foody = round(random.randrange(0, GRID_HEIGHT - 1)) * GRID_SIZE

    score = 0

    while not game_over:

        while game_close == True:
            screen.fill(BLACK)
            message("You Lost! Press C-Play Again or Q-Quit", RED)
            display_score(score)
            pygame.display.update()

            for event in pygame.event.get():
                if event.type == pygame.KEYDOWN:
                    if event.key == pygame.K_q:
                        game_over = True
                        game_close = False
                    if event.key == pygame.K_c:
                        game_loop() # Restart the game

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT and x1_change == 0: # Prevent reversing direction
                    x1_change = -GRID_SIZE
                    y1_change = 0
                elif event.key == pygame.K_RIGHT and x1_change == 0:
                    x1_change = GRID_SIZE
                    y1_change = 0
                elif event.key == pygame.K_UP and y1_change == 0:
                    y1_change = -GRID_SIZE
                    x1_change = 0
                elif event.key == pygame.K_DOWN and y1_change == 0:
                    y1_change = GRID_SIZE
                    x1_change = 0

        # Check for collisions with boundaries
        if x1 >= SCREEN_WIDTH or x1 < 0 or y1 >= SCREEN_HEIGHT or y1 < 0:
            game_close = True

        # Update snake position
        x1 += x1_change
        y1 += y1_change
        snake_head = [x1, y1]
        snake_list.append(snake_head)

        if len(snake_list) > length_of_snake:
            del snake_list[0]

        # Check for self-collision
        for segment in snake_list[:-1]:
            if segment == snake_head:
                game_close = True

        # Drawing
        screen.fill(BLACK)
        # draw_grid() # Optional: uncomment to draw grid lines
        pygame.draw.rect(screen, RED, [foodx, foody, GRID_SIZE, GRID_SIZE])
        draw_snake(snake_list)
        display_score(score)

        # Check if snake eats food
        if x1 == foodx and y1 == foody:
            foodx = round(random.randrange(0, GRID_WIDTH - 1)) * GRID_SIZE
            foody = round(random.randrange(0, GRID_HEIGHT - 1)) * GRID_SIZE
            length_of_snake += 1
            score += 1

        pygame.display.update()

        # Control snake speed
        clock.tick(SNAKE_SPEED)

    pygame.quit()
    quit()

game_loop()
