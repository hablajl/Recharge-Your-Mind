--[[
-- Recharge Your Mind
--]]
 
-- General Utility Functions

-- Trimmer to remove whitespace from the start and end of a string
function trim(s)
  if type(s) == "string" then
    return (s:gsub("^%s*(.-)%s*$", "%1"))
  else
    return ""
  end
end

-- Word counter to count the number of words in a string
function countWords(s)
  local c = 0
  if type(s) == "string" then
    for _ in s:gmatch("%S+") do
      c = c + 1
    end
  end
  return c
end

-- Text processor to filter emails and phone numbers
function filterText(s)
  if type(s) == "string" then
    -- Filter emails
    s = s:gsub("%S+@%S+%.%S+", "[EMAIL]")
    -- Filter phone numbers
    s = s:gsub("%d%d%d%-%d%d%d%-%d%d%d%d", "[PHONE]")
  end
  return s
end

-- Memory Game
local used = { }

-- Function to generate a random number
function randomNumber(min, max) 
  local number
  repeat
    number = math.random(min, max)
  until not used[number]
  used[number] = true
  return number
end

-- Function to play the memory game
function playGame()
  local num1 = randomNumber(1, 9)
  local num2 = randomNumber(1, 9)

  -- Prompt the user to enter the sum of the two numbers
  io.write("What is the sum of " .. num1 .. " and " .. num2 .. "? ")
  local answer = io.read("*n")

  -- Print out the result
  if answer == num1 + num2 then
    print("Correct!")
  else
    print("Wrong...")
  end
end

-- Main Loop
while true do
  -- Prompt the user to enter a sentence
  io.write("Enter a sentence or type 'quit': ")
  local input = trim(io.read())
  if input == "quit" then
    break
  end

  -- Process the sentence
  local processed = filterText(input)

  -- Play the memory game if the sentence has more than five words
  if countWords(processed) > 5 then
    print("Playing memory game...")
    playGame()
  end
end