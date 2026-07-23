export const DEFAULT_CHAT_MODEL = "nvidia/llama-3.1-nemotron-ultra-253b-v1";

export const titleModel = {
  description: "Fast model for title generation",
  id: "meta/llama-3.3-70b-instruct",
  name: "Llama 3.3 70B",
  provider: "meta",
};

export type ModelCapabilities = {
  tools: boolean;
  vision: boolean;
  reasoning: boolean;
};

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  reasoningEffort?: "none" | "minimal" | "low" | "medium" | "high";
};

export const chatModels: ChatModel[] = [
  // ─── NVIDIA ────────────────────────────────────────────────────────────────
  {
    description: "NVIDIA's most powerful reasoning model with tool use",
    id: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
    name: "Nemotron Ultra 253B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA super model with tool use and reasoning",
    id: "nvidia/llama-3.3-nemotron-super-49b-v1",
    name: "Nemotron Super 49B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA super model v1.5 with improved tool use",
    id: "nvidia/llama-3.3-nemotron-super-49b-v1.5",
    name: "Nemotron Super 49B v1.5",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 70B reasoning model with tool use",
    id: "nvidia/llama-3.1-nemotron-70b-instruct",
    name: "Nemotron 70B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 51B instruction-tuned model with tool use",
    id: "nvidia/llama-3.1-nemotron-51b-instruct",
    name: "Nemotron 51B",
    provider: "nvidia",
  },
  {
    description: "Efficient NVIDIA 8B reasoning model",
    id: "nvidia/llama-3.1-nemotron-nano-8b-v1",
    name: "Nemotron Nano 8B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA vision-language nano model with reasoning",
    id: "nvidia/llama-3.1-nemotron-nano-vl-8b-v1",
    name: "Nemotron Nano VL 8B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA's massive 550B MoE reasoning model",
    id: "nvidia/nemotron-3-ultra-550b-a55b",
    name: "Nemotron 3 Ultra 550B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 120B super model with tool use",
    id: "nvidia/nemotron-3-super-120b-a12b",
    name: "Nemotron 3 Super 120B",
    provider: "nvidia",
  },
  {
    description: "Lightweight NVIDIA MoE model with tool use & reasoning",
    id: "nvidia/nemotron-3.5-nano-30b-a3b",
    name: "Nemotron 3.5 Nano 30B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 30B MoE instruct model",
    id: "nvidia/nemotron-3-nano-30b-a3b",
    name: "Nemotron 3 Nano 30B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA Omni multimodal model with vision & reasoning",
    id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    name: "Nemotron Omni 30B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 30B nano model with tool use & reasoning",
    id: "nvidia/nemotron-nano-3-30b-a3b",
    name: "Nemotron Nano 3 30B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA vision-language 12B model",
    id: "nvidia/nemotron-nano-12b-v2-vl",
    name: "Nemotron Nano VL 12B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA flagship 340B instruction-tuned model",
    id: "nvidia/nemotron-4-340b-instruct",
    name: "Nemotron 4 340B",
    provider: "nvidia",
  },
  {
    description: "Compact NVIDIA 4B chat model",
    id: "nvidia/nemotron-mini-4b-instruct",
    name: "Nemotron Mini 4B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA 9B nano reasoning model v2",
    id: "nvidia/nvidia-nemotron-nano-9b-v2",
    name: "Nemotron Nano 9B v2",
    provider: "nvidia",
  },
  {
    description: "NVIDIA Minitron 8B compact model",
    id: "nvidia/mistral-nemo-minitron-8b-8k-instruct",
    name: "Minitron 8B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA Cosmos small reasoning model",
    id: "nvidia/cosmos-reason2-8b",
    name: "Cosmos Reason2 8B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA's conversational QA model based on Llama",
    id: "nvidia/llama3-chatqa-1.5-70b",
    name: "ChatQA 1.5 70B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA visual language model for image understanding",
    id: "nvidia/neva-22b",
    name: "NeVA 22B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA VILA visual language model",
    id: "nvidia/vila",
    name: "VILA",
    provider: "nvidia",
  },
  // ─── Meta ──────────────────────────────────────────────────────────────────
  {
    description: "Meta's multimodal flagship with vision & tool use",
    id: "meta/llama-4-maverick-17b-128e-instruct",
    name: "Llama 4 Maverick 17B",
    provider: "meta",
  },
  {
    description: "Meta's capable instruction model with tool use",
    id: "meta/llama-3.3-70b-instruct",
    name: "Llama 3.3 70B",
    provider: "meta",
  },
  {
    description: "Meta's 90B vision model with image understanding",
    id: "meta/llama-3.2-90b-vision-instruct",
    name: "Llama 3.2 90B Vision",
    provider: "meta",
  },
  {
    description: "Meta's efficient 11B vision model with tool use",
    id: "meta/llama-3.2-11b-vision-instruct",
    name: "Llama 3.2 11B Vision",
    provider: "meta",
  },
  {
    description: "Meta's compact 3B instruction model",
    id: "meta/llama-3.2-3b-instruct",
    name: "Llama 3.2 3B",
    provider: "meta",
  },
  {
    description: "Meta's lightweight 1B instruction model",
    id: "meta/llama-3.2-1b-instruct",
    name: "Llama 3.2 1B",
    provider: "meta",
  },
  {
    description: "Meta's 70B model with tool use support",
    id: "meta/llama-3.1-70b-instruct",
    name: "Llama 3.1 70B",
    provider: "meta",
  },
  {
    description: "Meta's efficient 8B model with tool use",
    id: "meta/llama-3.1-8b-instruct",
    name: "Llama 3.1 8B",
    provider: "meta",
  },
  {
    description: "Meta's 70B code generation model",
    id: "meta/codellama-70b",
    name: "Code Llama 70B",
    provider: "meta",
  },
  {
    description: "Meta's original Llama 2 70B model",
    id: "meta/llama2-70b",
    name: "Llama 2 70B",
    provider: "meta",
  },
  // ─── DeepSeek ──────────────────────────────────────────────────────────────
  {
    description: "Fast DeepSeek V4 MoE model with tool use & reasoning",
    id: "deepseek-ai/deepseek-v4-flash",
    name: "DeepSeek V4 Flash",
    provider: "deepseek-ai",
  },
  {
    description: "DeepSeek V4 Pro MoE flagship with reasoning",
    id: "deepseek-ai/deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    provider: "deepseek-ai",
  },
  {
    description: "DeepSeek code-specialized 6.7B model",
    id: "deepseek-ai/deepseek-coder-6.7b-instruct",
    name: "DeepSeek Coder 6.7B",
    provider: "deepseek-ai",
  },
  // ─── Moonshot ──────────────────────────────────────────────────────────────
  {
    description: "Moonshot multimodal model with vision, tools & reasoning",
    id: "moonshotai/kimi-k2.6",
    name: "Kimi K2.6",
    provider: "moonshotai",
  },
  // ─── Mistral ───────────────────────────────────────────────────────────────
  {
    description: "Mistral's 128B model with tool use & reasoning",
    id: "mistralai/mistral-medium-3.5-128b",
    name: "Mistral Medium 3.5",
    provider: "mistralai",
  },
  {
    description: "Mistral Small 4 with fast tool use",
    id: "mistralai/mistral-small-4-119b-2603",
    name: "Mistral Small 4",
    provider: "mistralai",
  },
  {
    description: "Mistral Large with tool use support",
    id: "mistralai/mistral-large",
    name: "Mistral Large",
    provider: "mistralai",
  },
  {
    description: "Mistral Large 2 with advanced tool calling",
    id: "mistralai/mistral-large-2-instruct",
    name: "Mistral Large 2",
    provider: "mistralai",
  },
  {
    description: "Mistral Nemotron with reasoning & tool use",
    id: "mistralai/mistral-nemotron",
    name: "Mistral Nemotron",
    provider: "mistralai",
  },
  {
    description: "Mistral's code-specialized 22B model with tool use",
    id: "mistralai/codestral-22b-instruct-v0.1",
    name: "Codestral 22B",
    provider: "mistralai",
  },
  {
    description: "Mistral's Ministral 14B with tool use",
    id: "mistralai/ministral-14b-instruct-2512",
    name: "Ministral 14B",
    provider: "mistralai",
  },
  {
    description: "Mistral 7B instruction-tuned model",
    id: "mistralai/mistral-7b-instruct-v0.3",
    name: "Mistral 7B",
    provider: "mistralai",
  },
  {
    description: "Mixtral 8x22B sparse MoE with tool use",
    id: "mistralai/mixtral-8x22b-v0.1",
    name: "Mixtral 8x22B",
    provider: "mistralai",
  },
  {
    description: "Mixtral 8x7B sparse MoE with tool use",
    id: "mistralai/mixtral-8x7b-instruct-v0.1",
    name: "Mixtral 8x7B",
    provider: "mistralai",
  },
  {
    description: "NVIDIA-tuned Mistral NeMo 12B with tool use",
    id: "nv-mistralai/mistral-nemo-12b-instruct",
    name: "Mistral NeMo 12B",
    provider: "nv-mistralai",
  },
  // ─── Google ────────────────────────────────────────────────────────────────
  {
    description: "Google's multimodal Gemma 4 with vision & tool use",
    id: "google/gemma-4-31b-it",
    name: "Gemma 4 31B",
    provider: "google",
  },
  {
    description: "Google's 12B Gemma 3 with vision",
    id: "google/gemma-3-12b-it",
    name: "Gemma 3 12B",
    provider: "google",
  },
  {
    description: "Google's 4B Gemma 3 with vision",
    id: "google/gemma-3-4b-it",
    name: "Gemma 3 4B",
    provider: "google",
  },
  {
    description: "Google's Gemma 3n E4B multimodal model",
    id: "google/gemma-3n-e4b-it",
    name: "Gemma 3n E4B",
    provider: "google",
  },
  {
    description: "Google's Gemma 3n E2B lightweight multimodal",
    id: "google/gemma-3n-e2b-it",
    name: "Gemma 3n E2B",
    provider: "google",
  },
  {
    description: "Google Gemma 2 2B lightweight instruction model",
    id: "google/gemma-2-2b-it",
    name: "Gemma 2 2B",
    provider: "google",
  },
  {
    description: "Google Gemma 2B base instruction model",
    id: "google/gemma-2b",
    name: "Gemma 2B",
    provider: "google",
  },
  {
    description: "Google's recurrent Gemma 2B model",
    id: "google/recurrentgemma-2b",
    name: "RecurrentGemma 2B",
    provider: "google",
  },
  {
    description: "Google CodeGemma 7B code-specialized model",
    id: "google/codegemma-7b",
    name: "CodeGemma 7B",
    provider: "google",
  },
  {
    description: "Google CodeGemma 7B v1.1 code-specialized model",
    id: "google/codegemma-1.1-7b",
    name: "CodeGemma 7B v1.1",
    provider: "google",
  },
  {
    description: "Google's diffusion-based 26B language model with reasoning",
    id: "google/diffusiongemma-26b-a4b-it",
    name: "DiffusionGemma 26B",
    provider: "google",
  },
  // ─── Microsoft ─────────────────────────────────────────────────────────────
  {
    description: "Microsoft's efficient Phi 3.5 MoE with tool use",
    id: "microsoft/phi-3.5-moe-instruct",
    name: "Phi 3.5 MoE",
    provider: "microsoft",
  },
  {
    description: "Microsoft Phi 3 with 128K context and vision",
    id: "microsoft/phi-3-vision-128k-instruct",
    name: "Phi 3 Vision 128K",
    provider: "microsoft",
  },
  {
    description: "Microsoft Kosmos-2 visual grounding model",
    id: "microsoft/kosmos-2",
    name: "Kosmos-2",
    provider: "microsoft",
  },
  // ─── MiniMax ───────────────────────────────────────────────────────────────
  {
    description: "MiniMax M3 with tool use & reasoning",
    id: "minimaxai/minimax-m3",
    name: "MiniMax M3",
    provider: "minimaxai",
  },
  {
    description: "MiniMax M2.7 with tool use & reasoning",
    id: "minimaxai/minimax-m2.7",
    name: "MiniMax M2.7",
    provider: "minimaxai",
  },
  // ─── Qwen ──────────────────────────────────────────────────────────────────
  {
    description: "Qwen's massive 397B MoE with tool use & reasoning",
    id: "qwen/qwen3.5-397b-a17b",
    name: "Qwen3.5 397B",
    provider: "qwen",
  },
  {
    description: "Qwen3 Next 80B with tool use & reasoning",
    id: "qwen/qwen3-next-80b-a3b-instruct",
    name: "Qwen3 Next 80B",
    provider: "qwen",
  },
  // ─── Poolside ──────────────────────────────────────────────────────────────
  {
    description: "Poolside's agentic coding model with tool use & reasoning",
    id: "poolside/laguna-xs-2.1",
    name: "Laguna XS 2.1",
    provider: "poolside",
  },
  // ─── Z.AI ──────────────────────────────────────────────────────────────────
  {
    description: "Z.AI's agentic GLM model with tool use & reasoning",
    id: "z-ai/glm-5.2",
    name: "GLM 5.2",
    provider: "z-ai",
  },
  // ─── ThinkingMachines ──────────────────────────────────────────────────────
  {
    description: "Thinking Machines multimodal reasoning model",
    id: "thinkingmachines/inkling",
    name: "Inkling",
    provider: "thinkingmachines",
  },
  // ─── Stepfun ───────────────────────────────────────────────────────────────
  {
    description: "Stepfun's vision model with image understanding & tool use",
    id: "stepfun-ai/step-3.7-flash",
    name: "Step 3.7 Flash",
    provider: "stepfun-ai",
  },
  {
    description: "Stepfun's fast vision model",
    id: "stepfun-ai/step-3.5-flash",
    name: "Step 3.5 Flash",
    provider: "stepfun-ai",
  },
  // ─── OpenAI (on NIM) ───────────────────────────────────────────────────────
  {
    description: "OpenAI's compact OSS 20B reasoning model",
    id: "openai/gpt-oss-20b",
    name: "GPT OSS 20B",
    provider: "openai",
    reasoningEffort: "low",
  },
  {
    description: "OpenAI's powerful OSS 120B reasoning model",
    id: "openai/gpt-oss-120b",
    name: "GPT OSS 120B",
    provider: "openai",
    reasoningEffort: "low",
  },
  // ─── IBM ───────────────────────────────────────────────────────────────────
  {
    description: "IBM Granite 8B instruction model with tool use",
    id: "ibm/granite-3.0-8b-instruct",
    name: "Granite 3.0 8B",
    provider: "ibm",
  },
  {
    description: "IBM Granite 3B compact instruction model",
    id: "ibm/granite-3.0-3b-a800m-instruct",
    name: "Granite 3.0 3B",
    provider: "ibm",
  },
  {
    description: "IBM Granite 34B code-specialized model",
    id: "ibm/granite-34b-code-instruct",
    name: "Granite 34B Code",
    provider: "ibm",
  },
  {
    description: "IBM Granite 8B code-specialized model",
    id: "ibm/granite-8b-code-instruct",
    name: "Granite 8B Code",
    provider: "ibm",
  },
  // ─── Upstage ───────────────────────────────────────────────────────────────
  {
    description: "Upstage Solar 10.7B with tool use support",
    id: "upstage/solar-10.7b-instruct",
    name: "Solar 10.7B",
    provider: "upstage",
  },
  // ─── Writer ────────────────────────────────────────────────────────────────
  {
    description: "Writer's 122B creative writing model",
    id: "writer/palmyra-creative-122b",
    name: "Palmyra Creative 122B",
    provider: "writer",
  },
  {
    description: "Writer's 70B finance-specialized model",
    id: "writer/palmyra-fin-70b-32k",
    name: "Palmyra Fin 70B",
    provider: "writer",
  },
  {
    description: "Writer's 70B medical-specialized model",
    id: "writer/palmyra-med-70b",
    name: "Palmyra Med 70B",
    provider: "writer",
  },
  {
    description: "Writer's 70B medical model with 32K context",
    id: "writer/palmyra-med-70b-32k",
    name: "Palmyra Med 70B 32K",
    provider: "writer",
  },
  // ─── AI21 Labs ─────────────────────────────────────────────────────────────
  {
    description: "AI21 Labs Jamba 1.5 large model with tool use",
    id: "ai21labs/jamba-1.5-large-instruct",
    name: "Jamba 1.5 Large",
    provider: "ai21labs",
  },
  // ─── Databricks ────────────────────────────────────────────────────────────
  {
    description: "Databricks DBRX instruct model with tool use",
    id: "databricks/dbrx-instruct",
    name: "DBRX Instruct",
    provider: "databricks",
  },
  // ─── ByteDance ─────────────────────────────────────────────────────────────
  {
    description: "ByteDance Seed OSS 36B instruct model",
    id: "bytedance/seed-oss-36b-instruct",
    name: "Seed OSS 36B",
    provider: "bytedance",
  },
  // ─── AbacusAI ──────────────────────────────────────────────────────────────
  {
    description: "Abacus AI Dracarys 70B fine-tuned on Llama 3.1",
    id: "abacusai/dracarys-llama-3.1-70b-instruct",
    name: "Dracarys 70B",
    provider: "abacusai",
  },
  // ─── Sarvam ────────────────────────────────────────────────────────────────
  {
    description: "Sarvam AI multilingual model for Indian languages",
    id: "sarvamai/sarvam-m",
    name: "Sarvam M",
    provider: "sarvamai",
  },
  // ─── 01.AI ─────────────────────────────────────────────────────────────────
  {
    description: "01.AI Yi Large model with tool use",
    id: "01-ai/yi-large",
    name: "Yi Large",
    provider: "01-ai",
  },
  // ─── AI Singapore ──────────────────────────────────────────────────────────
  {
    description: "AI Singapore's SEA-LION 7B Southeast Asian language model",
    id: "aisingapore/sea-lion-7b-instruct",
    name: "SEA-LION 7B",
    provider: "aisingapore",
  },
  // ─── Adept ─────────────────────────────────────────────────────────────────
  {
    description: "Adept Fuyu 8B multimodal visual understanding model",
    id: "adept/fuyu-8b",
    name: "Fuyu 8B",
    provider: "adept",
  },
  // ─── Zyphra ────────────────────────────────────────────────────────────────
  {
    description: "Zyphra Zamba2 7B efficient hybrid model",
    id: "zyphra/zamba2-7b-instruct",
    name: "Zamba2 7B",
    provider: "zyphra",
  },
];

// Static capability definitions based on NVIDIA NIM model documentation
// vision: can process image inputs
// tools: supports function calling / tool use
// reasoning: has explicit chain-of-thought reasoning capabilities
const NIM_MODEL_CAPABILITIES: Record<string, ModelCapabilities> = {
  // NVIDIA
  "nvidia/llama-3.1-nemotron-ultra-253b-v1": { reasoning: true, tools: true, vision: false },
  "nvidia/llama-3.3-nemotron-super-49b-v1": { reasoning: true, tools: true, vision: false },
  "nvidia/llama-3.3-nemotron-super-49b-v1.5": { reasoning: true, tools: true, vision: false },
  "nvidia/llama-3.1-nemotron-70b-instruct": { reasoning: true, tools: true, vision: false },
  "nvidia/llama-3.1-nemotron-51b-instruct": { reasoning: false, tools: true, vision: false },
  "nvidia/llama-3.1-nemotron-nano-8b-v1": { reasoning: true, tools: false, vision: false },
  "nvidia/llama-3.1-nemotron-nano-vl-8b-v1": { reasoning: true, tools: false, vision: true },
  "nvidia/nemotron-3-ultra-550b-a55b": { reasoning: true, tools: true, vision: false },
  "nvidia/nemotron-3-super-120b-a12b": { reasoning: false, tools: true, vision: false },
  "nvidia/nemotron-3.5-nano-30b-a3b": { reasoning: true, tools: true, vision: false },
  "nvidia/nemotron-3-nano-30b-a3b": { reasoning: false, tools: true, vision: false },
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": { reasoning: true, tools: false, vision: true },
  "nvidia/nemotron-nano-3-30b-a3b": { reasoning: true, tools: true, vision: false },
  "nvidia/nemotron-nano-12b-v2-vl": { reasoning: false, tools: false, vision: true },
  "nvidia/nemotron-4-340b-instruct": { reasoning: false, tools: true, vision: false },
  "nvidia/nemotron-mini-4b-instruct": { reasoning: false, tools: false, vision: false },
  "nvidia/nvidia-nemotron-nano-9b-v2": { reasoning: true, tools: false, vision: false },
  "nvidia/mistral-nemo-minitron-8b-8k-instruct": { reasoning: false, tools: false, vision: false },
  "nvidia/cosmos-reason2-8b": { reasoning: true, tools: false, vision: false },
  "nvidia/llama3-chatqa-1.5-70b": { reasoning: false, tools: true, vision: false },
  "nvidia/neva-22b": { reasoning: false, tools: false, vision: true },
  "nvidia/vila": { reasoning: false, tools: false, vision: true },
  // Meta
  "meta/llama-4-maverick-17b-128e-instruct": { reasoning: false, tools: true, vision: true },
  "meta/llama-3.3-70b-instruct": { reasoning: false, tools: true, vision: false },
  "meta/llama-3.2-90b-vision-instruct": { reasoning: false, tools: true, vision: true },
  "meta/llama-3.2-11b-vision-instruct": { reasoning: false, tools: true, vision: true },
  "meta/llama-3.2-3b-instruct": { reasoning: false, tools: false, vision: false },
  "meta/llama-3.2-1b-instruct": { reasoning: false, tools: false, vision: false },
  "meta/llama-3.1-70b-instruct": { reasoning: false, tools: true, vision: false },
  "meta/llama-3.1-8b-instruct": { reasoning: false, tools: true, vision: false },
  "meta/codellama-70b": { reasoning: false, tools: false, vision: false },
  "meta/llama2-70b": { reasoning: false, tools: false, vision: false },
  // DeepSeek
  "deepseek-ai/deepseek-v4-flash": { reasoning: true, tools: true, vision: false },
  "deepseek-ai/deepseek-v4-pro": { reasoning: true, tools: true, vision: false },
  "deepseek-ai/deepseek-coder-6.7b-instruct": { reasoning: false, tools: false, vision: false },
  // Moonshot
  "moonshotai/kimi-k2.6": { reasoning: true, tools: true, vision: true },
  // Mistral
  "mistralai/mistral-medium-3.5-128b": { reasoning: true, tools: true, vision: false },
  "mistralai/mistral-small-4-119b-2603": { reasoning: false, tools: true, vision: false },
  "mistralai/mistral-large": { reasoning: false, tools: true, vision: false },
  "mistralai/mistral-large-2-instruct": { reasoning: false, tools: true, vision: false },
  "mistralai/mistral-nemotron": { reasoning: true, tools: true, vision: false },
  "mistralai/codestral-22b-instruct-v0.1": { reasoning: false, tools: true, vision: false },
  "mistralai/ministral-14b-instruct-2512": { reasoning: false, tools: true, vision: false },
  "mistralai/mistral-7b-instruct-v0.3": { reasoning: false, tools: false, vision: false },
  "mistralai/mixtral-8x22b-v0.1": { reasoning: false, tools: true, vision: false },
  "mistralai/mixtral-8x7b-instruct-v0.1": { reasoning: false, tools: true, vision: false },
  "nv-mistralai/mistral-nemo-12b-instruct": { reasoning: false, tools: true, vision: false },
  // Google
  "google/gemma-4-31b-it": { reasoning: false, tools: true, vision: true },
  "google/gemma-3-12b-it": { reasoning: false, tools: false, vision: true },
  "google/gemma-3-4b-it": { reasoning: false, tools: false, vision: true },
  "google/gemma-3n-e4b-it": { reasoning: false, tools: false, vision: true },
  "google/gemma-3n-e2b-it": { reasoning: false, tools: false, vision: true },
  "google/gemma-2-2b-it": { reasoning: false, tools: false, vision: false },
  "google/gemma-2b": { reasoning: false, tools: false, vision: false },
  "google/recurrentgemma-2b": { reasoning: false, tools: false, vision: false },
  "google/codegemma-7b": { reasoning: false, tools: false, vision: false },
  "google/codegemma-1.1-7b": { reasoning: false, tools: false, vision: false },
  "google/diffusiongemma-26b-a4b-it": { reasoning: true, tools: false, vision: false },
  // Microsoft
  "microsoft/phi-3.5-moe-instruct": { reasoning: false, tools: true, vision: false },
  "microsoft/phi-3-vision-128k-instruct": { reasoning: false, tools: false, vision: true },
  "microsoft/kosmos-2": { reasoning: false, tools: false, vision: true },
  // MiniMax
  "minimaxai/minimax-m3": { reasoning: true, tools: true, vision: false },
  "minimaxai/minimax-m2.7": { reasoning: true, tools: true, vision: false },
  // Qwen
  "qwen/qwen3.5-397b-a17b": { reasoning: true, tools: true, vision: false },
  "qwen/qwen3-next-80b-a3b-instruct": { reasoning: true, tools: true, vision: false },
  // Poolside
  "poolside/laguna-xs-2.1": { reasoning: true, tools: true, vision: false },
  // Z.AI
  "z-ai/glm-5.2": { reasoning: true, tools: true, vision: false },
  // ThinkingMachines
  "thinkingmachines/inkling": { reasoning: true, tools: false, vision: true },
  // StepFun
  "stepfun-ai/step-3.7-flash": { reasoning: false, tools: true, vision: true },
  "stepfun-ai/step-3.5-flash": { reasoning: false, tools: false, vision: true },
  // OpenAI on NIM
  "openai/gpt-oss-20b": { reasoning: true, tools: false, vision: false },
  "openai/gpt-oss-120b": { reasoning: true, tools: false, vision: false },
  // IBM
  "ibm/granite-3.0-8b-instruct": { reasoning: false, tools: true, vision: false },
  "ibm/granite-3.0-3b-a800m-instruct": { reasoning: false, tools: false, vision: false },
  "ibm/granite-34b-code-instruct": { reasoning: false, tools: false, vision: false },
  "ibm/granite-8b-code-instruct": { reasoning: false, tools: false, vision: false },
  // Upstage
  "upstage/solar-10.7b-instruct": { reasoning: false, tools: true, vision: false },
  // Writer
  "writer/palmyra-creative-122b": { reasoning: false, tools: false, vision: false },
  "writer/palmyra-fin-70b-32k": { reasoning: false, tools: false, vision: false },
  "writer/palmyra-med-70b": { reasoning: false, tools: false, vision: false },
  "writer/palmyra-med-70b-32k": { reasoning: false, tools: false, vision: false },
  // AI21 Labs
  "ai21labs/jamba-1.5-large-instruct": { reasoning: false, tools: true, vision: false },
  // Databricks
  "databricks/dbrx-instruct": { reasoning: false, tools: true, vision: false },
  // ByteDance
  "bytedance/seed-oss-36b-instruct": { reasoning: false, tools: false, vision: false },
  // AbacusAI
  "abacusai/dracarys-llama-3.1-70b-instruct": { reasoning: false, tools: true, vision: false },
  // Sarvam
  "sarvamai/sarvam-m": { reasoning: false, tools: false, vision: false },
  // 01.AI
  "01-ai/yi-large": { reasoning: false, tools: true, vision: false },
  // AI Singapore
  "aisingapore/sea-lion-7b-instruct": { reasoning: false, tools: false, vision: false },
  // Adept
  "adept/fuyu-8b": { reasoning: false, tools: false, vision: true },
  // Zyphra
  "zyphra/zamba2-7b-instruct": { reasoning: false, tools: false, vision: false },
};

export function getCapabilities(): Record<string, ModelCapabilities> {
  return NIM_MODEL_CAPABILITIES;
}

export const isDemo = process.env.IS_DEMO === "1";

export type GatewayModelWithCapabilities = ChatModel & {
  capabilities: ModelCapabilities;
};

export function getActiveModels(): ChatModel[] {
  return chatModels;
}

export const allowedModelIds = new Set(chatModels.map((m) => m.id));

export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);

export type ModelAvailability = "healthy" | "impacted" | "unknown";

export async function getModelAvailability(
  modelId: string
): Promise<ModelAvailability> {
  const model = chatModels.find((item) => item.id === modelId);

  if (!model) {
    return "unknown";
  }

  try {
    const res = await fetch(
      `https://integrate.api.nvidia.com/v1/models/${model.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NVIDIA_NIM_API_KEY}`,
        },
        next: { revalidate: 60 },
      }
    );
    return res.ok ? "healthy" : "impacted";
  } catch {
    return "unknown";
  }
}
