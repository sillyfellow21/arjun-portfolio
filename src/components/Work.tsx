import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage, { ProjectData } from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects: ProjectData[] = [
  {
    title: "Causal Uplift Churn Prevention",
    category: "Causal Inference & Retention AI",
    tools: "Python, Causal Inference, Uplift Modeling, Meta-learners, Scikit-learn",
    description:
      "Implemented a causal uplift modeling framework to prioritize churn prevention actions by expected intervention impact. Applied treatment-effect oriented evaluation for decision-making in customer retention strategy.",
    github: "https://github.com/sillyfellow21/causal-uplift-churn-prevention",
    link: "https://github.com/sillyfellow21/causal-uplift-churn-prevention",
    accentColor: "#14b8a6",
    fileName: "uplift_meta_learner.py",
    featuredStat: "Intervention Impact AI",
    iconType: "brain",
    codeSnippet: `# Causal Uplift Modeling Pipeline
from causalml.inference.meta import XLearner
from sklearn.ensemble import GradientBoostingRegressor

# Estimate Conditional Average Treatment Effect (CATE)
x_learner = XLearner(learner=GradientBoostingRegressor())
x_learner.fit(X=X_train, treatment=treatment_col, y=y_churn)
cate_estimates = x_learner.predict(X_test)
prioritize_retention_campaign(cate_estimates, top_quantile=0.10)`,
  },
  {
    title: "Medical-RAG-Chatbot",
    category: "Healthcare AI & RAG Assistant",
    tools: "Python, RAG, LLMs, LangChain, Prompt Engineering, Vector Search",
    description:
      "Built a healthcare-focused retrieval-augmented assistant that generates grounded responses using retrieved medical context. Implemented a robust pipeline for context retrieval and prompt orchestration to reduce hallucination risk.",
    github: "https://github.com/sillyfellow21/Medical-RAG-Chatbot",
    link: "https://github.com/sillyfellow21/Medical-RAG-Chatbot",
    accentColor: "#06b6d4",
    fileName: "medical_rag_pipeline.py",
    featuredStat: "Zero-Hallucination Guardrails",
    iconType: "robot",
    codeSnippet: `# Healthcare Retrieval-Augmented Pipeline
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS

# Grounded retrieval with clinical knowledgebase
retriever = medical_vectorstore.as_retriever(search_kwargs={"k": 4})
qa_chain = RetrievalQA.from_chain_type(
    llm=medical_llm,
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True
)
grounded_diagnosis = qa_chain.invoke({"query": patient_symptoms})`,
  },
  {
    title: "AuditRAG-Finance",
    category: "Financial NLP & Document Audit",
    tools: "Python, RAG, NLP, Financial Analysis, Vector Search",
    description:
      "Developed a finance audit support workflow using retrieval-grounded LLM outputs for complex document review tasks. Structured analysis flow for risk-oriented review and evidence-backed summaries.",
    github: "https://github.com/sillyfellow21/AuditRAG-Finance",
    link: "https://github.com/sillyfellow21/AuditRAG-Finance",
    accentColor: "#10b981",
    fileName: "financial_audit_rag.py",
    featuredStat: "Evidence-Backed Audit",
    iconType: "brain",
    codeSnippet: `# Financial Statement Audit Workflow
def audit_filing_review(filing_pdf):
    audit_chunks = extract_and_chunk_pdf(filing_pdf)
    risk_indicators = vector_db.similarity_search_with_score(
        query="material weaknesses in internal control", k=6
    )
    evidence_summary = audit_agent.generate_evidence_review(risk_indicators)
    return compile_audit_report(evidence_summary)`,
  },
  {
    title: "LLM-Mini",
    category: "Transformer Architecture & Full-Stack AI",
    tools: "PyTorch, Transformers, FastAPI, React, JWT",
    description:
      "Built a GPT-style language model from scratch in PyTorch, covering attention mechanisms, transformer blocks, tokenization, and training pipelines. Full-stack integration with FastAPI backend and React frontend.",
    github: "https://github.com/sillyfellow21/LLM-Mini",
    live: "https://frontend-flax-tau-94.vercel.app",
    link: "https://frontend-flax-tau-94.vercel.app",
    accentColor: "#8b5cf6",
    fileName: "gpt_transformer.py",
    featuredStat: "GPT Built From Scratch",
    iconType: "code",
    codeSnippet: `# GPT Architecture from Scratch in PyTorch
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model: int = 512, n_heads: int = 8):
        super().__init__()
        self.head_dim = d_model // n_heads
        self.qkv_proj = nn.Linear(d_model, d_model * 3)
        self.out_proj = nn.Linear(d_model, d_model)

    def forward(self, x, mask=None):
        B, T, C = x.shape
        # Scaled dot-product causal self-attention
        scores = (q @ k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        return self.out_proj(attn @ v)`,
  },
  {
    title: "WareWise-AI",
    category: "Full-Stack AI Inventory Management",
    tools: "React, Node.js, REST APIs, AI Sales Prediction, Chart.js",
    description:
      "Full-stack inventory management application with an integrated AI sales prediction module. Built responsive React frontend and Node.js backend, with a sales forecasting chart for real-time business intelligence.",
    github: "https://github.com/sillyfellow21/WareWise-AI",
    link: "https://github.com/sillyfellow21/WareWise-AI",
    accentColor: "#f59e0b",
    fileName: "sales_forecaster.ts",
    featuredStat: "Predictive Analytics",
    iconType: "code",
    codeSnippet: `// WareWise AI Demand Forecasting Module
export async function computeOptimalRestock(itemId: string) {
  const history = await getInventorySalesHistory(itemId);
  const trendForecast = await predictSeasonalDemand(history);
  
  const reorderPoint = calculateSafetyStock(trendForecast.variance) 
    + (trendForecast.leadTimeDemand);
    
  return { itemId, reorderPoint, projectedDemand: trendForecast.values };
}`,
  },
  {
    title: "Shrimp Disease Detection (Thesis)",
    category: "Computer Vision & Lesion Segmentation",
    tools: "PyTorch, U-Net++, ConvNeXt, ResNet-34, Adversarial Training (PGD), Grad-CAM",
    description:
      "Undergraduate thesis: 'A Multi-Stage Deep Learning Framework for Automated Detection and Localization of Shrimp Disease'. Achieved 96.8% classification accuracy and robust lesion segmentation using U-Net++ and adversarial training.",
    github: "https://github.com/sillyfellow21",
    link: "https://github.com/sillyfellow21",
    accentColor: "#3b82f6",
    fileName: "lesion_unet_plus_plus.py",
    featuredStat: "96.8% Accuracy & U-Net++",
    iconType: "vision",
    codeSnippet: `# Multi-Stage Deep Learning Framework
import segmentation_models_pytorch as smp

# U-Net++ with ConvNeXt encoder & PGD Adversarial Training
seg_model = smp.UnetPlusPlus(
    encoder_name="convnext_tiny",
    encoder_weights="imagenet",
    classes=2,
    activation="sigmoid"
)
pgd_attacker = ProjectedGradientDescent(seg_model, eps=8/255, alpha=2/255)
loss = CompoundLoss(DiceLoss(), FocalLoss())`,
  },
  {
    title: "KrishiBondhu-AI (কৃষিবন্ধু এআই)",
    category: "Agri-Tech & Mobile PWA",
    tools: "TypeScript, React, PWA, AI/LLM, REST APIs",
    description:
      "Smart Agricultural Assistant for Bangladeshi farmers. Progressive Web Application (PWA) designed to empower farmers with digital tools to diagnose crop health, manage farming finances, and obtain localized advisories.",
    github: "https://github.com/sillyfellow21/KrishiBondhu-AI",
    link: "https://github.com/sillyfellow21/KrishiBondhu-AI",
    accentColor: "#22c55e",
    fileName: "crop_diagnostics.ts",
    featuredStat: "Farmer-Centric PWA",
    iconType: "leaf",
    codeSnippet: `// KrishiBondhu AI - Crop Diagnostics Engine
export async function diagnoseCrop(leafScanUrl: string, district: string) {
  const visionPrediction = await analyzeFoliarDisease(leafScanUrl);
  const localizedWeather = await fetchAgriculturalForecast(district);
  
  return generateRemediationAdvice({
    disease: visionPrediction.diseaseName,
    confidence: visionPrediction.confidenceScore,
    actionablePesticidePlan: visionPrediction.treatments,
    rainForecast: localizedWeather.precipitation
  });
}`,
  },
  {
    title: "GNN Fraud Detection",
    category: "Graph Neural Networks & Security",
    tools: "Python, PyTorch Geometric, GNN, Anomaly Detection",
    description:
      "Graph ML approach for fraud detection that models topological relationship structure and transaction behavior to flag anomalies in complex financial transaction networks.",
    github: "https://github.com/sillyfellow21/gnn-fraud-detection",
    link: "https://github.com/sillyfellow21/gnn-fraud-detection",
    accentColor: "#ec4899",
    fileName: "graph_sage_fraud.py",
    featuredStat: "Graph Anomaly Detection",
    iconType: "network",
    codeSnippet: `# Graph Neural Network for Transaction Networks
import torch_geometric.nn as pyg_nn

class FraudGNN(torch.nn.Module):
    def __init__(self, in_channels: int = 128, hidden: int = 64):
        super().__init__()
        self.conv1 = pyg_nn.SAGEConv(in_channels, hidden, aggr="mean")
        self.conv2 = pyg_nn.GATConv(hidden, 2, heads=4)

    def forward(self, x, edge_index):
        h = F.relu(self.conv1(x, edge_index))
        return self.conv2(h, edge_index)`,
  },
  {
    title: "GreenPulse - Carbon Footprint Tracker",
    category: "Full-Stack Sustainability Platform",
    tools: "TypeScript, React, Node.js, Emission Analytics, Vercel",
    description:
      "Full-stack interactive platform to calculate, monitor, and reduce individual and corporate carbon footprints with dynamic emission breakdown charts and personalized offset recommendations.",
    github: "https://github.com/sillyfellow21/GreenPulse-A-carbon-footprint-tracker",
    live: "https://greenpulse-carbon-footprint-tracker.vercel.app",
    link: "https://greenpulse-carbon-footprint-tracker.vercel.app",
    accentColor: "#10b981",
    fileName: "emission_calculator.ts",
    featuredStat: "Interactive Analytics",
    iconType: "leaf",
    codeSnippet: `// GreenPulse Carbon Emission Analytics
export function computeTotalFootprint(activities: ActivityRecord[]): CarbonReport {
  const scope1 = calculateDirectCombustion(activities.transport);
  const scope2 = calculatePurchasedEnergy(activities.electricityKwh);
  const scope3 = calculateSupplyChainEmissions(activities.consumption);
  
  return {
    totalKgCO2e: scope1 + scope2 + scope3,
    reductionTargets: generateReductionMilestones(scope1 + scope2 + scope3)
  };
}`,
  },
  {
    title: "Curavia - Hospital Management System",
    category: "Healthcare Management System",
    tools: "JavaScript, Node.js, Express, MongoDB, REST APIs",
    description:
      "Comprehensive clinic and hospital workflow management system supporting electronic medical records (EMR), patient appointment scheduling, doctor queues, and role-based staff operations.",
    github: "https://github.com/sillyfellow21/Curavia-Hospital-Management-System",
    link: "https://github.com/sillyfellow21/Curavia-Hospital-Management-System",
    accentColor: "#0ea5e9",
    fileName: "hospital_api.js",
    featuredStat: "Hospital EMR & Queues",
    iconType: "hospital",
    codeSnippet: `// Curavia Healthcare Workflow Route
router.post('/api/v1/appointments/schedule', authenticateToken, async (req, res) => {
  const { patientId, doctorId, timeSlot, department } = req.body;
  const isAvailable = await checkDoctorAvailability(doctorId, timeSlot);
  if (!isAvailable) return res.status(409).json({ error: 'Slot conflict' });
  
  const appointment = await createAppointmentQueue({ patientId, doctorId, timeSlot });
  res.status(201).json(appointment);
});`,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <span className="carousel-badge">{project.category}</span>
                        <h4>{project.title}</h4>
                        <p className="carousel-desc">{project.description}</p>
                        
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <div className="carousel-tags">
                            {project.tools.split(", ").map((tool, i) => (
                              <span key={i} className="carousel-tag">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="carousel-actions">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-project btn-github"
                            data-cursor="disable"
                          >
                            <FaGithub /> GitHub
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-project btn-live"
                              data-cursor="disable"
                            >
                              Live Demo <MdArrowOutward />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage project={project} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
