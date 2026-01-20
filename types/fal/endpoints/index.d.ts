import type * as falEndpoints from './schema.js';

declare global {
    export namespace fal {}
    export namespace fal.endpoints {
        export interface Endpoints {
            'fal-ai/wan-effects': {
                input: falEndpoints.WanEffectsInput;
                output: falEndpoints.WanEffectsOutput;
            };

            'fal-ai/wan-pro/image-to-video': {
                input: falEndpoints.WanProImageToVideoInput;
                output: falEndpoints.WanProImageToVideoOutput;
            };

            'fal-ai/minimax/video-01/image-to-video': {
                input: falEndpoints.MinimaxVideo01ImageToVideoInput;
                output: falEndpoints.MinimaxVideo01ImageToVideoOutput;
            };

            'fal-ai/veo2/image-to-video': {
                input: falEndpoints.Veo2ImageToVideoInput;
                output: falEndpoints.Veo2ImageToVideoOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra': {
                input: falEndpoints.FluxProV11UltraInput;
                output: falEndpoints.FluxProV11UltraOutput;
            };

            'fal-ai/kling-video/v1.6/pro/image-to-video': {
                input: falEndpoints.KlingVideoV16ProImageToVideoInput;
                output: falEndpoints.KlingVideoV16ProImageToVideoOutput;
            };

            'fal-ai/recraft/v3/text-to-image': {
                input: falEndpoints.RecraftV3TextToImageInput;
                output: falEndpoints.RecraftV3TextToImageOutput;
            };

            'fal-ai/flux-2/lora/edit': {
                input: falEndpoints.Flux2LoraEditInput;
                output: falEndpoints.Flux2LoraEditOutput;
            };

            'fal-ai/flux-2/edit': {
                input: falEndpoints.Flux2EditInput;
                output: falEndpoints.Flux2EditOutput;
            };

            'fal-ai/flux-2-pro': {
                input: falEndpoints.Flux2ProInput;
                output: falEndpoints.Flux2ProOutput;
            };

            'fal-ai/flux-2/lora': {
                input: falEndpoints.Flux2LoraInput;
                output: falEndpoints.Flux2LoraOutput;
            };

            'fal-ai/flux-2': {
                input: falEndpoints.Flux2Input;
                output: falEndpoints.Flux2Output;
            };

            'fal-ai/flux-2-pro/edit': {
                input: falEndpoints.Flux2ProEditInput;
                output: falEndpoints.Flux2ProEditOutput;
            };

            'fal-ai/wan-25-preview/image-to-video': {
                input: falEndpoints.Wan25PreviewImageToVideoInput;
                output: falEndpoints.Wan25PreviewImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo23ProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23ProImageToVideoOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/pro/image-to-video': {
                input: falEndpoints.KlingVideoV25TurboProImageToVideoInput;
                output: falEndpoints.KlingVideoV25TurboProImageToVideoOutput;
            };

            'fal-ai/flux-krea-trainer': {
                input: falEndpoints.FluxKreaTrainerInput;
                output: falEndpoints.FluxKreaTrainerOutput;
            };

            'bria/video/background-removal': {
                input: falEndpoints.BriaVideoBackgroundRemovalInput;
                output: falEndpoints.BriaVideoBackgroundRemovalOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/pro/text-to-video': {
                input: falEndpoints.KlingVideoV25TurboProTextToVideoInput;
                output: falEndpoints.KlingVideoV25TurboProTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/standard/text-to-video': {
                input: falEndpoints.MinimaxHailuo02StandardTextToVideoInput;
                output: falEndpoints.MinimaxHailuo02StandardTextToVideoOutput;
            };

            'fal-ai/veo3/fast': {
                input: falEndpoints.Veo3FastInput;
                output: falEndpoints.Veo3FastOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo02StandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02StandardImageToVideoOutput;
            };

            'bria/text-to-image/3.2': {
                input: falEndpoints.BriaTextToImage32Input;
                output: falEndpoints.BriaTextToImage32Output;
            };

            'fal-ai/imagen4/preview/fast': {
                input: falEndpoints.Imagen4PreviewFastInput;
                output: falEndpoints.Imagen4PreviewFastOutput;
            };

            'fal-ai/kling-video/v2.1/master/image-to-video': {
                input: falEndpoints.KlingVideoV21MasterImageToVideoInput;
                output: falEndpoints.KlingVideoV21MasterImageToVideoOutput;
            };

            'fal-ai/veo3': {
                input: falEndpoints.Veo3Input;
                output: falEndpoints.Veo3Output;
            };

            'fal-ai/imagen4/preview': {
                input: falEndpoints.Imagen4PreviewInput;
                output: falEndpoints.Imagen4PreviewOutput;
            };

            'fal-ai/kling-video/v2.1/standard/image-to-video': {
                input: falEndpoints.KlingVideoV21StandardImageToVideoInput;
                output: falEndpoints.KlingVideoV21StandardImageToVideoOutput;
            };

            'fal-ai/kling-video/v2/master/image-to-video': {
                input: falEndpoints.KlingVideoV2MasterImageToVideoInput;
                output: falEndpoints.KlingVideoV2MasterImageToVideoOutput;
            };

            'fal-ai/hidream-i1-full': {
                input: falEndpoints.HidreamI1FullInput;
                output: falEndpoints.HidreamI1FullOutput;
            };

            'fal-ai/kling-video/v2/master/text-to-video': {
                input: falEndpoints.KlingVideoV2MasterTextToVideoInput;
                output: falEndpoints.KlingVideoV2MasterTextToVideoOutput;
            };

            'fal-ai/wan-i2v': {
                input: falEndpoints.WanI2vInput;
                output: falEndpoints.WanI2vOutput;
            };

            'fal-ai/ideogram/v2': {
                input: falEndpoints.IdeogramV2Input;
                output: falEndpoints.IdeogramV2Output;
            };

            'fal-ai/hidream-i1-dev': {
                input: falEndpoints.HidreamI1DevInput;
                output: falEndpoints.HidreamI1DevOutput;
            };

            'fal-ai/flux-lora-fast-training': {
                input: falEndpoints.FluxLoraFastTrainingInput;
                output: falEndpoints.FluxLoraFastTrainingOutput;
            };

            'fal-ai/hidream-i1-fast': {
                input: falEndpoints.HidreamI1FastInput;
                output: falEndpoints.HidreamI1FastOutput;
            };

            'fal-ai/mmaudio-v2': {
                input: falEndpoints.MmaudioV2Input;
                output: falEndpoints.MmaudioV2Output;
            };

            'fal-ai/flux-lora-portrait-trainer': {
                input: falEndpoints.FluxLoraPortraitTrainerInput;
                output: falEndpoints.FluxLoraPortraitTrainerOutput;
            };

            'fal-ai/flux/dev': {
                input: falEndpoints.FluxDevInput;
                output: falEndpoints.FluxDevOutput;
            };

            'fal-ai/flux-general': {
                input: falEndpoints.FluxGeneralInput;
                output: falEndpoints.FluxGeneralOutput;
            };

            'fal-ai/flux-lora': {
                input: falEndpoints.FluxLoraInput;
                output: falEndpoints.FluxLoraOutput;
            };

            'fal-ai/aura-sr': {
                input: falEndpoints.AuraSrInput;
                output: falEndpoints.AuraSrOutput;
            };

            'fal-ai/flux/dev/image-to-image': {
                input: falEndpoints.FluxDevImageToImageInput;
                output: falEndpoints.FluxDevImageToImageOutput;
            };

            'fal-ai/stable-diffusion-v35-large': {
                input: falEndpoints.StableDiffusionV35LargeInput;
                output: falEndpoints.StableDiffusionV35LargeOutput;
            };

            'fal-ai/clarity-upscaler': {
                input: falEndpoints.ClarityUpscalerInput;
                output: falEndpoints.ClarityUpscalerOutput;
            };

            'fal-ai/flux-2/klein/9b/base/edit/lora': {
                input: falEndpoints.Flux2Klein9bBaseEditLoraInput;
                output: falEndpoints.Flux2Klein9bBaseEditLoraOutput;
            };

            'fal-ai/vidu/q2/reference-to-video/pro': {
                input: falEndpoints.ViduQ2ReferenceToVideoProInput;
                output: falEndpoints.ViduQ2ReferenceToVideoProOutput;
            };

            'fal-ai/nemotron/asr/stream': {
                input: falEndpoints.NemotronAsrStreamInput;
                output: falEndpoints.NemotronAsrStreamOutput;
            };

            'fal-ai/nemotron/asr': {
                input: falEndpoints.NemotronAsrInput;
                output: falEndpoints.NemotronAsrOutput;
            };

            'fal-ai/flux-2/klein/4b/base/edit/lora': {
                input: falEndpoints.Flux2Klein4bBaseEditLoraInput;
                output: falEndpoints.Flux2Klein4bBaseEditLoraOutput;
            };

            'bria/fibo-lite/generate/structured_prompt': {
                input: falEndpoints.BriaFiboLiteGenerateStructured_promptInput;
                output: falEndpoints.BriaFiboLiteGenerateStructured_promptOutput;
            };

            'fal-ai/flux-2/klein/4b/base/lora': {
                input: falEndpoints.Flux2Klein4bBaseLoraInput;
                output: falEndpoints.Flux2Klein4bBaseLoraOutput;
            };

            'bria/fibo-lite/generate/structured_prompt/lite': {
                input: falEndpoints.BriaFiboLiteGenerateStructured_promptLiteInput;
                output: falEndpoints.BriaFiboLiteGenerateStructured_promptLiteOutput;
            };

            'wan/v2.6/image-to-video/flash': {
                input: falEndpoints.WanV26ImageToVideoFlashInput;
                output: falEndpoints.WanV26ImageToVideoFlashOutput;
            };

            'fal-ai/flux-2/klein/9b/base/lora': {
                input: falEndpoints.Flux2Klein9bBaseLoraInput;
                output: falEndpoints.Flux2Klein9bBaseLoraOutput;
            };

            'fal-ai/flux-2-klein-9b-base-trainer': {
                input: falEndpoints.Flux2Klein9bBaseTrainerInput;
                output: falEndpoints.Flux2Klein9bBaseTrainerOutput;
            };

            'fal-ai/flux-2-klein-4b-base-trainer/edit': {
                input: falEndpoints.Flux2Klein4bBaseTrainerEditInput;
                output: falEndpoints.Flux2Klein4bBaseTrainerEditOutput;
            };

            'fal-ai/flux-2-klein-9b-base-trainer/edit': {
                input: falEndpoints.Flux2Klein9bBaseTrainerEditInput;
                output: falEndpoints.Flux2Klein9bBaseTrainerEditOutput;
            };

            'fal-ai/flux-2/klein/9b/base': {
                input: falEndpoints.Flux2Klein9bBaseInput;
                output: falEndpoints.Flux2Klein9bBaseOutput;
            };

            'fal-ai/flux-2-klein-4b-base-trainer': {
                input: falEndpoints.Flux2Klein4bBaseTrainerInput;
                output: falEndpoints.Flux2Klein4bBaseTrainerOutput;
            };

            'fal-ai/flux-2/klein/4b/base/edit': {
                input: falEndpoints.Flux2Klein4bBaseEditInput;
                output: falEndpoints.Flux2Klein4bBaseEditOutput;
            };

            'fal-ai/flux-2/klein/9b/base/edit': {
                input: falEndpoints.Flux2Klein9bBaseEditInput;
                output: falEndpoints.Flux2Klein9bBaseEditOutput;
            };

            'fal-ai/flux-2/klein/4b/base': {
                input: falEndpoints.Flux2Klein4bBaseInput;
                output: falEndpoints.Flux2Klein4bBaseOutput;
            };

            'fal-ai/flux-2/klein/4b/edit': {
                input: falEndpoints.Flux2Klein4bEditInput;
                output: falEndpoints.Flux2Klein4bEditOutput;
            };

            'imagineart/imagineart-1.5-pro-preview/text-to-image': {
                input: falEndpoints.ImagineartImagineart15ProPreviewTextToImageInput;
                output: falEndpoints.ImagineartImagineart15ProPreviewTextToImageOutput;
            };

            'fal-ai/flux-2/klein/4b': {
                input: falEndpoints.Flux2Klein4bInput;
                output: falEndpoints.Flux2Klein4bOutput;
            };

            'fal-ai/elevenlabs/voice-changer': {
                input: falEndpoints.ElevenlabsVoiceChangerInput;
                output: falEndpoints.ElevenlabsVoiceChangerOutput;
            };

            'fal-ai/elevenlabs/speech-to-text/scribe-v2': {
                input: falEndpoints.ElevenlabsSpeechToTextScribeV2Input;
                output: falEndpoints.ElevenlabsSpeechToTextScribeV2Output;
            };

            'fal-ai/elevenlabs/dubbing': {
                input: falEndpoints.ElevenlabsDubbingInput;
                output: falEndpoints.ElevenlabsDubbingOutput;
            };

            'fal-ai/glm-image/image-to-image': {
                input: falEndpoints.GlmImageImageToImageInput;
                output: falEndpoints.GlmImageImageToImageOutput;
            };

            'fal-ai/glm-image': {
                input: falEndpoints.GlmImageInput;
                output: falEndpoints.GlmImageOutput;
            };

            'openrouter/router/video': {
                input: falEndpoints.OpenrouterRouterVideoInput;
                output: falEndpoints.OpenrouterRouterVideoOutput;
            };

            'fal-ai/flux-2-trainer-v2/edit': {
                input: falEndpoints.Flux2TrainerV2EditInput;
                output: falEndpoints.Flux2TrainerV2EditOutput;
            };

            'fal-ai/silero-vad': {
                input: falEndpoints.SileroVadInput;
                output: falEndpoints.SileroVadOutput;
            };

            'fal-ai/longcat-multi-avatar/image-audio-to-video': {
                input: falEndpoints.LongcatMultiAvatarImageAudioToVideoInput;
                output: falEndpoints.LongcatMultiAvatarImageAudioToVideoOutput;
            };

            'fal-ai/deepfilternet3': {
                input: falEndpoints.Deepfilternet3Input;
                output: falEndpoints.Deepfilternet3Output;
            };

            'openrouter/router/video/enterprise': {
                input: falEndpoints.OpenrouterRouterVideoEnterpriseInput;
                output: falEndpoints.OpenrouterRouterVideoEnterpriseOutput;
            };

            'fal-ai/nova-sr': {
                input: falEndpoints.NovaSrInput;
                output: falEndpoints.NovaSrOutput;
            };

            'fal-ai/flux-2-trainer-v2': {
                input: falEndpoints.Flux2TrainerV2Input;
                output: falEndpoints.Flux2TrainerV2Output;
            };

            'fal-ai/qwen-image-edit-2511-multiple-angles': {
                input: falEndpoints.QwenImageEdit2511MultipleAnglesInput;
                output: falEndpoints.QwenImageEdit2511MultipleAnglesOutput;
            };

            'fal-ai/ltx2-v2v-trainer': {
                input: falEndpoints.Ltx2V2vTrainerInput;
                output: falEndpoints.Ltx2V2vTrainerOutput;
            };

            'fal-ai/ltx-2-19b/distilled/video-to-video': {
                input: falEndpoints.Ltx219bDistilledVideoToVideoInput;
                output: falEndpoints.Ltx219bDistilledVideoToVideoOutput;
            };

            'fal-ai/ltx-2-19b/video-to-video': {
                input: falEndpoints.Ltx219bVideoToVideoInput;
                output: falEndpoints.Ltx219bVideoToVideoOutput;
            };

            'fal-ai/ltx-2-19b/distilled/video-to-video/lora': {
                input: falEndpoints.Ltx219bDistilledVideoToVideoLoraInput;
                output: falEndpoints.Ltx219bDistilledVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/distilled/extend-video/lora': {
                input: falEndpoints.Ltx219bDistilledExtendVideoLoraInput;
                output: falEndpoints.Ltx219bDistilledExtendVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/video-to-video/lora': {
                input: falEndpoints.Ltx219bVideoToVideoLoraInput;
                output: falEndpoints.Ltx219bVideoToVideoLoraOutput;
            };

            'fal-ai/ultrashape': {
                input: falEndpoints.UltrashapeInput;
                output: falEndpoints.UltrashapeOutput;
            };

            'fal-ai/ltx-2-19b/distilled/image-to-video/lora': {
                input: falEndpoints.Ltx219bDistilledImageToVideoLoraInput;
                output: falEndpoints.Ltx219bDistilledImageToVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/distilled/image-to-video': {
                input: falEndpoints.Ltx219bDistilledImageToVideoInput;
                output: falEndpoints.Ltx219bDistilledImageToVideoOutput;
            };

            'fal-ai/ltx-2-19b/distilled/text-to-video': {
                input: falEndpoints.Ltx219bDistilledTextToVideoInput;
                output: falEndpoints.Ltx219bDistilledTextToVideoOutput;
            };

            'fal-ai/ltx-2-19b/distilled/text-to-video/lora': {
                input: falEndpoints.Ltx219bDistilledTextToVideoLoraInput;
                output: falEndpoints.Ltx219bDistilledTextToVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/extend-video/lora': {
                input: falEndpoints.Ltx219bExtendVideoLoraInput;
                output: falEndpoints.Ltx219bExtendVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/text-to-video/lora': {
                input: falEndpoints.Ltx219bTextToVideoLoraInput;
                output: falEndpoints.Ltx219bTextToVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/image-to-video/lora': {
                input: falEndpoints.Ltx219bImageToVideoLoraInput;
                output: falEndpoints.Ltx219bImageToVideoLoraOutput;
            };

            'fal-ai/ltx-2-19b/distilled/extend-video': {
                input: falEndpoints.Ltx219bDistilledExtendVideoInput;
                output: falEndpoints.Ltx219bDistilledExtendVideoOutput;
            };

            'fal-ai/ltx2-video-trainer': {
                input: falEndpoints.Ltx2VideoTrainerInput;
                output: falEndpoints.Ltx2VideoTrainerOutput;
            };

            'fal-ai/qwen-image-2512/lora': {
                input: falEndpoints.QwenImage2512LoraInput;
                output: falEndpoints.QwenImage2512LoraOutput;
            };

            'fal-ai/ltx-2-19b/text-to-video': {
                input: falEndpoints.Ltx219bTextToVideoInput;
                output: falEndpoints.Ltx219bTextToVideoOutput;
            };

            'fal-ai/qwen-image-2512-trainer': {
                input: falEndpoints.QwenImage2512TrainerInput;
                output: falEndpoints.QwenImage2512TrainerOutput;
            };

            'fal-ai/ltx-2-19b/image-to-video': {
                input: falEndpoints.Ltx219bImageToVideoInput;
                output: falEndpoints.Ltx219bImageToVideoOutput;
            };

            'fal-ai/qwen-image-edit-2511/lora': {
                input: falEndpoints.QwenImageEdit2511LoraInput;
                output: falEndpoints.QwenImageEdit2511LoraOutput;
            };

            'fal-ai/ltx-2-19b/extend-video': {
                input: falEndpoints.Ltx219bExtendVideoInput;
                output: falEndpoints.Ltx219bExtendVideoOutput;
            };

            'fal-ai/qwen-image-2512': {
                input: falEndpoints.QwenImage2512Input;
                output: falEndpoints.QwenImage2512Output;
            };

            'fal-ai/longcat-single-avatar/image-audio-to-video': {
                input: falEndpoints.LongcatSingleAvatarImageAudioToVideoInput;
                output: falEndpoints.LongcatSingleAvatarImageAudioToVideoOutput;
            };

            'fal-ai/longcat-single-avatar/audio-to-video': {
                input: falEndpoints.LongcatSingleAvatarAudioToVideoInput;
                output: falEndpoints.LongcatSingleAvatarAudioToVideoOutput;
            };

            'fal-ai/sam-audio/separate': {
                input: falEndpoints.SamAudioSeparateInput;
                output: falEndpoints.SamAudioSeparateOutput;
            };

            'fal-ai/sam-audio/visual-separate': {
                input: falEndpoints.SamAudioVisualSeparateInput;
                output: falEndpoints.SamAudioVisualSeparateOutput;
            };

            'fal-ai/sam-audio/span-separate': {
                input: falEndpoints.SamAudioSpanSeparateInput;
                output: falEndpoints.SamAudioSpanSeparateOutput;
            };

            'half-moon-ai/ai-home/edit': {
                input: falEndpoints.HalfmoonaiAiHomeEditInput;
                output: falEndpoints.HalfmoonaiAiHomeEditOutput;
            };

            'half-moon-ai/ai-home/style': {
                input: falEndpoints.HalfmoonaiAiHomeStyleInput;
                output: falEndpoints.HalfmoonaiAiHomeStyleOutput;
            };

            'fal-ai/hunyuan-motion': {
                input: falEndpoints.HunyuanMotionInput;
                output: falEndpoints.HunyuanMotionOutput;
            };

            'fal-ai/arbiter/image/image': {
                input: falEndpoints.ArbiterImageImageInput;
                output: falEndpoints.ArbiterImageImageOutput;
            };

            'fal-ai/qwen-image-layered/lora': {
                input: falEndpoints.QwenImageLayeredLoraInput;
                output: falEndpoints.QwenImageLayeredLoraOutput;
            };

            'fal-ai/hunyuan-motion/fast': {
                input: falEndpoints.HunyuanMotionFastInput;
                output: falEndpoints.HunyuanMotionFastOutput;
            };

            'fal-ai/ffmpeg-api/merge-audios': {
                input: falEndpoints.FfmpegApiMergeAudiosInput;
                output: falEndpoints.FfmpegApiMergeAudiosOutput;
            };

            'fal-ai/arbiter/image/text': {
                input: falEndpoints.ArbiterImageTextInput;
                output: falEndpoints.ArbiterImageTextOutput;
            };

            'fal-ai/arbiter/image': {
                input: falEndpoints.ArbiterImageInput;
                output: falEndpoints.ArbiterImageOutput;
            };

            'wan/v2.6/image-to-image': {
                input: falEndpoints.WanV26ImageToImageInput;
                output: falEndpoints.WanV26ImageToImageOutput;
            };

            'wan/v2.6/text-to-image': {
                input: falEndpoints.WanV26TextToImageInput;
                output: falEndpoints.WanV26TextToImageOutput;
            };

            'bria/video/erase/prompt': {
                input: falEndpoints.BriaVideoErasePromptInput;
                output: falEndpoints.BriaVideoErasePromptOutput;
            };

            'fal-ai/qwen-image-edit-2511-trainer': {
                input: falEndpoints.QwenImageEdit2511TrainerInput;
                output: falEndpoints.QwenImageEdit2511TrainerOutput;
            };

            'bria/video/erase/keypoints': {
                input: falEndpoints.BriaVideoEraseKeypointsInput;
                output: falEndpoints.BriaVideoEraseKeypointsOutput;
            };

            'bria/video/erase/mask': {
                input: falEndpoints.BriaVideoEraseMaskInput;
                output: falEndpoints.BriaVideoEraseMaskOutput;
            };

            'fal-ai/kandinsky5-pro/text-to-video': {
                input: falEndpoints.Kandinsky5ProTextToVideoInput;
                output: falEndpoints.Kandinsky5ProTextToVideoOutput;
            };

            'fal-ai/kandinsky5-pro/image-to-video': {
                input: falEndpoints.Kandinsky5ProImageToVideoInput;
                output: falEndpoints.Kandinsky5ProImageToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1.5/pro/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV15ProImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV15ProImageToVideoOutput;
            };

            'fal-ai/live-avatar': {
                input: falEndpoints.LiveAvatarInput;
                output: falEndpoints.LiveAvatarOutput;
            };

            'openrouter/router/audio': {
                input: falEndpoints.OpenrouterRouterAudioInput;
                output: falEndpoints.OpenrouterRouterAudioOutput;
            };

            'fal-ai/lightx/relight': {
                input: falEndpoints.LightxRelightInput;
                output: falEndpoints.LightxRelightOutput;
            };

            'fal-ai/elevenlabs/music': {
                input: falEndpoints.ElevenlabsMusicInput;
                output: falEndpoints.ElevenlabsMusicOutput;
            };

            'fal-ai/lightx/recamera': {
                input: falEndpoints.LightxRecameraInput;
                output: falEndpoints.LightxRecameraOutput;
            };

            'fal-ai/bytedance/seedance/v1.5/pro/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV15ProTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV15ProTextToVideoOutput;
            };

            'fal-ai/qwen-image-layered-trainer': {
                input: falEndpoints.QwenImageLayeredTrainerInput;
                output: falEndpoints.QwenImageLayeredTrainerOutput;
            };

            'fal-ai/kling-video/v2.6/pro/motion-control': {
                input: falEndpoints.KlingVideoV26ProMotionControlInput;
                output: falEndpoints.KlingVideoV26ProMotionControlOutput;
            };

            'fal-ai/qwen-image-layered': {
                input: falEndpoints.QwenImageLayeredInput;
                output: falEndpoints.QwenImageLayeredOutput;
            };

            'fal-ai/z-image/turbo/inpaint/lora': {
                input: falEndpoints.ZImageTurboInpaintLoraInput;
                output: falEndpoints.ZImageTurboInpaintLoraOutput;
            };

            'fal-ai/kling-video/v2.6/standard/motion-control': {
                input: falEndpoints.KlingVideoV26StandardMotionControlInput;
                output: falEndpoints.KlingVideoV26StandardMotionControlOutput;
            };

            'fal-ai/trellis-2': {
                input: falEndpoints.Trellis2Input;
                output: falEndpoints.Trellis2Output;
            };

            'fal-ai/qwen-image-edit-2511': {
                input: falEndpoints.QwenImageEdit2511Input;
                output: falEndpoints.QwenImageEdit2511Output;
            };

            'decart/lucy-restyle': {
                input: falEndpoints.DecartLucyRestyleInput;
                output: falEndpoints.DecartLucyRestyleOutput;
            };

            'fal-ai/z-image/turbo/inpaint': {
                input: falEndpoints.ZImageTurboInpaintInput;
                output: falEndpoints.ZImageTurboInpaintOutput;
            };

            'clarityai/crystal-video-upscaler': {
                input: falEndpoints.ClarityaiCrystalVideoUpscalerInput;
                output: falEndpoints.ClarityaiCrystalVideoUpscalerOutput;
            };

            'fal-ai/scail': {
                input: falEndpoints.ScailInput;
                output: falEndpoints.ScailOutput;
            };

            'fal-ai/hunyuan-video-v1.5/image-to-video': {
                input: falEndpoints.HunyuanVideoV15ImageToVideoInput;
                output: falEndpoints.HunyuanVideoV15ImageToVideoOutput;
            };

            'fal-ai/vibevoice/0.5b': {
                input: falEndpoints.Vibevoice05bInput;
                output: falEndpoints.Vibevoice05bOutput;
            };

            'fal-ai/hunyuan3d-v3/text-to-3d': {
                input: falEndpoints.Hunyuan3dV3TextTo3dInput;
                output: falEndpoints.Hunyuan3dV3TextTo3dOutput;
            };

            'fal-ai/hunyuan3d-v3/sketch-to-3d': {
                input: falEndpoints.Hunyuan3dV3SketchTo3dInput;
                output: falEndpoints.Hunyuan3dV3SketchTo3dOutput;
            };

            'fal-ai/hunyuan3d-v3/image-to-3d': {
                input: falEndpoints.Hunyuan3dV3ImageTo3dInput;
                output: falEndpoints.Hunyuan3dV3ImageTo3dOutput;
            };

            'fal-ai/flux-2/flash/edit': {
                input: falEndpoints.Flux2FlashEditInput;
                output: falEndpoints.Flux2FlashEditOutput;
            };

            'fal-ai/gpt-image-1.5/edit': {
                input: falEndpoints.GptImage15EditInput;
                output: falEndpoints.GptImage15EditOutput;
            };

            'fal-ai/flux-2/turbo': {
                input: falEndpoints.Flux2TurboInput;
                output: falEndpoints.Flux2TurboOutput;
            };

            'fal-ai/kling-video/create-voice': {
                input: falEndpoints.KlingVideoCreateVoiceInput;
                output: falEndpoints.KlingVideoCreateVoiceOutput;
            };

            'fal-ai/flux-2/turbo/edit': {
                input: falEndpoints.Flux2TurboEditInput;
                output: falEndpoints.Flux2TurboEditOutput;
            };

            'fal-ai/flux-2-max': {
                input: falEndpoints.Flux2MaxInput;
                output: falEndpoints.Flux2MaxOutput;
            };

            'fal-ai/flux-2/flash': {
                input: falEndpoints.Flux2FlashInput;
                output: falEndpoints.Flux2FlashOutput;
            };

            'half-moon-ai/ai-baby-and-aging-generator/multi': {
                input: falEndpoints.HalfmoonaiAiBabyAndAgingGeneratorMultiInput;
                output: falEndpoints.HalfmoonaiAiBabyAndAgingGeneratorMultiOutput;
            };

            'fal-ai/gpt-image-1.5': {
                input: falEndpoints.GptImage15Input;
                output: falEndpoints.GptImage15Output;
            };

            'bria/fibo-lite/generate': {
                input: falEndpoints.BriaFiboLiteGenerateInput;
                output: falEndpoints.BriaFiboLiteGenerateOutput;
            };

            'fal-ai/flux-2-max/edit': {
                input: falEndpoints.Flux2MaxEditInput;
                output: falEndpoints.Flux2MaxEditOutput;
            };

            'half-moon-ai/ai-detector/detect-image': {
                input: falEndpoints.HalfmoonaiAiDetectorDetectImageInput;
                output: falEndpoints.HalfmoonaiAiDetectorDetectImageOutput;
            };

            'half-moon-ai/ai-baby-and-aging-generator/single': {
                input: falEndpoints.HalfmoonaiAiBabyAndAgingGeneratorSingleInput;
                output: falEndpoints.HalfmoonaiAiBabyAndAgingGeneratorSingleOutput;
            };

            'wan/v2.6/text-to-video': {
                input: falEndpoints.WanV26TextToVideoInput;
                output: falEndpoints.WanV26TextToVideoOutput;
            };

            'half-moon-ai/ai-detector/detect-text': {
                input: falEndpoints.HalfmoonaiAiDetectorDetectTextInput;
                output: falEndpoints.HalfmoonaiAiDetectorDetectTextOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/shirt-design': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryShirtDesignInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryShirtDesignOutput;
            };

            'wan/v2.6/reference-to-video': {
                input: falEndpoints.WanV26ReferenceToVideoInput;
                output: falEndpoints.WanV26ReferenceToVideoOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/remove-element': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryRemoveElementInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryRemoveElementOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/integrate-product': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryIntegrateProductInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryIntegrateProductOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/group-photo': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryGroupPhotoInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryGroupPhotoOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/add-background': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryAddBackgroundInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryAddBackgroundOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/next-scene': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryNextSceneInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryNextSceneOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/remove-lighting': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryRemoveLightingInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryRemoveLightingOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/lighting-restoration': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryLightingRestorationInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryLightingRestorationOutput;
            };

            'fal-ai/veo3.1/fast/extend-video': {
                input: falEndpoints.Veo31FastExtendVideoInput;
                output: falEndpoints.Veo31FastExtendVideoOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora': {
                input: falEndpoints.QwenImageEdit2509LoraInput;
                output: falEndpoints.QwenImageEdit2509LoraOutput;
            };

            'fal-ai/qwen-image-edit-2509': {
                input: falEndpoints.QwenImageEdit2509Input;
                output: falEndpoints.QwenImageEdit2509Output;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/multiple-angles': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryMultipleAnglesInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/veo3.1/extend-video': {
                input: falEndpoints.Veo31ExtendVideoInput;
                output: falEndpoints.Veo31ExtendVideoOutput;
            };

            'fal-ai/chatterbox/text-to-speech/turbo': {
                input: falEndpoints.ChatterboxTextToSpeechTurboInput;
                output: falEndpoints.ChatterboxTextToSpeechTurboOutput;
            };

            'fal-ai/qwen-image-edit-2509-trainer': {
                input: falEndpoints.QwenImageEdit2509TrainerInput;
                output: falEndpoints.QwenImageEdit2509TrainerOutput;
            };

            'wan/v2.6/image-to-video': {
                input: falEndpoints.WanV26ImageToVideoInput;
                output: falEndpoints.WanV26ImageToVideoOutput;
            };

            'fal-ai/kling-video/o1/standard/image-to-video': {
                input: falEndpoints.KlingVideoO1StandardImageToVideoInput;
                output: falEndpoints.KlingVideoO1StandardImageToVideoOutput;
            };

            'fal-ai/kling-video/o1/standard/reference-to-video': {
                input: falEndpoints.KlingVideoO1StandardReferenceToVideoInput;
                output: falEndpoints.KlingVideoO1StandardReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o1/standard/video-to-video/reference': {
                input: falEndpoints.KlingVideoO1StandardVideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO1StandardVideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o1/standard/video-to-video/edit': {
                input: falEndpoints.KlingVideoO1StandardVideoToVideoEditInput;
                output: falEndpoints.KlingVideoO1StandardVideoToVideoEditOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/lighting-restoration': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryLightingRestorationInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryLightingRestorationOutput;
            };

            'fal-ai/maya/batch': {
                input: falEndpoints.MayaBatchInput;
                output: falEndpoints.MayaBatchOutput;
            };

            'fal-ai/maya/stream': {
                input: falEndpoints.MayaStreamInput;
                output: falEndpoints.MayaStreamOutput;
            };

            'fal-ai/steady-dancer': {
                input: falEndpoints.SteadyDancerInput;
                output: falEndpoints.SteadyDancerOutput;
            };

            'fal-ai/sync-lipsync/react-1': {
                input: falEndpoints.SyncLipsyncReact1Input;
                output: falEndpoints.SyncLipsyncReact1Output;
            };

            'fal-ai/creatify/aurora': {
                input: falEndpoints.CreatifyAuroraInput;
                output: falEndpoints.CreatifyAuroraOutput;
            };

            'fal-ai/one-to-all-animation/14b': {
                input: falEndpoints.OneToAllAnimation14bInput;
                output: falEndpoints.OneToAllAnimation14bOutput;
            };

            'fal-ai/wan-vision-enhancer': {
                input: falEndpoints.WanVisionEnhancerInput;
                output: falEndpoints.WanVisionEnhancerOutput;
            };

            'veed/fabric-1.0/text': {
                input: falEndpoints.VeedFabric10TextInput;
                output: falEndpoints.VeedFabric10TextOutput;
            };

            'fal-ai/stepx-edit2': {
                input: falEndpoints.StepxEdit2Input;
                output: falEndpoints.StepxEdit2Output;
            };

            'fal-ai/one-to-all-animation/1.3b': {
                input: falEndpoints.OneToAllAnimation13bInput;
                output: falEndpoints.OneToAllAnimation13bOutput;
            };

            'fal-ai/z-image/turbo/controlnet': {
                input: falEndpoints.ZImageTurboControlnetInput;
                output: falEndpoints.ZImageTurboControlnetOutput;
            };

            'fal-ai/longcat-image': {
                input: falEndpoints.LongcatImageInput;
                output: falEndpoints.LongcatImageOutput;
            };

            'fal-ai/z-image/turbo/image-to-image': {
                input: falEndpoints.ZImageTurboImageToImageInput;
                output: falEndpoints.ZImageTurboImageToImageOutput;
            };

            'fal-ai/z-image/turbo/controlnet/lora': {
                input: falEndpoints.ZImageTurboControlnetLoraInput;
                output: falEndpoints.ZImageTurboControlnetLoraOutput;
            };

            'fal-ai/z-image/turbo/image-to-image/lora': {
                input: falEndpoints.ZImageTurboImageToImageLoraInput;
                output: falEndpoints.ZImageTurboImageToImageLoraOutput;
            };

            'fal-ai/longcat-image/edit': {
                input: falEndpoints.LongcatImageEditInput;
                output: falEndpoints.LongcatImageEditOutput;
            };

            'fal-ai/kling-video/ai-avatar/v2/standard': {
                input: falEndpoints.KlingVideoAiAvatarV2StandardInput;
                output: falEndpoints.KlingVideoAiAvatarV2StandardOutput;
            };

            'fal-ai/kling-video/ai-avatar/v2/pro': {
                input: falEndpoints.KlingVideoAiAvatarV2ProInput;
                output: falEndpoints.KlingVideoAiAvatarV2ProOutput;
            };

            'fal-ai/bytedance/seedream/v4.5/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV45TextToImageInput;
                output: falEndpoints.BytedanceSeedreamV45TextToImageOutput;
            };

            'fal-ai/sam-3/3d-body': {
                input: falEndpoints.Sam33dBodyInput;
                output: falEndpoints.Sam33dBodyOutput;
            };

            'fal-ai/sam-3/3d-objects': {
                input: falEndpoints.Sam33dObjectsInput;
                output: falEndpoints.Sam33dObjectsOutput;
            };

            'fal-ai/vidu/q2/reference-to-image': {
                input: falEndpoints.ViduQ2ReferenceToImageInput;
                output: falEndpoints.ViduQ2ReferenceToImageOutput;
            };

            'fal-ai/sam-3/3d-align': {
                input: falEndpoints.Sam33dAlignInput;
                output: falEndpoints.Sam33dAlignOutput;
            };

            'fal-ai/vidu/q2/text-to-image': {
                input: falEndpoints.ViduQ2TextToImageInput;
                output: falEndpoints.ViduQ2TextToImageOutput;
            };

            'fal-ai/z-image-trainer': {
                input: falEndpoints.ZImageTrainerInput;
                output: falEndpoints.ZImageTrainerOutput;
            };

            'fal-ai/bytedance/seedream/v4.5/edit': {
                input: falEndpoints.BytedanceSeedreamV45EditInput;
                output: falEndpoints.BytedanceSeedreamV45EditOutput;
            };

            'fal-ai/kling-video/v2.6/pro/image-to-video': {
                input: falEndpoints.KlingVideoV26ProImageToVideoInput;
                output: falEndpoints.KlingVideoV26ProImageToVideoOutput;
            };

            'fal-ai/pixverse/v5.5/transition': {
                input: falEndpoints.PixverseV55TransitionInput;
                output: falEndpoints.PixverseV55TransitionOutput;
            };

            'fal-ai/pixverse/v5.5/image-to-video': {
                input: falEndpoints.PixverseV55ImageToVideoInput;
                output: falEndpoints.PixverseV55ImageToVideoOutput;
            };

            'fal-ai/kling-video/v2.6/pro/text-to-video': {
                input: falEndpoints.KlingVideoV26ProTextToVideoInput;
                output: falEndpoints.KlingVideoV26ProTextToVideoOutput;
            };

            'fal-ai/pixverse/v5.5/effects': {
                input: falEndpoints.PixverseV55EffectsInput;
                output: falEndpoints.PixverseV55EffectsOutput;
            };

            'veed/video-background-removal/fast': {
                input: falEndpoints.VeedVideoBackgroundRemovalFastInput;
                output: falEndpoints.VeedVideoBackgroundRemovalFastOutput;
            };

            'fal-ai/z-image/turbo/lora': {
                input: falEndpoints.ZImageTurboLoraInput;
                output: falEndpoints.ZImageTurboLoraOutput;
            };

            'fal-ai/pixverse/v5.5/text-to-video': {
                input: falEndpoints.PixverseV55TextToVideoInput;
                output: falEndpoints.PixverseV55TextToVideoOutput;
            };

            'fal-ai/kling-video/o1/reference-to-video': {
                input: falEndpoints.KlingVideoO1ReferenceToVideoInput;
                output: falEndpoints.KlingVideoO1ReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o1/video-to-video/edit': {
                input: falEndpoints.KlingVideoO1VideoToVideoEditInput;
                output: falEndpoints.KlingVideoO1VideoToVideoEditOutput;
            };

            'veed/video-background-removal': {
                input: falEndpoints.VeedVideoBackgroundRemovalInput;
                output: falEndpoints.VeedVideoBackgroundRemovalOutput;
            };

            'veed/video-background-removal/green-screen': {
                input: falEndpoints.VeedVideoBackgroundRemovalGreenScreenInput;
                output: falEndpoints.VeedVideoBackgroundRemovalGreenScreenOutput;
            };

            'fal-ai/kling-video/o1/image-to-video': {
                input: falEndpoints.KlingVideoO1ImageToVideoInput;
                output: falEndpoints.KlingVideoO1ImageToVideoOutput;
            };

            'fal-ai/ovis-image': {
                input: falEndpoints.OvisImageInput;
                output: falEndpoints.OvisImageOutput;
            };

            'fal-ai/kling-video/o1/video-to-video/reference': {
                input: falEndpoints.KlingVideoO1VideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO1VideoToVideoReferenceOutput;
            };

            'fal-ai/kling-image/o1': {
                input: falEndpoints.KlingImageO1Input;
                output: falEndpoints.KlingImageO1Output;
            };

            'fal-ai/ltx-2/text-to-video': {
                input: falEndpoints.Ltx2TextToVideoInput;
                output: falEndpoints.Ltx2TextToVideoOutput;
            };

            'fal-ai/ltx-2/image-to-video': {
                input: falEndpoints.Ltx2ImageToVideoInput;
                output: falEndpoints.Ltx2ImageToVideoOutput;
            };

            'decart/lucy-edit/fast': {
                input: falEndpoints.DecartLucyEditFastInput;
                output: falEndpoints.DecartLucyEditFastOutput;
            };

            'fal-ai/z-image/turbo': {
                input: falEndpoints.ZImageTurboInput;
                output: falEndpoints.ZImageTurboOutput;
            };

            'fal-ai/ltx-2/text-to-video/fast': {
                input: falEndpoints.Ltx2TextToVideoFastInput;
                output: falEndpoints.Ltx2TextToVideoFastOutput;
            };

            'fal-ai/flux-2-lora-gallery/sepia-vintage': {
                input: falEndpoints.Flux2LoraGallerySepiaVintageInput;
                output: falEndpoints.Flux2LoraGallerySepiaVintageOutput;
            };

            'fal-ai/ltx-2/image-to-video/fast': {
                input: falEndpoints.Ltx2ImageToVideoFastInput;
                output: falEndpoints.Ltx2ImageToVideoFastOutput;
            };

            'fal-ai/ltx-2/retake-video': {
                input: falEndpoints.Ltx2RetakeVideoInput;
                output: falEndpoints.Ltx2RetakeVideoOutput;
            };

            'fal-ai/flux-2-lora-gallery/satellite-view-style': {
                input: falEndpoints.Flux2LoraGallerySatelliteViewStyleInput;
                output: falEndpoints.Flux2LoraGallerySatelliteViewStyleOutput;
            };

            'fal-ai/flux-2-lora-gallery/virtual-tryon': {
                input: falEndpoints.Flux2LoraGalleryVirtualTryonInput;
                output: falEndpoints.Flux2LoraGalleryVirtualTryonOutput;
            };

            'fal-ai/flux-2-lora-gallery/multiple-angles': {
                input: falEndpoints.Flux2LoraGalleryMultipleAnglesInput;
                output: falEndpoints.Flux2LoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/flux-2-lora-gallery/realism': {
                input: falEndpoints.Flux2LoraGalleryRealismInput;
                output: falEndpoints.Flux2LoraGalleryRealismOutput;
            };

            'fal-ai/flux-2-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.Flux2LoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.Flux2LoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/flux-2-lora-gallery/hdr-style': {
                input: falEndpoints.Flux2LoraGalleryHdrStyleInput;
                output: falEndpoints.Flux2LoraGalleryHdrStyleOutput;
            };

            'fal-ai/flux-2-lora-gallery/ballpoint-pen-sketch': {
                input: falEndpoints.Flux2LoraGalleryBallpointPenSketchInput;
                output: falEndpoints.Flux2LoraGalleryBallpointPenSketchOutput;
            };

            'fal-ai/flux-2-lora-gallery/digital-comic-art': {
                input: falEndpoints.Flux2LoraGalleryDigitalComicArtInput;
                output: falEndpoints.Flux2LoraGalleryDigitalComicArtOutput;
            };

            'fal-ai/flux-2-lora-gallery/add-background': {
                input: falEndpoints.Flux2LoraGalleryAddBackgroundInput;
                output: falEndpoints.Flux2LoraGalleryAddBackgroundOutput;
            };

            'imagineart/imagineart-1.5-preview/text-to-image': {
                input: falEndpoints.ImagineartImagineart15PreviewTextToImageInput;
                output: falEndpoints.ImagineartImagineart15PreviewTextToImageOutput;
            };

            'fal-ai/flux-2-trainer/edit': {
                input: falEndpoints.Flux2TrainerEditInput;
                output: falEndpoints.Flux2TrainerEditOutput;
            };

            'fal-ai/flux-2-trainer': {
                input: falEndpoints.Flux2TrainerInput;
                output: falEndpoints.Flux2TrainerOutput;
            };

            'fal-ai/flux-2-flex/edit': {
                input: falEndpoints.Flux2FlexEditInput;
                output: falEndpoints.Flux2FlexEditOutput;
            };

            'fal-ai/flux-2-flex': {
                input: falEndpoints.Flux2FlexInput;
                output: falEndpoints.Flux2FlexOutput;
            };

            'fal-ai/flux-2-lora-gallery/apartment-staging': {
                input: falEndpoints.Flux2LoraGalleryApartmentStagingInput;
                output: falEndpoints.Flux2LoraGalleryApartmentStagingOutput;
            };

            'clarityai/crystal-upscaler': {
                input: falEndpoints.ClarityaiCrystalUpscalerInput;
                output: falEndpoints.ClarityaiCrystalUpscalerOutput;
            };

            'fal-ai/chrono-edit-lora-gallery/paintbrush': {
                input: falEndpoints.ChronoEditLoraGalleryPaintbrushInput;
                output: falEndpoints.ChronoEditLoraGalleryPaintbrushOutput;
            };

            'fal-ai/hunyuan-video-v1.5/text-to-video': {
                input: falEndpoints.HunyuanVideoV15TextToVideoInput;
                output: falEndpoints.HunyuanVideoV15TextToVideoOutput;
            };

            'fal-ai/sam-3/image/embed': {
                input: falEndpoints.Sam3ImageEmbedInput;
                output: falEndpoints.Sam3ImageEmbedOutput;
            };

            'fal-ai/chrono-edit-lora': {
                input: falEndpoints.ChronoEditLoraInput;
                output: falEndpoints.ChronoEditLoraOutput;
            };

            'fal-ai/chrono-edit-lora-gallery/upscaler': {
                input: falEndpoints.ChronoEditLoraGalleryUpscalerInput;
                output: falEndpoints.ChronoEditLoraGalleryUpscalerOutput;
            };

            'fal-ai/sam-3/video': {
                input: falEndpoints.Sam3VideoInput;
                output: falEndpoints.Sam3VideoOutput;
            };

            'fal-ai/sam-3/image-rle': {
                input: falEndpoints.Sam3ImageRleInput;
                output: falEndpoints.Sam3ImageRleOutput;
            };

            'fal-ai/sam-3/video-rle': {
                input: falEndpoints.Sam3VideoRleInput;
                output: falEndpoints.Sam3VideoRleOutput;
            };

            'fal-ai/gemini-3-pro-image-preview/edit': {
                input: falEndpoints.Gemini3ProImagePreviewEditInput;
                output: falEndpoints.Gemini3ProImagePreviewEditOutput;
            };

            'fal-ai/sam-3/image': {
                input: falEndpoints.Sam3ImageInput;
                output: falEndpoints.Sam3ImageOutput;
            };

            'fal-ai/nano-banana-pro/edit': {
                input: falEndpoints.NanoBananaProEditInput;
                output: falEndpoints.NanoBananaProEditOutput;
            };

            'fal-ai/gemini-3-pro-image-preview': {
                input: falEndpoints.Gemini3ProImagePreviewInput;
                output: falEndpoints.Gemini3ProImagePreviewOutput;
            };

            'fal-ai/nano-banana-pro': {
                input: falEndpoints.NanoBananaProInput;
                output: falEndpoints.NanoBananaProOutput;
            };

            'bytedance/lynx': {
                input: falEndpoints.BytedanceLynxInput;
                output: falEndpoints.BytedanceLynxOutput;
            };

            'fal-ai/maya': {
                input: falEndpoints.MayaInput;
                output: falEndpoints.MayaOutput;
            };

            'openrouter/router/vision': {
                input: falEndpoints.OpenrouterRouterVisionInput;
                output: falEndpoints.OpenrouterRouterVisionOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/shirt-design': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryShirtDesignInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryShirtDesignOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/multiple-angles': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryMultipleAnglesInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/remove-lighting': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryRemoveLightingInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryRemoveLightingOutput;
            };

            'openrouter/router': {
                input: falEndpoints.OpenrouterRouterInput;
                output: falEndpoints.OpenrouterRouterOutput;
            };

            'fal-ai/editto': {
                input: falEndpoints.EdittoInput;
                output: falEndpoints.EdittoOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/next-scene': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryNextSceneInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryNextSceneOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/remove-element': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryRemoveElementInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryRemoveElementOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/group-photo': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryGroupPhotoInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryGroupPhotoOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/integrate-product': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryIntegrateProductInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryIntegrateProductOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/add-background': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryAddBackgroundInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryAddBackgroundOutput;
            };

            'fal-ai/pixverse/swap': {
                input: falEndpoints.PixverseSwapInput;
                output: falEndpoints.PixverseSwapOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/flashvsr/upscale/video': {
                input: falEndpoints.FlashvsrUpscaleVideoInput;
                output: falEndpoints.FlashvsrUpscaleVideoOutput;
            };

            'fal-ai/infinity-star/text-to-video': {
                input: falEndpoints.InfinityStarTextToVideoInput;
                output: falEndpoints.InfinityStarTextToVideoOutput;
            };

            'fal-ai/workflow-utilities/auto-subtitle': {
                input: falEndpoints.WorkflowUtilitiesAutoSubtitleInput;
                output: falEndpoints.WorkflowUtilitiesAutoSubtitleOutput;
            };

            'fal-ai/reve/fast/remix': {
                input: falEndpoints.ReveFastRemixInput;
                output: falEndpoints.ReveFastRemixOutput;
            };

            'fal-ai/reve/fast/edit': {
                input: falEndpoints.ReveFastEditInput;
                output: falEndpoints.ReveFastEditOutput;
            };

            'fal-ai/image-apps-v2/outpaint': {
                input: falEndpoints.ImageAppsV2OutpaintInput;
                output: falEndpoints.ImageAppsV2OutpaintOutput;
            };

            'fal-ai/flux-vision-upscaler': {
                input: falEndpoints.FluxVisionUpscalerInput;
                output: falEndpoints.FluxVisionUpscalerOutput;
            };

            'fal-ai/pika/v2.2/pikaframes': {
                input: falEndpoints.PikaV22PikaframesInput;
                output: falEndpoints.PikaV22PikaframesOutput;
            };

            'fal-ai/sana-video': {
                input: falEndpoints.SanaVideoInput;
                output: falEndpoints.SanaVideoOutput;
            };

            'fal-ai/emu-3.5-image/text-to-image': {
                input: falEndpoints.Emu35ImageTextToImageInput;
                output: falEndpoints.Emu35ImageTextToImageOutput;
            };

            'fal-ai/chrono-edit': {
                input: falEndpoints.ChronoEditInput;
                output: falEndpoints.ChronoEditOutput;
            };

            'fal-ai/emu-3.5-image/edit-image': {
                input: falEndpoints.Emu35ImageEditImageInput;
                output: falEndpoints.Emu35ImageEditImageOutput;
            };

            'fal-ai/qwen-image-edit-plus-trainer': {
                input: falEndpoints.QwenImageEditPlusTrainerInput;
                output: falEndpoints.QwenImageEditPlusTrainerOutput;
            };

            'fal-ai/longcat-video/text-to-video/720p': {
                input: falEndpoints.LongcatVideoTextToVideo720pInput;
                output: falEndpoints.LongcatVideoTextToVideo720pOutput;
            };

            'fal-ai/bytedance-upscaler/upscale/video': {
                input: falEndpoints.BytedanceUpscalerUpscaleVideoInput;
                output: falEndpoints.BytedanceUpscalerUpscaleVideoOutput;
            };

            'fal-ai/minimax-music/v2': {
                input: falEndpoints.MinimaxMusicV2Input;
                output: falEndpoints.MinimaxMusicV2Output;
            };

            'fal-ai/qwen-image-edit-trainer': {
                input: falEndpoints.QwenImageEditTrainerInput;
                output: falEndpoints.QwenImageEditTrainerOutput;
            };

            'fal-ai/longcat-video/image-to-video/480p': {
                input: falEndpoints.LongcatVideoImageToVideo480pInput;
                output: falEndpoints.LongcatVideoImageToVideo480pOutput;
            };

            'fal-ai/longcat-video/image-to-video/720p': {
                input: falEndpoints.LongcatVideoImageToVideo720pInput;
                output: falEndpoints.LongcatVideoImageToVideo720pOutput;
            };

            'fal-ai/longcat-video/distilled/image-to-video/720p': {
                input: falEndpoints.LongcatVideoDistilledImageToVideo720pInput;
                output: falEndpoints.LongcatVideoDistilledImageToVideo720pOutput;
            };

            'fal-ai/longcat-video/text-to-video/480p': {
                input: falEndpoints.LongcatVideoTextToVideo480pInput;
                output: falEndpoints.LongcatVideoTextToVideo480pOutput;
            };

            'bria/fibo/generate/structured_prompt': {
                input: falEndpoints.BriaFiboGenerateStructured_promptInput;
                output: falEndpoints.BriaFiboGenerateStructured_promptOutput;
            };

            'fal-ai/longcat-video/distilled/text-to-video/720p': {
                input: falEndpoints.LongcatVideoDistilledTextToVideo720pInput;
                output: falEndpoints.LongcatVideoDistilledTextToVideo720pOutput;
            };

            'fal-ai/omnipart': {
                input: falEndpoints.OmnipartInput;
                output: falEndpoints.OmnipartOutput;
            };

            'fal-ai/minimax/speech-2.6-turbo': {
                input: falEndpoints.MinimaxSpeech26TurboInput;
                output: falEndpoints.MinimaxSpeech26TurboOutput;
            };

            'fal-ai/video-as-prompt': {
                input: falEndpoints.VideoAsPromptInput;
                output: falEndpoints.VideoAsPromptOutput;
            };

            'bria/fibo/generate': {
                input: falEndpoints.BriaFiboGenerateInput;
                output: falEndpoints.BriaFiboGenerateOutput;
            };

            'fal-ai/demucs': {
                input: falEndpoints.DemucsInput;
                output: falEndpoints.DemucsOutput;
            };

            'fal-ai/longcat-video/distilled/text-to-video/480p': {
                input: falEndpoints.LongcatVideoDistilledTextToVideo480pInput;
                output: falEndpoints.LongcatVideoDistilledTextToVideo480pOutput;
            };

            'fal-ai/piflow': {
                input: falEndpoints.PiflowInput;
                output: falEndpoints.PiflowOutput;
            };

            'fal-ai/minimax/speech-2.6-hd': {
                input: falEndpoints.MinimaxSpeech26HdInput;
                output: falEndpoints.MinimaxSpeech26HdOutput;
            };

            'fal-ai/bytedance/seed3d/image-to-3d': {
                input: falEndpoints.BytedanceSeed3dImageTo3dInput;
                output: falEndpoints.BytedanceSeed3dImageTo3dOutput;
            };

            'fal-ai/longcat-video/distilled/image-to-video/480p': {
                input: falEndpoints.LongcatVideoDistilledImageToVideo480pInput;
                output: falEndpoints.LongcatVideoDistilledImageToVideo480pOutput;
            };

            'fal-ai/minimax/hailuo-2.3/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo23StandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23StandardImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3-fast/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo23FastStandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23FastStandardImageToVideoOutput;
            };

            'fal-ai/birefnet/v2/video': {
                input: falEndpoints.BirefnetV2VideoInput;
                output: falEndpoints.BirefnetV2VideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/pro/text-to-video': {
                input: falEndpoints.MinimaxHailuo23ProTextToVideoInput;
                output: falEndpoints.MinimaxHailuo23ProTextToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/fast/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProFastImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProFastImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/standard/text-to-video': {
                input: falEndpoints.MinimaxHailuo23StandardTextToVideoInput;
                output: falEndpoints.MinimaxHailuo23StandardTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3-fast/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo23FastProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23FastProImageToVideoOutput;
            };

            'fal-ai/audio-understanding': {
                input: falEndpoints.AudioUnderstandingInput;
                output: falEndpoints.AudioUnderstandingOutput;
            };

            'fal-ai/vidu/q2/video-extension/pro': {
                input: falEndpoints.ViduQ2VideoExtensionProInput;
                output: falEndpoints.ViduQ2VideoExtensionProOutput;
            };

            'fal-ai/vidu/q2/reference-to-video': {
                input: falEndpoints.ViduQ2ReferenceToVideoInput;
                output: falEndpoints.ViduQ2ReferenceToVideoOutput;
            };

            'fal-ai/vidu/q2/image-to-video/pro': {
                input: falEndpoints.ViduQ2ImageToVideoProInput;
                output: falEndpoints.ViduQ2ImageToVideoProOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/standard/image-to-video': {
                input: falEndpoints.KlingVideoV25TurboStandardImageToVideoInput;
                output: falEndpoints.KlingVideoV25TurboStandardImageToVideoOutput;
            };

            'fal-ai/vidu/q2/text-to-video': {
                input: falEndpoints.ViduQ2TextToVideoInput;
                output: falEndpoints.ViduQ2TextToVideoOutput;
            };

            'fal-ai/gpt-image-1-mini/edit': {
                input: falEndpoints.GptImage1MiniEditInput;
                output: falEndpoints.GptImage1MiniEditOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/fast/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProFastTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProFastTextToVideoOutput;
            };

            'fal-ai/vidu/q2/image-to-video/turbo': {
                input: falEndpoints.ViduQ2ImageToVideoTurboInput;
                output: falEndpoints.ViduQ2ImageToVideoTurboOutput;
            };

            'fal-ai/qwen-3-guard': {
                input: falEndpoints.Qwen3GuardInput;
                output: falEndpoints.Qwen3GuardOutput;
            };

            'beatoven/sound-effect-generation': {
                input: falEndpoints.BeatovenSoundEffectGenerationInput;
                output: falEndpoints.BeatovenSoundEffectGenerationOutput;
            };

            'fal-ai/gpt-image-1-mini': {
                input: falEndpoints.GptImage1MiniInput;
                output: falEndpoints.GptImage1MiniOutput;
            };

            'fal-ai/meshy/v5/retexture': {
                input: falEndpoints.MeshyV5RetextureInput;
                output: falEndpoints.MeshyV5RetextureOutput;
            };

            'fal-ai/krea-wan-14b/text-to-video': {
                input: falEndpoints.KreaWan14bTextToVideoInput;
                output: falEndpoints.KreaWan14bTextToVideoOutput;
            };

            'fal-ai/reve/remix': {
                input: falEndpoints.ReveRemixInput;
                output: falEndpoints.ReveRemixOutput;
            };

            'beatoven/music-generation': {
                input: falEndpoints.BeatovenMusicGenerationInput;
                output: falEndpoints.BeatovenMusicGenerationOutput;
            };

            'fal-ai/meshy/v5/remesh': {
                input: falEndpoints.MeshyV5RemeshInput;
                output: falEndpoints.MeshyV5RemeshOutput;
            };

            'fal-ai/reve/text-to-image': {
                input: falEndpoints.ReveTextToImageInput;
                output: falEndpoints.ReveTextToImageOutput;
            };

            'fal-ai/reve/edit': {
                input: falEndpoints.ReveEditInput;
                output: falEndpoints.ReveEditOutput;
            };

            'mirelo-ai/sfx-v1.5/video-to-audio': {
                input: falEndpoints.MireloaiSfxV15VideoToAudioInput;
                output: falEndpoints.MireloaiSfxV15VideoToAudioOutput;
            };

            'fal-ai/wan-alpha': {
                input: falEndpoints.WanAlphaInput;
                output: falEndpoints.WanAlphaOutput;
            };

            'mirelo-ai/sfx-v1.5/video-to-video': {
                input: falEndpoints.MireloaiSfxV15VideoToVideoInput;
                output: falEndpoints.MireloaiSfxV15VideoToVideoOutput;
            };

            'fal-ai/krea-wan-14b/video-to-video': {
                input: falEndpoints.KreaWan14bVideoToVideoInput;
                output: falEndpoints.KreaWan14bVideoToVideoOutput;
            };

            'fal-ai/kandinsky5/text-to-video/distill': {
                input: falEndpoints.Kandinsky5TextToVideoDistillInput;
                output: falEndpoints.Kandinsky5TextToVideoDistillOutput;
            };

            'fal-ai/image2pixel': {
                input: falEndpoints.Image2pixelInput;
                output: falEndpoints.Image2pixelOutput;
            };

            'fal-ai/dreamomni2/edit': {
                input: falEndpoints.Dreamomni2EditInput;
                output: falEndpoints.Dreamomni2EditOutput;
            };

            'fal-ai/moondream3-preview/point': {
                input: falEndpoints.Moondream3PreviewPointInput;
                output: falEndpoints.Moondream3PreviewPointOutput;
            };

            'fal-ai/kling-video/video-to-audio': {
                input: falEndpoints.KlingVideoVideoToAudioInput;
                output: falEndpoints.KlingVideoVideoToAudioOutput;
            };

            'fal-ai/moondream3-preview/caption': {
                input: falEndpoints.Moondream3PreviewCaptionInput;
                output: falEndpoints.Moondream3PreviewCaptionOutput;
            };

            'fal-ai/kandinsky5/text-to-video': {
                input: falEndpoints.Kandinsky5TextToVideoInput;
                output: falEndpoints.Kandinsky5TextToVideoOutput;
            };

            'fal-ai/sora-2/video-to-video/remix': {
                input: falEndpoints.Sora2VideoToVideoRemixInput;
                output: falEndpoints.Sora2VideoToVideoRemixOutput;
            };

            'fal-ai/moondream3-preview/detect': {
                input: falEndpoints.Moondream3PreviewDetectInput;
                output: falEndpoints.Moondream3PreviewDetectOutput;
            };

            'fal-ai/moondream3-preview/query': {
                input: falEndpoints.Moondream3PreviewQueryInput;
                output: falEndpoints.Moondream3PreviewQueryOutput;
            };

            'fal-ai/veo3.1/first-last-frame-to-video': {
                input: falEndpoints.Veo31FirstLastFrameToVideoInput;
                output: falEndpoints.Veo31FirstLastFrameToVideoOutput;
            };

            'fal-ai/veo3.1/fast': {
                input: falEndpoints.Veo31FastInput;
                output: falEndpoints.Veo31FastOutput;
            };

            'fal-ai/veo3.1/fast/first-last-frame-to-video': {
                input: falEndpoints.Veo31FastFirstLastFrameToVideoInput;
                output: falEndpoints.Veo31FastFirstLastFrameToVideoOutput;
            };

            'fal-ai/hunyuan-part': {
                input: falEndpoints.HunyuanPartInput;
                output: falEndpoints.HunyuanPartOutput;
            };

            'fal-ai/veo3.1/fast/image-to-video': {
                input: falEndpoints.Veo31FastImageToVideoInput;
                output: falEndpoints.Veo31FastImageToVideoOutput;
            };

            'fal-ai/veo3.1': {
                input: falEndpoints.Veo31Input;
                output: falEndpoints.Veo31Output;
            };

            'fal-ai/veo3.1/reference-to-video': {
                input: falEndpoints.Veo31ReferenceToVideoInput;
                output: falEndpoints.Veo31ReferenceToVideoOutput;
            };

            'fal-ai/veo3.1/image-to-video': {
                input: falEndpoints.Veo31ImageToVideoInput;
                output: falEndpoints.Veo31ImageToVideoOutput;
            };

            'fal-ai/index-tts-2/text-to-speech': {
                input: falEndpoints.IndexTts2TextToSpeechInput;
                output: falEndpoints.IndexTts2TextToSpeechOutput;
            };

            'fal-ai/meshy/v6-preview/image-to-3d': {
                input: falEndpoints.MeshyV6PreviewImageTo3dInput;
                output: falEndpoints.MeshyV6PreviewImageTo3dOutput;
            };

            'fal-ai/meshy/v5/multi-image-to-3d': {
                input: falEndpoints.MeshyV5MultiImageTo3dInput;
                output: falEndpoints.MeshyV5MultiImageTo3dOutput;
            };

            'fal-ai/sora-2/image-to-video/pro': {
                input: falEndpoints.Sora2ImageToVideoProInput;
                output: falEndpoints.Sora2ImageToVideoProOutput;
            };

            'fal-ai/sora-2/text-to-video/pro': {
                input: falEndpoints.Sora2TextToVideoProInput;
                output: falEndpoints.Sora2TextToVideoProOutput;
            };

            'fal-ai/sora-2/text-to-video': {
                input: falEndpoints.Sora2TextToVideoInput;
                output: falEndpoints.Sora2TextToVideoOutput;
            };

            'fal-ai/wan-vace-apps/long-reframe': {
                input: falEndpoints.WanVaceAppsLongReframeInput;
                output: falEndpoints.WanVaceAppsLongReframeOutput;
            };

            'fal-ai/meshy/v6-preview/text-to-3d': {
                input: falEndpoints.MeshyV6PreviewTextTo3dInput;
                output: falEndpoints.MeshyV6PreviewTextTo3dOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora': {
                input: falEndpoints.QwenImageEditPlusLoraInput;
                output: falEndpoints.QwenImageEditPlusLoraOutput;
            };

            'fal-ai/ovi/image-to-video': {
                input: falEndpoints.OviImageToVideoInput;
                output: falEndpoints.OviImageToVideoOutput;
            };

            'veed/fabric-1.0/fast': {
                input: falEndpoints.VeedFabric10FastInput;
                output: falEndpoints.VeedFabric10FastOutput;
            };

            'fal-ai/sora-2/image-to-video': {
                input: falEndpoints.Sora2ImageToVideoInput;
                output: falEndpoints.Sora2ImageToVideoOutput;
            };

            'fal-ai/lucidflux': {
                input: falEndpoints.LucidfluxInput;
                output: falEndpoints.LucidfluxOutput;
            };

            'fal-ai/hunyuan-image/v3/text-to-image': {
                input: falEndpoints.HunyuanImageV3TextToImageInput;
                output: falEndpoints.HunyuanImageV3TextToImageOutput;
            };

            'fal-ai/ovi': {
                input: falEndpoints.OviInput;
                output: falEndpoints.OviOutput;
            };

            'fal-ai/qwen-image-edit/image-to-image': {
                input: falEndpoints.QwenImageEditImageToImageInput;
                output: falEndpoints.QwenImageEditImageToImageOutput;
            };

            'fal-ai/hyper3d/rodin/v2': {
                input: falEndpoints.Hyper3dRodinV2Input;
                output: falEndpoints.Hyper3dRodinV2Output;
            };

            'fal-ai/wan-25-preview/image-to-image': {
                input: falEndpoints.Wan25PreviewImageToImageInput;
                output: falEndpoints.Wan25PreviewImageToImageOutput;
            };

            'fal-ai/wan-25-preview/text-to-image': {
                input: falEndpoints.Wan25PreviewTextToImageInput;
                output: falEndpoints.Wan25PreviewTextToImageOutput;
            };

            'fal-ai/wan-25-preview/text-to-video': {
                input: falEndpoints.Wan25PreviewTextToVideoInput;
                output: falEndpoints.Wan25PreviewTextToVideoOutput;
            };

            'fal-ai/qwen-image-edit-plus': {
                input: falEndpoints.QwenImageEditPlusInput;
                output: falEndpoints.QwenImageEditPlusOutput;
            };

            'fal-ai/bytedance/omnihuman/v1.5': {
                input: falEndpoints.BytedanceOmnihumanV15Input;
                output: falEndpoints.BytedanceOmnihumanV15Output;
            };

            'fal-ai/infinitalk/video-to-video': {
                input: falEndpoints.InfinitalkVideoToVideoInput;
                output: falEndpoints.InfinitalkVideoToVideoOutput;
            };

            'fal-ai/seedvr/upscale/video': {
                input: falEndpoints.SeedvrUpscaleVideoInput;
                output: falEndpoints.SeedvrUpscaleVideoOutput;
            };

            'fal-ai/wan-vace-apps/video-edit': {
                input: falEndpoints.WanVaceAppsVideoEditInput;
                output: falEndpoints.WanVaceAppsVideoEditOutput;
            };

            'fal-ai/wan/v2.2-14b/animate/move': {
                input: falEndpoints.WanV2214bAnimateMoveInput;
                output: falEndpoints.WanV2214bAnimateMoveOutput;
            };

            'fal-ai/image-apps-v2/product-photography': {
                input: falEndpoints.ImageAppsV2ProductPhotographyInput;
                output: falEndpoints.ImageAppsV2ProductPhotographyOutput;
            };

            'fal-ai/image-apps-v2/product-holding': {
                input: falEndpoints.ImageAppsV2ProductHoldingInput;
                output: falEndpoints.ImageAppsV2ProductHoldingOutput;
            };

            'fal-ai/seedvr/upscale/image': {
                input: falEndpoints.SeedvrUpscaleImageInput;
                output: falEndpoints.SeedvrUpscaleImageOutput;
            };

            'decart/lucy-edit/pro': {
                input: falEndpoints.DecartLucyEditProInput;
                output: falEndpoints.DecartLucyEditProOutput;
            };

            'fal-ai/wan/v2.2-14b/animate/replace': {
                input: falEndpoints.WanV2214bAnimateReplaceInput;
                output: falEndpoints.WanV2214bAnimateReplaceOutput;
            };

            'veed/fabric-1.0': {
                input: falEndpoints.VeedFabric10Input;
                output: falEndpoints.VeedFabric10Output;
            };

            'fal-ai/image-apps-v2/virtual-try-on': {
                input: falEndpoints.ImageAppsV2VirtualTryOnInput;
                output: falEndpoints.ImageAppsV2VirtualTryOnOutput;
            };

            'decart/lucy-edit/dev': {
                input: falEndpoints.DecartLucyEditDevInput;
                output: falEndpoints.DecartLucyEditDevOutput;
            };

            'fal-ai/image-apps-v2/relighting': {
                input: falEndpoints.ImageAppsV2RelightingInput;
                output: falEndpoints.ImageAppsV2RelightingOutput;
            };

            'fal-ai/image-apps-v2/texture-transform': {
                input: falEndpoints.ImageAppsV2TextureTransformInput;
                output: falEndpoints.ImageAppsV2TextureTransformOutput;
            };

            'fal-ai/image-apps-v2/photo-restoration': {
                input: falEndpoints.ImageAppsV2PhotoRestorationInput;
                output: falEndpoints.ImageAppsV2PhotoRestorationOutput;
            };

            'fal-ai/image-apps-v2/photography-effects': {
                input: falEndpoints.ImageAppsV2PhotographyEffectsInput;
                output: falEndpoints.ImageAppsV2PhotographyEffectsOutput;
            };

            'fal-ai/image-apps-v2/style-transfer': {
                input: falEndpoints.ImageAppsV2StyleTransferInput;
                output: falEndpoints.ImageAppsV2StyleTransferOutput;
            };

            'fal-ai/image-apps-v2/portrait-enhance': {
                input: falEndpoints.ImageAppsV2PortraitEnhanceInput;
                output: falEndpoints.ImageAppsV2PortraitEnhanceOutput;
            };

            'fal-ai/image-apps-v2/object-removal': {
                input: falEndpoints.ImageAppsV2ObjectRemovalInput;
                output: falEndpoints.ImageAppsV2ObjectRemovalOutput;
            };

            'fal-ai/image-apps-v2/hair-change': {
                input: falEndpoints.ImageAppsV2HairChangeInput;
                output: falEndpoints.ImageAppsV2HairChangeOutput;
            };

            'fal-ai/image-apps-v2/expression-change': {
                input: falEndpoints.ImageAppsV2ExpressionChangeInput;
                output: falEndpoints.ImageAppsV2ExpressionChangeOutput;
            };

            'fal-ai/image-apps-v2/age-modify': {
                input: falEndpoints.ImageAppsV2AgeModifyInput;
                output: falEndpoints.ImageAppsV2AgeModifyOutput;
            };

            'fal-ai/image-apps-v2/city-teleport': {
                input: falEndpoints.ImageAppsV2CityTeleportInput;
                output: falEndpoints.ImageAppsV2CityTeleportOutput;
            };

            'fal-ai/image-apps-v2/makeup-application': {
                input: falEndpoints.ImageAppsV2MakeupApplicationInput;
                output: falEndpoints.ImageAppsV2MakeupApplicationOutput;
            };

            'fal-ai/image-apps-v2/perspective': {
                input: falEndpoints.ImageAppsV2PerspectiveInput;
                output: falEndpoints.ImageAppsV2PerspectiveOutput;
            };

            'fal-ai/image-apps-v2/headshot-photo': {
                input: falEndpoints.ImageAppsV2HeadshotPhotoInput;
                output: falEndpoints.ImageAppsV2HeadshotPhotoOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/reframe': {
                input: falEndpoints.Wan22VaceFunA14bReframeInput;
                output: falEndpoints.Wan22VaceFunA14bReframeOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/inpainting': {
                input: falEndpoints.Wan22VaceFunA14bInpaintingInput;
                output: falEndpoints.Wan22VaceFunA14bInpaintingOutput;
            };

            'fal-ai/qwen-image-edit/inpaint': {
                input: falEndpoints.QwenImageEditInpaintInput;
                output: falEndpoints.QwenImageEditInpaintOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/pose': {
                input: falEndpoints.Wan22VaceFunA14bPoseInput;
                output: falEndpoints.Wan22VaceFunA14bPoseOutput;
            };

            'perceptron/isaac-01': {
                input: falEndpoints.PerceptronIsaac01Input;
                output: falEndpoints.PerceptronIsaac01Output;
            };

            'fal-ai/wan-22-vace-fun-a14b/outpainting': {
                input: falEndpoints.Wan22VaceFunA14bOutpaintingInput;
                output: falEndpoints.Wan22VaceFunA14bOutpaintingOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/depth': {
                input: falEndpoints.Wan22VaceFunA14bDepthInput;
                output: falEndpoints.Wan22VaceFunA14bDepthOutput;
            };

            'fal-ai/flux/srpo/image-to-image': {
                input: falEndpoints.FluxSrpoImageToImageInput;
                output: falEndpoints.FluxSrpoImageToImageOutput;
            };

            'fal-ai/flux/srpo': {
                input: falEndpoints.FluxSrpoInput;
                output: falEndpoints.FluxSrpoOutput;
            };

            'fal-ai/flux-1/srpo/image-to-image': {
                input: falEndpoints.Flux1SrpoImageToImageInput;
                output: falEndpoints.Flux1SrpoImageToImageOutput;
            };

            'fal-ai/flux-1/srpo': {
                input: falEndpoints.Flux1SrpoInput;
                output: falEndpoints.Flux1SrpoOutput;
            };

            'fal-ai/pshuman': {
                input: falEndpoints.PshumanInput;
                output: falEndpoints.PshumanOutput;
            };

            'fal-ai/kling-video/v1/tts': {
                input: falEndpoints.KlingVideoV1TtsInput;
                output: falEndpoints.KlingVideoV1TtsOutput;
            };

            'fal-ai/kling-video/v1/pro/ai-avatar': {
                input: falEndpoints.KlingVideoV1ProAiAvatarInput;
                output: falEndpoints.KlingVideoV1ProAiAvatarOutput;
            };

            'fal-ai/kling-video/v1/standard/ai-avatar': {
                input: falEndpoints.KlingVideoV1StandardAiAvatarInput;
                output: falEndpoints.KlingVideoV1StandardAiAvatarOutput;
            };

            'decart/lucy-14b/image-to-video': {
                input: falEndpoints.DecartLucy14bImageToVideoInput;
                output: falEndpoints.DecartLucy14bImageToVideoOutput;
            };

            'fal-ai/stable-audio-25/audio-to-audio': {
                input: falEndpoints.StableAudio25AudioToAudioInput;
                output: falEndpoints.StableAudio25AudioToAudioOutput;
            };

            'fal-ai/minimax-music/v1.5': {
                input: falEndpoints.MinimaxMusicV15Input;
                output: falEndpoints.MinimaxMusicV15Output;
            };

            'fal-ai/qwen-image-edit-lora': {
                input: falEndpoints.QwenImageEditLoraInput;
                output: falEndpoints.QwenImageEditLoraOutput;
            };

            'fal-ai/stable-audio-25/text-to-audio': {
                input: falEndpoints.StableAudio25TextToAudioInput;
                output: falEndpoints.StableAudio25TextToAudioOutput;
            };

            'fal-ai/hunyuan-image/v2.1/text-to-image': {
                input: falEndpoints.HunyuanImageV21TextToImageInput;
                output: falEndpoints.HunyuanImageV21TextToImageOutput;
            };

            'fal-ai/stable-audio-25/inpaint': {
                input: falEndpoints.StableAudio25InpaintInput;
                output: falEndpoints.StableAudio25InpaintOutput;
            };

            'fal-ai/elevenlabs/text-to-dialogue/eleven-v3': {
                input: falEndpoints.ElevenlabsTextToDialogueElevenV3Input;
                output: falEndpoints.ElevenlabsTextToDialogueElevenV3Output;
            };

            'fal-ai/bytedance/seedream/v4/edit': {
                input: falEndpoints.BytedanceSeedreamV4EditInput;
                output: falEndpoints.BytedanceSeedreamV4EditOutput;
            };

            'fal-ai/hunyuan-video-foley': {
                input: falEndpoints.HunyuanVideoFoleyInput;
                output: falEndpoints.HunyuanVideoFoleyOutput;
            };

            'fal-ai/vidu/reference-to-image': {
                input: falEndpoints.ViduReferenceToImageInput;
                output: falEndpoints.ViduReferenceToImageOutput;
            };

            'fal-ai/bytedance/seedream/v4/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV4TextToImageInput;
                output: falEndpoints.BytedanceSeedreamV4TextToImageOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-image': {
                input: falEndpoints.WanV22A14bImageToImageInput;
                output: falEndpoints.WanV22A14bImageToImageOutput;
            };

            'fal-ai/chatterbox/text-to-speech/multilingual': {
                input: falEndpoints.ChatterboxTextToSpeechMultilingualInput;
                output: falEndpoints.ChatterboxTextToSpeechMultilingualOutput;
            };

            'fal-ai/sync-lipsync/v2/pro': {
                input: falEndpoints.SyncLipsyncV2ProInput;
                output: falEndpoints.SyncLipsyncV2ProOutput;
            };

            'fal-ai/elevenlabs/sound-effects/v2': {
                input: falEndpoints.ElevenlabsSoundEffectsV2Input;
                output: falEndpoints.ElevenlabsSoundEffectsV2Output;
            };

            'argil/avatars/text-to-video': {
                input: falEndpoints.ArgilAvatarsTextToVideoInput;
                output: falEndpoints.ArgilAvatarsTextToVideoOutput;
            };

            'fal-ai/uso': {
                input: falEndpoints.UsoInput;
                output: falEndpoints.UsoOutput;
            };

            'fal-ai/decart/lucy-5b/image-to-video': {
                input: falEndpoints.DecartLucy5bImageToVideoInput;
                output: falEndpoints.DecartLucy5bImageToVideoOutput;
            };

            'fal-ai/wan-fun-control': {
                input: falEndpoints.WanFunControlInput;
                output: falEndpoints.WanFunControlOutput;
            };

            'fal-ai/vibevoice/7b': {
                input: falEndpoints.Vibevoice7bInput;
                output: falEndpoints.Vibevoice7bOutput;
            };

            'fal-ai/bytedance/seedance/v1/lite/reference-to-video': {
                input: falEndpoints.BytedanceSeedanceV1LiteReferenceToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1LiteReferenceToVideoOutput;
            };

            'argil/avatars/audio-to-video': {
                input: falEndpoints.ArgilAvatarsAudioToVideoInput;
                output: falEndpoints.ArgilAvatarsAudioToVideoOutput;
            };

            'fal-ai/wan/v2.2-14b/speech-to-video': {
                input: falEndpoints.WanV2214bSpeechToVideoInput;
                output: falEndpoints.WanV2214bSpeechToVideoOutput;
            };

            'fal-ai/gemini-25-flash-image/edit': {
                input: falEndpoints.Gemini25FlashImageEditInput;
                output: falEndpoints.Gemini25FlashImageEditOutput;
            };

            'fal-ai/vibevoice': {
                input: falEndpoints.VibevoiceInput;
                output: falEndpoints.VibevoiceOutput;
            };

            'fal-ai/qwen-image/image-to-image': {
                input: falEndpoints.QwenImageImageToImageInput;
                output: falEndpoints.QwenImageImageToImageOutput;
            };

            'bria/video/increase-resolution': {
                input: falEndpoints.BriaVideoIncreaseResolutionInput;
                output: falEndpoints.BriaVideoIncreaseResolutionOutput;
            };

            'sonauto/v2/inpaint': {
                input: falEndpoints.SonautoV2InpaintInput;
                output: falEndpoints.SonautoV2InpaintOutput;
            };

            'fal-ai/gemini-25-flash-image': {
                input: falEndpoints.Gemini25FlashImageInput;
                output: falEndpoints.Gemini25FlashImageOutput;
            };

            'sonauto/v2/extend': {
                input: falEndpoints.SonautoV2ExtendInput;
                output: falEndpoints.SonautoV2ExtendOutput;
            };

            'sonauto/v2/text-to-music': {
                input: falEndpoints.SonautoV2TextToMusicInput;
                output: falEndpoints.SonautoV2TextToMusicOutput;
            };

            'fal-ai/pixverse/v5/transition': {
                input: falEndpoints.PixverseV5TransitionInput;
                output: falEndpoints.PixverseV5TransitionOutput;
            };

            'fal-ai/pixverse/v5/effects': {
                input: falEndpoints.PixverseV5EffectsInput;
                output: falEndpoints.PixverseV5EffectsOutput;
            };

            'fal-ai/pixverse/v5/image-to-video': {
                input: falEndpoints.PixverseV5ImageToVideoInput;
                output: falEndpoints.PixverseV5ImageToVideoOutput;
            };

            'fal-ai/infinitalk/single-text': {
                input: falEndpoints.InfinitalkSingleTextInput;
                output: falEndpoints.InfinitalkSingleTextOutput;
            };

            'fal-ai/pixverse/v5/text-to-video': {
                input: falEndpoints.PixverseV5TextToVideoInput;
                output: falEndpoints.PixverseV5TextToVideoOutput;
            };

            'fal-ai/infinitalk': {
                input: falEndpoints.InfinitalkInput;
                output: falEndpoints.InfinitalkOutput;
            };

            'fal-ai/elevenlabs/tts/eleven-v3': {
                input: falEndpoints.ElevenlabsTtsElevenV3Input;
                output: falEndpoints.ElevenlabsTtsElevenV3Output;
            };

            'fal-ai/nano-banana/edit': {
                input: falEndpoints.NanoBananaEditInput;
                output: falEndpoints.NanoBananaEditOutput;
            };

            'fal-ai/nextstep-1': {
                input: falEndpoints.Nextstep1Input;
                output: falEndpoints.Nextstep1Output;
            };

            'mirelo-ai/sfx-v1/video-to-video': {
                input: falEndpoints.MireloaiSfxV1VideoToVideoInput;
                output: falEndpoints.MireloaiSfxV1VideoToVideoOutput;
            };

            'fal-ai/stable-avatar': {
                input: falEndpoints.StableAvatarInput;
                output: falEndpoints.StableAvatarOutput;
            };

            'mirelo-ai/sfx-v1/video-to-audio': {
                input: falEndpoints.MireloaiSfxV1VideoToAudioInput;
                output: falEndpoints.MireloaiSfxV1VideoToAudioOutput;
            };

            'bria/reimagine/3.2': {
                input: falEndpoints.BriaReimagine32Input;
                output: falEndpoints.BriaReimagine32Output;
            };

            'fal-ai/nano-banana': {
                input: falEndpoints.NanoBananaInput;
                output: falEndpoints.NanoBananaOutput;
            };

            'fal-ai/qwen-image-edit': {
                input: falEndpoints.QwenImageEditInput;
                output: falEndpoints.QwenImageEditOutput;
            };

            'moonvalley/marey/motion-transfer': {
                input: falEndpoints.MoonvalleyMareyMotionTransferInput;
                output: falEndpoints.MoonvalleyMareyMotionTransferOutput;
            };

            'moonvalley/marey/pose-transfer': {
                input: falEndpoints.MoonvalleyMareyPoseTransferInput;
                output: falEndpoints.MoonvalleyMareyPoseTransferOutput;
            };

            'fal-ai/qwen-image-trainer': {
                input: falEndpoints.QwenImageTrainerInput;
                output: falEndpoints.QwenImageTrainerOutput;
            };

            'fal-ai/echomimic-v3': {
                input: falEndpoints.EchomimicV3Input;
                output: falEndpoints.EchomimicV3Output;
            };

            'moonvalley/marey/i2v': {
                input: falEndpoints.MoonvalleyMareyI2vInput;
                output: falEndpoints.MoonvalleyMareyI2vOutput;
            };

            'moonvalley/marey/t2v': {
                input: falEndpoints.MoonvalleyMareyT2vInput;
                output: falEndpoints.MoonvalleyMareyT2vOutput;
            };

            'fal-ai/ffmpeg-api/merge-videos': {
                input: falEndpoints.FfmpegApiMergeVideosInput;
                output: falEndpoints.FfmpegApiMergeVideosOutput;
            };

            'fal-ai/bytedance/video-stylize': {
                input: falEndpoints.BytedanceVideoStylizeInput;
                output: falEndpoints.BytedanceVideoStylizeOutput;
            };

            'fal-ai/minimax/preview/speech-2.5-turbo': {
                input: falEndpoints.MinimaxPreviewSpeech25TurboInput;
                output: falEndpoints.MinimaxPreviewSpeech25TurboOutput;
            };

            'fal-ai/ideogram/character/edit': {
                input: falEndpoints.IdeogramCharacterEditInput;
                output: falEndpoints.IdeogramCharacterEditOutput;
            };

            'fal-ai/ideogram/character': {
                input: falEndpoints.IdeogramCharacterInput;
                output: falEndpoints.IdeogramCharacterOutput;
            };

            'fal-ai/ideogram/character/remix': {
                input: falEndpoints.IdeogramCharacterRemixInput;
                output: falEndpoints.IdeogramCharacterRemixOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video/lora': {
                input: falEndpoints.WanV22A14bTextToVideoLoraInput;
                output: falEndpoints.WanV22A14bTextToVideoLoraOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video/lora': {
                input: falEndpoints.WanV22A14bImageToVideoLoraInput;
                output: falEndpoints.WanV22A14bImageToVideoLoraOutput;
            };

            'fal-ai/minimax/preview/speech-2.5-hd': {
                input: falEndpoints.MinimaxPreviewSpeech25HdInput;
                output: falEndpoints.MinimaxPreviewSpeech25HdOutput;
            };

            'fal-ai/wan-22-image-trainer': {
                input: falEndpoints.Wan22ImageTrainerInput;
                output: falEndpoints.Wan22ImageTrainerOutput;
            };

            'fal-ai/minimax/hailuo-02-fast/image-to-video': {
                input: falEndpoints.MinimaxHailuo02FastImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02FastImageToVideoOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video/fast-wan': {
                input: falEndpoints.WanV225bTextToVideoFastWanInput;
                output: falEndpoints.WanV225bTextToVideoFastWanOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-image': {
                input: falEndpoints.WanV225bTextToImageInput;
                output: falEndpoints.WanV225bTextToImageOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video/distill': {
                input: falEndpoints.WanV225bTextToVideoDistillInput;
                output: falEndpoints.WanV225bTextToVideoDistillOutput;
            };

            'fal-ai/qwen-image': {
                input: falEndpoints.QwenImageInput;
                output: falEndpoints.QwenImageOutput;
            };

            'fal-ai/bytedance/dreamina/v3.1/text-to-image': {
                input: falEndpoints.BytedanceDreaminaV31TextToImageInput;
                output: falEndpoints.BytedanceDreaminaV31TextToImageOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-image/lora': {
                input: falEndpoints.WanV22A14bTextToImageLoraInput;
                output: falEndpoints.WanV22A14bTextToImageLoraOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-image': {
                input: falEndpoints.WanV22A14bTextToImageInput;
                output: falEndpoints.WanV22A14bTextToImageOutput;
            };

            'fal-ai/flux-krea-lora/stream': {
                input: falEndpoints.FluxKreaLoraStreamInput;
                output: falEndpoints.FluxKreaLoraStreamOutput;
            };

            'fal-ai/wan/v2.2-a14b/video-to-video': {
                input: falEndpoints.WanV22A14bVideoToVideoInput;
                output: falEndpoints.WanV22A14bVideoToVideoOutput;
            };

            'fal-ai/flux-krea-lora/inpainting': {
                input: falEndpoints.FluxKreaLoraInpaintingInput;
                output: falEndpoints.FluxKreaLoraInpaintingOutput;
            };

            'fal-ai/flux-krea-lora': {
                input: falEndpoints.FluxKreaLoraInput;
                output: falEndpoints.FluxKreaLoraOutput;
            };

            'fal-ai/veo3/image-to-video': {
                input: falEndpoints.Veo3ImageToVideoInput;
                output: falEndpoints.Veo3ImageToVideoOutput;
            };

            'fal-ai/flux-krea-lora/image-to-image': {
                input: falEndpoints.FluxKreaLoraImageToImageInput;
                output: falEndpoints.FluxKreaLoraImageToImageOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video/turbo': {
                input: falEndpoints.WanV22A14bTextToVideoTurboInput;
                output: falEndpoints.WanV22A14bTextToVideoTurboOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video/turbo': {
                input: falEndpoints.WanV22A14bImageToVideoTurboInput;
                output: falEndpoints.WanV22A14bImageToVideoTurboOutput;
            };

            'fal-ai/flux/krea/redux': {
                input: falEndpoints.FluxKreaReduxInput;
                output: falEndpoints.FluxKreaReduxOutput;
            };

            'fal-ai/flux-1/krea': {
                input: falEndpoints.Flux1KreaInput;
                output: falEndpoints.Flux1KreaOutput;
            };

            'fal-ai/flux/krea/image-to-image': {
                input: falEndpoints.FluxKreaImageToImageInput;
                output: falEndpoints.FluxKreaImageToImageOutput;
            };

            'fal-ai/flux-kontext-lora/inpaint': {
                input: falEndpoints.FluxKontextLoraInpaintInput;
                output: falEndpoints.FluxKontextLoraInpaintOutput;
            };

            'fal-ai/flux/krea': {
                input: falEndpoints.FluxKreaInput;
                output: falEndpoints.FluxKreaOutput;
            };

            'fal-ai/flux-1/krea/redux': {
                input: falEndpoints.Flux1KreaReduxInput;
                output: falEndpoints.Flux1KreaReduxOutput;
            };

            'fal-ai/wan/v2.2-5b/image-to-video': {
                input: falEndpoints.WanV225bImageToVideoInput;
                output: falEndpoints.WanV225bImageToVideoOutput;
            };

            'fal-ai/flux-1/krea/image-to-image': {
                input: falEndpoints.Flux1KreaImageToImageInput;
                output: falEndpoints.Flux1KreaImageToImageOutput;
            };

            'fal-ai/hunyuan_world': {
                input: falEndpoints.Hunyuan_worldInput;
                output: falEndpoints.Hunyuan_worldOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video': {
                input: falEndpoints.WanV225bTextToVideoInput;
                output: falEndpoints.WanV225bTextToVideoOutput;
            };

            'fal-ai/x-ailab/nsfw': {
                input: falEndpoints.XAilabNsfwInput;
                output: falEndpoints.XAilabNsfwOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video': {
                input: falEndpoints.WanV22A14bTextToVideoInput;
                output: falEndpoints.WanV22A14bTextToVideoOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video': {
                input: falEndpoints.WanV22A14bImageToVideoInput;
                output: falEndpoints.WanV22A14bImageToVideoOutput;
            };

            'fal-ai/hunyuan_world/image-to-world': {
                input: falEndpoints.Hunyuan_worldImageToWorldInput;
                output: falEndpoints.Hunyuan_worldImageToWorldOutput;
            };

            'fal-ai/sky-raccoon': {
                input: falEndpoints.SkyRaccoonInput;
                output: falEndpoints.SkyRaccoonOutput;
            };

            'fal-ai/bytedance/omnihuman': {
                input: falEndpoints.BytedanceOmnihumanInput;
                output: falEndpoints.BytedanceOmnihumanOutput;
            };

            'fal-ai/hidream-e1-1': {
                input: falEndpoints.HidreamE11Input;
                output: falEndpoints.HidreamE11Output;
            };

            'fal-ai/rife/video': {
                input: falEndpoints.RifeVideoInput;
                output: falEndpoints.RifeVideoOutput;
            };

            'fal-ai/rife': {
                input: falEndpoints.RifeInput;
                output: falEndpoints.RifeOutput;
            };

            'fal-ai/film': {
                input: falEndpoints.FilmInput;
                output: falEndpoints.FilmOutput;
            };

            'fal-ai/film/video': {
                input: falEndpoints.FilmVideoInput;
                output: falEndpoints.FilmVideoOutput;
            };

            'fal-ai/minimax/voice-design': {
                input: falEndpoints.MinimaxVoiceDesignInput;
                output: falEndpoints.MinimaxVoiceDesignOutput;
            };

            'fal-ai/image-editing/retouch': {
                input: falEndpoints.ImageEditingRetouchInput;
                output: falEndpoints.ImageEditingRetouchOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/extend': {
                input: falEndpoints.Ltxv13b098DistilledExtendInput;
                output: falEndpoints.Ltxv13b098DistilledExtendOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/image-to-video': {
                input: falEndpoints.Ltxv13b098DistilledImageToVideoInput;
                output: falEndpoints.Ltxv13b098DistilledImageToVideoOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/multiconditioning': {
                input: falEndpoints.Ltxv13b098DistilledMulticonditioningInput;
                output: falEndpoints.Ltxv13b098DistilledMulticonditioningOutput;
            };

            'fal-ai/veo3/fast/image-to-video': {
                input: falEndpoints.Veo3FastImageToVideoInput;
                output: falEndpoints.Veo3FastImageToVideoOutput;
            };

            'fal-ai/luma-dream-machine/ray-2-flash/modify': {
                input: falEndpoints.LumaDreamMachineRay2FlashModifyInput;
                output: falEndpoints.LumaDreamMachineRay2FlashModifyOutput;
            };

            'fal-ai/vidu/q1/reference-to-video': {
                input: falEndpoints.ViduQ1ReferenceToVideoInput;
                output: falEndpoints.ViduQ1ReferenceToVideoOutput;
            };

            'fal-ai/ltxv-13b-098-distilled': {
                input: falEndpoints.Ltxv13b098DistilledInput;
                output: falEndpoints.Ltxv13b098DistilledOutput;
            };

            'fal-ai/calligrapher': {
                input: falEndpoints.CalligrapherInput;
                output: falEndpoints.CalligrapherOutput;
            };

            'fal-ai/ffmpeg-api/loudnorm': {
                input: falEndpoints.FfmpegApiLoudnormInput;
                output: falEndpoints.FfmpegApiLoudnormOutput;
            };

            'fal-ai/bria/reimagine': {
                input: falEndpoints.BriaReimagineInput;
                output: falEndpoints.BriaReimagineOutput;
            };

            'fal-ai/pixverse/sound-effects': {
                input: falEndpoints.PixverseSoundEffectsInput;
                output: falEndpoints.PixverseSoundEffectsOutput;
            };

            'fal-ai/thinksound/audio': {
                input: falEndpoints.ThinksoundAudioInput;
                output: falEndpoints.ThinksoundAudioOutput;
            };

            'fal-ai/image-editing/realism': {
                input: falEndpoints.ImageEditingRealismInput;
                output: falEndpoints.ImageEditingRealismOutput;
            };

            'fal-ai/post-processing/vignette': {
                input: falEndpoints.PostProcessingVignetteInput;
                output: falEndpoints.PostProcessingVignetteOutput;
            };

            'fal-ai/thinksound': {
                input: falEndpoints.ThinksoundInput;
                output: falEndpoints.ThinksoundOutput;
            };

            'fal-ai/post-processing/solarize': {
                input: falEndpoints.PostProcessingSolarizeInput;
                output: falEndpoints.PostProcessingSolarizeOutput;
            };

            'fal-ai/post-processing/sharpen': {
                input: falEndpoints.PostProcessingSharpenInput;
                output: falEndpoints.PostProcessingSharpenOutput;
            };

            'fal-ai/post-processing/grain': {
                input: falEndpoints.PostProcessingGrainInput;
                output: falEndpoints.PostProcessingGrainOutput;
            };

            'fal-ai/post-processing/dissolve': {
                input: falEndpoints.PostProcessingDissolveInput;
                output: falEndpoints.PostProcessingDissolveOutput;
            };

            'fal-ai/post-processing/color-correction': {
                input: falEndpoints.PostProcessingColorCorrectionInput;
                output: falEndpoints.PostProcessingColorCorrectionOutput;
            };

            'fal-ai/post-processing/color-tint': {
                input: falEndpoints.PostProcessingColorTintInput;
                output: falEndpoints.PostProcessingColorTintOutput;
            };

            'fal-ai/post-processing/chromatic-aberration': {
                input: falEndpoints.PostProcessingChromaticAberrationInput;
                output: falEndpoints.PostProcessingChromaticAberrationOutput;
            };

            'fal-ai/post-processing/parabolize': {
                input: falEndpoints.PostProcessingParabolizeInput;
                output: falEndpoints.PostProcessingParabolizeOutput;
            };

            'fal-ai/post-processing/dodge-burn': {
                input: falEndpoints.PostProcessingDodgeBurnInput;
                output: falEndpoints.PostProcessingDodgeBurnOutput;
            };

            'fal-ai/post-processing/desaturate': {
                input: falEndpoints.PostProcessingDesaturateInput;
                output: falEndpoints.PostProcessingDesaturateOutput;
            };

            'fal-ai/pixverse/extend/fast': {
                input: falEndpoints.PixverseExtendFastInput;
                output: falEndpoints.PixverseExtendFastOutput;
            };

            'fal-ai/post-processing/blur': {
                input: falEndpoints.PostProcessingBlurInput;
                output: falEndpoints.PostProcessingBlurOutput;
            };

            'fal-ai/luma-dream-machine/ray-2/modify': {
                input: falEndpoints.LumaDreamMachineRay2ModifyInput;
                output: falEndpoints.LumaDreamMachineRay2ModifyOutput;
            };

            'fal-ai/bytedance/seededit/v3/edit-image': {
                input: falEndpoints.BytedanceSeededitV3EditImageInput;
                output: falEndpoints.BytedanceSeededitV3EditImageOutput;
            };

            'fal-ai/image-editing/youtube-thumbnails': {
                input: falEndpoints.ImageEditingYoutubeThumbnailsInput;
                output: falEndpoints.ImageEditingYoutubeThumbnailsOutput;
            };

            'fal-ai/topaz/upscale/image': {
                input: falEndpoints.TopazUpscaleImageInput;
                output: falEndpoints.TopazUpscaleImageOutput;
            };

            'fal-ai/pixverse/lipsync': {
                input: falEndpoints.PixverseLipsyncInput;
                output: falEndpoints.PixverseLipsyncOutput;
            };

            'fal-ai/pixverse/extend': {
                input: falEndpoints.PixverseExtendInput;
                output: falEndpoints.PixverseExtendOutput;
            };

            'fal-ai/flux-kontext-lora/text-to-image': {
                input: falEndpoints.FluxKontextLoraTextToImageInput;
                output: falEndpoints.FluxKontextLoraTextToImageOutput;
            };

            'fal-ai/omnigen-v2': {
                input: falEndpoints.OmnigenV2Input;
                output: falEndpoints.OmnigenV2Output;
            };

            'fal-ai/flux-kontext-lora': {
                input: falEndpoints.FluxKontextLoraInput;
                output: falEndpoints.FluxKontextLoraOutput;
            };

            'fal-ai/flux-kontext-trainer': {
                input: falEndpoints.FluxKontextTrainerInput;
                output: falEndpoints.FluxKontextTrainerOutput;
            };

            'fal-ai/image-editing/broccoli-haircut': {
                input: falEndpoints.ImageEditingBroccoliHaircutInput;
                output: falEndpoints.ImageEditingBroccoliHaircutOutput;
            };

            'fal-ai/image-editing/plushie-style': {
                input: falEndpoints.ImageEditingPlushieStyleInput;
                output: falEndpoints.ImageEditingPlushieStyleOutput;
            };

            'fal-ai/fashn/tryon/v1.6': {
                input: falEndpoints.FashnTryonV16Input;
                output: falEndpoints.FashnTryonV16Output;
            };

            'fal-ai/image-editing/wojak-style': {
                input: falEndpoints.ImageEditingWojakStyleInput;
                output: falEndpoints.ImageEditingWojakStyleOutput;
            };

            'fal-ai/ai-avatar': {
                input: falEndpoints.AiAvatarInput;
                output: falEndpoints.AiAvatarOutput;
            };

            'fal-ai/ai-avatar/multi': {
                input: falEndpoints.AiAvatarMultiInput;
                output: falEndpoints.AiAvatarMultiOutput;
            };

            'fal-ai/ai-avatar/single-text': {
                input: falEndpoints.AiAvatarSingleTextInput;
                output: falEndpoints.AiAvatarSingleTextOutput;
            };

            'fal-ai/wan-vace-14b/reframe': {
                input: falEndpoints.WanVace14bReframeInput;
                output: falEndpoints.WanVace14bReframeOutput;
            };

            'fal-ai/ai-avatar/multi-text': {
                input: falEndpoints.AiAvatarMultiTextInput;
                output: falEndpoints.AiAvatarMultiTextOutput;
            };

            'fal-ai/video-understanding': {
                input: falEndpoints.VideoUnderstandingInput;
                output: falEndpoints.VideoUnderstandingOutput;
            };

            'fal-ai/wan-vace-14b/outpainting': {
                input: falEndpoints.WanVace14bOutpaintingInput;
                output: falEndpoints.WanVace14bOutpaintingOutput;
            };

            'fal-ai/wan-vace-14b/inpainting': {
                input: falEndpoints.WanVace14bInpaintingInput;
                output: falEndpoints.WanVace14bInpaintingOutput;
            };

            'fal-ai/wan-vace-14b/pose': {
                input: falEndpoints.WanVace14bPoseInput;
                output: falEndpoints.WanVace14bPoseOutput;
            };

            'fal-ai/wan-vace-14b/depth': {
                input: falEndpoints.WanVace14bDepthInput;
                output: falEndpoints.WanVace14bDepthOutput;
            };

            'fal-ai/chain-of-zoom': {
                input: falEndpoints.ChainOfZoomInput;
                output: falEndpoints.ChainOfZoomOutput;
            };

            'tripo3d/tripo/v2.5/multiview-to-3d': {
                input: falEndpoints.Tripo3dTripoV25MultiviewTo3dInput;
                output: falEndpoints.Tripo3dTripoV25MultiviewTo3dOutput;
            };

            'fal-ai/minimax/hailuo-02/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo02ProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02ProImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/pro/text-to-video': {
                input: falEndpoints.MinimaxHailuo02ProTextToVideoInput;
                output: falEndpoints.MinimaxHailuo02ProTextToVideoOutput;
            };

            'fal-ai/pasd': {
                input: falEndpoints.PasdInput;
                output: falEndpoints.PasdOutput;
            };

            'fal-ai/object-removal/bbox': {
                input: falEndpoints.ObjectRemovalBboxInput;
                output: falEndpoints.ObjectRemovalBboxOutput;
            };

            'fal-ai/object-removal': {
                input: falEndpoints.ObjectRemovalInput;
                output: falEndpoints.ObjectRemovalOutput;
            };

            'fal-ai/dwpose/video': {
                input: falEndpoints.DwposeVideoInput;
                output: falEndpoints.DwposeVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/lite/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV1LiteTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1LiteTextToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/lite/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV1LiteImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1LiteImageToVideoOutput;
            };

            'fal-ai/object-removal/mask': {
                input: falEndpoints.ObjectRemovalMaskInput;
                output: falEndpoints.ObjectRemovalMaskOutput;
            };

            'fal-ai/recraft/vectorize': {
                input: falEndpoints.RecraftVectorizeInput;
                output: falEndpoints.RecraftVectorizeOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProTextToVideoOutput;
            };

            'fal-ai/hunyuan3d-v21': {
                input: falEndpoints.Hunyuan3dV21Input;
                output: falEndpoints.Hunyuan3dV21Output;
            };

            'fal-ai/wan-trainer/t2v-14b': {
                input: falEndpoints.WanTrainerT2v14bInput;
                output: falEndpoints.WanTrainerT2v14bOutput;
            };

            'fal-ai/wan-trainer/t2v': {
                input: falEndpoints.WanTrainerT2vInput;
                output: falEndpoints.WanTrainerT2vOutput;
            };

            'fal-ai/wan-trainer/flf2v-720p': {
                input: falEndpoints.WanTrainerFlf2v720pInput;
                output: falEndpoints.WanTrainerFlf2v720pOutput;
            };

            'fal-ai/ffmpeg-api/extract-frame': {
                input: falEndpoints.FfmpegApiExtractFrameInput;
                output: falEndpoints.FfmpegApiExtractFrameOutput;
            };

            'fal-ai/wan-trainer/i2v-720p': {
                input: falEndpoints.WanTrainerI2v720pInput;
                output: falEndpoints.WanTrainerI2v720pOutput;
            };

            'fal-ai/luma-photon/flash/modify': {
                input: falEndpoints.LumaPhotonFlashModifyInput;
                output: falEndpoints.LumaPhotonFlashModifyOutput;
            };

            'fal-ai/bytedance/seedream/v3/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV3TextToImageInput;
                output: falEndpoints.BytedanceSeedreamV3TextToImageOutput;
            };

            'fal-ai/ffmpeg-api/merge-audio-video': {
                input: falEndpoints.FfmpegApiMergeAudioVideoInput;
                output: falEndpoints.FfmpegApiMergeAudioVideoOutput;
            };

            'fal-ai/image-editing/reframe': {
                input: falEndpoints.ImageEditingReframeInput;
                output: falEndpoints.ImageEditingReframeOutput;
            };

            'fal-ai/image-editing/baby-version': {
                input: falEndpoints.ImageEditingBabyVersionInput;
                output: falEndpoints.ImageEditingBabyVersionOutput;
            };

            'fal-ai/luma-dream-machine/ray-2-flash/reframe': {
                input: falEndpoints.LumaDreamMachineRay2FlashReframeInput;
                output: falEndpoints.LumaDreamMachineRay2FlashReframeOutput;
            };

            'fal-ai/luma-photon/flash/reframe': {
                input: falEndpoints.LumaPhotonFlashReframeInput;
                output: falEndpoints.LumaPhotonFlashReframeOutput;
            };

            'fal-ai/luma-dream-machine/ray-2/reframe': {
                input: falEndpoints.LumaDreamMachineRay2ReframeInput;
                output: falEndpoints.LumaDreamMachineRay2ReframeOutput;
            };

            'fal-ai/luma-photon/reframe': {
                input: falEndpoints.LumaPhotonReframeInput;
                output: falEndpoints.LumaPhotonReframeOutput;
            };

            'fal-ai/luma-photon/modify': {
                input: falEndpoints.LumaPhotonModifyInput;
                output: falEndpoints.LumaPhotonModifyOutput;
            };

            'fal-ai/wan-vace-1-3b': {
                input: falEndpoints.WanVace13bInput;
                output: falEndpoints.WanVace13bOutput;
            };

            'resemble-ai/chatterboxhd/text-to-speech': {
                input: falEndpoints.ResembleaiChatterboxhdTextToSpeechInput;
                output: falEndpoints.ResembleaiChatterboxhdTextToSpeechOutput;
            };

            'resemble-ai/chatterboxhd/speech-to-speech': {
                input: falEndpoints.ResembleaiChatterboxhdSpeechToSpeechInput;
                output: falEndpoints.ResembleaiChatterboxhdSpeechToSpeechOutput;
            };

            'fal-ai/image-editing/text-removal': {
                input: falEndpoints.ImageEditingTextRemovalInput;
                output: falEndpoints.ImageEditingTextRemovalOutput;
            };

            'fal-ai/flux-1/schnell/redux': {
                input: falEndpoints.Flux1SchnellReduxInput;
                output: falEndpoints.Flux1SchnellReduxOutput;
            };

            'fal-ai/flux-1/dev': {
                input: falEndpoints.Flux1DevInput;
                output: falEndpoints.Flux1DevOutput;
            };

            'fal-ai/flux-1/dev/redux': {
                input: falEndpoints.Flux1DevReduxInput;
                output: falEndpoints.Flux1DevReduxOutput;
            };

            'fal-ai/flux-1/schnell': {
                input: falEndpoints.Flux1SchnellInput;
                output: falEndpoints.Flux1SchnellOutput;
            };

            'fal-ai/flux-1/dev/image-to-image': {
                input: falEndpoints.Flux1DevImageToImageInput;
                output: falEndpoints.Flux1DevImageToImageOutput;
            };

            'fal-ai/chatterbox/speech-to-speech': {
                input: falEndpoints.ChatterboxSpeechToSpeechInput;
                output: falEndpoints.ChatterboxSpeechToSpeechOutput;
            };

            'fal-ai/image-editing/photo-restoration': {
                input: falEndpoints.ImageEditingPhotoRestorationInput;
                output: falEndpoints.ImageEditingPhotoRestorationOutput;
            };

            'fal-ai/chatterbox/text-to-speech': {
                input: falEndpoints.ChatterboxTextToSpeechInput;
                output: falEndpoints.ChatterboxTextToSpeechOutput;
            };

            'fal-ai/image-editing/style-transfer': {
                input: falEndpoints.ImageEditingStyleTransferInput;
                output: falEndpoints.ImageEditingStyleTransferOutput;
            };

            'fal-ai/image-editing/weather-effect': {
                input: falEndpoints.ImageEditingWeatherEffectInput;
                output: falEndpoints.ImageEditingWeatherEffectOutput;
            };

            'fal-ai/image-editing/time-of-day': {
                input: falEndpoints.ImageEditingTimeOfDayInput;
                output: falEndpoints.ImageEditingTimeOfDayOutput;
            };

            'fal-ai/image-editing/scene-composition': {
                input: falEndpoints.ImageEditingSceneCompositionInput;
                output: falEndpoints.ImageEditingSceneCompositionOutput;
            };

            'fal-ai/image-editing/professional-photo': {
                input: falEndpoints.ImageEditingProfessionalPhotoInput;
                output: falEndpoints.ImageEditingProfessionalPhotoOutput;
            };

            'fal-ai/image-editing/hair-change': {
                input: falEndpoints.ImageEditingHairChangeInput;
                output: falEndpoints.ImageEditingHairChangeOutput;
            };

            'fal-ai/image-editing/background-change': {
                input: falEndpoints.ImageEditingBackgroundChangeInput;
                output: falEndpoints.ImageEditingBackgroundChangeOutput;
            };

            'fal-ai/image-editing/expression-change': {
                input: falEndpoints.ImageEditingExpressionChangeInput;
                output: falEndpoints.ImageEditingExpressionChangeOutput;
            };

            'fal-ai/image-editing/cartoonify': {
                input: falEndpoints.ImageEditingCartoonifyInput;
                output: falEndpoints.ImageEditingCartoonifyOutput;
            };

            'fal-ai/image-editing/age-progression': {
                input: falEndpoints.ImageEditingAgeProgressionInput;
                output: falEndpoints.ImageEditingAgeProgressionOutput;
            };

            'fal-ai/image-editing/object-removal': {
                input: falEndpoints.ImageEditingObjectRemovalInput;
                output: falEndpoints.ImageEditingObjectRemovalOutput;
            };

            'fal-ai/image-editing/face-enhancement': {
                input: falEndpoints.ImageEditingFaceEnhancementInput;
                output: falEndpoints.ImageEditingFaceEnhancementOutput;
            };

            'fal-ai/image-editing/color-correction': {
                input: falEndpoints.ImageEditingColorCorrectionInput;
                output: falEndpoints.ImageEditingColorCorrectionOutput;
            };

            'fal-ai/flux-pro/kontext/multi': {
                input: falEndpoints.FluxProKontextMultiInput;
                output: falEndpoints.FluxProKontextMultiOutput;
            };

            'fal-ai/flux-pro/kontext/max/multi': {
                input: falEndpoints.FluxProKontextMaxMultiInput;
                output: falEndpoints.FluxProKontextMaxMultiOutput;
            };

            'fal-ai/kling-video/v2.1/master/text-to-video': {
                input: falEndpoints.KlingVideoV21MasterTextToVideoInput;
                output: falEndpoints.KlingVideoV21MasterTextToVideoOutput;
            };

            'fal-ai/flux-pro/kontext/max/text-to-image': {
                input: falEndpoints.FluxProKontextMaxTextToImageInput;
                output: falEndpoints.FluxProKontextMaxTextToImageOutput;
            };

            'fal-ai/flux-pro/kontext/text-to-image': {
                input: falEndpoints.FluxProKontextTextToImageInput;
                output: falEndpoints.FluxProKontextTextToImageOutput;
            };

            'fal-ai/kling-video/v2.1/pro/image-to-video': {
                input: falEndpoints.KlingVideoV21ProImageToVideoInput;
                output: falEndpoints.KlingVideoV21ProImageToVideoOutput;
            };

            'fal-ai/flux-pro/kontext/max': {
                input: falEndpoints.FluxProKontextMaxInput;
                output: falEndpoints.FluxProKontextMaxOutput;
            };

            'fal-ai/hunyuan-avatar': {
                input: falEndpoints.HunyuanAvatarInput;
                output: falEndpoints.HunyuanAvatarOutput;
            };

            'fal-ai/flux-pro/kontext': {
                input: falEndpoints.FluxProKontextInput;
                output: falEndpoints.FluxProKontextOutput;
            };

            'veed/avatars/text-to-video': {
                input: falEndpoints.VeedAvatarsTextToVideoInput;
                output: falEndpoints.VeedAvatarsTextToVideoOutput;
            };

            'fal-ai/hunyuan-portrait': {
                input: falEndpoints.HunyuanPortraitInput;
                output: falEndpoints.HunyuanPortraitOutput;
            };

            'fal-ai/bagel/understand': {
                input: falEndpoints.BagelUnderstandInput;
                output: falEndpoints.BagelUnderstandOutput;
            };

            'fal-ai/flux-kontext/dev': {
                input: falEndpoints.FluxKontextDevInput;
                output: falEndpoints.FluxKontextDevOutput;
            };

            'veed/lipsync': {
                input: falEndpoints.VeedLipsyncInput;
                output: falEndpoints.VeedLipsyncOutput;
            };

            'fal-ai/bagel': {
                input: falEndpoints.BagelInput;
                output: falEndpoints.BagelOutput;
            };

            'veed/avatars/audio-to-video': {
                input: falEndpoints.VeedAvatarsAudioToVideoInput;
                output: falEndpoints.VeedAvatarsAudioToVideoOutput;
            };

            'fal-ai/imagen4/preview/ultra': {
                input: falEndpoints.Imagen4PreviewUltraInput;
                output: falEndpoints.Imagen4PreviewUltraOutput;
            };

            'fal-ai/wan-vace-14b': {
                input: falEndpoints.WanVace14bInput;
                output: falEndpoints.WanVace14bOutput;
            };

            'fal-ai/kling-video/v1.6/pro/elements': {
                input: falEndpoints.KlingVideoV16ProElementsInput;
                output: falEndpoints.KlingVideoV16ProElementsOutput;
            };

            'fal-ai/kling-video/v1.6/standard/elements': {
                input: falEndpoints.KlingVideoV16StandardElementsInput;
                output: falEndpoints.KlingVideoV16StandardElementsOutput;
            };

            'fal-ai/bagel/edit': {
                input: falEndpoints.BagelEditInput;
                output: falEndpoints.BagelEditOutput;
            };

            'fal-ai/lyria2': {
                input: falEndpoints.Lyria2Input;
                output: falEndpoints.Lyria2Output;
            };

            'fal-ai/ltx-video-13b-distilled/extend': {
                input: falEndpoints.LtxVideo13bDistilledExtendInput;
                output: falEndpoints.LtxVideo13bDistilledExtendOutput;
            };

            'fal-ai/dreamo': {
                input: falEndpoints.DreamoInput;
                output: falEndpoints.DreamoOutput;
            };

            'fal-ai/ltx-video-13b-distilled/multiconditioning': {
                input: falEndpoints.LtxVideo13bDistilledMulticonditioningInput;
                output: falEndpoints.LtxVideo13bDistilledMulticonditioningOutput;
            };

            'fal-ai/ltx-video-13b-dev/multiconditioning': {
                input: falEndpoints.LtxVideo13bDevMulticonditioningInput;
                output: falEndpoints.LtxVideo13bDevMulticonditioningOutput;
            };

            'fal-ai/ltx-video-13b-distilled/image-to-video': {
                input: falEndpoints.LtxVideo13bDistilledImageToVideoInput;
                output: falEndpoints.LtxVideo13bDistilledImageToVideoOutput;
            };

            'fal-ai/ltx-video-13b-dev/image-to-video': {
                input: falEndpoints.LtxVideo13bDevImageToVideoInput;
                output: falEndpoints.LtxVideo13bDevImageToVideoOutput;
            };

            'fal-ai/ltx-video-13b-dev': {
                input: falEndpoints.LtxVideo13bDevInput;
                output: falEndpoints.LtxVideo13bDevOutput;
            };

            'fal-ai/flux-lora/stream': {
                input: falEndpoints.FluxLoraStreamInput;
                output: falEndpoints.FluxLoraStreamOutput;
            };

            'fal-ai/ltx-video-13b-distilled': {
                input: falEndpoints.LtxVideo13bDistilledInput;
                output: falEndpoints.LtxVideo13bDistilledOutput;
            };

            'fal-ai/ltx-video-13b-dev/extend': {
                input: falEndpoints.LtxVideo13bDevExtendInput;
                output: falEndpoints.LtxVideo13bDevExtendOutput;
            };

            'fal-ai/ltx-video-lora/image-to-video': {
                input: falEndpoints.LtxVideoLoraImageToVideoInput;
                output: falEndpoints.LtxVideoLoraImageToVideoOutput;
            };

            'fal-ai/pixverse/v4.5/image-to-video/fast': {
                input: falEndpoints.PixverseV45ImageToVideoFastInput;
                output: falEndpoints.PixverseV45ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v4.5/text-to-video': {
                input: falEndpoints.PixverseV45TextToVideoInput;
                output: falEndpoints.PixverseV45TextToVideoOutput;
            };

            'fal-ai/pixverse/v4.5/text-to-video/fast': {
                input: falEndpoints.PixverseV45TextToVideoFastInput;
                output: falEndpoints.PixverseV45TextToVideoFastOutput;
            };

            'fal-ai/ltx-video-lora/multiconditioning': {
                input: falEndpoints.LtxVideoLoraMulticonditioningInput;
                output: falEndpoints.LtxVideoLoraMulticonditioningOutput;
            };

            'fal-ai/pixverse/v4.5/effects': {
                input: falEndpoints.PixverseV45EffectsInput;
                output: falEndpoints.PixverseV45EffectsOutput;
            };

            'fal-ai/pixverse/v4.5/transition': {
                input: falEndpoints.PixverseV45TransitionInput;
                output: falEndpoints.PixverseV45TransitionOutput;
            };

            'fal-ai/pixverse/v4.5/image-to-video': {
                input: falEndpoints.PixverseV45ImageToVideoInput;
                output: falEndpoints.PixverseV45ImageToVideoOutput;
            };

            'fal-ai/framepack/f1': {
                input: falEndpoints.FramepackF1Input;
                output: falEndpoints.FramepackF1Output;
            };

            'fal-ai/hunyuan-custom': {
                input: falEndpoints.HunyuanCustomInput;
                output: falEndpoints.HunyuanCustomOutput;
            };

            'fal-ai/ace-step/audio-inpaint': {
                input: falEndpoints.AceStepAudioInpaintInput;
                output: falEndpoints.AceStepAudioInpaintOutput;
            };

            'fal-ai/ace-step/prompt-to-audio': {
                input: falEndpoints.AceStepPromptToAudioInput;
                output: falEndpoints.AceStepPromptToAudioOutput;
            };

            'fal-ai/ace-step/audio-outpaint': {
                input: falEndpoints.AceStepAudioOutpaintInput;
                output: falEndpoints.AceStepAudioOutpaintOutput;
            };

            'fal-ai/vidu/q1/start-end-to-video': {
                input: falEndpoints.ViduQ1StartEndToVideoInput;
                output: falEndpoints.ViduQ1StartEndToVideoOutput;
            };

            'fal-ai/ace-step/audio-to-audio': {
                input: falEndpoints.AceStepAudioToAudioInput;
                output: falEndpoints.AceStepAudioToAudioOutput;
            };

            'smoretalk-ai/rembg-enhance': {
                input: falEndpoints.SmoretalkaiRembgEnhanceInput;
                output: falEndpoints.SmoretalkaiRembgEnhanceOutput;
            };

            'fal-ai/recraft/upscale/creative': {
                input: falEndpoints.RecraftUpscaleCreativeInput;
                output: falEndpoints.RecraftUpscaleCreativeOutput;
            };

            'fal-ai/recraft/v3/create-style': {
                input: falEndpoints.RecraftV3CreateStyleInput;
                output: falEndpoints.RecraftV3CreateStyleOutput;
            };

            'fal-ai/recraft/upscale/crisp': {
                input: falEndpoints.RecraftUpscaleCrispInput;
                output: falEndpoints.RecraftUpscaleCrispOutput;
            };

            'fal-ai/recraft/v3/image-to-image': {
                input: falEndpoints.RecraftV3ImageToImageInput;
                output: falEndpoints.RecraftV3ImageToImageOutput;
            };

            'fal-ai/ace-step': {
                input: falEndpoints.AceStepInput;
                output: falEndpoints.AceStepOutput;
            };

            'fal-ai/vidu/q1/image-to-video': {
                input: falEndpoints.ViduQ1ImageToVideoInput;
                output: falEndpoints.ViduQ1ImageToVideoOutput;
            };

            'fal-ai/ltx-video-trainer': {
                input: falEndpoints.LtxVideoTrainerInput;
                output: falEndpoints.LtxVideoTrainerOutput;
            };

            'fal-ai/vidu/q1/text-to-video': {
                input: falEndpoints.ViduQ1TextToVideoInput;
                output: falEndpoints.ViduQ1TextToVideoOutput;
            };

            'fal-ai/minimax/speech-02-turbo': {
                input: falEndpoints.MinimaxSpeech02TurboInput;
                output: falEndpoints.MinimaxSpeech02TurboOutput;
            };

            'fal-ai/hidream-i1-full/image-to-image': {
                input: falEndpoints.HidreamI1FullImageToImageInput;
                output: falEndpoints.HidreamI1FullImageToImageOutput;
            };

            'fal-ai/minimax/image-01/subject-reference': {
                input: falEndpoints.MinimaxImage01SubjectReferenceInput;
                output: falEndpoints.MinimaxImage01SubjectReferenceOutput;
            };

            'fal-ai/minimax/voice-clone': {
                input: falEndpoints.MinimaxVoiceCloneInput;
                output: falEndpoints.MinimaxVoiceCloneOutput;
            };

            'fal-ai/minimax/speech-02-hd': {
                input: falEndpoints.MinimaxSpeech02HdInput;
                output: falEndpoints.MinimaxSpeech02HdOutput;
            };

            'fal-ai/trellis/multi': {
                input: falEndpoints.TrellisMultiInput;
                output: falEndpoints.TrellisMultiOutput;
            };

            'fal-ai/minimax/image-01': {
                input: falEndpoints.MinimaxImage01Input;
                output: falEndpoints.MinimaxImage01Output;
            };

            'fal-ai/pony-v7': {
                input: falEndpoints.PonyV7Input;
                output: falEndpoints.PonyV7Output;
            };

            'fal-ai/ideogram/v3/reframe': {
                input: falEndpoints.IdeogramV3ReframeInput;
                output: falEndpoints.IdeogramV3ReframeOutput;
            };

            'fal-ai/ideogram/v3': {
                input: falEndpoints.IdeogramV3Input;
                output: falEndpoints.IdeogramV3Output;
            };

            'fal-ai/ideogram/v3/remix': {
                input: falEndpoints.IdeogramV3RemixInput;
                output: falEndpoints.IdeogramV3RemixOutput;
            };

            'fal-ai/ideogram/v3/replace-background': {
                input: falEndpoints.IdeogramV3ReplaceBackgroundInput;
                output: falEndpoints.IdeogramV3ReplaceBackgroundOutput;
            };

            'fal-ai/f-lite/standard': {
                input: falEndpoints.FLiteStandardInput;
                output: falEndpoints.FLiteStandardOutput;
            };

            'fal-ai/ideogram/v3/edit': {
                input: falEndpoints.IdeogramV3EditInput;
                output: falEndpoints.IdeogramV3EditOutput;
            };

            'fal-ai/f-lite/texture': {
                input: falEndpoints.FLiteTextureInput;
                output: falEndpoints.FLiteTextureOutput;
            };

            'fal-ai/moondream2/visual-query': {
                input: falEndpoints.Moondream2VisualQueryInput;
                output: falEndpoints.Moondream2VisualQueryOutput;
            };

            'fal-ai/moondream2/point-object-detection': {
                input: falEndpoints.Moondream2PointObjectDetectionInput;
                output: falEndpoints.Moondream2PointObjectDetectionOutput;
            };

            'fal-ai/uno': {
                input: falEndpoints.UnoInput;
                output: falEndpoints.UnoOutput;
            };

            'fal-ai/step1x-edit': {
                input: falEndpoints.Step1xEditInput;
                output: falEndpoints.Step1xEditOutput;
            };

            'fal-ai/image2svg': {
                input: falEndpoints.Image2svgInput;
                output: falEndpoints.Image2svgOutput;
            };

            'fal-ai/moondream2': {
                input: falEndpoints.Moondream2Input;
                output: falEndpoints.Moondream2Output;
            };

            'fal-ai/magi/extend-video': {
                input: falEndpoints.MagiExtendVideoInput;
                output: falEndpoints.MagiExtendVideoOutput;
            };

            'fal-ai/moondream2/object-detection': {
                input: falEndpoints.Moondream2ObjectDetectionInput;
                output: falEndpoints.Moondream2ObjectDetectionOutput;
            };

            'tripo3d/tripo/v2.5/image-to-3d': {
                input: falEndpoints.Tripo3dTripoV25ImageTo3dInput;
                output: falEndpoints.Tripo3dTripoV25ImageTo3dOutput;
            };

            'fal-ai/magi/image-to-video': {
                input: falEndpoints.MagiImageToVideoInput;
                output: falEndpoints.MagiImageToVideoOutput;
            };

            'fal-ai/magi': {
                input: falEndpoints.MagiInput;
                output: falEndpoints.MagiOutput;
            };

            'fal-ai/gpt-image-1/edit-image': {
                input: falEndpoints.GptImage1EditImageInput;
                output: falEndpoints.GptImage1EditImageOutput;
            };

            'fal-ai/magi-distilled/extend-video': {
                input: falEndpoints.MagiDistilledExtendVideoInput;
                output: falEndpoints.MagiDistilledExtendVideoOutput;
            };

            'fal-ai/gpt-image-1/text-to-image': {
                input: falEndpoints.GptImage1TextToImageInput;
                output: falEndpoints.GptImage1TextToImageOutput;
            };

            'fal-ai/dia-tts/voice-clone': {
                input: falEndpoints.DiaTtsVoiceCloneInput;
                output: falEndpoints.DiaTtsVoiceCloneOutput;
            };

            'fal-ai/pixverse/v4/effects': {
                input: falEndpoints.PixverseV4EffectsInput;
                output: falEndpoints.PixverseV4EffectsOutput;
            };

            'fal-ai/magi-distilled/image-to-video': {
                input: falEndpoints.MagiDistilledImageToVideoInput;
                output: falEndpoints.MagiDistilledImageToVideoOutput;
            };

            'fal-ai/dia-tts': {
                input: falEndpoints.DiaTtsInput;
                output: falEndpoints.DiaTtsOutput;
            };

            'fal-ai/smart-turn': {
                input: falEndpoints.SmartTurnInput;
                output: falEndpoints.SmartTurnOutput;
            };

            'rundiffusion-fal/juggernaut-flux-lora/inpainting': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLoraInpaintingInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLoraInpaintingOutput;
            };

            'fal-ai/fashn/tryon/v1.5': {
                input: falEndpoints.FashnTryonV15Input;
                output: falEndpoints.FashnTryonV15Output;
            };

            'fal-ai/plushify': {
                input: falEndpoints.PlushifyInput;
                output: falEndpoints.PlushifyOutput;
            };

            'fal-ai/instant-character': {
                input: falEndpoints.InstantCharacterInput;
                output: falEndpoints.InstantCharacterOutput;
            };

            'fal-ai/framepack/flf2v': {
                input: falEndpoints.FramepackFlf2vInput;
                output: falEndpoints.FramepackFlf2vOutput;
            };

            'fal-ai/magi-distilled': {
                input: falEndpoints.MagiDistilledInput;
                output: falEndpoints.MagiDistilledOutput;
            };

            'fal-ai/turbo-flux-trainer': {
                input: falEndpoints.TurboFluxTrainerInput;
                output: falEndpoints.TurboFluxTrainerOutput;
            };

            'fal-ai/cartoonify': {
                input: falEndpoints.CartoonifyInput;
                output: falEndpoints.CartoonifyOutput;
            };

            'fal-ai/finegrain-eraser/mask': {
                input: falEndpoints.FinegrainEraserMaskInput;
                output: falEndpoints.FinegrainEraserMaskOutput;
            };

            'fal-ai/wan-flf2v': {
                input: falEndpoints.WanFlf2vInput;
                output: falEndpoints.WanFlf2vOutput;
            };

            'fal-ai/framepack': {
                input: falEndpoints.FramepackInput;
                output: falEndpoints.FramepackOutput;
            };

            'fal-ai/finegrain-eraser': {
                input: falEndpoints.FinegrainEraserInput;
                output: falEndpoints.FinegrainEraserOutput;
            };

            'fal-ai/wan-vace': {
                input: falEndpoints.WanVaceInput;
                output: falEndpoints.WanVaceOutput;
            };

            'fal-ai/finegrain-eraser/bbox': {
                input: falEndpoints.FinegrainEraserBboxInput;
                output: falEndpoints.FinegrainEraserBboxOutput;
            };

            'fal-ai/speech-to-text/turbo': {
                input: falEndpoints.SpeechToTextTurboInput;
                output: falEndpoints.SpeechToTextTurboOutput;
            };

            'cassetteai/video-sound-effects-generator': {
                input: falEndpoints.CassetteaiVideoSoundEffectsGeneratorInput;
                output: falEndpoints.CassetteaiVideoSoundEffectsGeneratorOutput;
            };

            'fal-ai/speech-to-text/stream': {
                input: falEndpoints.SpeechToTextStreamInput;
                output: falEndpoints.SpeechToTextStreamOutput;
            };

            'fal-ai/speech-to-text/turbo/stream': {
                input: falEndpoints.SpeechToTextTurboStreamInput;
                output: falEndpoints.SpeechToTextTurboStreamOutput;
            };

            'cassetteai/sound-effects-generator': {
                input: falEndpoints.CassetteaiSoundEffectsGeneratorInput;
                output: falEndpoints.CassetteaiSoundEffectsGeneratorOutput;
            };

            'fal-ai/speech-to-text': {
                input: falEndpoints.SpeechToTextInput;
                output: falEndpoints.SpeechToTextOutput;
            };

            'fal-ai/star-vector': {
                input: falEndpoints.StarVectorInput;
                output: falEndpoints.StarVectorOutput;
            };

            'fal-ai/sync-lipsync/v2': {
                input: falEndpoints.SyncLipsyncV2Input;
                output: falEndpoints.SyncLipsyncV2Output;
            };

            'fal-ai/pixverse/v4/image-to-video': {
                input: falEndpoints.PixverseV4ImageToVideoInput;
                output: falEndpoints.PixverseV4ImageToVideoOutput;
            };

            'fal-ai/pixverse/v4/text-to-video': {
                input: falEndpoints.PixverseV4TextToVideoInput;
                output: falEndpoints.PixverseV4TextToVideoOutput;
            };

            'fal-ai/ghiblify': {
                input: falEndpoints.GhiblifyInput;
                output: falEndpoints.GhiblifyOutput;
            };

            'fal-ai/pixverse/v4/text-to-video/fast': {
                input: falEndpoints.PixverseV4TextToVideoFastInput;
                output: falEndpoints.PixverseV4TextToVideoFastOutput;
            };

            'fal-ai/orpheus-tts': {
                input: falEndpoints.OrpheusTtsInput;
                output: falEndpoints.OrpheusTtsOutput;
            };

            'fal-ai/pixverse/v4/image-to-video/fast': {
                input: falEndpoints.PixverseV4ImageToVideoFastInput;
                output: falEndpoints.PixverseV4ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v3.5/effects': {
                input: falEndpoints.PixverseV35EffectsInput;
                output: falEndpoints.PixverseV35EffectsOutput;
            };

            'fal-ai/pixverse/v3.5/transition': {
                input: falEndpoints.PixverseV35TransitionInput;
                output: falEndpoints.PixverseV35TransitionOutput;
            };

            'fal-ai/sana/v1.5/4.8b': {
                input: falEndpoints.SanaV1548bInput;
                output: falEndpoints.SanaV1548bOutput;
            };

            'fal-ai/sana/v1.5/1.6b': {
                input: falEndpoints.SanaV1516bInput;
                output: falEndpoints.SanaV1516bOutput;
            };

            'cassetteai/music-generator': {
                input: falEndpoints.CassetteaiMusicGeneratorInput;
                output: falEndpoints.CassetteaiMusicGeneratorOutput;
            };

            'fal-ai/kling-video/lipsync/text-to-video': {
                input: falEndpoints.KlingVideoLipsyncTextToVideoInput;
                output: falEndpoints.KlingVideoLipsyncTextToVideoOutput;
            };

            'fal-ai/sana/sprint': {
                input: falEndpoints.SanaSprintInput;
                output: falEndpoints.SanaSprintOutput;
            };

            'fal-ai/wan-t2v-lora': {
                input: falEndpoints.WanT2vLoraInput;
                output: falEndpoints.WanT2vLoraOutput;
            };

            'fal-ai/kling-video/lipsync/audio-to-video': {
                input: falEndpoints.KlingVideoLipsyncAudioToVideoInput;
                output: falEndpoints.KlingVideoLipsyncAudioToVideoOutput;
            };

            'fal-ai/latentsync': {
                input: falEndpoints.LatentsyncInput;
                output: falEndpoints.LatentsyncOutput;
            };

            'fal-ai/thera': {
                input: falEndpoints.TheraInput;
                output: falEndpoints.TheraOutput;
            };

            'fal-ai/hunyuan3d/v2/multi-view/turbo': {
                input: falEndpoints.Hunyuan3dV2MultiViewTurboInput;
                output: falEndpoints.Hunyuan3dV2MultiViewTurboOutput;
            };

            'fal-ai/gemini-flash-edit': {
                input: falEndpoints.GeminiFlashEditInput;
                output: falEndpoints.GeminiFlashEditOutput;
            };

            'fal-ai/hunyuan3d/v2': {
                input: falEndpoints.Hunyuan3dV2Input;
                output: falEndpoints.Hunyuan3dV2Output;
            };

            'fal-ai/hunyuan3d/v2/mini': {
                input: falEndpoints.Hunyuan3dV2MiniInput;
                output: falEndpoints.Hunyuan3dV2MiniOutput;
            };

            'fal-ai/hunyuan3d/v2/multi-view': {
                input: falEndpoints.Hunyuan3dV2MultiViewInput;
                output: falEndpoints.Hunyuan3dV2MultiViewOutput;
            };

            'fal-ai/wan-trainer': {
                input: falEndpoints.WanTrainerInput;
                output: falEndpoints.WanTrainerOutput;
            };

            'fal-ai/mix-dehaze-net': {
                input: falEndpoints.MixDehazeNetInput;
                output: falEndpoints.MixDehazeNetOutput;
            };

            'fal-ai/hunyuan3d/v2/mini/turbo': {
                input: falEndpoints.Hunyuan3dV2MiniTurboInput;
                output: falEndpoints.Hunyuan3dV2MiniTurboOutput;
            };

            'fal-ai/luma-dream-machine/ray-2-flash': {
                input: falEndpoints.LumaDreamMachineRay2FlashInput;
                output: falEndpoints.LumaDreamMachineRay2FlashOutput;
            };

            'fal-ai/pika/v1.5/pikaffects': {
                input: falEndpoints.PikaV15PikaffectsInput;
                output: falEndpoints.PikaV15PikaffectsOutput;
            };

            'fal-ai/hunyuan3d/v2/turbo': {
                input: falEndpoints.Hunyuan3dV2TurboInput;
                output: falEndpoints.Hunyuan3dV2TurboOutput;
            };

            'fal-ai/gemini-flash-edit/multi': {
                input: falEndpoints.GeminiFlashEditMultiInput;
                output: falEndpoints.GeminiFlashEditMultiOutput;
            };

            'fal-ai/pika/v2/turbo/text-to-video': {
                input: falEndpoints.PikaV2TurboTextToVideoInput;
                output: falEndpoints.PikaV2TurboTextToVideoOutput;
            };

            'fal-ai/luma-dream-machine/ray-2-flash/image-to-video': {
                input: falEndpoints.LumaDreamMachineRay2FlashImageToVideoInput;
                output: falEndpoints.LumaDreamMachineRay2FlashImageToVideoOutput;
            };

            'fal-ai/pika/v2/turbo/image-to-video': {
                input: falEndpoints.PikaV2TurboImageToVideoInput;
                output: falEndpoints.PikaV2TurboImageToVideoOutput;
            };

            'fal-ai/pika/v2.2/text-to-video': {
                input: falEndpoints.PikaV22TextToVideoInput;
                output: falEndpoints.PikaV22TextToVideoOutput;
            };

            'fal-ai/pika/v2.2/pikascenes': {
                input: falEndpoints.PikaV22PikascenesInput;
                output: falEndpoints.PikaV22PikascenesOutput;
            };

            'fal-ai/pika/v2.2/image-to-video': {
                input: falEndpoints.PikaV22ImageToVideoInput;
                output: falEndpoints.PikaV22ImageToVideoOutput;
            };

            'fal-ai/pika/v2.1/text-to-video': {
                input: falEndpoints.PikaV21TextToVideoInput;
                output: falEndpoints.PikaV21TextToVideoOutput;
            };

            'fal-ai/pika/v2/pikadditions': {
                input: falEndpoints.PikaV2PikadditionsInput;
                output: falEndpoints.PikaV2PikadditionsOutput;
            };

            'fal-ai/invisible-watermark': {
                input: falEndpoints.InvisibleWatermarkInput;
                output: falEndpoints.InvisibleWatermarkOutput;
            };

            'fal-ai/csm-1b': {
                input: falEndpoints.Csm1bInput;
                output: falEndpoints.Csm1bOutput;
            };

            'fal-ai/pika/v2.1/image-to-video': {
                input: falEndpoints.PikaV21ImageToVideoInput;
                output: falEndpoints.PikaV21ImageToVideoOutput;
            };

            'fal-ai/vidu/start-end-to-video': {
                input: falEndpoints.ViduStartEndToVideoInput;
                output: falEndpoints.ViduStartEndToVideoOutput;
            };

            'fal-ai/vidu/template-to-video': {
                input: falEndpoints.ViduTemplateToVideoInput;
                output: falEndpoints.ViduTemplateToVideoOutput;
            };

            'fal-ai/kling-video/v1.5/pro/effects': {
                input: falEndpoints.KlingVideoV15ProEffectsInput;
                output: falEndpoints.KlingVideoV15ProEffectsOutput;
            };

            'fal-ai/wan-i2v-lora': {
                input: falEndpoints.WanI2vLoraInput;
                output: falEndpoints.WanI2vLoraOutput;
            };

            'fal-ai/kling-video/v1.6/pro/effects': {
                input: falEndpoints.KlingVideoV16ProEffectsInput;
                output: falEndpoints.KlingVideoV16ProEffectsOutput;
            };

            'fal-ai/vidu/image-to-video': {
                input: falEndpoints.ViduImageToVideoInput;
                output: falEndpoints.ViduImageToVideoOutput;
            };

            'fal-ai/vidu/reference-to-video': {
                input: falEndpoints.ViduReferenceToVideoInput;
                output: falEndpoints.ViduReferenceToVideoOutput;
            };

            'fal-ai/wan-pro/text-to-video': {
                input: falEndpoints.WanProTextToVideoInput;
                output: falEndpoints.WanProTextToVideoOutput;
            };

            'fal-ai/kling-video/v1.6/standard/effects': {
                input: falEndpoints.KlingVideoV16StandardEffectsInput;
                output: falEndpoints.KlingVideoV16StandardEffectsOutput;
            };

            'fal-ai/kling-video/v1/standard/effects': {
                input: falEndpoints.KlingVideoV1StandardEffectsInput;
                output: falEndpoints.KlingVideoV1StandardEffectsOutput;
            };

            'rundiffusion-fal/juggernaut-flux/pro/image-to-image': {
                input: falEndpoints.RundiffusionfalJuggernautFluxProImageToImageInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxProImageToImageOutput;
            };

            'fal-ai/hunyuan-video-image-to-video': {
                input: falEndpoints.HunyuanVideoImageToVideoInput;
                output: falEndpoints.HunyuanVideoImageToVideoOutput;
            };

            'rundiffusion-fal/rundiffusion-photo-flux': {
                input: falEndpoints.RundiffusionfalRundiffusionPhotoFluxInput;
                output: falEndpoints.RundiffusionfalRundiffusionPhotoFluxOutput;
            };

            'rundiffusion-fal/juggernaut-flux/base/image-to-image': {
                input: falEndpoints.RundiffusionfalJuggernautFluxBaseImageToImageInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxBaseImageToImageOutput;
            };

            'rundiffusion-fal/juggernaut-flux/lightning': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLightningInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLightningOutput;
            };

            'rundiffusion-fal/juggernaut-flux-lora': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLoraInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLoraOutput;
            };

            'fal-ai/ltx-video-v095': {
                input: falEndpoints.LtxVideoV095Input;
                output: falEndpoints.LtxVideoV095Output;
            };

            'rundiffusion-fal/juggernaut-flux/pro': {
                input: falEndpoints.RundiffusionfalJuggernautFluxProInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxProOutput;
            };

            'rundiffusion-fal/juggernaut-flux/base': {
                input: falEndpoints.RundiffusionfalJuggernautFluxBaseInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxBaseOutput;
            };

            'fal-ai/cogview4': {
                input: falEndpoints.Cogview4Input;
                output: falEndpoints.Cogview4Output;
            };

            'fal-ai/diffrhythm': {
                input: falEndpoints.DiffrhythmInput;
                output: falEndpoints.DiffrhythmOutput;
            };

            'fal-ai/topaz/upscale/video': {
                input: falEndpoints.TopazUpscaleVideoInput;
                output: falEndpoints.TopazUpscaleVideoOutput;
            };

            'fal-ai/ltx-video-v095/multiconditioning': {
                input: falEndpoints.LtxVideoV095MulticonditioningInput;
                output: falEndpoints.LtxVideoV095MulticonditioningOutput;
            };

            'fal-ai/ltx-video-v095/extend': {
                input: falEndpoints.LtxVideoV095ExtendInput;
                output: falEndpoints.LtxVideoV095ExtendOutput;
            };

            'fal-ai/docres': {
                input: falEndpoints.DocresInput;
                output: falEndpoints.DocresOutput;
            };

            'fal-ai/ideogram/v2a/remix': {
                input: falEndpoints.IdeogramV2aRemixInput;
                output: falEndpoints.IdeogramV2aRemixOutput;
            };

            'fal-ai/docres/dewarp': {
                input: falEndpoints.DocresDewarpInput;
                output: falEndpoints.DocresDewarpOutput;
            };

            'fal-ai/ideogram/v2a/turbo/remix': {
                input: falEndpoints.IdeogramV2aTurboRemixInput;
                output: falEndpoints.IdeogramV2aTurboRemixOutput;
            };

            'fal-ai/swin2sr': {
                input: falEndpoints.Swin2srInput;
                output: falEndpoints.Swin2srOutput;
            };

            'fal-ai/kling-video/v1.6/pro/text-to-video': {
                input: falEndpoints.KlingVideoV16ProTextToVideoInput;
                output: falEndpoints.KlingVideoV16ProTextToVideoOutput;
            };

            'fal-ai/elevenlabs/tts/multilingual-v2': {
                input: falEndpoints.ElevenlabsTtsMultilingualV2Input;
                output: falEndpoints.ElevenlabsTtsMultilingualV2Output;
            };

            'fal-ai/ideogram/v2a/turbo': {
                input: falEndpoints.IdeogramV2aTurboInput;
                output: falEndpoints.IdeogramV2aTurboOutput;
            };

            'fal-ai/elevenlabs/tts/turbo-v2.5': {
                input: falEndpoints.ElevenlabsTtsTurboV25Input;
                output: falEndpoints.ElevenlabsTtsTurboV25Output;
            };

            'fal-ai/elevenlabs/audio-isolation': {
                input: falEndpoints.ElevenlabsAudioIsolationInput;
                output: falEndpoints.ElevenlabsAudioIsolationOutput;
            };

            'fal-ai/elevenlabs/speech-to-text': {
                input: falEndpoints.ElevenlabsSpeechToTextInput;
                output: falEndpoints.ElevenlabsSpeechToTextOutput;
            };

            'fal-ai/evf-sam': {
                input: falEndpoints.EvfSamInput;
                output: falEndpoints.EvfSamOutput;
            };

            'fal-ai/ideogram/v2a': {
                input: falEndpoints.IdeogramV2aInput;
                output: falEndpoints.IdeogramV2aOutput;
            };

            'fal-ai/wan-t2v': {
                input: falEndpoints.WanT2vInput;
                output: falEndpoints.WanT2vOutput;
            };

            'fal-ai/ddcolor': {
                input: falEndpoints.DdcolorInput;
                output: falEndpoints.DdcolorOutput;
            };

            'fal-ai/sam2/auto-segment': {
                input: falEndpoints.Sam2AutoSegmentInput;
                output: falEndpoints.Sam2AutoSegmentOutput;
            };

            'fal-ai/drct-super-resolution': {
                input: falEndpoints.DrctSuperResolutionInput;
                output: falEndpoints.DrctSuperResolutionOutput;
            };

            'fal-ai/nafnet/deblur': {
                input: falEndpoints.NafnetDeblurInput;
                output: falEndpoints.NafnetDeblurOutput;
            };

            'fal-ai/nafnet/denoise': {
                input: falEndpoints.NafnetDenoiseInput;
                output: falEndpoints.NafnetDenoiseOutput;
            };

            'fal-ai/video-prompt-generator': {
                input: falEndpoints.VideoPromptGeneratorInput;
                output: falEndpoints.VideoPromptGeneratorOutput;
            };

            'fal-ai/post-processing': {
                input: falEndpoints.PostProcessingInput;
                output: falEndpoints.PostProcessingOutput;
            };

            'fal-ai/minimax/video-01-director/image-to-video': {
                input: falEndpoints.MinimaxVideo01DirectorImageToVideoInput;
                output: falEndpoints.MinimaxVideo01DirectorImageToVideoOutput;
            };

            'fal-ai/veo2': {
                input: falEndpoints.Veo2Input;
                output: falEndpoints.Veo2Output;
            };

            'fal-ai/flowedit': {
                input: falEndpoints.FloweditInput;
                output: falEndpoints.FloweditOutput;
            };

            'fal-ai/skyreels-i2v': {
                input: falEndpoints.SkyreelsI2vInput;
                output: falEndpoints.SkyreelsI2vOutput;
            };

            'fal-ai/kokoro/mandarin-chinese': {
                input: falEndpoints.KokoroMandarinChineseInput;
                output: falEndpoints.KokoroMandarinChineseOutput;
            };

            'fal-ai/kokoro/french': {
                input: falEndpoints.KokoroFrenchInput;
                output: falEndpoints.KokoroFrenchOutput;
            };

            'fal-ai/kokoro/hindi': {
                input: falEndpoints.KokoroHindiInput;
                output: falEndpoints.KokoroHindiOutput;
            };

            'fal-ai/kokoro/american-english': {
                input: falEndpoints.KokoroAmericanEnglishInput;
                output: falEndpoints.KokoroAmericanEnglishOutput;
            };

            'fal-ai/kokoro/brazilian-portuguese': {
                input: falEndpoints.KokoroBrazilianPortugueseInput;
                output: falEndpoints.KokoroBrazilianPortugueseOutput;
            };

            'fal-ai/kokoro/japanese': {
                input: falEndpoints.KokoroJapaneseInput;
                output: falEndpoints.KokoroJapaneseOutput;
            };

            'fal-ai/kokoro/spanish': {
                input: falEndpoints.KokoroSpanishInput;
                output: falEndpoints.KokoroSpanishOutput;
            };

            'fal-ai/kokoro/italian': {
                input: falEndpoints.KokoroItalianInput;
                output: falEndpoints.KokoroItalianOutput;
            };

            'fal-ai/luma-dream-machine/ray-2/image-to-video': {
                input: falEndpoints.LumaDreamMachineRay2ImageToVideoInput;
                output: falEndpoints.LumaDreamMachineRay2ImageToVideoOutput;
            };

            'fal-ai/got-ocr/v2': {
                input: falEndpoints.GotOcrV2Input;
                output: falEndpoints.GotOcrV2Output;
            };

            'fal-ai/flux-control-lora-canny': {
                input: falEndpoints.FluxControlLoraCannyInput;
                output: falEndpoints.FluxControlLoraCannyOutput;
            };

            'fal-ai/flux-control-lora-canny/image-to-image': {
                input: falEndpoints.FluxControlLoraCannyImageToImageInput;
                output: falEndpoints.FluxControlLoraCannyImageToImageOutput;
            };

            'fal-ai/kokoro/british-english': {
                input: falEndpoints.KokoroBritishEnglishInput;
                output: falEndpoints.KokoroBritishEnglishOutput;
            };

            'fal-ai/zonos': {
                input: falEndpoints.ZonosInput;
                output: falEndpoints.ZonosOutput;
            };

            'fal-ai/ben/v2/image': {
                input: falEndpoints.BenV2ImageInput;
                output: falEndpoints.BenV2ImageOutput;
            };

            'fal-ai/minimax/video-01-director': {
                input: falEndpoints.MinimaxVideo01DirectorInput;
                output: falEndpoints.MinimaxVideo01DirectorOutput;
            };

            'fal-ai/imagen3': {
                input: falEndpoints.Imagen3Input;
                output: falEndpoints.Imagen3Output;
            };

            'fal-ai/flux-control-lora-depth/image-to-image': {
                input: falEndpoints.FluxControlLoraDepthImageToImageInput;
                output: falEndpoints.FluxControlLoraDepthImageToImageOutput;
            };

            'fal-ai/flux-control-lora-depth': {
                input: falEndpoints.FluxControlLoraDepthInput;
                output: falEndpoints.FluxControlLoraDepthOutput;
            };

            'fal-ai/ideogram/upscale': {
                input: falEndpoints.IdeogramUpscaleInput;
                output: falEndpoints.IdeogramUpscaleOutput;
            };

            'fal-ai/ben/v2/video': {
                input: falEndpoints.BenV2VideoInput;
                output: falEndpoints.BenV2VideoOutput;
            };

            'fal-ai/imagen3/fast': {
                input: falEndpoints.Imagen3FastInput;
                output: falEndpoints.Imagen3FastOutput;
            };

            'fal-ai/codeformer': {
                input: falEndpoints.CodeformerInput;
                output: falEndpoints.CodeformerOutput;
            };

            'fal-ai/hunyuan-video-img2vid-lora': {
                input: falEndpoints.HunyuanVideoImg2vidLoraInput;
                output: falEndpoints.HunyuanVideoImg2vidLoraOutput;
            };

            'fal-ai/lumina-image/v2': {
                input: falEndpoints.LuminaImageV2Input;
                output: falEndpoints.LuminaImageV2Output;
            };

            'fal-ai/hunyuan-video/video-to-video': {
                input: falEndpoints.HunyuanVideoVideoToVideoInput;
                output: falEndpoints.HunyuanVideoVideoToVideoOutput;
            };

            'fal-ai/hunyuan-video-lora/video-to-video': {
                input: falEndpoints.HunyuanVideoLoraVideoToVideoInput;
                output: falEndpoints.HunyuanVideoLoraVideoToVideoOutput;
            };

            'fal-ai/pixverse/v3.5/text-to-video': {
                input: falEndpoints.PixverseV35TextToVideoInput;
                output: falEndpoints.PixverseV35TextToVideoOutput;
            };

            'fal-ai/pixverse/v3.5/image-to-video/fast': {
                input: falEndpoints.PixverseV35ImageToVideoFastInput;
                output: falEndpoints.PixverseV35ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v3.5/text-to-video/fast': {
                input: falEndpoints.PixverseV35TextToVideoFastInput;
                output: falEndpoints.PixverseV35TextToVideoFastOutput;
            };

            'fal-ai/janus': {
                input: falEndpoints.JanusInput;
                output: falEndpoints.JanusOutput;
            };

            'fal-ai/luma-dream-machine/ray-2': {
                input: falEndpoints.LumaDreamMachineRay2Input;
                output: falEndpoints.LumaDreamMachineRay2Output;
            };

            'fal-ai/ffmpeg-api/metadata': {
                input: falEndpoints.FfmpegApiMetadataInput;
                output: falEndpoints.FfmpegApiMetadataOutput;
            };

            'fal-ai/ffmpeg-api/waveform': {
                input: falEndpoints.FfmpegApiWaveformInput;
                output: falEndpoints.FfmpegApiWaveformOutput;
            };

            'fal-ai/ffmpeg-api/compose': {
                input: falEndpoints.FfmpegApiComposeInput;
                output: falEndpoints.FfmpegApiComposeOutput;
            };

            'fal-ai/pixverse/v3.5/image-to-video': {
                input: falEndpoints.PixverseV35ImageToVideoInput;
                output: falEndpoints.PixverseV35ImageToVideoOutput;
            };

            'fal-ai/yue': {
                input: falEndpoints.YueInput;
                output: falEndpoints.YueOutput;
            };

            'fal-ai/kling/v1-5/kolors-virtual-try-on': {
                input: falEndpoints.KlingV15KolorsVirtualTryOnInput;
                output: falEndpoints.KlingV15KolorsVirtualTryOnOutput;
            };

            'fal-ai/moondream-next/batch': {
                input: falEndpoints.MoondreamNextBatchInput;
                output: falEndpoints.MoondreamNextBatchOutput;
            };

            'fal-ai/minimax/video-01-subject-reference': {
                input: falEndpoints.MinimaxVideo01SubjectReferenceInput;
                output: falEndpoints.MinimaxVideo01SubjectReferenceOutput;
            };

            'fal-ai/flux-pro/v1.1': {
                input: falEndpoints.FluxProV11Input;
                output: falEndpoints.FluxProV11Output;
            };

            'fal-ai/flux-lora-canny': {
                input: falEndpoints.FluxLoraCannyInput;
                output: falEndpoints.FluxLoraCannyOutput;
            };

            'fal-ai/flux-pro/v1/fill-finetuned': {
                input: falEndpoints.FluxProV1FillFinetunedInput;
                output: falEndpoints.FluxProV1FillFinetunedOutput;
            };

            'fal-ai/transpixar': {
                input: falEndpoints.TranspixarInput;
                output: falEndpoints.TranspixarOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra-finetuned': {
                input: falEndpoints.FluxProV11UltraFinetunedInput;
                output: falEndpoints.FluxProV11UltraFinetunedOutput;
            };

            'fal-ai/hunyuan-video-lora': {
                input: falEndpoints.HunyuanVideoLoraInput;
                output: falEndpoints.HunyuanVideoLoraOutput;
            };

            'fal-ai/cogvideox-5b': {
                input: falEndpoints.Cogvideox5bInput;
                output: falEndpoints.Cogvideox5bOutput;
            };

            'fal-ai/sa2va/8b/video': {
                input: falEndpoints.Sa2va8bVideoInput;
                output: falEndpoints.Sa2va8bVideoOutput;
            };

            'fal-ai/sa2va/4b/video': {
                input: falEndpoints.Sa2va4bVideoInput;
                output: falEndpoints.Sa2va4bVideoOutput;
            };

            'fal-ai/sa2va/4b/image': {
                input: falEndpoints.Sa2va4bImageInput;
                output: falEndpoints.Sa2va4bImageOutput;
            };

            'fal-ai/sa2va/8b/image': {
                input: falEndpoints.Sa2va8bImageInput;
                output: falEndpoints.Sa2va8bImageOutput;
            };

            'fal-ai/moondream-next': {
                input: falEndpoints.MoondreamNextInput;
                output: falEndpoints.MoondreamNextOutput;
            };

            'fal-ai/hunyuan-video-lora-training': {
                input: falEndpoints.HunyuanVideoLoraTrainingInput;
                output: falEndpoints.HunyuanVideoLoraTrainingOutput;
            };

            'fal-ai/sync-lipsync': {
                input: falEndpoints.SyncLipsyncInput;
                output: falEndpoints.SyncLipsyncOutput;
            };

            'fal-ai/kling-video/v1.6/standard/image-to-video': {
                input: falEndpoints.KlingVideoV16StandardImageToVideoInput;
                output: falEndpoints.KlingVideoV16StandardImageToVideoOutput;
            };

            'fal-ai/auto-caption': {
                input: falEndpoints.AutoCaptionInput;
                output: falEndpoints.AutoCaptionOutput;
            };

            'fal-ai/switti/512': {
                input: falEndpoints.Switti512Input;
                output: falEndpoints.Switti512Output;
            };

            'fal-ai/moondream-next/detection': {
                input: falEndpoints.MoondreamNextDetectionInput;
                output: falEndpoints.MoondreamNextDetectionOutput;
            };

            'fal-ai/sadtalker/reference': {
                input: falEndpoints.SadtalkerReferenceInput;
                output: falEndpoints.SadtalkerReferenceOutput;
            };

            'fal-ai/kling-video/v1.6/standard/text-to-video': {
                input: falEndpoints.KlingVideoV16StandardTextToVideoInput;
                output: falEndpoints.KlingVideoV16StandardTextToVideoOutput;
            };

            'fal-ai/switti': {
                input: falEndpoints.SwittiInput;
                output: falEndpoints.SwittiOutput;
            };

            'fal-ai/mmaudio-v2/text-to-audio': {
                input: falEndpoints.MmaudioV2TextToAudioInput;
                output: falEndpoints.MmaudioV2TextToAudioOutput;
            };

            'fal-ai/dubbing': {
                input: falEndpoints.DubbingInput;
                output: falEndpoints.DubbingOutput;
            };

            'fal-ai/bria/expand': {
                input: falEndpoints.BriaExpandInput;
                output: falEndpoints.BriaExpandOutput;
            };

            'fal-ai/bria/text-to-image/fast': {
                input: falEndpoints.BriaTextToImageFastInput;
                output: falEndpoints.BriaTextToImageFastOutput;
            };

            'fal-ai/bria/text-to-image/base': {
                input: falEndpoints.BriaTextToImageBaseInput;
                output: falEndpoints.BriaTextToImageBaseOutput;
            };

            'fal-ai/bria/genfill': {
                input: falEndpoints.BriaGenfillInput;
                output: falEndpoints.BriaGenfillOutput;
            };

            'fal-ai/bria/eraser': {
                input: falEndpoints.BriaEraserInput;
                output: falEndpoints.BriaEraserOutput;
            };

            'fal-ai/bria/background/replace': {
                input: falEndpoints.BriaBackgroundReplaceInput;
                output: falEndpoints.BriaBackgroundReplaceOutput;
            };

            'fal-ai/flux-lora-fill': {
                input: falEndpoints.FluxLoraFillInput;
                output: falEndpoints.FluxLoraFillOutput;
            };

            'fal-ai/bria/text-to-image/hd': {
                input: falEndpoints.BriaTextToImageHdInput;
                output: falEndpoints.BriaTextToImageHdOutput;
            };

            'fal-ai/leffa/virtual-tryon': {
                input: falEndpoints.LeffaVirtualTryonInput;
                output: falEndpoints.LeffaVirtualTryonOutput;
            };

            'fal-ai/cat-vton': {
                input: falEndpoints.CatVtonInput;
                output: falEndpoints.CatVtonOutput;
            };

            'fal-ai/minimax-music': {
                input: falEndpoints.MinimaxMusicInput;
                output: falEndpoints.MinimaxMusicOutput;
            };

            'fal-ai/minimax/video-01-live/image-to-video': {
                input: falEndpoints.MinimaxVideo01LiveImageToVideoInput;
                output: falEndpoints.MinimaxVideo01LiveImageToVideoOutput;
            };

            'fal-ai/bria/product-shot': {
                input: falEndpoints.BriaProductShotInput;
                output: falEndpoints.BriaProductShotOutput;
            };

            'fal-ai/bria/background/remove': {
                input: falEndpoints.BriaBackgroundRemoveInput;
                output: falEndpoints.BriaBackgroundRemoveOutput;
            };

            'fal-ai/leffa/pose-transfer': {
                input: falEndpoints.LeffaPoseTransferInput;
                output: falEndpoints.LeffaPoseTransferOutput;
            };

            'fal-ai/hyper3d/rodin': {
                input: falEndpoints.Hyper3dRodinInput;
                output: falEndpoints.Hyper3dRodinOutput;
            };

            'fal-ai/recraft-20b': {
                input: falEndpoints.Recraft20bInput;
                output: falEndpoints.Recraft20bOutput;
            };

            'fal-ai/luma-dream-machine': {
                input: falEndpoints.LumaDreamMachineInput;
                output: falEndpoints.LumaDreamMachineOutput;
            };

            'fal-ai/minimax/video-01-live': {
                input: falEndpoints.MinimaxVideo01LiveInput;
                output: falEndpoints.MinimaxVideo01LiveOutput;
            };

            'fal-ai/trellis': {
                input: falEndpoints.TrellisInput;
                output: falEndpoints.TrellisOutput;
            };

            'fal-ai/ideogram/v2/turbo/edit': {
                input: falEndpoints.IdeogramV2TurboEditInput;
                output: falEndpoints.IdeogramV2TurboEditOutput;
            };

            'fal-ai/ideogram/v2/turbo/remix': {
                input: falEndpoints.IdeogramV2TurboRemixInput;
                output: falEndpoints.IdeogramV2TurboRemixOutput;
            };

            'fal-ai/ideogram/v2/edit': {
                input: falEndpoints.IdeogramV2EditInput;
                output: falEndpoints.IdeogramV2EditOutput;
            };

            'fal-ai/ideogram/v2/turbo': {
                input: falEndpoints.IdeogramV2TurboInput;
                output: falEndpoints.IdeogramV2TurboOutput;
            };

            'fal-ai/luma-photon/flash': {
                input: falEndpoints.LumaPhotonFlashInput;
                output: falEndpoints.LumaPhotonFlashOutput;
            };

            'fal-ai/kling-video/v1/standard/text-to-video': {
                input: falEndpoints.KlingVideoV1StandardTextToVideoInput;
                output: falEndpoints.KlingVideoV1StandardTextToVideoOutput;
            };

            'fal-ai/aura-flow': {
                input: falEndpoints.AuraFlowInput;
                output: falEndpoints.AuraFlowOutput;
            };

            'fal-ai/omnigen-v1': {
                input: falEndpoints.OmnigenV1Input;
                output: falEndpoints.OmnigenV1Output;
            };

            'fal-ai/flux/schnell/redux': {
                input: falEndpoints.FluxSchnellReduxInput;
                output: falEndpoints.FluxSchnellReduxOutput;
            };

            'fal-ai/video-upscaler': {
                input: falEndpoints.VideoUpscalerInput;
                output: falEndpoints.VideoUpscalerOutput;
            };

            'fal-ai/ideogram/v2/remix': {
                input: falEndpoints.IdeogramV2RemixInput;
                output: falEndpoints.IdeogramV2RemixOutput;
            };

            'fal-ai/kling-video/v1.5/pro/text-to-video': {
                input: falEndpoints.KlingVideoV15ProTextToVideoInput;
                output: falEndpoints.KlingVideoV15ProTextToVideoOutput;
            };

            'fal-ai/flux/dev/redux': {
                input: falEndpoints.FluxDevReduxInput;
                output: falEndpoints.FluxDevReduxOutput;
            };

            'fal-ai/flux/schnell': {
                input: falEndpoints.FluxSchnellInput;
                output: falEndpoints.FluxSchnellOutput;
            };

            'fal-ai/ltx-video/image-to-video': {
                input: falEndpoints.LtxVideoImageToVideoInput;
                output: falEndpoints.LtxVideoImageToVideoOutput;
            };

            'fal-ai/flux-pro/v1.1/redux': {
                input: falEndpoints.FluxProV11ReduxInput;
                output: falEndpoints.FluxProV11ReduxOutput;
            };

            'fal-ai/flux-pro/v1/fill': {
                input: falEndpoints.FluxProV1FillInput;
                output: falEndpoints.FluxProV1FillOutput;
            };

            'fal-ai/flux-lora-depth': {
                input: falEndpoints.FluxLoraDepthInput;
                output: falEndpoints.FluxLoraDepthOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra/redux': {
                input: falEndpoints.FluxProV11UltraReduxInput;
                output: falEndpoints.FluxProV11UltraReduxOutput;
            };

            'fal-ai/kolors/image-to-image': {
                input: falEndpoints.KolorsImageToImageInput;
                output: falEndpoints.KolorsImageToImageOutput;
            };

            'fal-ai/iclight-v2': {
                input: falEndpoints.IclightV2Input;
                output: falEndpoints.IclightV2Output;
            };

            'fal-ai/flux-differential-diffusion': {
                input: falEndpoints.FluxDifferentialDiffusionInput;
                output: falEndpoints.FluxDifferentialDiffusionOutput;
            };

            'fal-ai/mochi-v1': {
                input: falEndpoints.MochiV1Input;
                output: falEndpoints.MochiV1Output;
            };

            'fal-ai/flux-pulid': {
                input: falEndpoints.FluxPulidInput;
                output: falEndpoints.FluxPulidOutput;
            };

            'fal-ai/birefnet/v2': {
                input: falEndpoints.BirefnetV2Input;
                output: falEndpoints.BirefnetV2Output;
            };

            'fal-ai/hunyuan-video': {
                input: falEndpoints.HunyuanVideoInput;
                output: falEndpoints.HunyuanVideoOutput;
            };

            'fal-ai/stable-diffusion-v35-medium': {
                input: falEndpoints.StableDiffusionV35MediumInput;
                output: falEndpoints.StableDiffusionV35MediumOutput;
            };

            'fal-ai/f5-tts': {
                input: falEndpoints.F5TtsInput;
                output: falEndpoints.F5TtsOutput;
            };

            'fal-ai/ltx-video': {
                input: falEndpoints.LtxVideoInput;
                output: falEndpoints.LtxVideoOutput;
            };

            'fal-ai/cogvideox-5b/image-to-video': {
                input: falEndpoints.Cogvideox5bImageToVideoInput;
                output: falEndpoints.Cogvideox5bImageToVideoOutput;
            };

            'fal-ai/kling-video/v1/standard/image-to-video': {
                input: falEndpoints.KlingVideoV1StandardImageToVideoInput;
                output: falEndpoints.KlingVideoV1StandardImageToVideoOutput;
            };

            'fal-ai/cogvideox-5b/video-to-video': {
                input: falEndpoints.Cogvideox5bVideoToVideoInput;
                output: falEndpoints.Cogvideox5bVideoToVideoOutput;
            };

            'fal-ai/kling-video/v1.5/pro/image-to-video': {
                input: falEndpoints.KlingVideoV15ProImageToVideoInput;
                output: falEndpoints.KlingVideoV15ProImageToVideoOutput;
            };

            'fal-ai/flux-lora/inpainting': {
                input: falEndpoints.FluxLoraInpaintingInput;
                output: falEndpoints.FluxLoraInpaintingOutput;
            };

            'fal-ai/live-portrait/image': {
                input: falEndpoints.LivePortraitImageInput;
                output: falEndpoints.LivePortraitImageOutput;
            };

            'fal-ai/stable-video': {
                input: falEndpoints.StableVideoInput;
                output: falEndpoints.StableVideoOutput;
            };

            'fal-ai/image-preprocessors/scribble': {
                input: falEndpoints.ImagePreprocessorsScribbleInput;
                output: falEndpoints.ImagePreprocessorsScribbleOutput;
            };

            'fal-ai/flux-general/rf-inversion': {
                input: falEndpoints.FluxGeneralRfInversionInput;
                output: falEndpoints.FluxGeneralRfInversionOutput;
            };

            'fal-ai/image-preprocessors/zoe': {
                input: falEndpoints.ImagePreprocessorsZoeInput;
                output: falEndpoints.ImagePreprocessorsZoeOutput;
            };

            'fal-ai/image-preprocessors/hed': {
                input: falEndpoints.ImagePreprocessorsHedInput;
                output: falEndpoints.ImagePreprocessorsHedOutput;
            };

            'fal-ai/image-preprocessors/depth-anything/v2': {
                input: falEndpoints.ImagePreprocessorsDepthAnythingV2Input;
                output: falEndpoints.ImagePreprocessorsDepthAnythingV2Output;
            };

            'fal-ai/image-preprocessors/mlsd': {
                input: falEndpoints.ImagePreprocessorsMlsdInput;
                output: falEndpoints.ImagePreprocessorsMlsdOutput;
            };

            'fal-ai/image-preprocessors/sam': {
                input: falEndpoints.ImagePreprocessorsSamInput;
                output: falEndpoints.ImagePreprocessorsSamOutput;
            };

            'fal-ai/image-preprocessors/midas': {
                input: falEndpoints.ImagePreprocessorsMidasInput;
                output: falEndpoints.ImagePreprocessorsMidasOutput;
            };

            'fal-ai/fast-svd/text-to-video': {
                input: falEndpoints.FastSvdTextToVideoInput;
                output: falEndpoints.FastSvdTextToVideoOutput;
            };

            'fal-ai/image-preprocessors/pidi': {
                input: falEndpoints.ImagePreprocessorsPidiInput;
                output: falEndpoints.ImagePreprocessorsPidiOutput;
            };

            'fal-ai/controlnext': {
                input: falEndpoints.ControlnextInput;
                output: falEndpoints.ControlnextOutput;
            };

            'fal-ai/image-preprocessors/teed': {
                input: falEndpoints.ImagePreprocessorsTeedInput;
                output: falEndpoints.ImagePreprocessorsTeedOutput;
            };

            'fal-ai/image-preprocessors/lineart': {
                input: falEndpoints.ImagePreprocessorsLineartInput;
                output: falEndpoints.ImagePreprocessorsLineartOutput;
            };

            'fal-ai/sam2/image': {
                input: falEndpoints.Sam2ImageInput;
                output: falEndpoints.Sam2ImageOutput;
            };

            'fal-ai/flux-general/image-to-image': {
                input: falEndpoints.FluxGeneralImageToImageInput;
                output: falEndpoints.FluxGeneralImageToImageOutput;
            };

            'fal-ai/stable-diffusion-v3-medium': {
                input: falEndpoints.StableDiffusionV3MediumInput;
                output: falEndpoints.StableDiffusionV3MediumOutput;
            };

            'fal-ai/flux-general/differential-diffusion': {
                input: falEndpoints.FluxGeneralDifferentialDiffusionInput;
                output: falEndpoints.FluxGeneralDifferentialDiffusionOutput;
            };

            'fal-ai/sam2/video': {
                input: falEndpoints.Sam2VideoInput;
                output: falEndpoints.Sam2VideoOutput;
            };

            'fal-ai/fooocus/upscale-or-vary': {
                input: falEndpoints.FooocusUpscaleOrVaryInput;
                output: falEndpoints.FooocusUpscaleOrVaryOutput;
            };

            'fal-ai/flux-general/inpainting': {
                input: falEndpoints.FluxGeneralInpaintingInput;
                output: falEndpoints.FluxGeneralInpaintingOutput;
            };

            'fal-ai/flux-lora/image-to-image': {
                input: falEndpoints.FluxLoraImageToImageInput;
                output: falEndpoints.FluxLoraImageToImageOutput;
            };

            'fal-ai/sana': {
                input: falEndpoints.SanaInput;
                output: falEndpoints.SanaOutput;
            };

            'fal-ai/pixart-sigma': {
                input: falEndpoints.PixartSigmaInput;
                output: falEndpoints.PixartSigmaOutput;
            };

            'fal-ai/flux-subject': {
                input: falEndpoints.FluxSubjectInput;
                output: falEndpoints.FluxSubjectOutput;
            };

            'fal-ai/sdxl-controlnet-union/inpainting': {
                input: falEndpoints.SdxlControlnetUnionInpaintingInput;
                output: falEndpoints.SdxlControlnetUnionInpaintingOutput;
            };

            'fal-ai/amt-interpolation/frame-interpolation': {
                input: falEndpoints.AmtInterpolationFrameInterpolationInput;
                output: falEndpoints.AmtInterpolationFrameInterpolationOutput;
            };

            'fal-ai/sdxl-controlnet-union': {
                input: falEndpoints.SdxlControlnetUnionInput;
                output: falEndpoints.SdxlControlnetUnionOutput;
            };

            'fal-ai/kolors': {
                input: falEndpoints.KolorsInput;
                output: falEndpoints.KolorsOutput;
            };

            'fal-ai/sdxl-controlnet-union/image-to-image': {
                input: falEndpoints.SdxlControlnetUnionImageToImageInput;
                output: falEndpoints.SdxlControlnetUnionImageToImageOutput;
            };

            'fal-ai/era-3d': {
                input: falEndpoints.Era3dInput;
                output: falEndpoints.Era3dOutput;
            };

            'fal-ai/florence-2-large/referring-expression-segmentation': {
                input: falEndpoints.Florence2LargeReferringExpressionSegmentationInput;
                output: falEndpoints.Florence2LargeReferringExpressionSegmentationOutput;
            };

            'fal-ai/florence-2-large/open-vocabulary-detection': {
                input: falEndpoints.Florence2LargeOpenVocabularyDetectionInput;
                output: falEndpoints.Florence2LargeOpenVocabularyDetectionOutput;
            };

            'fal-ai/florence-2-large/object-detection': {
                input: falEndpoints.Florence2LargeObjectDetectionInput;
                output: falEndpoints.Florence2LargeObjectDetectionOutput;
            };

            'fal-ai/live-portrait': {
                input: falEndpoints.LivePortraitInput;
                output: falEndpoints.LivePortraitOutput;
            };

            'fal-ai/florence-2-large/region-to-description': {
                input: falEndpoints.Florence2LargeRegionToDescriptionInput;
                output: falEndpoints.Florence2LargeRegionToDescriptionOutput;
            };

            'fal-ai/stable-cascade': {
                input: falEndpoints.StableCascadeInput;
                output: falEndpoints.StableCascadeOutput;
            };

            'fal-ai/florence-2-large/dense-region-caption': {
                input: falEndpoints.Florence2LargeDenseRegionCaptionInput;
                output: falEndpoints.Florence2LargeDenseRegionCaptionOutput;
            };

            'fal-ai/florence-2-large/ocr-with-region': {
                input: falEndpoints.Florence2LargeOcrWithRegionInput;
                output: falEndpoints.Florence2LargeOcrWithRegionOutput;
            };

            'fal-ai/florence-2-large/caption-to-phrase-grounding': {
                input: falEndpoints.Florence2LargeCaptionToPhraseGroundingInput;
                output: falEndpoints.Florence2LargeCaptionToPhraseGroundingOutput;
            };

            'fal-ai/florence-2-large/more-detailed-caption': {
                input: falEndpoints.Florence2LargeMoreDetailedCaptionInput;
                output: falEndpoints.Florence2LargeMoreDetailedCaptionOutput;
            };

            'fal-ai/florence-2-large/region-to-category': {
                input: falEndpoints.Florence2LargeRegionToCategoryInput;
                output: falEndpoints.Florence2LargeRegionToCategoryOutput;
            };

            'fal-ai/florence-2-large/ocr': {
                input: falEndpoints.Florence2LargeOcrInput;
                output: falEndpoints.Florence2LargeOcrOutput;
            };

            'fal-ai/florence-2-large/detailed-caption': {
                input: falEndpoints.Florence2LargeDetailedCaptionInput;
                output: falEndpoints.Florence2LargeDetailedCaptionOutput;
            };

            'fal-ai/florence-2-large/region-proposal': {
                input: falEndpoints.Florence2LargeRegionProposalInput;
                output: falEndpoints.Florence2LargeRegionProposalOutput;
            };

            'fal-ai/florence-2-large/caption': {
                input: falEndpoints.Florence2LargeCaptionInput;
                output: falEndpoints.Florence2LargeCaptionOutput;
            };

            'fal-ai/fast-sdxl': {
                input: falEndpoints.FastSdxlInput;
                output: falEndpoints.FastSdxlOutput;
            };

            'fal-ai/stable-cascade/sote-diffusion': {
                input: falEndpoints.StableCascadeSoteDiffusionInput;
                output: falEndpoints.StableCascadeSoteDiffusionOutput;
            };

            'fal-ai/luma-photon': {
                input: falEndpoints.LumaPhotonInput;
                output: falEndpoints.LumaPhotonOutput;
            };

            'fal-ai/luma-dream-machine/image-to-video': {
                input: falEndpoints.LumaDreamMachineImageToVideoInput;
                output: falEndpoints.LumaDreamMachineImageToVideoOutput;
            };

            'fal-ai/fast-svd-lcm/text-to-video': {
                input: falEndpoints.FastSvdLcmTextToVideoInput;
                output: falEndpoints.FastSvdLcmTextToVideoOutput;
            };

            'fal-ai/dwpose': {
                input: falEndpoints.DwposeInput;
                output: falEndpoints.DwposeOutput;
            };

            'fal-ai/florence-2-large/region-to-segmentation': {
                input: falEndpoints.Florence2LargeRegionToSegmentationInput;
                output: falEndpoints.Florence2LargeRegionToSegmentationOutput;
            };

            'fal-ai/stable-diffusion-v3-medium/image-to-image': {
                input: falEndpoints.StableDiffusionV3MediumImageToImageInput;
                output: falEndpoints.StableDiffusionV3MediumImageToImageOutput;
            };

            'fal-ai/ccsr': {
                input: falEndpoints.CcsrInput;
                output: falEndpoints.CcsrOutput;
            };

            'fal-ai/lightning-models': {
                input: falEndpoints.LightningModelsInput;
                output: falEndpoints.LightningModelsOutput;
            };

            'fal-ai/sd15-depth-controlnet': {
                input: falEndpoints.Sd15DepthControlnetInput;
                output: falEndpoints.Sd15DepthControlnetOutput;
            };

            'fal-ai/omni-zero': {
                input: falEndpoints.OmniZeroInput;
                output: falEndpoints.OmniZeroOutput;
            };

            'fal-ai/dreamshaper': {
                input: falEndpoints.DreamshaperInput;
                output: falEndpoints.DreamshaperOutput;
            };

            'fal-ai/playground-v25': {
                input: falEndpoints.PlaygroundV25Input;
                output: falEndpoints.PlaygroundV25Output;
            };

            'fal-ai/realistic-vision': {
                input: falEndpoints.RealisticVisionInput;
                output: falEndpoints.RealisticVisionOutput;
            };

            'fal-ai/ip-adapter-face-id': {
                input: falEndpoints.IpAdapterFaceIdInput;
                output: falEndpoints.IpAdapterFaceIdOutput;
            };

            'fal-ai/lora/inpaint': {
                input: falEndpoints.LoraInpaintInput;
                output: falEndpoints.LoraInpaintOutput;
            };

            'fal-ai/lora/image-to-image': {
                input: falEndpoints.LoraImageToImageInput;
                output: falEndpoints.LoraImageToImageOutput;
            };

            'fal-ai/fast-sdxl/image-to-image': {
                input: falEndpoints.FastSdxlImageToImageInput;
                output: falEndpoints.FastSdxlImageToImageOutput;
            };

            'fal-ai/fast-sdxl/inpainting': {
                input: falEndpoints.FastSdxlInpaintingInput;
                output: falEndpoints.FastSdxlInpaintingOutput;
            };

            'fal-ai/layer-diffusion': {
                input: falEndpoints.LayerDiffusionInput;
                output: falEndpoints.LayerDiffusionOutput;
            };

            'fal-ai/stable-diffusion-v15': {
                input: falEndpoints.StableDiffusionV15Input;
                output: falEndpoints.StableDiffusionV15Output;
            };

            'fal-ai/fast-lightning-sdxl': {
                input: falEndpoints.FastLightningSdxlInput;
                output: falEndpoints.FastLightningSdxlOutput;
            };

            'fal-ai/wizper': {
                input: falEndpoints.WizperInput;
                output: falEndpoints.WizperOutput;
            };

            'fal-ai/moondream/batched': {
                input: falEndpoints.MoondreamBatchedInput;
                output: falEndpoints.MoondreamBatchedOutput;
            };

            'fal-ai/musetalk': {
                input: falEndpoints.MusetalkInput;
                output: falEndpoints.MusetalkOutput;
            };

            'fal-ai/face-to-sticker': {
                input: falEndpoints.FaceToStickerInput;
                output: falEndpoints.FaceToStickerOutput;
            };

            'fal-ai/sadtalker': {
                input: falEndpoints.SadtalkerInput;
                output: falEndpoints.SadtalkerOutput;
            };

            'fal-ai/t2v-turbo': {
                input: falEndpoints.T2vTurboInput;
                output: falEndpoints.T2vTurboOutput;
            };

            'fal-ai/fast-fooocus-sdxl/image-to-image': {
                input: falEndpoints.FastFooocusSdxlImageToImageInput;
                output: falEndpoints.FastFooocusSdxlImageToImageOutput;
            };

            'fal-ai/imageutils/nsfw': {
                input: falEndpoints.ImageutilsNsfwInput;
                output: falEndpoints.ImageutilsNsfwOutput;
            };

            'fal-ai/creative-upscaler': {
                input: falEndpoints.CreativeUpscalerInput;
                output: falEndpoints.CreativeUpscalerOutput;
            };

            'fal-ai/photomaker': {
                input: falEndpoints.PhotomakerInput;
                output: falEndpoints.PhotomakerOutput;
            };

            'fal-ai/playground-v25/inpainting': {
                input: falEndpoints.PlaygroundV25InpaintingInput;
                output: falEndpoints.PlaygroundV25InpaintingOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny': {
                input: falEndpoints.FastSdxlControlnetCannyInput;
                output: falEndpoints.FastSdxlControlnetCannyOutput;
            };

            'fal-ai/fast-lightning-sdxl/image-to-image': {
                input: falEndpoints.FastLightningSdxlImageToImageInput;
                output: falEndpoints.FastLightningSdxlImageToImageOutput;
            };

            'fal-ai/birefnet': {
                input: falEndpoints.BirefnetInput;
                output: falEndpoints.BirefnetOutput;
            };

            'fal-ai/playground-v25/image-to-image': {
                input: falEndpoints.PlaygroundV25ImageToImageInput;
                output: falEndpoints.PlaygroundV25ImageToImageOutput;
            };

            'fal-ai/amt-interpolation': {
                input: falEndpoints.AmtInterpolationInput;
                output: falEndpoints.AmtInterpolationOutput;
            };

            'fal-ai/fast-lightning-sdxl/inpainting': {
                input: falEndpoints.FastLightningSdxlInpaintingInput;
                output: falEndpoints.FastLightningSdxlInpaintingOutput;
            };

            'fal-ai/whisper': {
                input: falEndpoints.WhisperInput;
                output: falEndpoints.WhisperOutput;
            };

            'fal-ai/fast-lcm-diffusion': {
                input: falEndpoints.FastLcmDiffusionInput;
                output: falEndpoints.FastLcmDiffusionOutput;
            };

            'fal-ai/fast-lcm-diffusion/inpainting': {
                input: falEndpoints.FastLcmDiffusionInpaintingInput;
                output: falEndpoints.FastLcmDiffusionInpaintingOutput;
            };

            'fal-ai/fast-lcm-diffusion/image-to-image': {
                input: falEndpoints.FastLcmDiffusionImageToImageInput;
                output: falEndpoints.FastLcmDiffusionImageToImageOutput;
            };

            'fal-ai/fast-animatediff/text-to-video': {
                input: falEndpoints.FastAnimatediffTextToVideoInput;
                output: falEndpoints.FastAnimatediffTextToVideoOutput;
            };

            'fal-ai/llava-next': {
                input: falEndpoints.LlavaNextInput;
                output: falEndpoints.LlavaNextOutput;
            };

            'fal-ai/fast-animatediff/turbo/text-to-video': {
                input: falEndpoints.FastAnimatediffTurboTextToVideoInput;
                output: falEndpoints.FastAnimatediffTurboTextToVideoOutput;
            };

            'fal-ai/imageutils/depth': {
                input: falEndpoints.ImageutilsDepthInput;
                output: falEndpoints.ImageutilsDepthOutput;
            };

            'fal-ai/fast-fooocus-sdxl': {
                input: falEndpoints.FastFooocusSdxlInput;
                output: falEndpoints.FastFooocusSdxlOutput;
            };

            'fal-ai/fast-svd-lcm': {
                input: falEndpoints.FastSvdLcmInput;
                output: falEndpoints.FastSvdLcmOutput;
            };

            'fal-ai/illusion-diffusion': {
                input: falEndpoints.IllusionDiffusionInput;
                output: falEndpoints.IllusionDiffusionOutput;
            };

            'fal-ai/retoucher': {
                input: falEndpoints.RetoucherInput;
                output: falEndpoints.RetoucherOutput;
            };

            'fal-ai/fooocus/image-prompt': {
                input: falEndpoints.FooocusImagePromptInput;
                output: falEndpoints.FooocusImagePromptOutput;
            };

            'fal-ai/fast-animatediff/turbo/video-to-video': {
                input: falEndpoints.FastAnimatediffTurboVideoToVideoInput;
                output: falEndpoints.FastAnimatediffTurboVideoToVideoOutput;
            };

            'fal-ai/minimax/video-01': {
                input: falEndpoints.MinimaxVideo01Input;
                output: falEndpoints.MinimaxVideo01Output;
            };

            'fal-ai/fast-animatediff/video-to-video': {
                input: falEndpoints.FastAnimatediffVideoToVideoInput;
                output: falEndpoints.FastAnimatediffVideoToVideoOutput;
            };

            'fal-ai/fooocus/inpaint': {
                input: falEndpoints.FooocusInpaintInput;
                output: falEndpoints.FooocusInpaintOutput;
            };

            'fal-ai/triposr': {
                input: falEndpoints.TriposrInput;
                output: falEndpoints.TriposrOutput;
            };

            'fal-ai/lcm': {
                input: falEndpoints.LcmInput;
                output: falEndpoints.LcmOutput;
            };

            'fal-ai/diffusion-edge': {
                input: falEndpoints.DiffusionEdgeInput;
                output: falEndpoints.DiffusionEdgeOutput;
            };

            'fal-ai/stable-audio': {
                input: falEndpoints.StableAudioInput;
                output: falEndpoints.StableAudioOutput;
            };

            'fal-ai/pulid': {
                input: falEndpoints.PulidInput;
                output: falEndpoints.PulidOutput;
            };

            'fal-ai/animatediff-sparsectrl-lcm': {
                input: falEndpoints.AnimatediffSparsectrlLcmInput;
                output: falEndpoints.AnimatediffSparsectrlLcmOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny/image-to-image': {
                input: falEndpoints.FastSdxlControlnetCannyImageToImageInput;
                output: falEndpoints.FastSdxlControlnetCannyImageToImageOutput;
            };

            'fal-ai/lcm-sd15-i2i': {
                input: falEndpoints.LcmSd15I2iInput;
                output: falEndpoints.LcmSd15I2iOutput;
            };

            'fal-ai/imageutils/marigold-depth': {
                input: falEndpoints.ImageutilsMarigoldDepthInput;
                output: falEndpoints.ImageutilsMarigoldDepthOutput;
            };

            'fal-ai/inpaint': {
                input: falEndpoints.InpaintInput;
                output: falEndpoints.InpaintOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny/inpainting': {
                input: falEndpoints.FastSdxlControlnetCannyInpaintingInput;
                output: falEndpoints.FastSdxlControlnetCannyInpaintingOutput;
            };

            'fal-ai/fooocus': {
                input: falEndpoints.FooocusInput;
                output: falEndpoints.FooocusOutput;
            };

            'fal-ai/imageutils/rembg': {
                input: falEndpoints.ImageutilsRembgInput;
                output: falEndpoints.ImageutilsRembgOutput;
            };

            'fal-ai/esrgan': {
                input: falEndpoints.EsrganInput;
                output: falEndpoints.EsrganOutput;
            };

            'fal-ai/lora': {
                input: falEndpoints.LoraInput;
                output: falEndpoints.LoraOutput;
            };
        }
    }
}

export {};
