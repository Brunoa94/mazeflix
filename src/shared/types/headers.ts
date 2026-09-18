export type HeaderKeysType = "Content-Type" | "Authorization" | "Accept";

export type HeadersType = Partial<Record<HeaderKeysType, string>>;
