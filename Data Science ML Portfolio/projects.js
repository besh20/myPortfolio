//   status:   'live' | 'building'


const PROJECTS = [
  {
  title: "AI Codebase Onboarding Assistant",
  category: "genai",
  categoryLabel: "GenAI & RAG",
  status: "live",
  date: "2026",
  description: "Built an intelligent CLI and Streamlit agent system leveraging hybrid search (BM25 + ChromaDB embeddings with Reciprocal Rank Fusion) and Groq LLMs to analyze codebases, evaluate fixes, and automate PR drafts.",
  tags: ["Python", "Groq API", "ChromaDB", "Streamlit", "AST Parsing", "RAG"],
  liveUrl: "https://qiyas-data-science-ai-aojsqbexerwywjcsekqhwu.streamlit.app/", 
  codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/GenAI/AI_Codebase_Onboarding_Assistant"
  },

  {
  title: "Selam Desk — Bilingual AI Registration Agent",
  category: "agentic-ai",
  categoryLabel: "Agentic AI / NLP",
  status: "live",
  date: "2026",
  description: "A tool-calling LLM agent for Ethiopian university registration desks, handling information lookup, registration, complaints, and staff escalation in Amharic and English (including Latin-script Amharic). Built and validated Ethiopian-calendar date logic, per-session safety isolation for concurrent users, and a full offline test suite covering registration edge cases before deployment.",
  tags: ["Python", "Streamlit", "Gemini API", "RAG", "FAISS", "Function Calling", "scikit-learn", "SQLAlchemy"],
  liveUrl: "https://qiyas-data-science-ai-mn5ttynh5thzdo28hptc5x.streamlit.app/",
  codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/GenAI/selam-desk"
  },

  {
  title: "Amharic Sentiment Analyzer",
  category: "nlp",
  categoryLabel: "NLP",
  status: "live",
  date: "2026",
  description: "Fine-tuned transformer models for sentiment classification in Amharic a language largely absent from mainstream NLP tools. Diagnosed and fixed a critical data-quality failure in an auto-labeled dataset by switching to human-annotated benchmarks.",
  tags: ["Python", "PyTorch", "Transformers", "XLM-RoBERTa", "Streamlit", "Hugging Face"],
  liveUrl: "https://qiyas-data-science-ai-femncgxlt7myywxk2kpige.streamlit.app/",
  codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/Deep_Learning/NLP/amharic_sentiment_classifier", 
  },

  {
  title: "Amharic News Classifier",
  category: "nlp",
  categoryLabel: "NLP",
  status: "live",
  date: "2026",
  description: "Fine-tuned a multilingual transformer to classify Amharic news articles into 6 topics (politics, sport, business, entertainment, local and international news), reaching 87.7% weighted F1.",
  tags: ["Python", "PyTorch", "Transformers", "XLM-RoBERTa", "Streamlit", "Hugging Face"],
  liveUrl: "https://qiyas-data-science-ai-eqq6za3x5wbcdpfkf7b24w.streamlit.app/",
  codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/Deep_Learning/NLP/amharic-news-classifier", 
  },

  {
    title: "Real vs. Manipulated Face Detector",
    category: "computer-vision",
    categoryLabel: "Computer Vision",
    status: "live",
    date: "2026",
    description: "A CNN-based detector that spots digitally manipulated faces using Error Level Analysis and Grad-CAM explainability.",
    tags: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    liveUrl: "https://qiyas-data-science-ai-fx5uygkhcsyy5anvd49gfk.streamlit.app/",
    codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/Deep_Learning/CV/Deep_fake_classifier"
  },

  {
    title: "USD / ETB Exchange Rate Forecast",
    category: "time-series",
    categoryLabel: "Time Series",
    status: "live",
    date: "2026",
    description: "A time-series model that projects the Birr's exchange rate against the US Dollar, trained on historical rate data and evaluated on rolling forecasts.",
    tags: ["Python", "ARIMA", "SARIMAX"],
    liveUrl: "https://usd-etb-exchange-rate-forcasting.streamlit.app/",
    codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/TIME_SERIES/Live_USD_ETB_Exchange_Rate_Forecast"
  },
  {
    title: "Customer Segmentation",
    category: "clustering",
    categoryLabel: "Clustering",
    status: "live",
    date: "2026",
    description: "A clustering model that groups customers by behavior and value, turning a raw transaction table into segments a marketing team can act on.",
    tags: ["Python", "K-Means", "Streamlit"],
    liveUrl: "https://customer-segmentation-with-rfm.streamlit.app/",
    codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/Unsupervised/Customer_Segmentation_with_RFM"
  },
  {
    title: "Laptop Price Prediction",
    category: "regression",
    categoryLabel: "Regression",
    status: "live",
    date: "2026",
    description: "A regression model that estimates a Computer's(Laptop/Desktop) fair market price and an acceptable range from its specs with an Individual/Batch prediction feature.",
    tags: ["Python", "Regression models", "Streamlit"],
    liveUrl: "https://computer-price-predictor-app.streamlit.app/",
    codeUrl: "https://github.com/besh20/QIYAS-Data-Science-AI/tree/main/Supervised/Laptop_Price_Prediction"
  },

];
