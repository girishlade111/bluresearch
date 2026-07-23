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
  {
    description: "NVIDIA's most powerful reasoning model with tool use",
    id: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
    name: "Nemotron Ultra 253B",
    provider: "nvidia",
  },
  {
    description: "Efficient NVIDIA super model with reasoning & tool use",
    id: "nvidia/llama-3.3-nemotron-super-49b-v1",
    name: "Nemotron Super 49B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA's massive 550B MoE reasoning model",
    id: "nvidia/nemotron-3-ultra-550b-a55b",
    name: "Nemotron 3 Ultra 550B",
    provider: "nvidia",
  },
  {
    description: "Lightweight NVIDIA MoE model with fast reasoning",
    id: "nvidia/nemotron-3.5-nano-30b-a3b",
    name: "Nemotron 3.5 Nano 30B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA Omni VLM with vision & reasoning",
    id: "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
    name: "Nemotron Omni 30B",
    provider: "nvidia",
  },
  {
    description: "Meta's multimodal flagship model with vision & tool use",
    id: "meta/llama-4-maverick-17b-128e-instruct",
    name: "Llama 4 Maverick 17B",
    provider: "meta",
  },
  {
    description: "Meta's capable instruction-tuned model with tool use",
    id: "meta/llama-3.3-70b-instruct",
    name: "Llama 3.3 70B",
    provider: "meta",
  },
  {
    description: "Meta's large vision model with image understanding",
    id: "meta/llama-3.2-90b-vision-instruct",
    name: "Llama 3.2 90B Vision",
    provider: "meta",
  },
  {
    description: "Meta's efficient vision model with tool use",
    id: "meta/llama-3.2-11b-vision-instruct",
    name: "Llama 3.2 11B Vision",
    provider: "meta",
  },
  {
    description: "Fast DeepSeek MoE model with tool use & reasoning",
    id: "deepseek-ai/deepseek-v4-flash",
    name: "DeepSeek V4 Flash",
    provider: "deepseek-ai",
  },
  {
    description: "DeepSeek's top MoE reasoning model with tools",
    id: "deepseek-ai/deepseek-v4-pro",
    name: "DeepSeek V4 Pro",
    provider: "deepseek-ai",
  },
  {
    description: "Moonshot multimodal model with vision, tools & reasoning",
    id: "moonshotai/kimi-k2.6",
    name: "Kimi K2.6",
    provider: "moonshotai",
  },
  {
    description: "Mistral's capable model with agentic tool use",
    id: "mistralai/mistral-medium-3.5-128b",
    name: "Mistral Medium 3.5",
    provider: "mistralai",
  },
  {
    description: "Mistral's small but powerful model with tool use",
    id: "mistralai/mistral-small-4-119b-2603",
    name: "Mistral Small 4",
    provider: "mistralai",
  },
  {
    description: "Google's multimodal Gemma 4 model with vision & tools",
    id: "google/gemma-4-31b-it",
    name: "Gemma 4 31B",
    provider: "google",
  },
  {
    description: "MiniMax's powerful model with reasoning & tool use",
    id: "minimaxai/minimax-m3",
    name: "MiniMax M3",
    provider: "minimaxai",
  },
  {
    description: "Qwen's massive MoE model with tool use & reasoning",
    id: "qwen/qwen3.5-397b-a17b",
    name: "Qwen3.5 397B",
    provider: "qwen",
  },
  {
    description: "Poolside's agentic coding model with tool use",
    id: "poolside/laguna-xs-2.1",
    name: "Laguna XS 2.1",
    provider: "poolside",
  },
  {
    description: "Z.AI's agentic model with tool use & reasoning",
    id: "z-ai/glm-5.2",
    name: "GLM 5.2",
    provider: "z-ai",
  },
  {
    description: "Thinking Machines multimodal reasoning model",
    id: "thinkingmachines/inkling",
    name: "Inkling",
    provider: "thinkingmachines",
  },
  {
    description: "Stepfun's vision model with image understanding",
    id: "stepfun-ai/step-3.7-flash",
    name: "Step 3.7 Flash",
    provider: "stepfun-ai",
  },
  {
    description: "Microsoft's efficient MoE model with tool use",
    id: "microsoft/phi-3.5-moe-instruct",
    name: "Phi 3.5 MoE",
    provider: "microsoft",
  },
];

// Static capability definitions based on NVIDIA NIM model documentation
const NIM_MODEL_CAPABILITIES: Record<string, ModelCapabilities> = {
  "nvidia/llama-3.1-nemotron-ultra-253b-v1": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "nvidia/llama-3.3-nemotron-super-49b-v1": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "nvidia/nemotron-3-ultra-550b-a55b": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "nvidia/nemotron-3.5-nano-30b-a3b": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": {
    reasoning: true,
    tools: false,
    vision: true,
  },
  "meta/llama-4-maverick-17b-128e-instruct": {
    reasoning: false,
    tools: true,
    vision: true,
  },
  "meta/llama-3.3-70b-instruct": {
    reasoning: false,
    tools: true,
    vision: false,
  },
  "meta/llama-3.2-90b-vision-instruct": {
    reasoning: false,
    tools: true,
    vision: true,
  },
  "meta/llama-3.2-11b-vision-instruct": {
    reasoning: false,
    tools: true,
    vision: true,
  },
  "deepseek-ai/deepseek-v4-flash": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "deepseek-ai/deepseek-v4-pro": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "moonshotai/kimi-k2.6": {
    reasoning: true,
    tools: true,
    vision: true,
  },
  "mistralai/mistral-medium-3.5-128b": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "mistralai/mistral-small-4-119b-2603": {
    reasoning: false,
    tools: true,
    vision: false,
  },
  "google/gemma-4-31b-it": {
    reasoning: false,
    tools: true,
    vision: true,
  },
  "minimaxai/minimax-m3": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "qwen/qwen3.5-397b-a17b": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "poolside/laguna-xs-2.1": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "z-ai/glm-5.2": {
    reasoning: true,
    tools: true,
    vision: false,
  },
  "thinkingmachines/inkling": {
    reasoning: true,
    tools: false,
    vision: true,
  },
  "stepfun-ai/step-3.7-flash": {
    reasoning: false,
    tools: true,
    vision: true,
  },
  "microsoft/phi-3.5-moe-instruct": {
    reasoning: false,
    tools: true,
    vision: false,
  },
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
