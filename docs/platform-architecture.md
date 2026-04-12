# AFOS Platform Architecture — Alignment Document

## Overview

AFOS is a closed-loop Facility Operating System composed of four engines. The core characteristic is the **closed loop** — data doesn't flow through the system linearly; it circulates continuously, and the system learns and improves over time.

---

## Closed-Loop Flow

```
            Insights & Predictions
  Workflow  ◄───────────────────────  Intelligence
  Engine                                Engine
  (top-left)                            (top-right)
    │                                     ▲
    │ Actions                             │ Telemetry
    │ & Outcomes                          │ Stream
    ▼                                     │
   Data     ───────────────────────►  Connect
   Engine        Data Ingestion        Engine
  (bottom-left)                         (bottom-right)

         Data ──── Learning & ────► Intelligence
         Engine    Retraining        Engine
                  (diagonal feedback)
```

**Four main paths:**
1. **Connect → Intelligence**: Telemetry Stream
2. **Intelligence → Workflow**: Insights & Predictions
3. **Workflow → Data**: Actions & Outcomes
4. **Data → Connect**: Data Ingestion

**One feedback path:**
5. **Data → Intelligence**: Learning & Retraining

---

## Engine 1: Connect Engine

**Role:** The nervous system — connects all physical assets to the digital platform

**Technology:**
- Multi-protocol telemetry: MQTT, CoAP, OPC-UA, HTTP
- Microservice architecture with elastic scaling
- Built-in IoT core and AWS IoT Core integration
- Device, lift, and building registration and management
- Powerful rule engine for real-time telemetry processing
- Multi-tenant SaaS architecture
- Transport encryption; authentication customization
- Open API for external system integration

**Role in the loop:** Entry point. Receives raw telemetry from AFOS Sense hardware (LMD, LBB, EMD) and third-party systems, normalizes it, and feeds it into the Intelligence Engine.

---

## Engine 2: Intelligence Engine

**Role:** The brain — turns data into insights, predictions, and knowledge

**Technology:**

### Predictive AI (ML Models)
ML models trained on sensor data (vibration, acceleration, temperature). Unsupervised learning for anomaly detection; semi-supervised soft clustering for multi-class fault prediction.
- Target: >83% prediction accuracy
- <25% customization for new data models
- Developed in collaboration with A*STAR and SIMTech

### Cognitive AI (Athena RAG/LLM)
Natural language query, knowledge retrieval, and decision support. Can be embedded in any application surface (dashboard, mobile, voice).
- Indexes equipment manuals, SOPs, compliance docs, historical fault records
- Deployable standalone or integrated
- Reduces dependency on senior technician expertise

**Role in the loop:** The brain. Receives telemetry stream from Connect Engine, produces insights and predictions, and pushes them to the Workflow Engine. Also receives historical data from the Data Engine for model retraining.

---

## Engine 3: Workflow Engine

**Role:** The hands and feet — turns insights into coordinated action

**Capabilities:**
- Alert → Work order generation → Dispatching → Execution → Verification → Closure
- Configurable alert logic (50+ fault types defined for lifts alone)
- Auto-severity calculation based on asset criticality
- GPS-based mobile dispatch to nearest qualified technician
- Shared across all product series — same engine drives lift alerts and building alerts

**Role in the loop:** The executor. Converts Intelligence Engine predictions into concrete human or automated actions. Action outcomes flow into the Data Engine.

---

## Engine 4: Data Engine

**Role:** The memory — all historical data unified, queryable, and reportable

**Technology:**
- Time-series database for high-frequency sensor telemetry (vibration, temperature, acceleration)
- Relational data store for asset registry, work orders, maintenance history, and organizational hierarchy
- Event streaming pipeline for real-time data ingestion and cross-engine communication
- Data lake architecture for long-term storage, batch analytics, and model training datasets

**Capabilities:**
- Unified data layer across all product series (Master Data concept)
- Cross-module query and analytics (e.g., correlating lift faults with maintenance history)
- Customizable dashboards for different organization types
- Compliance and reporting data collection (BCA, Green Mark, ESG)
- Data feedback loop to Intelligence Engine for model improvement

**Role in the loop:** Memory and feedback. Stores all operational data, feeds data back to Connect Engine for ingestion, and provides training data to Intelligence Engine — making the entire system smarter over time.

---
