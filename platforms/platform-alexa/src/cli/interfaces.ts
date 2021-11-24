import { PluginConfig, PluginContext } from '@jovotech/cli-core';
import { UnknownObject } from '@jovotech/framework';

import { SupportedLocales } from './constants';

export interface AskSkillList {
  skills: {
    skillId: string;
    stage: string;
    nameByLocale: {
      [key: string]: string;
    };
    lastUpdated: string;
  }[];
}

export interface AskSkillChoice {
  title: string;
  value: {
    skillId: string;
    stage: string;
  };
}

export type SupportedLocalesType = typeof SupportedLocales[number];

export interface AlexaCliConfig extends PluginConfig {
  askProfile?: string;
  skillId?: string;
  locales?: {
    [locale: string]: SupportedLocalesType[];
  };
  conversations?: {
    enabled: boolean;
    directory?: string;
    skipValidation?: boolean;
  };
  responses?: {
    enabled: boolean;
    directory?: string;
  };
}

export interface AlexaContext extends PluginContext {
  alexa: {
    skillId?: string;
    skillStage?: string;
    importId?: string;
    askProfile?: string;
    isACSkill?: boolean;
  };
}

export interface AskProfile {
  skillId: string;
  skillMetadata: { lastDeployHash: string };
  code: UnknownObject;
}

export interface AskConfig {
  askcliStatesVersion: string;
  profiles: Record<string, AskProfile>;
}

export interface AskResources {
  askcliResourcesVersion: string;
  profiles: Record<string, AskProfile>;
}

export interface ImportMessage {
  message: string;
}

export interface ImportResource {
  action: string;
  info: ImportMessage[];
  name: string;
  status: string;
}

export interface ImportStatus {
  skill: {
    eTag: string;
    resources: ImportResource[];
    skillId: string;
  };
  status: string;
  warnings: ImportMessage[];
}

export interface ImportResponse {
  body: UnknownObject;
  headers: { key: string; value: string }[];
}

export interface SkillStatusError {
  message: string;
  validationDetails?: UnknownObject;
}

export interface SkillStatusResponse {
  manifest?: {
    eTag: string;
    lastUpdateRequest: {
      errors?: SkillStatusError[];
      status: SkillStatus;
    };
  };
  interactionModel?: UnknownObject;
}
