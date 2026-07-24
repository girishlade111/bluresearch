export const DEFAULT_CHAT_MODEL = "meta/llama-4-maverick-17b-128e-instruct";

export const titleModel = {
  description: "Compact NVIDIA 4B chat model",
  id: "nvidia/nemotron-mini-4b-instruct",
  name: "Nemotron Mini 4B",
  provider: "nvidia",
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
    description: "Meta's multimodal flagship with vision & tool use",
    id: "meta/llama-4-maverick-17b-128e-instruct",
    name: "Llama 4 Maverick 17B",
    provider: "meta",
  },
  {
    description: "NVIDIA super model v1.5 with improved tool use",
    id: "nvidia/llama-3.3-nemotron-super-49b-v1.5",
    name: "Nemotron Super 49B v1.5",
    provider: "nvidia",
  },
  {
    description: "NVIDIA super model with tool use and reasoning",
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
    description: "NVIDIA 120B super model with tool use",
    id: "nvidia/nemotron-3-super-120b-a12b",
    name: "Nemotron 3 Super 120B",
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
    description: "NVIDIA vision-language 12B model",
    id: "nvidia/nemotron-nano-12b-v2-vl",
    name: "Nemotron Nano VL 12B",
    provider: "nvidia",
  },
  {
    description: "NVIDIA vision-language nano model with reasoning",
    id: "nvidia/llama-3.1-nemotron-nano-vl-8b-v1",
    name: "Nemotron Nano VL 8B",
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
    description: "Mixtral 8x7B sparse MoE with tool use",
    id: "mistralai/mixtral-8x7b-instruct-v0.1",
    name: "Mixtral 8x7B",
    provider: "mistralai",
  },
  {
    description: "Upstage Solar 10.7B with tool use support",
    id: "upstage/solar-10.7b-instruct",
    name: "Solar 10.7B",
    provider: "upstage",
  }
];

export const allowedModelIds = new Set(chatModels.map(model => model.id));
// Force HMR invalidation

type ModelAvailability = "healthy" | "impacted" | "unknown";

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

export function getCapabilities(): Record<string, ModelCapabilities> {
  return {
    "nvidia/llama-3.1-nemotron-nano-vl-8b-v1": {
      tools: false,
      vision: true,
      reasoning: true,
    },
    "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning": {
      tools: false,
      vision: true,
      reasoning: true,
    },
    "nvidia/nemotron-nano-12b-v2-vl": {
      tools: false,
      vision: true,
      reasoning: false,
    },
    "meta/llama-4-maverick-17b-128e-instruct": {
      tools: true,
      vision: true,
      reasoning: false,
    },
    "mistralai/mixtral-8x7b-instruct-v0.1": {
      tools: true,
      vision: false,
      reasoning: false,
    },
    "upstage/solar-10.7b-instruct": {
      tools: true,
      vision: false,
      reasoning: false,
    },
    // Adding fallbacks for all models to have some default capabilities
    ...chatModels.reduce((acc, curr) => {
      if (!acc[curr.id]) {
        acc[curr.id] = { tools: true, vision: false, reasoning: false };
      }
      return acc;
    }, {} as Record<string, ModelCapabilities>)
  };
}
