AI Recipe Generator
Project Overview
The AI Recipe Generator is a React.js application that suggests recipes based on a list of ingredients provided by the user. It utilizes Hugging Face’s Mixtral-8x7B-Instruct model for AI-powered recipe generation.

Features
✅ Users enter a list of ingredients they have.
✅ The app sends the ingredients to the Hugging Face API.
✅ The AI suggests a recipe, formatted in Markdown for better readability.
✅ Responsive UI with Tailwind CSS.

Technologies Used
--React.js (Frontend)
--Vite (Development Server)
--Tailwind CSS (Styling)
--Hugging Face Inference API (AI-powered responses)
-----------------Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/ai-recipe-generator.git
cd ai-recipe-generator


2️⃣ Install Dependencies
npm install



3️⃣ Set Up Environment Variables
Create a .env file in the project root and add:

VITE_HF_ACCESS_TOKEN=your_huggingface_api_key




4️⃣ Run the Application
npm run dev
Usage
1️⃣ Enter a list of ingredients.
2️⃣ Click the "Get Recipe" button.
3️⃣ The AI will generate and display a recipe suggestion.