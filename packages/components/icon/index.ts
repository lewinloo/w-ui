import { withInstall } from "@w-ui/utils/withInstall";
import _Icon from "./src/icon.vue";

const Icon = withInstall(_Icon);

// 可以通过app.use来使用也可以通过import方式来单独使用
export default Icon;

export * from "./src/icon";

declare module "vue" {
  export interface GlobalComponents {
    WIcon: typeof Icon
  }
}