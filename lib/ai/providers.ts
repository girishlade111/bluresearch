import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { customProvider } from "ai";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

// NVIDIA NIM provider — OpenAI-compatible API
const nim = createOpenAICompatible({
  baseURL: "https://integrate.api.nvidia.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.NVIDIA_NIM_API_KEY ?? ""}`,
  },
  name: "nvidia-nim",
});

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        chatModel,
        titleModel: mockTitleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": mockTitleModel,
        },
      });
    })()
  : null;

export function getLanguageModel(modelId: string) {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  return nim.chatModel(modelId);
}

export function getTitleModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }
  return nim.chatModel(titleModel.id);
}
