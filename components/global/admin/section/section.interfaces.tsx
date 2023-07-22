import { ReactNode } from "react";

export interface ISectionLayoutProps{
    heading: string,
    content: ReactNode,
    request: string,
    entitySetState: Function
}