--Recharge Your Mind Program--

--Pre-Requisites--

--Include libraries
-- local json = require("json")
-- local math = require("math")

--Declare variables
local score = 0
 
--Define functions
function randomize(min, max)
	return math.random(min, max) 
end
 
function testAnswers(ans1, ans2, ans3, ans4)
	score = 0
	if ans1 == "A" then
		score = score + 10
	end 
	if ans2 == "B" then
		score = score + 10
	end 
	if ans3 == "C" then
		score = score + 10
	end 
	if ans4 == "D" then
		score = score + 10
	end
	return score 
end
 
function getQuestions()
	local questions = {}
	local q1 = "What is the capital of France? A) Paris B) London C) Rome D) Madrid"
	local q2 = "What is the capital of Germany? A) Milan B) Berlin C) Madrid D) Rome"
	local q3 = "What is the capital of Italy? A) Paris B) Berlin C) Rome D) Madrid"
	local q4 = "What is the capital of Spain? A) Paris B) London C) Madrid D) Vienna"
	questions[1] = q1
	questions[2] = q2
	questions[3] = q3
	questions[4] = q4
	return questions
end
 
function printScore(score)
	print("Your final score is " .. score .. "/40")
end
 
--Program--

--Generate random numbers
local random1 = randomize(1, 4)
local random2 = randomize(1, 4)
local random3 = randomize(1, 4)
local random4 = randomize(1, 4)
 
--Get Questions
local questions = getQuestions()
 
--Print questions
print("Question 1: " .. questions[random1])
print("Question 2: " .. questions[random2])
print("Question 3: " .. questions[random3])
print("Question 4: " .. questions[random4])
 
--Get answers
print("\nPlease enter your answers for each question")
io.write("\nAnswer 1: ")
local answer1 = io.read()

io.write("Answer 2: ")
local answer2 = io.read()
 
io.write("Answer 3: ")
local answer3 = io.read()
 
io.write("Answer 4: ")
local answer4 = io.read()
 
--Test answers
score = testAnswers(answer1, answer2, answer3, answer4)
 
--Print score
printScore(score)