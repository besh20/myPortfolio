//   status:   'live' | 'building'


const PROJECTS = [
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
