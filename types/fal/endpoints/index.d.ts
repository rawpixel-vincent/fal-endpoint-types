import type * as falEndpoints from './schema.js';

declare global {
    export namespace fal {}
    export namespace fal.endpoints {
        export interface Endpoints {
            'xai/tts/v1': {
                input: falEndpoints.XaiTtsV1Input;
                output: falEndpoints.XaiTtsV1Output;
            };

            'xai/grok-voice/realtime': {
                input: falEndpoints.XaiGrokVoiceRealtimeInput;
                output: falEndpoints.XaiGrokVoiceRealtimeOutput;
            };

            'xai/grok-voice': {
                input: falEndpoints.XaiGrokVoiceInput;
                output: falEndpoints.XaiGrokVoiceOutput;
            };

            'xai/grok-imagine-video/v1.5/text-to-video': {
                input: falEndpoints.XaiGrokImagineVideoV15TextToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoV15TextToVideoOutput;
            };

            'xai/grok-imagine-video/v1.5/reference-to-video': {
                input: falEndpoints.XaiGrokImagineVideoV15ReferenceToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoV15ReferenceToVideoOutput;
            };

            'xai/grok-imagine-video/v1.5/lite/text-to-video': {
                input: falEndpoints.XaiGrokImagineVideoV15LiteTextToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoV15LiteTextToVideoOutput;
            };

            'xai/grok-imagine-video/v1.5/lite/image-to-video': {
                input: falEndpoints.XaiGrokImagineVideoV15LiteImageToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoV15LiteImageToVideoOutput;
            };

            'xai/grok-imagine-video/v1.5/image-to-video': {
                input: falEndpoints.XaiGrokImagineVideoV15ImageToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoV15ImageToVideoOutput;
            };

            'xai/grok-imagine-video/text-to-video': {
                input: falEndpoints.XaiGrokImagineVideoTextToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoTextToVideoOutput;
            };

            'xai/grok-imagine-video/reference-to-video': {
                input: falEndpoints.XaiGrokImagineVideoReferenceToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoReferenceToVideoOutput;
            };

            'xai/grok-imagine-video/image-to-video': {
                input: falEndpoints.XaiGrokImagineVideoImageToVideoInput;
                output: falEndpoints.XaiGrokImagineVideoImageToVideoOutput;
            };

            'xai/grok-imagine-video/extend-video': {
                input: falEndpoints.XaiGrokImagineVideoExtendVideoInput;
                output: falEndpoints.XaiGrokImagineVideoExtendVideoOutput;
            };

            'xai/grok-imagine-video/edit-video': {
                input: falEndpoints.XaiGrokImagineVideoEditVideoInput;
                output: falEndpoints.XaiGrokImagineVideoEditVideoOutput;
            };

            'xai/grok-imagine-image/v2.0/text-to-image': {
                input: falEndpoints.XaiGrokImagineImageV20TextToImageInput;
                output: falEndpoints.XaiGrokImagineImageV20TextToImageOutput;
            };

            'xai/grok-imagine-image/v2.0/edit': {
                input: falEndpoints.XaiGrokImagineImageV20EditInput;
                output: falEndpoints.XaiGrokImagineImageV20EditOutput;
            };

            'xai/grok-imagine-image/quality/text-to-image': {
                input: falEndpoints.XaiGrokImagineImageQualityTextToImageInput;
                output: falEndpoints.XaiGrokImagineImageQualityTextToImageOutput;
            };

            'xai/grok-imagine-image/quality/edit': {
                input: falEndpoints.XaiGrokImagineImageQualityEditInput;
                output: falEndpoints.XaiGrokImagineImageQualityEditOutput;
            };

            'xai/grok-imagine-image/edit': {
                input: falEndpoints.XaiGrokImagineImageEditInput;
                output: falEndpoints.XaiGrokImagineImageEditOutput;
            };

            'xai/grok-imagine-image': {
                input: falEndpoints.XaiGrokImagineImageInput;
                output: falEndpoints.XaiGrokImagineImageOutput;
            };

            'wan/v2.6/text-to-video': {
                input: falEndpoints.WanV26TextToVideoInput;
                output: falEndpoints.WanV26TextToVideoOutput;
            };

            'wan/v2.6/text-to-image': {
                input: falEndpoints.WanV26TextToImageInput;
                output: falEndpoints.WanV26TextToImageOutput;
            };

            'wan/v2.6/reference-to-video/flash': {
                input: falEndpoints.WanV26ReferenceToVideoFlashInput;
                output: falEndpoints.WanV26ReferenceToVideoFlashOutput;
            };

            'wan/v2.6/reference-to-video': {
                input: falEndpoints.WanV26ReferenceToVideoInput;
                output: falEndpoints.WanV26ReferenceToVideoOutput;
            };

            'wan/v2.6/image-to-video/flash': {
                input: falEndpoints.WanV26ImageToVideoFlashInput;
                output: falEndpoints.WanV26ImageToVideoFlashOutput;
            };

            'wan/v2.6/image-to-video': {
                input: falEndpoints.WanV26ImageToVideoInput;
                output: falEndpoints.WanV26ImageToVideoOutput;
            };

            'wan/v2.6/image-to-image': {
                input: falEndpoints.WanV26ImageToImageInput;
                output: falEndpoints.WanV26ImageToImageOutput;
            };

            'veed/video-background-removal/green-screen': {
                input: falEndpoints.VeedVideoBackgroundRemovalGreenScreenInput;
                output: falEndpoints.VeedVideoBackgroundRemovalGreenScreenOutput;
            };

            'veed/video-background-removal/fast': {
                input: falEndpoints.VeedVideoBackgroundRemovalFastInput;
                output: falEndpoints.VeedVideoBackgroundRemovalFastOutput;
            };

            'veed/video-background-removal': {
                input: falEndpoints.VeedVideoBackgroundRemovalInput;
                output: falEndpoints.VeedVideoBackgroundRemovalOutput;
            };

            'veed/subtitles': {
                input: falEndpoints.VeedSubtitlesInput;
                output: falEndpoints.VeedSubtitlesOutput;
            };

            'veed/lipsync/v2': {
                input: falEndpoints.VeedLipsyncV2Input;
                output: falEndpoints.VeedLipsyncV2Output;
            };

            'veed/lipsync': {
                input: falEndpoints.VeedLipsyncInput;
                output: falEndpoints.VeedLipsyncOutput;
            };

            'veed/fabric-1.0/text': {
                input: falEndpoints.VeedFabric10TextInput;
                output: falEndpoints.VeedFabric10TextOutput;
            };

            'veed/fabric-1.0/fast': {
                input: falEndpoints.VeedFabric10FastInput;
                output: falEndpoints.VeedFabric10FastOutput;
            };

            'veed/fabric-1.0': {
                input: falEndpoints.VeedFabric10Input;
                output: falEndpoints.VeedFabric10Output;
            };

            'veed/clean-audio': {
                input: falEndpoints.VeedCleanAudioInput;
                output: falEndpoints.VeedCleanAudioOutput;
            };

            'veed/avatars/text-to-video': {
                input: falEndpoints.VeedAvatarsTextToVideoInput;
                output: falEndpoints.VeedAvatarsTextToVideoOutput;
            };

            'veed/avatars/audio-to-video': {
                input: falEndpoints.VeedAvatarsAudioToVideoInput;
                output: falEndpoints.VeedAvatarsAudioToVideoOutput;
            };

            'tripo3d/triposplat': {
                input: falEndpoints.Tripo3dTriposplatInput;
                output: falEndpoints.Tripo3dTriposplatOutput;
            };

            'tripo3d/tripo/v2.5/multiview-to-3d': {
                input: falEndpoints.Tripo3dTripoV25MultiviewTo3dInput;
                output: falEndpoints.Tripo3dTripoV25MultiviewTo3dOutput;
            };

            'tripo3d/tripo/v2.5/image-to-3d': {
                input: falEndpoints.Tripo3dTripoV25ImageTo3dInput;
                output: falEndpoints.Tripo3dTripoV25ImageTo3dOutput;
            };

            'tripo3d/tripo/segment': {
                input: falEndpoints.Tripo3dTripoSegmentInput;
                output: falEndpoints.Tripo3dTripoSegmentOutput;
            };

            'tripo3d/tripo/remesh': {
                input: falEndpoints.Tripo3dTripoRemeshInput;
                output: falEndpoints.Tripo3dTripoRemeshOutput;
            };

            'tripo3d/p2/text-to-3d': {
                input: falEndpoints.Tripo3dP2TextTo3dInput;
                output: falEndpoints.Tripo3dP2TextTo3dOutput;
            };

            'tripo3d/p2/image-to-3d': {
                input: falEndpoints.Tripo3dP2ImageTo3dInput;
                output: falEndpoints.Tripo3dP2ImageTo3dOutput;
            };

            'tripo3d/p1/text-to-3d': {
                input: falEndpoints.Tripo3dP1TextTo3dInput;
                output: falEndpoints.Tripo3dP1TextTo3dOutput;
            };

            'tripo3d/p1/image-to-3d': {
                input: falEndpoints.Tripo3dP1ImageTo3dInput;
                output: falEndpoints.Tripo3dP1ImageTo3dOutput;
            };

            'tripo3d/h3.1/text-to-3d': {
                input: falEndpoints.Tripo3dH31TextTo3dInput;
                output: falEndpoints.Tripo3dH31TextTo3dOutput;
            };

            'tripo3d/h3.1/multiview-to-3d': {
                input: falEndpoints.Tripo3dH31MultiviewTo3dInput;
                output: falEndpoints.Tripo3dH31MultiviewTo3dOutput;
            };

            'tripo3d/h3.1/image-to-3d': {
                input: falEndpoints.Tripo3dH31ImageTo3dInput;
                output: falEndpoints.Tripo3dH31ImageTo3dOutput;
            };

            'topaz/upscale/video/precision': {
                input: falEndpoints.TopazUpscaleVideoPrecisionInput;
                output: falEndpoints.TopazUpscaleVideoPrecisionOutput;
            };

            'topaz/upscale/video/generative': {
                input: falEndpoints.TopazUpscaleVideoGenerativeInput;
                output: falEndpoints.TopazUpscaleVideoGenerativeOutput;
            };

            'topaz/upscale/video/creative': {
                input: falEndpoints.TopazUpscaleVideoCreativeInput;
                output: falEndpoints.TopazUpscaleVideoCreativeOutput;
            };

            'topaz/upscale/image/transparent': {
                input: falEndpoints.TopazUpscaleImageTransparentInput;
                output: falEndpoints.TopazUpscaleImageTransparentOutput;
            };

            'topaz/upscale/image/precision': {
                input: falEndpoints.TopazUpscaleImagePrecisionInput;
                output: falEndpoints.TopazUpscaleImagePrecisionOutput;
            };

            'topaz/upscale/image/generative': {
                input: falEndpoints.TopazUpscaleImageGenerativeInput;
                output: falEndpoints.TopazUpscaleImageGenerativeOutput;
            };

            'topaz/upscale/image/creative': {
                input: falEndpoints.TopazUpscaleImageCreativeInput;
                output: falEndpoints.TopazUpscaleImageCreativeOutput;
            };

            'topaz/sharpen/image': {
                input: falEndpoints.TopazSharpenImageInput;
                output: falEndpoints.TopazSharpenImageOutput;
            };

            'topaz/sdr-to-hdr/video': {
                input: falEndpoints.TopazSdrToHdrVideoInput;
                output: falEndpoints.TopazSdrToHdrVideoOutput;
            };

            'topaz/restore/image': {
                input: falEndpoints.TopazRestoreImageInput;
                output: falEndpoints.TopazRestoreImageOutput;
            };

            'topaz/interpolate/video': {
                input: falEndpoints.TopazInterpolateVideoInput;
                output: falEndpoints.TopazInterpolateVideoOutput;
            };

            'topaz/denoise/video': {
                input: falEndpoints.TopazDenoiseVideoInput;
                output: falEndpoints.TopazDenoiseVideoOutput;
            };

            'topaz/denoise/image': {
                input: falEndpoints.TopazDenoiseImageInput;
                output: falEndpoints.TopazDenoiseImageOutput;
            };

            'topaz/deblur/video': {
                input: falEndpoints.TopazDeblurVideoInput;
                output: falEndpoints.TopazDeblurVideoOutput;
            };

            'topaz/adjust/image': {
                input: falEndpoints.TopazAdjustImageInput;
                output: falEndpoints.TopazAdjustImageOutput;
            };

            'sonilo/v1.1/video-to-video-sound-effects': {
                input: falEndpoints.SoniloV11VideoToVideoSoundEffectsInput;
                output: falEndpoints.SoniloV11VideoToVideoSoundEffectsOutput;
            };

            'sonilo/v1.1/video-to-video-music': {
                input: falEndpoints.SoniloV11VideoToVideoMusicInput;
                output: falEndpoints.SoniloV11VideoToVideoMusicOutput;
            };

            'sonilo/v1.1/video-to-sound-effects': {
                input: falEndpoints.SoniloV11VideoToSoundEffectsInput;
                output: falEndpoints.SoniloV11VideoToSoundEffectsOutput;
            };

            'sonilo/v1.1/video-to-music': {
                input: falEndpoints.SoniloV11VideoToMusicInput;
                output: falEndpoints.SoniloV11VideoToMusicOutput;
            };

            'sonilo/v1.1/text-to-sound-effects': {
                input: falEndpoints.SoniloV11TextToSoundEffectsInput;
                output: falEndpoints.SoniloV11TextToSoundEffectsOutput;
            };

            'sonilo/v1.1/text-to-music': {
                input: falEndpoints.SoniloV11TextToMusicInput;
                output: falEndpoints.SoniloV11TextToMusicOutput;
            };

            'smoretalk-ai/rembg-enhance': {
                input: falEndpoints.SmoretalkaiRembgEnhanceInput;
                output: falEndpoints.SmoretalkaiRembgEnhanceOutput;
            };

            'rundiffusion-fal/rundiffusion-photo-flux': {
                input: falEndpoints.RundiffusionfalRundiffusionPhotoFluxInput;
                output: falEndpoints.RundiffusionfalRundiffusionPhotoFluxOutput;
            };

            'rundiffusion-fal/juggernaut-flux/pro/image-to-image': {
                input: falEndpoints.RundiffusionfalJuggernautFluxProImageToImageInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxProImageToImageOutput;
            };

            'rundiffusion-fal/juggernaut-flux/pro': {
                input: falEndpoints.RundiffusionfalJuggernautFluxProInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxProOutput;
            };

            'rundiffusion-fal/juggernaut-flux/lightning': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLightningInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLightningOutput;
            };

            'rundiffusion-fal/juggernaut-flux/base/image-to-image': {
                input: falEndpoints.RundiffusionfalJuggernautFluxBaseImageToImageInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxBaseImageToImageOutput;
            };

            'rundiffusion-fal/juggernaut-flux/base': {
                input: falEndpoints.RundiffusionfalJuggernautFluxBaseInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxBaseOutput;
            };

            'rundiffusion-fal/juggernaut-flux-lora/inpainting': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLoraInpaintingInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLoraInpaintingOutput;
            };

            'rundiffusion-fal/juggernaut-flux-lora': {
                input: falEndpoints.RundiffusionfalJuggernautFluxLoraInput;
                output: falEndpoints.RundiffusionfalJuggernautFluxLoraOutput;
            };

            'robbyant/lingbot-world-2': {
                input: falEndpoints.RobbyantLingbotWorld2Input;
                output: falEndpoints.RobbyantLingbotWorld2Output;
            };

            'resemble-ai/chatterboxhd/text-to-speech': {
                input: falEndpoints.ResembleaiChatterboxhdTextToSpeechInput;
                output: falEndpoints.ResembleaiChatterboxhdTextToSpeechOutput;
            };

            'resemble-ai/chatterboxhd/speech-to-speech': {
                input: falEndpoints.ResembleaiChatterboxhdSpeechToSpeechInput;
                output: falEndpoints.ResembleaiChatterboxhdSpeechToSpeechOutput;
            };

            'recraft/v4/style/text-to-vector': {
                input: falEndpoints.RecraftV4StyleTextToVectorInput;
                output: falEndpoints.RecraftV4StyleTextToVectorOutput;
            };

            'recraft/v4/style/text-to-image': {
                input: falEndpoints.RecraftV4StyleTextToImageInput;
                output: falEndpoints.RecraftV4StyleTextToImageOutput;
            };

            'recraft/v4/style/pro/text-to-vector': {
                input: falEndpoints.RecraftV4StyleProTextToVectorInput;
                output: falEndpoints.RecraftV4StyleProTextToVectorOutput;
            };

            'recraft/v4/style/pro/text-to-image': {
                input: falEndpoints.RecraftV4StyleProTextToImageInput;
                output: falEndpoints.RecraftV4StyleProTextToImageOutput;
            };

            'recraft/v4/pro/create-style': {
                input: falEndpoints.RecraftV4ProCreateStyleInput;
                output: falEndpoints.RecraftV4ProCreateStyleOutput;
            };

            'recraft/v4/create-style': {
                input: falEndpoints.RecraftV4CreateStyleInput;
                output: falEndpoints.RecraftV4CreateStyleOutput;
            };

            'recraft/v4.1/flash/text-to-image': {
                input: falEndpoints.RecraftV41FlashTextToImageInput;
                output: falEndpoints.RecraftV41FlashTextToImageOutput;
            };

            'pixverse/music-video/vibemv': {
                input: falEndpoints.PixverseMusicVideoVibemvInput;
                output: falEndpoints.PixverseMusicVideoVibemvOutput;
            };

            'pixelcut/video-background-removal': {
                input: falEndpoints.PixelcutVideoBackgroundRemovalInput;
                output: falEndpoints.PixelcutVideoBackgroundRemovalOutput;
            };

            'pixelcut/product-photo': {
                input: falEndpoints.PixelcutProductPhotoInput;
                output: falEndpoints.PixelcutProductPhotoOutput;
            };

            'pixelcut/looping-video': {
                input: falEndpoints.PixelcutLoopingVideoInput;
                output: falEndpoints.PixelcutLoopingVideoOutput;
            };

            'pixelcut/background-removal': {
                input: falEndpoints.PixelcutBackgroundRemovalInput;
                output: falEndpoints.PixelcutBackgroundRemovalOutput;
            };

            'perceptron/isaac-01/openai/v1/chat/completions': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'perceptron/isaac-01': {
                input: falEndpoints.PerceptronIsaac01Input;
                output: falEndpoints.PerceptronIsaac01Output;
            };

            'openrouter/router/vision': {
                input: falEndpoints.OpenrouterRouterVisionInput;
                output: falEndpoints.OpenrouterRouterVisionOutput;
            };

            'openrouter/router/video/enterprise': {
                input: falEndpoints.OpenrouterRouterVideoEnterpriseInput;
                output: falEndpoints.OpenrouterRouterVideoEnterpriseOutput;
            };

            'openrouter/router/video': {
                input: falEndpoints.OpenrouterRouterVideoInput;
                output: falEndpoints.OpenrouterRouterVideoOutput;
            };

            'openrouter/router/openai/v1/responses': {
                input: falEndpoints.OpenrouterRouterOpenaiV1ResponsesInput;
                output: falEndpoints.OpenrouterRouterOpenaiV1ResponsesOutput;
            };

            'openrouter/router/openai/v1/embeddings': {
                input: falEndpoints.OpenrouterRouterOpenaiV1EmbeddingsInput;
                output: falEndpoints.OpenrouterRouterOpenaiV1EmbeddingsOutput;
            };

            'openrouter/router/openai/v1/chat/completions': {
                input: falEndpoints.OpenrouterRouterOpenaiV1ChatCompletionsInput;
                output: falEndpoints.OpenrouterRouterOpenaiV1ChatCompletionsOutput;
            };

            'openrouter/router/enterprise': {
                input: falEndpoints.OpenrouterRouterEnterpriseInput;
                output: falEndpoints.OpenrouterRouterEnterpriseOutput;
            };

            'openrouter/router/decisions': {
                input: falEndpoints.OpenrouterRouterDecisionsInput;
                output: falEndpoints.OpenrouterRouterDecisionsOutput;
            };

            'openrouter/router/audio': {
                input: falEndpoints.OpenrouterRouterAudioInput;
                output: falEndpoints.OpenrouterRouterAudioOutput;
            };

            'openrouter/router': {
                input: falEndpoints.OpenrouterRouterInput;
                output: falEndpoints.OpenrouterRouterOutput;
            };

            'openai/gpt-image-2/edit': {
                input: falEndpoints.OpenaiGptImage2EditInput;
                output: falEndpoints.OpenaiGptImage2EditOutput;
            };

            'openai/gpt-image-2.5/sunburst/text-to-image': {
                input: falEndpoints.OpenaiGptImage25SunburstTextToImageInput;
                output: falEndpoints.OpenaiGptImage25SunburstTextToImageOutput;
            };

            'openai/gpt-image-2.5/sunburst/edit': {
                input: falEndpoints.OpenaiGptImage25SunburstEditInput;
                output: falEndpoints.OpenaiGptImage25SunburstEditOutput;
            };

            'openai/gpt-image-2.5/flare/text-to-image': {
                input: falEndpoints.OpenaiGptImage25FlareTextToImageInput;
                output: falEndpoints.OpenaiGptImage25FlareTextToImageOutput;
            };

            'openai/gpt-image-2.5/flare/edit': {
                input: falEndpoints.OpenaiGptImage25FlareEditInput;
                output: falEndpoints.OpenaiGptImage25FlareEditOutput;
            };

            'openai/gpt-image-2': {
                input: falEndpoints.OpenaiGptImage2Input;
                output: falEndpoints.OpenaiGptImage2Output;
            };

            'nvidia/nemotron-asr-multilingual/asr': {
                input: falEndpoints.NvidiaNemotronAsrMultilingualAsrInput;
                output: falEndpoints.NvidiaNemotronAsrMultilingualAsrOutput;
            };

            'nvidia/nemotron-3-nano-omni/vision': {
                input: falEndpoints.NvidiaNemotron3NanoOmniVisionInput;
                output: falEndpoints.NvidiaNemotron3NanoOmniVisionOutput;
            };

            'nvidia/nemotron-3-nano-omni/video': {
                input: falEndpoints.NvidiaNemotron3NanoOmniVideoInput;
                output: falEndpoints.NvidiaNemotron3NanoOmniVideoOutput;
            };

            'nvidia/nemotron-3-nano-omni/audio': {
                input: falEndpoints.NvidiaNemotron3NanoOmniAudioInput;
                output: falEndpoints.NvidiaNemotron3NanoOmniAudioOutput;
            };

            'nvidia/nemotron-3-nano-omni': {
                input: falEndpoints.NvidiaNemotron3NanoOmniInput;
                output: falEndpoints.NvidiaNemotron3NanoOmniOutput;
            };

            'nvidia/nemotron-3-5-super/vision': {
                input: falEndpoints.NvidiaNemotron35SuperVisionInput;
                output: falEndpoints.NvidiaNemotron35SuperVisionOutput;
            };

            'nvidia/nemotron-3-5-super/video': {
                input: falEndpoints.NvidiaNemotron35SuperVideoInput;
                output: falEndpoints.NvidiaNemotron35SuperVideoOutput;
            };

            'nvidia/nemotron-3-5-super/text': {
                input: falEndpoints.NvidiaNemotron35SuperTextInput;
                output: falEndpoints.NvidiaNemotron35SuperTextOutput;
            };

            'nvidia/cosmos-3-super/text-to-image': {
                input: falEndpoints.NvidiaCosmos3SuperTextToImageInput;
                output: falEndpoints.NvidiaCosmos3SuperTextToImageOutput;
            };

            'nvidia/cosmos-3-super/image-to-video': {
                input: falEndpoints.NvidiaCosmos3SuperImageToVideoInput;
                output: falEndpoints.NvidiaCosmos3SuperImageToVideoOutput;
            };

            'mureka/api/generate/song': {
                input: falEndpoints.MurekaApiGenerateSongInput;
                output: falEndpoints.MurekaApiGenerateSongOutput;
            };

            'mureka/api/generate/podcast': {
                input: falEndpoints.MurekaApiGeneratePodcastInput;
                output: falEndpoints.MurekaApiGeneratePodcastOutput;
            };

            'mureka/api/generate/lyrics-video': {
                input: falEndpoints.MurekaApiGenerateLyricsVideoInput;
                output: falEndpoints.MurekaApiGenerateLyricsVideoOutput;
            };

            'mureka/api/generate/lyrics': {
                input: falEndpoints.MurekaApiGenerateLyricsInput;
                output: falEndpoints.MurekaApiGenerateLyricsOutput;
            };

            'mureka/api/generate/instrumental': {
                input: falEndpoints.MurekaApiGenerateInstrumentalInput;
                output: falEndpoints.MurekaApiGenerateInstrumentalOutput;
            };

            'moonvalley/marey/t2v': {
                input: falEndpoints.MoonvalleyMareyT2vInput;
                output: falEndpoints.MoonvalleyMareyT2vOutput;
            };

            'moonvalley/marey/pose-transfer': {
                input: falEndpoints.MoonvalleyMareyPoseTransferInput;
                output: falEndpoints.MoonvalleyMareyPoseTransferOutput;
            };

            'moonvalley/marey/motion-transfer': {
                input: falEndpoints.MoonvalleyMareyMotionTransferInput;
                output: falEndpoints.MoonvalleyMareyMotionTransferOutput;
            };

            'moonvalley/marey/i2v': {
                input: falEndpoints.MoonvalleyMareyI2vInput;
                output: falEndpoints.MoonvalleyMareyI2vOutput;
            };

            'mirelo-ai/sfx2.0/video-to-video': {
                input: falEndpoints.MireloaiSfx20VideoToVideoInput;
                output: falEndpoints.MireloaiSfx20VideoToVideoOutput;
            };

            'mirelo-ai/sfx2.0/video-to-audio': {
                input: falEndpoints.MireloaiSfx20VideoToAudioInput;
                output: falEndpoints.MireloaiSfx20VideoToAudioOutput;
            };

            'mirelo-ai/sfx2.0/text-to-audio': {
                input: falEndpoints.MireloaiSfx20TextToAudioInput;
                output: falEndpoints.MireloaiSfx20TextToAudioOutput;
            };

            'mirage-api/avatar-x/text-to-video': {
                input: falEndpoints.MirageapiAvatarXTextToVideoInput;
                output: falEndpoints.MirageapiAvatarXTextToVideoOutput;
            };

            'mirage-api/avatar-x/reference-to-video': {
                input: falEndpoints.MirageapiAvatarXReferenceToVideoInput;
                output: falEndpoints.MirageapiAvatarXReferenceToVideoOutput;
            };

            'minimax/music-3': {
                input: falEndpoints.MinimaxMusic3Input;
                output: falEndpoints.MinimaxMusic3Output;
            };

            'minimax/h3/text-to-video/lora': {
                input: falEndpoints.MinimaxH3TextToVideoLoraInput;
                output: falEndpoints.MinimaxH3TextToVideoLoraOutput;
            };

            'minimax/h3/text-to-video': {
                input: falEndpoints.MinimaxH3TextToVideoInput;
                output: falEndpoints.MinimaxH3TextToVideoOutput;
            };

            'minimax/h3/t2v/trainer': {
                input: falEndpoints.MinimaxH3T2vTrainerInput;
                output: falEndpoints.MinimaxH3T2vTrainerOutput;
            };

            'minimax/h3/reference-to-video/lora': {
                input: falEndpoints.MinimaxH3ReferenceToVideoLoraInput;
                output: falEndpoints.MinimaxH3ReferenceToVideoLoraOutput;
            };

            'minimax/h3/reference-to-video': {
                input: falEndpoints.MinimaxH3ReferenceToVideoInput;
                output: falEndpoints.MinimaxH3ReferenceToVideoOutput;
            };

            'minimax/h3/ref2va/trainer': {
                input: falEndpoints.MinimaxH3Ref2vaTrainerInput;
                output: falEndpoints.MinimaxH3Ref2vaTrainerOutput;
            };

            'minimax/h3/image-to-video/lora': {
                input: falEndpoints.MinimaxH3ImageToVideoLoraInput;
                output: falEndpoints.MinimaxH3ImageToVideoLoraOutput;
            };

            'minimax/h3/image-to-video': {
                input: falEndpoints.MinimaxH3ImageToVideoInput;
                output: falEndpoints.MinimaxH3ImageToVideoOutput;
            };

            'minimax/h3/i2v/trainer': {
                input: falEndpoints.MinimaxH3I2vTrainerInput;
                output: falEndpoints.MinimaxH3I2vTrainerOutput;
            };

            'minimax/h3/flf2v/trainer': {
                input: falEndpoints.MinimaxH3Flf2vTrainerInput;
                output: falEndpoints.MinimaxH3Flf2vTrainerOutput;
            };

            'minimax/h3-max/text-to-video': {
                input: falEndpoints.MinimaxH3MaxTextToVideoInput;
                output: falEndpoints.MinimaxH3MaxTextToVideoOutput;
            };

            'minimax/h3-max/styles/vhs': {
                input: falEndpoints.MinimaxH3MaxStylesVhsInput;
                output: falEndpoints.MinimaxH3MaxStylesVhsOutput;
            };

            'minimax/h3-max/styles/retro-toon-70s': {
                input: falEndpoints.MinimaxH3MaxStylesRetroToon70sInput;
                output: falEndpoints.MinimaxH3MaxStylesRetroToon70sOutput;
            };

            'minimax/h3-max/styles/low-poly': {
                input: falEndpoints.MinimaxH3MaxStylesLowPolyInput;
                output: falEndpoints.MinimaxH3MaxStylesLowPolyOutput;
            };

            'minimax/h3-max/styles/hand-drawn': {
                input: falEndpoints.MinimaxH3MaxStylesHandDrawnInput;
                output: falEndpoints.MinimaxH3MaxStylesHandDrawnOutput;
            };

            'minimax/h3-max/styles/16bit-pixel': {
                input: falEndpoints.MinimaxH3MaxStyles16bitPixelInput;
                output: falEndpoints.MinimaxH3MaxStyles16bitPixelOutput;
            };

            'minimax/h3-max/relight': {
                input: falEndpoints.MinimaxH3MaxRelightInput;
                output: falEndpoints.MinimaxH3MaxRelightOutput;
            };

            'minimax/h3-max/reframe-video': {
                input: falEndpoints.MinimaxH3MaxReframeVideoInput;
                output: falEndpoints.MinimaxH3MaxReframeVideoOutput;
            };

            'minimax/h3-max/reference-to-video': {
                input: falEndpoints.MinimaxH3MaxReferenceToVideoInput;
                output: falEndpoints.MinimaxH3MaxReferenceToVideoOutput;
            };

            'minimax/h3-max/reference-director': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'minimax/h3-max/recast': {
                input: falEndpoints.MinimaxH3MaxRecastInput;
                output: falEndpoints.MinimaxH3MaxRecastOutput;
            };

            'minimax/h3-max/lip-sync/image-to-video': {
                input: falEndpoints.MinimaxH3MaxLipSyncImageToVideoInput;
                output: falEndpoints.MinimaxH3MaxLipSyncImageToVideoOutput;
            };

            'minimax/h3-max/insert-video': {
                input: falEndpoints.MinimaxH3MaxInsertVideoInput;
                output: falEndpoints.MinimaxH3MaxInsertVideoOutput;
            };

            'minimax/h3-max/image-to-video': {
                input: falEndpoints.MinimaxH3MaxImageToVideoInput;
                output: falEndpoints.MinimaxH3MaxImageToVideoOutput;
            };

            'minimax/h3-max/extend-video': {
                input: falEndpoints.MinimaxH3MaxExtendVideoInput;
                output: falEndpoints.MinimaxH3MaxExtendVideoOutput;
            };

            'minimax/h3-max/director': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'minimax/h3-max/camera-controls': {
                input: falEndpoints.MinimaxH3MaxCameraControlsInput;
                output: falEndpoints.MinimaxH3MaxCameraControlsOutput;
            };

            'minimax/h3-max/3d-to-video': {
                input: falEndpoints.MinimaxH3Max3dToVideoInput;
                output: falEndpoints.MinimaxH3Max3dToVideoOutput;
            };

            'minimax/h3-max-turbo/text-to-video': {
                input: falEndpoints.MinimaxH3MaxTurboTextToVideoInput;
                output: falEndpoints.MinimaxH3MaxTurboTextToVideoOutput;
            };

            'minimax/h3-max-turbo/image-to-video': {
                input: falEndpoints.MinimaxH3MaxTurboImageToVideoInput;
                output: falEndpoints.MinimaxH3MaxTurboImageToVideoOutput;
            };

            'minimax/h3-max-turbo/extend-video': {
                input: falEndpoints.MinimaxH3MaxTurboExtendVideoInput;
                output: falEndpoints.MinimaxH3MaxTurboExtendVideoOutput;
            };

            'microsoft/mai-image-2.5/edit': {
                input: falEndpoints.MicrosoftMaiImage25EditInput;
                output: falEndpoints.MicrosoftMaiImage25EditOutput;
            };

            'microsoft/mai-image-2.5-pro/edit': {
                input: falEndpoints.MicrosoftMaiImage25ProEditInput;
                output: falEndpoints.MicrosoftMaiImage25ProEditOutput;
            };

            'microsoft/mai-image-2.5-pro': {
                input: falEndpoints.MicrosoftMaiImage25ProInput;
                output: falEndpoints.MicrosoftMaiImage25ProOutput;
            };

            'microsoft/mai-image-2.5': {
                input: falEndpoints.MicrosoftMaiImage25Input;
                output: falEndpoints.MicrosoftMaiImage25Output;
            };

            'meta/muse-image/text-to-image': {
                input: falEndpoints.MetaMuseImageTextToImageInput;
                output: falEndpoints.MetaMuseImageTextToImageOutput;
            };

            'meta/muse-image/edit': {
                input: falEndpoints.MetaMuseImageEditInput;
                output: falEndpoints.MetaMuseImageEditOutput;
            };

            'meshy/v7/text-to-3d': {
                input: falEndpoints.MeshyV7TextTo3dInput;
                output: falEndpoints.MeshyV7TextTo3dOutput;
            };

            'meshy/v7/retexture': {
                input: falEndpoints.MeshyV7RetextureInput;
                output: falEndpoints.MeshyV7RetextureOutput;
            };

            'meshy/v7/multi-image-to-3d': {
                input: falEndpoints.MeshyV7MultiImageTo3dInput;
                output: falEndpoints.MeshyV7MultiImageTo3dOutput;
            };

            'meshy/v7/image-to-3d': {
                input: falEndpoints.MeshyV7ImageTo3dInput;
                output: falEndpoints.MeshyV7ImageTo3dOutput;
            };

            'meshy/v7.1/text-to-3d': {
                input: falEndpoints.MeshyV71TextTo3dInput;
                output: falEndpoints.MeshyV71TextTo3dOutput;
            };

            'meshy/v7.1/multi-image-to-3d': {
                input: falEndpoints.MeshyV71MultiImageTo3dInput;
                output: falEndpoints.MeshyV71MultiImageTo3dOutput;
            };

            'meshy/v7.1/image-to-3d': {
                input: falEndpoints.MeshyV71ImageTo3dInput;
                output: falEndpoints.MeshyV71ImageTo3dOutput;
            };

            'meshy/v6/retexture': {
                input: falEndpoints.MeshyV6RetextureInput;
                output: falEndpoints.MeshyV6RetextureOutput;
            };

            'meshy/v6-lite/retexture': {
                input: falEndpoints.MeshyV6LiteRetextureInput;
                output: falEndpoints.MeshyV6LiteRetextureOutput;
            };

            'luma/agent/uni-1/v1/text-to-image': {
                input: falEndpoints.LumaAgentUni1V1TextToImageInput;
                output: falEndpoints.LumaAgentUni1V1TextToImageOutput;
            };

            'luma/agent/uni-1/v1/max/edit': {
                input: falEndpoints.LumaAgentUni1V1MaxEditInput;
                output: falEndpoints.LumaAgentUni1V1MaxEditOutput;
            };

            'luma/agent/uni-1/v1/max': {
                input: falEndpoints.LumaAgentUni1V1MaxInput;
                output: falEndpoints.LumaAgentUni1V1MaxOutput;
            };

            'luma/agent/uni-1/v1/edit': {
                input: falEndpoints.LumaAgentUni1V1EditInput;
                output: falEndpoints.LumaAgentUni1V1EditOutput;
            };

            'luma/agent/ray/v3.2/video-to-video': {
                input: falEndpoints.LumaAgentRayV32VideoToVideoInput;
                output: falEndpoints.LumaAgentRayV32VideoToVideoOutput;
            };

            'luma/agent/ray/v3.2/text-to-video': {
                input: falEndpoints.LumaAgentRayV32TextToVideoInput;
                output: falEndpoints.LumaAgentRayV32TextToVideoOutput;
            };

            'luma/agent/ray/v3.2/reframe': {
                input: falEndpoints.LumaAgentRayV32ReframeInput;
                output: falEndpoints.LumaAgentRayV32ReframeOutput;
            };

            'luma/agent/ray/v3.2/image-to-video': {
                input: falEndpoints.LumaAgentRayV32ImageToVideoInput;
                output: falEndpoints.LumaAgentRayV32ImageToVideoOutput;
            };

            'lightricks/ltx-2.5/text-to-video/pro': {
                input: falEndpoints.LightricksLtx25TextToVideoProInput;
                output: falEndpoints.LightricksLtx25TextToVideoProOutput;
            };

            'lightricks/ltx-2.5/text-to-video/fast': {
                input: falEndpoints.LightricksLtx25TextToVideoFastInput;
                output: falEndpoints.LightricksLtx25TextToVideoFastOutput;
            };

            'lightricks/ltx-2.5/image-to-video/pro': {
                input: falEndpoints.LightricksLtx25ImageToVideoProInput;
                output: falEndpoints.LightricksLtx25ImageToVideoProOutput;
            };

            'lightricks/ltx-2.5/image-to-video/fast': {
                input: falEndpoints.LightricksLtx25ImageToVideoFastInput;
                output: falEndpoints.LightricksLtx25ImageToVideoFastOutput;
            };

            'lightricks/ltx-2.5/audio-to-video/pro': {
                input: falEndpoints.LightricksLtx25AudioToVideoProInput;
                output: falEndpoints.LightricksLtx25AudioToVideoProOutput;
            };

            'lightricks/ltx-2.5/audio-to-video/fast': {
                input: falEndpoints.LightricksLtx25AudioToVideoFastInput;
                output: falEndpoints.LightricksLtx25AudioToVideoFastOutput;
            };

            'krea/v3/text-to-image': {
                input: falEndpoints.KreaV3TextToImageInput;
                output: falEndpoints.KreaV3TextToImageOutput;
            };

            'krea/v3/realtime': {
                input: falEndpoints.KreaV3RealtimeInput;
                output: falEndpoints.KreaV3RealtimeOutput;
            };

            'krea/v3/edit': {
                input: falEndpoints.KreaV3EditInput;
                output: falEndpoints.KreaV3EditOutput;
            };

            'krea/v2/medium/turbo/text-to-image': {
                input: falEndpoints.KreaV2MediumTurboTextToImageInput;
                output: falEndpoints.KreaV2MediumTurboTextToImageOutput;
            };

            'krea/v2/medium/text-to-image': {
                input: falEndpoints.KreaV2MediumTextToImageInput;
                output: falEndpoints.KreaV2MediumTextToImageOutput;
            };

            'krea/v2/large/text-to-image': {
                input: falEndpoints.KreaV2LargeTextToImageInput;
                output: falEndpoints.KreaV2LargeTextToImageOutput;
            };

            'kotoba-technologies/kotoba-tts/v2/tts/ws': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'kotoba-technologies/kotoba-stt/v1/speech-to-text': {
                input: falEndpoints.KotobatechnologiesKotobaSttV1SpeechToTextInput;
                output: falEndpoints.KotobatechnologiesKotobaSttV1SpeechToTextOutput;
            };

            'kotoba-technologies/kotoba-sts/v1/realtime_voice': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'kotoba-technologies/kotoba-streaming-stt/v1/realtime': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'ideogram/v4/trainer': {
                input: falEndpoints.IdeogramV4TrainerInput;
                output: falEndpoints.IdeogramV4TrainerOutput;
            };

            'ideogram/v4/tiling/lora': {
                input: falEndpoints.IdeogramV4TilingLoraInput;
                output: falEndpoints.IdeogramV4TilingLoraOutput;
            };

            'ideogram/v4/tiling': {
                input: falEndpoints.IdeogramV4TilingInput;
                output: falEndpoints.IdeogramV4TilingOutput;
            };

            'ideogram/v4/lora': {
                input: falEndpoints.IdeogramV4LoraInput;
                output: falEndpoints.IdeogramV4LoraOutput;
            };

            'ideogram/v4/instant': {
                input: falEndpoints.IdeogramV4InstantInput;
                output: falEndpoints.IdeogramV4InstantOutput;
            };

            'ideogram/v4/image-to-image/lora': {
                input: falEndpoints.IdeogramV4ImageToImageLoraInput;
                output: falEndpoints.IdeogramV4ImageToImageLoraOutput;
            };

            'ideogram/v4/image-to-image': {
                input: falEndpoints.IdeogramV4ImageToImageInput;
                output: falEndpoints.IdeogramV4ImageToImageOutput;
            };

            'ideogram/v4/fast': {
                input: falEndpoints.IdeogramV4FastInput;
                output: falEndpoints.IdeogramV4FastOutput;
            };

            'ideogram/v4.5/edit': {
                input: falEndpoints.IdeogramV45EditInput;
                output: falEndpoints.IdeogramV45EditOutput;
            };

            'ideogram/v4.5': {
                input: falEndpoints.IdeogramV45Input;
                output: falEndpoints.IdeogramV45Output;
            };

            'ideogram/v4': {
                input: falEndpoints.IdeogramV4Input;
                output: falEndpoints.IdeogramV4Output;
            };

            'hitem3d/hi3d/v3.0/multi-view-to-3d': {
                input: falEndpoints.Hitem3dHi3dV30MultiViewTo3dInput;
                output: falEndpoints.Hitem3dHi3dV30MultiViewTo3dOutput;
            };

            'hitem3d/hi3d/v3.0/image-to-3d': {
                input: falEndpoints.Hitem3dHi3dV30ImageTo3dInput;
                output: falEndpoints.Hitem3dHi3dV30ImageTo3dOutput;
            };

            'hitem3d/hi3d/texture': {
                input: falEndpoints.Hitem3dHi3dTextureInput;
                output: falEndpoints.Hitem3dHi3dTextureOutput;
            };

            'hitem3d/hi3d/split': {
                input: falEndpoints.Hitem3dHi3dSplitInput;
                output: falEndpoints.Hitem3dHi3dSplitOutput;
            };

            'hitem3d/hi3d/multicolor': {
                input: falEndpoints.Hitem3dHi3dMulticolorInput;
                output: falEndpoints.Hitem3dHi3dMulticolorOutput;
            };

            'hitem3d/hi3d/multi-view-to-3d': {
                input: falEndpoints.Hitem3dHi3dMultiViewTo3dInput;
                output: falEndpoints.Hitem3dHi3dMultiViewTo3dOutput;
            };

            'hitem3d/hi3d/image-to-relief': {
                input: falEndpoints.Hitem3dHi3dImageToReliefInput;
                output: falEndpoints.Hitem3dHi3dImageToReliefOutput;
            };

            'hitem3d/hi3d/image-to-3d': {
                input: falEndpoints.Hitem3dHi3dImageTo3dInput;
                output: falEndpoints.Hitem3dHi3dImageTo3dOutput;
            };

            'google/virtual-try-on': {
                input: falEndpoints.GoogleVirtualTryOnInput;
                output: falEndpoints.GoogleVirtualTryOnOutput;
            };

            'google/nano-banana-lite/edit': {
                input: falEndpoints.GoogleNanoBananaLiteEditInput;
                output: falEndpoints.GoogleNanoBananaLiteEditOutput;
            };

            'google/nano-banana-lite': {
                input: falEndpoints.GoogleNanoBananaLiteInput;
                output: falEndpoints.GoogleNanoBananaLiteOutput;
            };

            'google/nano-banana-2.1/edit': {
                input: falEndpoints.GoogleNanoBanana21EditInput;
                output: falEndpoints.GoogleNanoBanana21EditOutput;
            };

            'google/nano-banana-2.1': {
                input: falEndpoints.GoogleNanoBanana21Input;
                output: falEndpoints.GoogleNanoBanana21Output;
            };

            'google/nano-banana-2-lite': {
                input: falEndpoints.GoogleNanoBanana2LiteInput;
                output: falEndpoints.GoogleNanoBanana2LiteOutput;
            };

            'google/lyria-3.5': {
                input: falEndpoints.GoogleLyria35Input;
                output: falEndpoints.GoogleLyria35Output;
            };

            'google/gemini-omni-flash/v1.1/text-to-video': {
                input: falEndpoints.GoogleGeminiOmniFlashV11TextToVideoInput;
                output: falEndpoints.GoogleGeminiOmniFlashV11TextToVideoOutput;
            };

            'google/gemini-omni-flash/v1.1/reference-to-video': {
                input: falEndpoints.GoogleGeminiOmniFlashV11ReferenceToVideoInput;
                output: falEndpoints.GoogleGeminiOmniFlashV11ReferenceToVideoOutput;
            };

            'google/gemini-omni-flash/v1.1/image-to-video': {
                input: falEndpoints.GoogleGeminiOmniFlashV11ImageToVideoInput;
                output: falEndpoints.GoogleGeminiOmniFlashV11ImageToVideoOutput;
            };

            'google/gemini-omni-flash/v1.1/edit': {
                input: falEndpoints.GoogleGeminiOmniFlashV11EditInput;
                output: falEndpoints.GoogleGeminiOmniFlashV11EditOutput;
            };

            'google/gemini-omni-flash/reference-to-video': {
                input: falEndpoints.GoogleGeminiOmniFlashReferenceToVideoInput;
                output: falEndpoints.GoogleGeminiOmniFlashReferenceToVideoOutput;
            };

            'google/gemini-omni-flash/image-to-video': {
                input: falEndpoints.GoogleGeminiOmniFlashImageToVideoInput;
                output: falEndpoints.GoogleGeminiOmniFlashImageToVideoOutput;
            };

            'google/gemini-omni-flash/edit': {
                input: falEndpoints.GoogleGeminiOmniFlashEditInput;
                output: falEndpoints.GoogleGeminiOmniFlashEditOutput;
            };

            'google/gemini-omni-flash': {
                input: falEndpoints.GoogleGeminiOmniFlashInput;
                output: falEndpoints.GoogleGeminiOmniFlashOutput;
            };

            'google/gemini-3.8-flash-tts': {
                input: falEndpoints.GoogleGemini38FlashTtsInput;
                output: falEndpoints.GoogleGemini38FlashTtsOutput;
            };

            'google/gemini-3.8-flash-lite-tts': {
                input: falEndpoints.GoogleGemini38FlashLiteTtsInput;
                output: falEndpoints.GoogleGemini38FlashLiteTtsOutput;
            };

            'fal-ai/zonos2': {
                input: falEndpoints.Zonos2Input;
                output: falEndpoints.Zonos2Output;
            };

            'fal-ai/zonos': {
                input: falEndpoints.ZonosInput;
                output: falEndpoints.ZonosOutput;
            };

            'fal-ai/z-image/turbo/tiling/lora': {
                input: falEndpoints.ZImageTurboTilingLoraInput;
                output: falEndpoints.ZImageTurboTilingLoraOutput;
            };

            'fal-ai/z-image/turbo/tiling': {
                input: falEndpoints.ZImageTurboTilingInput;
                output: falEndpoints.ZImageTurboTilingOutput;
            };

            'fal-ai/z-image/turbo/lora': {
                input: falEndpoints.ZImageTurboLoraInput;
                output: falEndpoints.ZImageTurboLoraOutput;
            };

            'fal-ai/z-image/turbo/inpaint/lora': {
                input: falEndpoints.ZImageTurboInpaintLoraInput;
                output: falEndpoints.ZImageTurboInpaintLoraOutput;
            };

            'fal-ai/z-image/turbo/inpaint': {
                input: falEndpoints.ZImageTurboInpaintInput;
                output: falEndpoints.ZImageTurboInpaintOutput;
            };

            'fal-ai/z-image/turbo/image-to-image/lora': {
                input: falEndpoints.ZImageTurboImageToImageLoraInput;
                output: falEndpoints.ZImageTurboImageToImageLoraOutput;
            };

            'fal-ai/z-image/turbo/image-to-image': {
                input: falEndpoints.ZImageTurboImageToImageInput;
                output: falEndpoints.ZImageTurboImageToImageOutput;
            };

            'fal-ai/z-image/turbo/controlnet/lora': {
                input: falEndpoints.ZImageTurboControlnetLoraInput;
                output: falEndpoints.ZImageTurboControlnetLoraOutput;
            };

            'fal-ai/z-image/turbo/controlnet': {
                input: falEndpoints.ZImageTurboControlnetInput;
                output: falEndpoints.ZImageTurboControlnetOutput;
            };

            'fal-ai/z-image/turbo': {
                input: falEndpoints.ZImageTurboInput;
                output: falEndpoints.ZImageTurboOutput;
            };

            'fal-ai/z-image/base/lora': {
                input: falEndpoints.ZImageBaseLoraInput;
                output: falEndpoints.ZImageBaseLoraOutput;
            };

            'fal-ai/z-image/base': {
                input: falEndpoints.ZImageBaseInput;
                output: falEndpoints.ZImageBaseOutput;
            };

            'fal-ai/z-image-turbo-trainer-v2': {
                input: falEndpoints.ZImageTurboTrainerV2Input;
                output: falEndpoints.ZImageTurboTrainerV2Output;
            };

            'fal-ai/z-image-trainer': {
                input: falEndpoints.ZImageTrainerInput;
                output: falEndpoints.ZImageTrainerOutput;
            };

            'fal-ai/x-ailab/nsfw': {
                input: falEndpoints.XAilabNsfwInput;
                output: falEndpoints.XAilabNsfwOutput;
            };

            'fal-ai/workflow-utilities/trim-video': {
                input: falEndpoints.WorkflowUtilitiesTrimVideoInput;
                output: falEndpoints.WorkflowUtilitiesTrimVideoOutput;
            };

            'fal-ai/workflow-utilities/scale-video': {
                input: falEndpoints.WorkflowUtilitiesScaleVideoInput;
                output: falEndpoints.WorkflowUtilitiesScaleVideoOutput;
            };

            'fal-ai/workflow-utilities/reverse-video': {
                input: falEndpoints.WorkflowUtilitiesReverseVideoInput;
                output: falEndpoints.WorkflowUtilitiesReverseVideoOutput;
            };

            'fal-ai/workflow-utilities/pick-image-by-index': {
                input: falEndpoints.WorkflowUtilitiesPickImageByIndexInput;
                output: falEndpoints.WorkflowUtilitiesPickImageByIndexOutput;
            };

            'fal-ai/workflow-utilities/interleave-video': {
                input: falEndpoints.WorkflowUtilitiesInterleaveVideoInput;
                output: falEndpoints.WorkflowUtilitiesInterleaveVideoOutput;
            };

            'fal-ai/workflow-utilities/impulse-response': {
                input: falEndpoints.WorkflowUtilitiesImpulseResponseInput;
                output: falEndpoints.WorkflowUtilitiesImpulseResponseOutput;
            };

            'fal-ai/workflow-utilities/extract-nth-frame': {
                input: falEndpoints.WorkflowUtilitiesExtractNthFrameInput;
                output: falEndpoints.WorkflowUtilitiesExtractNthFrameOutput;
            };

            'fal-ai/workflow-utilities/blend-video': {
                input: falEndpoints.WorkflowUtilitiesBlendVideoInput;
                output: falEndpoints.WorkflowUtilitiesBlendVideoOutput;
            };

            'fal-ai/workflow-utilities/auto-subtitle': {
                input: falEndpoints.WorkflowUtilitiesAutoSubtitleInput;
                output: falEndpoints.WorkflowUtilitiesAutoSubtitleOutput;
            };

            'fal-ai/workflow-utilities/audio-compressor': {
                input: falEndpoints.WorkflowUtilitiesAudioCompressorInput;
                output: falEndpoints.WorkflowUtilitiesAudioCompressorOutput;
            };

            'fal-ai/wizper': {
                input: falEndpoints.WizperInput;
                output: falEndpoints.WizperOutput;
            };

            'fal-ai/wan/v2.7/text-to-video': {
                input: falEndpoints.WanV27TextToVideoInput;
                output: falEndpoints.WanV27TextToVideoOutput;
            };

            'fal-ai/wan/v2.7/text-to-image': {
                input: falEndpoints.WanV27TextToImageInput;
                output: falEndpoints.WanV27TextToImageOutput;
            };

            'fal-ai/wan/v2.7/reference-to-video': {
                input: falEndpoints.WanV27ReferenceToVideoInput;
                output: falEndpoints.WanV27ReferenceToVideoOutput;
            };

            'fal-ai/wan/v2.7/pro/text-to-image': {
                input: falEndpoints.WanV27ProTextToImageInput;
                output: falEndpoints.WanV27ProTextToImageOutput;
            };

            'fal-ai/wan/v2.7/pro/edit': {
                input: falEndpoints.WanV27ProEditInput;
                output: falEndpoints.WanV27ProEditOutput;
            };

            'fal-ai/wan/v2.7/image-to-video': {
                input: falEndpoints.WanV27ImageToVideoInput;
                output: falEndpoints.WanV27ImageToVideoOutput;
            };

            'fal-ai/wan/v2.7/edit-video': {
                input: falEndpoints.WanV27EditVideoInput;
                output: falEndpoints.WanV27EditVideoOutput;
            };

            'fal-ai/wan/v2.7/edit': {
                input: falEndpoints.WanV27EditInput;
                output: falEndpoints.WanV27EditOutput;
            };

            'fal-ai/wan/v2.2-a14b/video-to-video': {
                input: falEndpoints.WanV22A14bVideoToVideoInput;
                output: falEndpoints.WanV22A14bVideoToVideoOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video/turbo': {
                input: falEndpoints.WanV22A14bTextToVideoTurboInput;
                output: falEndpoints.WanV22A14bTextToVideoTurboOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video/lora': {
                input: falEndpoints.WanV22A14bTextToVideoLoraInput;
                output: falEndpoints.WanV22A14bTextToVideoLoraOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-video': {
                input: falEndpoints.WanV22A14bTextToVideoInput;
                output: falEndpoints.WanV22A14bTextToVideoOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-image/lora': {
                input: falEndpoints.WanV22A14bTextToImageLoraInput;
                output: falEndpoints.WanV22A14bTextToImageLoraOutput;
            };

            'fal-ai/wan/v2.2-a14b/text-to-image': {
                input: falEndpoints.WanV22A14bTextToImageInput;
                output: falEndpoints.WanV22A14bTextToImageOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video/turbo': {
                input: falEndpoints.WanV22A14bImageToVideoTurboInput;
                output: falEndpoints.WanV22A14bImageToVideoTurboOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video/lora': {
                input: falEndpoints.WanV22A14bImageToVideoLoraInput;
                output: falEndpoints.WanV22A14bImageToVideoLoraOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-video': {
                input: falEndpoints.WanV22A14bImageToVideoInput;
                output: falEndpoints.WanV22A14bImageToVideoOutput;
            };

            'fal-ai/wan/v2.2-a14b/image-to-image': {
                input: falEndpoints.WanV22A14bImageToImageInput;
                output: falEndpoints.WanV22A14bImageToImageOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video/fast-wan': {
                input: falEndpoints.WanV225bTextToVideoFastWanInput;
                output: falEndpoints.WanV225bTextToVideoFastWanOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video/distill': {
                input: falEndpoints.WanV225bTextToVideoDistillInput;
                output: falEndpoints.WanV225bTextToVideoDistillOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-video': {
                input: falEndpoints.WanV225bTextToVideoInput;
                output: falEndpoints.WanV225bTextToVideoOutput;
            };

            'fal-ai/wan/v2.2-5b/text-to-image': {
                input: falEndpoints.WanV225bTextToImageInput;
                output: falEndpoints.WanV225bTextToImageOutput;
            };

            'fal-ai/wan/v2.2-5b/image-to-video': {
                input: falEndpoints.WanV225bImageToVideoInput;
                output: falEndpoints.WanV225bImageToVideoOutput;
            };

            'fal-ai/wan/v2.2-14b/speech-to-video': {
                input: falEndpoints.WanV2214bSpeechToVideoInput;
                output: falEndpoints.WanV2214bSpeechToVideoOutput;
            };

            'fal-ai/wan/v2.2-14b/animate/replace': {
                input: falEndpoints.WanV2214bAnimateReplaceInput;
                output: falEndpoints.WanV2214bAnimateReplaceOutput;
            };

            'fal-ai/wan/v2.2-14b/animate/move': {
                input: falEndpoints.WanV2214bAnimateMoveInput;
                output: falEndpoints.WanV2214bAnimateMoveOutput;
            };

            'fal-ai/wan-vace-apps/video-edit': {
                input: falEndpoints.WanVaceAppsVideoEditInput;
                output: falEndpoints.WanVaceAppsVideoEditOutput;
            };

            'fal-ai/wan-vace-apps/long-reframe': {
                input: falEndpoints.WanVaceAppsLongReframeInput;
                output: falEndpoints.WanVaceAppsLongReframeOutput;
            };

            'fal-ai/wan-vace-14b/reframe': {
                input: falEndpoints.WanVace14bReframeInput;
                output: falEndpoints.WanVace14bReframeOutput;
            };

            'fal-ai/wan-vace-14b/pose': {
                input: falEndpoints.WanVace14bPoseInput;
                output: falEndpoints.WanVace14bPoseOutput;
            };

            'fal-ai/wan-vace-14b/outpainting': {
                input: falEndpoints.WanVace14bOutpaintingInput;
                output: falEndpoints.WanVace14bOutpaintingOutput;
            };

            'fal-ai/wan-vace-14b/inpainting': {
                input: falEndpoints.WanVace14bInpaintingInput;
                output: falEndpoints.WanVace14bInpaintingOutput;
            };

            'fal-ai/wan-vace-14b/depth': {
                input: falEndpoints.WanVace14bDepthInput;
                output: falEndpoints.WanVace14bDepthOutput;
            };

            'fal-ai/wan-vace-14b': {
                input: falEndpoints.WanVace14bInput;
                output: falEndpoints.WanVace14bOutput;
            };

            'fal-ai/wan-trainer/t2v-14b': {
                input: falEndpoints.WanTrainerT2v14bInput;
                output: falEndpoints.WanTrainerT2v14bOutput;
            };

            'fal-ai/wan-trainer/t2v': {
                input: falEndpoints.WanTrainerT2vInput;
                output: falEndpoints.WanTrainerT2vOutput;
            };

            'fal-ai/wan-trainer/i2v-720p': {
                input: falEndpoints.WanTrainerI2v720pInput;
                output: falEndpoints.WanTrainerI2v720pOutput;
            };

            'fal-ai/wan-t2v-lora': {
                input: falEndpoints.WanT2vLoraInput;
                output: falEndpoints.WanT2vLoraOutput;
            };

            'fal-ai/wan-t2v': {
                input: falEndpoints.WanT2vInput;
                output: falEndpoints.WanT2vOutput;
            };

            'fal-ai/wan-pro/text-to-video': {
                input: falEndpoints.WanProTextToVideoInput;
                output: falEndpoints.WanProTextToVideoOutput;
            };

            'fal-ai/wan-pro/image-to-video': {
                input: falEndpoints.WanProImageToVideoInput;
                output: falEndpoints.WanProImageToVideoOutput;
            };

            'fal-ai/wan-motion': {
                input: falEndpoints.WanMotionInput;
                output: falEndpoints.WanMotionOutput;
            };

            'fal-ai/wan-i2v-lora': {
                input: falEndpoints.WanI2vLoraInput;
                output: falEndpoints.WanI2vLoraOutput;
            };

            'fal-ai/wan-i2v': {
                input: falEndpoints.WanI2vInput;
                output: falEndpoints.WanI2vOutput;
            };

            'fal-ai/wan-flf2v': {
                input: falEndpoints.WanFlf2vInput;
                output: falEndpoints.WanFlf2vOutput;
            };

            'fal-ai/wan-effects': {
                input: falEndpoints.WanEffectsInput;
                output: falEndpoints.WanEffectsOutput;
            };

            'fal-ai/wan-25-preview/text-to-video': {
                input: falEndpoints.Wan25PreviewTextToVideoInput;
                output: falEndpoints.Wan25PreviewTextToVideoOutput;
            };

            'fal-ai/wan-25-preview/text-to-image': {
                input: falEndpoints.Wan25PreviewTextToImageInput;
                output: falEndpoints.Wan25PreviewTextToImageOutput;
            };

            'fal-ai/wan-25-preview/image-to-video': {
                input: falEndpoints.Wan25PreviewImageToVideoInput;
                output: falEndpoints.Wan25PreviewImageToVideoOutput;
            };

            'fal-ai/wan-25-preview/image-to-image': {
                input: falEndpoints.Wan25PreviewImageToImageInput;
                output: falEndpoints.Wan25PreviewImageToImageOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/reframe': {
                input: falEndpoints.Wan22VaceFunA14bReframeInput;
                output: falEndpoints.Wan22VaceFunA14bReframeOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/outpainting': {
                input: falEndpoints.Wan22VaceFunA14bOutpaintingInput;
                output: falEndpoints.Wan22VaceFunA14bOutpaintingOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/inpainting': {
                input: falEndpoints.Wan22VaceFunA14bInpaintingInput;
                output: falEndpoints.Wan22VaceFunA14bInpaintingOutput;
            };

            'fal-ai/wan-22-vace-fun-a14b/depth': {
                input: falEndpoints.Wan22VaceFunA14bDepthInput;
                output: falEndpoints.Wan22VaceFunA14bDepthOutput;
            };

            'fal-ai/wan-22-trainer/t2v-a14b': {
                input: falEndpoints.Wan22TrainerT2vA14bInput;
                output: falEndpoints.Wan22TrainerT2vA14bOutput;
            };

            'fal-ai/wan-22-trainer/i2v-a14b': {
                input: falEndpoints.Wan22TrainerI2vA14bInput;
                output: falEndpoints.Wan22TrainerI2vA14bOutput;
            };

            'fal-ai/wan-22-image-trainer': {
                input: falEndpoints.Wan22ImageTrainerInput;
                output: falEndpoints.Wan22ImageTrainerOutput;
            };

            'fal-ai/void-video-inpainting': {
                input: falEndpoints.VoidVideoInpaintingInput;
                output: falEndpoints.VoidVideoInpaintingOutput;
            };

            'fal-ai/vidu/template-to-video': {
                input: falEndpoints.ViduTemplateToVideoInput;
                output: falEndpoints.ViduTemplateToVideoOutput;
            };

            'fal-ai/vidu/start-end-to-video': {
                input: falEndpoints.ViduStartEndToVideoInput;
                output: falEndpoints.ViduStartEndToVideoOutput;
            };

            'fal-ai/vidu/reference-to-video': {
                input: falEndpoints.ViduReferenceToVideoInput;
                output: falEndpoints.ViduReferenceToVideoOutput;
            };

            'fal-ai/vidu/reference-to-image': {
                input: falEndpoints.ViduReferenceToImageInput;
                output: falEndpoints.ViduReferenceToImageOutput;
            };

            'fal-ai/vidu/q4/reference-to-video': {
                input: falEndpoints.ViduQ4ReferenceToVideoInput;
                output: falEndpoints.ViduQ4ReferenceToVideoOutput;
            };

            'fal-ai/vidu/q4/image-to-video': {
                input: falEndpoints.ViduQ4ImageToVideoInput;
                output: falEndpoints.ViduQ4ImageToVideoOutput;
            };

            'fal-ai/vidu/q3/text-to-video/turbo': {
                input: falEndpoints.ViduQ3TextToVideoTurboInput;
                output: falEndpoints.ViduQ3TextToVideoTurboOutput;
            };

            'fal-ai/vidu/q3/text-to-video': {
                input: falEndpoints.ViduQ3TextToVideoInput;
                output: falEndpoints.ViduQ3TextToVideoOutput;
            };

            'fal-ai/vidu/q3/reference-to-video/mix': {
                input: falEndpoints.ViduQ3ReferenceToVideoMixInput;
                output: falEndpoints.ViduQ3ReferenceToVideoMixOutput;
            };

            'fal-ai/vidu/q3/image-to-video/turbo': {
                input: falEndpoints.ViduQ3ImageToVideoTurboInput;
                output: falEndpoints.ViduQ3ImageToVideoTurboOutput;
            };

            'fal-ai/vidu/q3/image-to-video': {
                input: falEndpoints.ViduQ3ImageToVideoInput;
                output: falEndpoints.ViduQ3ImageToVideoOutput;
            };

            'fal-ai/vidu/q2/video-extension/pro': {
                input: falEndpoints.ViduQ2VideoExtensionProInput;
                output: falEndpoints.ViduQ2VideoExtensionProOutput;
            };

            'fal-ai/vidu/q2/text-to-video': {
                input: falEndpoints.ViduQ2TextToVideoInput;
                output: falEndpoints.ViduQ2TextToVideoOutput;
            };

            'fal-ai/vidu/q2/text-to-image': {
                input: falEndpoints.ViduQ2TextToImageInput;
                output: falEndpoints.ViduQ2TextToImageOutput;
            };

            'fal-ai/vidu/q2/reference-to-video/pro': {
                input: falEndpoints.ViduQ2ReferenceToVideoProInput;
                output: falEndpoints.ViduQ2ReferenceToVideoProOutput;
            };

            'fal-ai/vidu/q2/reference-to-image': {
                input: falEndpoints.ViduQ2ReferenceToImageInput;
                output: falEndpoints.ViduQ2ReferenceToImageOutput;
            };

            'fal-ai/vidu/q2/image-to-video/turbo': {
                input: falEndpoints.ViduQ2ImageToVideoTurboInput;
                output: falEndpoints.ViduQ2ImageToVideoTurboOutput;
            };

            'fal-ai/vidu/q2/image-to-video/pro': {
                input: falEndpoints.ViduQ2ImageToVideoProInput;
                output: falEndpoints.ViduQ2ImageToVideoProOutput;
            };

            'fal-ai/vidu/q1/text-to-video': {
                input: falEndpoints.ViduQ1TextToVideoInput;
                output: falEndpoints.ViduQ1TextToVideoOutput;
            };

            'fal-ai/vidu/q1/start-end-to-video': {
                input: falEndpoints.ViduQ1StartEndToVideoInput;
                output: falEndpoints.ViduQ1StartEndToVideoOutput;
            };

            'fal-ai/vidu/q1/reference-to-video': {
                input: falEndpoints.ViduQ1ReferenceToVideoInput;
                output: falEndpoints.ViduQ1ReferenceToVideoOutput;
            };

            'fal-ai/vidu/q1/image-to-video': {
                input: falEndpoints.ViduQ1ImageToVideoInput;
                output: falEndpoints.ViduQ1ImageToVideoOutput;
            };

            'fal-ai/vidu/image-to-video': {
                input: falEndpoints.ViduImageToVideoInput;
                output: falEndpoints.ViduImageToVideoOutput;
            };

            'fal-ai/video-upscaler': {
                input: falEndpoints.VideoUpscalerInput;
                output: falEndpoints.VideoUpscalerOutput;
            };

            'fal-ai/video-understanding': {
                input: falEndpoints.VideoUnderstandingInput;
                output: falEndpoints.VideoUnderstandingOutput;
            };

            'fal-ai/video-prompt-generator': {
                input: falEndpoints.VideoPromptGeneratorInput;
                output: falEndpoints.VideoPromptGeneratorOutput;
            };

            'fal-ai/vibevoice/7b': {
                input: falEndpoints.Vibevoice7bInput;
                output: falEndpoints.Vibevoice7bOutput;
            };

            'fal-ai/vibevoice/0.5b': {
                input: falEndpoints.Vibevoice05bInput;
                output: falEndpoints.Vibevoice05bOutput;
            };

            'fal-ai/vibevoice': {
                input: falEndpoints.VibevoiceInput;
                output: falEndpoints.VibevoiceOutput;
            };

            'fal-ai/vggt-1b': {
                input: falEndpoints.Vggt1bInput;
                output: falEndpoints.Vggt1bOutput;
            };

            'fal-ai/vecglypher/image-to-svg': {
                input: falEndpoints.VecglypherImageToSvgInput;
                output: falEndpoints.VecglypherImageToSvgOutput;
            };

            'fal-ai/vecglypher': {
                input: falEndpoints.VecglypherInput;
                output: falEndpoints.VecglypherOutput;
            };

            'fal-ai/uso': {
                input: falEndpoints.UsoInput;
                output: falEndpoints.UsoOutput;
            };

            'fal-ai/uno': {
                input: falEndpoints.UnoInput;
                output: falEndpoints.UnoOutput;
            };

            'fal-ai/turbo-flux-trainer': {
                input: falEndpoints.TurboFluxTrainerInput;
                output: falEndpoints.TurboFluxTrainerOutput;
            };

            'fal-ai/triposr': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/trellis/multi': {
                input: falEndpoints.TrellisMultiInput;
                output: falEndpoints.TrellisMultiOutput;
            };

            'fal-ai/trellis-2/retexture': {
                input: falEndpoints.Trellis2RetextureInput;
                output: falEndpoints.Trellis2RetextureOutput;
            };

            'fal-ai/trellis-2-lora-trainer': {
                input: falEndpoints.Trellis2LoraTrainerInput;
                output: falEndpoints.Trellis2LoraTrainerOutput;
            };

            'fal-ai/trellis-2-lora': {
                input: falEndpoints.Trellis2LoraInput;
                output: falEndpoints.Trellis2LoraOutput;
            };

            'fal-ai/trellis-2': {
                input: falEndpoints.Trellis2Input;
                output: falEndpoints.Trellis2Output;
            };

            'fal-ai/trellis': {
                input: falEndpoints.TrellisInput;
                output: falEndpoints.TrellisOutput;
            };

            'fal-ai/thinksound/audio': {
                input: falEndpoints.ThinksoundAudioInput;
                output: falEndpoints.ThinksoundAudioOutput;
            };

            'fal-ai/thinksound': {
                input: falEndpoints.ThinksoundInput;
                output: falEndpoints.ThinksoundOutput;
            };

            'fal-ai/telestyle-v2': {
                input: falEndpoints.TelestyleV2Input;
                output: falEndpoints.TelestyleV2Output;
            };

            'fal-ai/tada/3b/text-to-speech': {
                input: falEndpoints.Tada3bTextToSpeechInput;
                output: falEndpoints.Tada3bTextToSpeechOutput;
            };

            'fal-ai/tada/1b/text-to-speech': {
                input: falEndpoints.Tada1bTextToSpeechInput;
                output: falEndpoints.Tada1bTextToSpeechOutput;
            };

            'fal-ai/t2v-turbo': {
                input: falEndpoints.T2vTurboInput;
                output: falEndpoints.T2vTurboOutput;
            };

            'fal-ai/sync-lipsync/v3/image-to-video': {
                input: falEndpoints.SyncLipsyncV3ImageToVideoInput;
                output: falEndpoints.SyncLipsyncV3ImageToVideoOutput;
            };

            'fal-ai/sync-lipsync/v3': {
                input: falEndpoints.SyncLipsyncV3Input;
                output: falEndpoints.SyncLipsyncV3Output;
            };

            'fal-ai/sync-lipsync/v2/pro': {
                input: falEndpoints.SyncLipsyncV2ProInput;
                output: falEndpoints.SyncLipsyncV2ProOutput;
            };

            'fal-ai/sync-lipsync/v2': {
                input: falEndpoints.SyncLipsyncV2Input;
                output: falEndpoints.SyncLipsyncV2Output;
            };

            'fal-ai/sync-lipsync/react-1': {
                input: falEndpoints.SyncLipsyncReact1Input;
                output: falEndpoints.SyncLipsyncReact1Output;
            };

            'fal-ai/sync-lipsync': {
                input: falEndpoints.SyncLipsyncInput;
                output: falEndpoints.SyncLipsyncOutput;
            };

            'fal-ai/stepx-edit2': {
                input: falEndpoints.StepxEdit2Input;
                output: falEndpoints.StepxEdit2Output;
            };

            'fal-ai/stable-video': {
                input: falEndpoints.StableVideoInput;
                output: falEndpoints.StableVideoOutput;
            };

            'fal-ai/stable-diffusion-v35-medium': {
                input: falEndpoints.StableDiffusionV35MediumInput;
                output: falEndpoints.StableDiffusionV35MediumOutput;
            };

            'fal-ai/stable-diffusion-v35-large': {
                input: falEndpoints.StableDiffusionV35LargeInput;
                output: falEndpoints.StableDiffusionV35LargeOutput;
            };

            'fal-ai/stable-diffusion-v3-medium/image-to-image': {
                input: falEndpoints.StableDiffusionV3MediumImageToImageInput;
                output: falEndpoints.StableDiffusionV3MediumImageToImageOutput;
            };

            'fal-ai/stable-diffusion-v3-medium': {
                input: falEndpoints.StableDiffusionV3MediumInput;
                output: falEndpoints.StableDiffusionV3MediumOutput;
            };

            'fal-ai/stable-diffusion-v15': {
                input: falEndpoints.StableDiffusionV15Input;
                output: falEndpoints.StableDiffusionV15Output;
            };

            'fal-ai/stable-cascade/sote-diffusion': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/stable-cascade': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/stable-audio-3/small/sfx/text-to-audio': {
                input: falEndpoints.StableAudio3SmallSfxTextToAudioInput;
                output: falEndpoints.StableAudio3SmallSfxTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/base/text-to-audio': {
                input: falEndpoints.StableAudio3SmallSfxBaseTextToAudioInput;
                output: falEndpoints.StableAudio3SmallSfxBaseTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/base/audio-to-audio': {
                input: falEndpoints.StableAudio3SmallSfxBaseAudioToAudioInput;
                output: falEndpoints.StableAudio3SmallSfxBaseAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/base/audio-outpainting': {
                input: falEndpoints.StableAudio3SmallSfxBaseAudioOutpaintingInput;
                output: falEndpoints.StableAudio3SmallSfxBaseAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/base/audio-inpainting': {
                input: falEndpoints.StableAudio3SmallSfxBaseAudioInpaintingInput;
                output: falEndpoints.StableAudio3SmallSfxBaseAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/audio-to-audio': {
                input: falEndpoints.StableAudio3SmallSfxAudioToAudioInput;
                output: falEndpoints.StableAudio3SmallSfxAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/audio-outpainting': {
                input: falEndpoints.StableAudio3SmallSfxAudioOutpaintingInput;
                output: falEndpoints.StableAudio3SmallSfxAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/sfx/audio-inpainting': {
                input: falEndpoints.StableAudio3SmallSfxAudioInpaintingInput;
                output: falEndpoints.StableAudio3SmallSfxAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/music/text-to-audio': {
                input: falEndpoints.StableAudio3SmallMusicTextToAudioInput;
                output: falEndpoints.StableAudio3SmallMusicTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/music/base/text-to-audio': {
                input: falEndpoints.StableAudio3SmallMusicBaseTextToAudioInput;
                output: falEndpoints.StableAudio3SmallMusicBaseTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/music/base/audio-to-audio': {
                input: falEndpoints.StableAudio3SmallMusicBaseAudioToAudioInput;
                output: falEndpoints.StableAudio3SmallMusicBaseAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/music/base/audio-outpainting': {
                input: falEndpoints.StableAudio3SmallMusicBaseAudioOutpaintingInput;
                output: falEndpoints.StableAudio3SmallMusicBaseAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/music/base/audio-inpainting': {
                input: falEndpoints.StableAudio3SmallMusicBaseAudioInpaintingInput;
                output: falEndpoints.StableAudio3SmallMusicBaseAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/music/audio-to-audio': {
                input: falEndpoints.StableAudio3SmallMusicAudioToAudioInput;
                output: falEndpoints.StableAudio3SmallMusicAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/small/music/audio-outpainting': {
                input: falEndpoints.StableAudio3SmallMusicAudioOutpaintingInput;
                output: falEndpoints.StableAudio3SmallMusicAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/small/music/audio-inpainting': {
                input: falEndpoints.StableAudio3SmallMusicAudioInpaintingInput;
                output: falEndpoints.StableAudio3SmallMusicAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3/medium/text-to-audio': {
                input: falEndpoints.StableAudio3MediumTextToAudioInput;
                output: falEndpoints.StableAudio3MediumTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/medium/base/text-to-audio': {
                input: falEndpoints.StableAudio3MediumBaseTextToAudioInput;
                output: falEndpoints.StableAudio3MediumBaseTextToAudioOutput;
            };

            'fal-ai/stable-audio-3/medium/base/audio-to-audio': {
                input: falEndpoints.StableAudio3MediumBaseAudioToAudioInput;
                output: falEndpoints.StableAudio3MediumBaseAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/medium/base/audio-outpainting': {
                input: falEndpoints.StableAudio3MediumBaseAudioOutpaintingInput;
                output: falEndpoints.StableAudio3MediumBaseAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/medium/base/audio-inpainting': {
                input: falEndpoints.StableAudio3MediumBaseAudioInpaintingInput;
                output: falEndpoints.StableAudio3MediumBaseAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3/medium/audio-to-audio': {
                input: falEndpoints.StableAudio3MediumAudioToAudioInput;
                output: falEndpoints.StableAudio3MediumAudioToAudioOutput;
            };

            'fal-ai/stable-audio-3/medium/audio-outpainting': {
                input: falEndpoints.StableAudio3MediumAudioOutpaintingInput;
                output: falEndpoints.StableAudio3MediumAudioOutpaintingOutput;
            };

            'fal-ai/stable-audio-3/medium/audio-inpainting': {
                input: falEndpoints.StableAudio3MediumAudioInpaintingInput;
                output: falEndpoints.StableAudio3MediumAudioInpaintingOutput;
            };

            'fal-ai/stable-audio-3-trainer': {
                input: falEndpoints.StableAudio3TrainerInput;
                output: falEndpoints.StableAudio3TrainerOutput;
            };

            'fal-ai/stable-audio-25/text-to-audio': {
                input: falEndpoints.StableAudio25TextToAudioInput;
                output: falEndpoints.StableAudio25TextToAudioOutput;
            };

            'fal-ai/stable-audio-25/inpaint': {
                input: falEndpoints.StableAudio25InpaintInput;
                output: falEndpoints.StableAudio25InpaintOutput;
            };

            'fal-ai/stable-audio-25/audio-to-audio': {
                input: falEndpoints.StableAudio25AudioToAudioInput;
                output: falEndpoints.StableAudio25AudioToAudioOutput;
            };

            'fal-ai/stable-audio': {
                input: falEndpoints.StableAudioInput;
                output: falEndpoints.StableAudioOutput;
            };

            'fal-ai/speech-to-text/turbo/stream': {
                input: falEndpoints.SpeechToTextTurboStreamInput;
                output: falEndpoints.SpeechToTextTurboStreamOutput;
            };

            'fal-ai/speech-to-text/turbo': {
                input: falEndpoints.SpeechToTextTurboInput;
                output: falEndpoints.SpeechToTextTurboOutput;
            };

            'fal-ai/speech-to-text/stream': {
                input: falEndpoints.SpeechToTextStreamInput;
                output: falEndpoints.SpeechToTextStreamOutput;
            };

            'fal-ai/speech-to-text': {
                input: falEndpoints.SpeechToTextInput;
                output: falEndpoints.SpeechToTextOutput;
            };

            'fal-ai/smart-turn': {
                input: falEndpoints.SmartTurnInput;
                output: falEndpoints.SmartTurnOutput;
            };

            'fal-ai/smart-resize': {
                input: falEndpoints.SmartResizeInput;
                output: falEndpoints.SmartResizeOutput;
            };

            'fal-ai/silero-vad': {
                input: falEndpoints.SileroVadInput;
                output: falEndpoints.SileroVadOutput;
            };

            'fal-ai/sensenova-u1-infographic': {
                input: falEndpoints.SensenovaU1InfographicInput;
                output: falEndpoints.SensenovaU1InfographicOutput;
            };

            'fal-ai/seedvr/upscale/video': {
                input: falEndpoints.SeedvrUpscaleVideoInput;
                output: falEndpoints.SeedvrUpscaleVideoOutput;
            };

            'fal-ai/seedvr/upscale/image/seamless': {
                input: falEndpoints.SeedvrUpscaleImageSeamlessInput;
                output: falEndpoints.SeedvrUpscaleImageSeamlessOutput;
            };

            'fal-ai/seedvr/upscale/image': {
                input: falEndpoints.SeedvrUpscaleImageInput;
                output: falEndpoints.SeedvrUpscaleImageOutput;
            };

            'fal-ai/sdxl-controlnet-union/inpainting': {
                input: falEndpoints.SdxlControlnetUnionInpaintingInput;
                output: falEndpoints.SdxlControlnetUnionInpaintingOutput;
            };

            'fal-ai/sdxl-controlnet-union/image-to-image': {
                input: falEndpoints.SdxlControlnetUnionImageToImageInput;
                output: falEndpoints.SdxlControlnetUnionImageToImageOutput;
            };

            'fal-ai/sdxl-controlnet-union': {
                input: falEndpoints.SdxlControlnetUnionInput;
                output: falEndpoints.SdxlControlnetUnionOutput;
            };

            'fal-ai/scene-finder': {
                input: falEndpoints.SceneFinderInput;
                output: falEndpoints.SceneFinderOutput;
            };

            'fal-ai/scail-2': {
                input: falEndpoints.Scail2Input;
                output: falEndpoints.Scail2Output;
            };

            'fal-ai/sana/v1.5/4.8b': {
                input: falEndpoints.SanaV1548bInput;
                output: falEndpoints.SanaV1548bOutput;
            };

            'fal-ai/sana/v1.5/1.6b': {
                input: falEndpoints.SanaV1516bInput;
                output: falEndpoints.SanaV1516bOutput;
            };

            'fal-ai/sana/sprint': {
                input: falEndpoints.SanaSprintInput;
                output: falEndpoints.SanaSprintOutput;
            };

            'fal-ai/sana': {
                input: falEndpoints.SanaInput;
                output: falEndpoints.SanaOutput;
            };

            'fal-ai/sam2/video': {
                input: falEndpoints.Sam2VideoInput;
                output: falEndpoints.Sam2VideoOutput;
            };

            'fal-ai/sam2/image': {
                input: falEndpoints.Sam2ImageInput;
                output: falEndpoints.Sam2ImageOutput;
            };

            'fal-ai/sam2/auto-segment': {
                input: falEndpoints.Sam2AutoSegmentInput;
                output: falEndpoints.Sam2AutoSegmentOutput;
            };

            'fal-ai/sam-audio/visual-separate': {
                input: falEndpoints.SamAudioVisualSeparateInput;
                output: falEndpoints.SamAudioVisualSeparateOutput;
            };

            'fal-ai/sam-audio/span-separate': {
                input: falEndpoints.SamAudioSpanSeparateInput;
                output: falEndpoints.SamAudioSpanSeparateOutput;
            };

            'fal-ai/sam-audio/separate': {
                input: falEndpoints.SamAudioSeparateInput;
                output: falEndpoints.SamAudioSeparateOutput;
            };

            'fal-ai/sam-3/video-rle': {
                input: falEndpoints.Sam3VideoRleInput;
                output: falEndpoints.Sam3VideoRleOutput;
            };

            'fal-ai/sam-3/video': {
                input: falEndpoints.Sam3VideoInput;
                output: falEndpoints.Sam3VideoOutput;
            };

            'fal-ai/sam-3/image/embed': {
                input: falEndpoints.Sam3ImageEmbedInput;
                output: falEndpoints.Sam3ImageEmbedOutput;
            };

            'fal-ai/sam-3/image-rle': {
                input: falEndpoints.Sam3ImageRleInput;
                output: falEndpoints.Sam3ImageRleOutput;
            };

            'fal-ai/sam-3/image': {
                input: falEndpoints.Sam3ImageInput;
                output: falEndpoints.Sam3ImageOutput;
            };

            'fal-ai/sam-3/3d-objects': {
                input: falEndpoints.Sam33dObjectsInput;
                output: falEndpoints.Sam33dObjectsOutput;
            };

            'fal-ai/sam-3/3d-body': {
                input: falEndpoints.Sam33dBodyInput;
                output: falEndpoints.Sam33dBodyOutput;
            };

            'fal-ai/sam-3/3d-align': {
                input: falEndpoints.Sam33dAlignInput;
                output: falEndpoints.Sam33dAlignOutput;
            };

            'fal-ai/sam-3-1/video-rle': {
                input: falEndpoints.Sam31VideoRleInput;
                output: falEndpoints.Sam31VideoRleOutput;
            };

            'fal-ai/sam-3-1/video': {
                input: falEndpoints.Sam31VideoInput;
                output: falEndpoints.Sam31VideoOutput;
            };

            'fal-ai/sam-3-1/image-rle': {
                input: falEndpoints.Sam31ImageRleInput;
                output: falEndpoints.Sam31ImageRleOutput;
            };

            'fal-ai/sam-3-1/image': {
                input: falEndpoints.Sam31ImageInput;
                output: falEndpoints.Sam31ImageOutput;
            };

            'fal-ai/sadtalker/reference': {
                input: falEndpoints.SadtalkerReferenceInput;
                output: falEndpoints.SadtalkerReferenceOutput;
            };

            'fal-ai/sadtalker': {
                input: falEndpoints.SadtalkerInput;
                output: falEndpoints.SadtalkerOutput;
            };

            'fal-ai/sa2va/8b/video': {
                input: falEndpoints.Sa2va8bVideoInput;
                output: falEndpoints.Sa2va8bVideoOutput;
            };

            'fal-ai/sa2va/8b/image': {
                input: falEndpoints.Sa2va8bImageInput;
                output: falEndpoints.Sa2va8bImageOutput;
            };

            'fal-ai/sa2va/4b/video': {
                input: falEndpoints.Sa2va4bVideoInput;
                output: falEndpoints.Sa2va4bVideoOutput;
            };

            'fal-ai/sa2va/4b/image': {
                input: falEndpoints.Sa2va4bImageInput;
                output: falEndpoints.Sa2va4bImageOutput;
            };

            'fal-ai/rife/video': {
                input: falEndpoints.RifeVideoInput;
                output: falEndpoints.RifeVideoOutput;
            };

            'fal-ai/rife': {
                input: falEndpoints.RifeInput;
                output: falEndpoints.RifeOutput;
            };

            'fal-ai/retoucher': {
                input: falEndpoints.RetoucherInput;
                output: falEndpoints.RetoucherOutput;
            };

            'fal-ai/recraft/vectorize': {
                input: falEndpoints.RecraftVectorizeInput;
                output: falEndpoints.RecraftVectorizeOutput;
            };

            'fal-ai/recraft/v4/text-to-vector': {
                input: falEndpoints.RecraftV4TextToVectorInput;
                output: falEndpoints.RecraftV4TextToVectorOutput;
            };

            'fal-ai/recraft/v4/text-to-image': {
                input: falEndpoints.RecraftV4TextToImageInput;
                output: falEndpoints.RecraftV4TextToImageOutput;
            };

            'fal-ai/recraft/v4/pro/text-to-vector': {
                input: falEndpoints.RecraftV4ProTextToVectorInput;
                output: falEndpoints.RecraftV4ProTextToVectorOutput;
            };

            'fal-ai/recraft/v4/pro/text-to-image': {
                input: falEndpoints.RecraftV4ProTextToImageInput;
                output: falEndpoints.RecraftV4ProTextToImageOutput;
            };

            'fal-ai/recraft/v4.1/utility/text-to-image': {
                input: falEndpoints.RecraftV41UtilityTextToImageInput;
                output: falEndpoints.RecraftV41UtilityTextToImageOutput;
            };

            'fal-ai/recraft/v4.1/utility/pro/text-to-image': {
                input: falEndpoints.RecraftV41UtilityProTextToImageInput;
                output: falEndpoints.RecraftV41UtilityProTextToImageOutput;
            };

            'fal-ai/recraft/v4.1/text-to-vector': {
                input: falEndpoints.RecraftV41TextToVectorInput;
                output: falEndpoints.RecraftV41TextToVectorOutput;
            };

            'fal-ai/recraft/v4.1/text-to-image': {
                input: falEndpoints.RecraftV41TextToImageInput;
                output: falEndpoints.RecraftV41TextToImageOutput;
            };

            'fal-ai/recraft/v4.1/pro/text-to-vector': {
                input: falEndpoints.RecraftV41ProTextToVectorInput;
                output: falEndpoints.RecraftV41ProTextToVectorOutput;
            };

            'fal-ai/recraft/v4.1/pro/text-to-image': {
                input: falEndpoints.RecraftV41ProTextToImageInput;
                output: falEndpoints.RecraftV41ProTextToImageOutput;
            };

            'fal-ai/recraft/v3/text-to-image': {
                input: falEndpoints.RecraftV3TextToImageInput;
                output: falEndpoints.RecraftV3TextToImageOutput;
            };

            'fal-ai/recraft/v3/image-to-image': {
                input: falEndpoints.RecraftV3ImageToImageInput;
                output: falEndpoints.RecraftV3ImageToImageOutput;
            };

            'fal-ai/recraft/v3/create-style': {
                input: falEndpoints.RecraftV3CreateStyleInput;
                output: falEndpoints.RecraftV3CreateStyleOutput;
            };

            'fal-ai/recraft/upscale/crisp': {
                input: falEndpoints.RecraftUpscaleCrispInput;
                output: falEndpoints.RecraftUpscaleCrispOutput;
            };

            'fal-ai/recraft/upscale/creative': {
                input: falEndpoints.RecraftUpscaleCreativeInput;
                output: falEndpoints.RecraftUpscaleCreativeOutput;
            };

            'fal-ai/recraft-20b': {
                input: falEndpoints.Recraft20bInput;
                output: falEndpoints.Recraft20bOutput;
            };

            'fal-ai/reconviagen-0.5': {
                input: falEndpoints.Reconviagen05Input;
                output: falEndpoints.Reconviagen05Output;
            };

            'fal-ai/realistic-vision': {
                input: falEndpoints.RealisticVisionInput;
                output: falEndpoints.RealisticVisionOutput;
            };

            'fal-ai/qwen-image/image-to-image': {
                input: falEndpoints.QwenImageImageToImageInput;
                output: falEndpoints.QwenImageImageToImageOutput;
            };

            'fal-ai/qwen-image-max/text-to-image': {
                input: falEndpoints.QwenImageMaxTextToImageInput;
                output: falEndpoints.QwenImageMaxTextToImageOutput;
            };

            'fal-ai/qwen-image-max/edit': {
                input: falEndpoints.QwenImageMaxEditInput;
                output: falEndpoints.QwenImageMaxEditOutput;
            };

            'fal-ai/qwen-image-layered/lora': {
                input: falEndpoints.QwenImageLayeredLoraInput;
                output: falEndpoints.QwenImageLayeredLoraOutput;
            };

            'fal-ai/qwen-image-layered': {
                input: falEndpoints.QwenImageLayeredInput;
                output: falEndpoints.QwenImageLayeredOutput;
            };

            'fal-ai/qwen-image-edit/inpaint': {
                input: falEndpoints.QwenImageEditInpaintInput;
                output: falEndpoints.QwenImageEditInpaintOutput;
            };

            'fal-ai/qwen-image-edit/image-to-image': {
                input: falEndpoints.QwenImageEditImageToImageInput;
                output: falEndpoints.QwenImageEditImageToImageOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/shirt-design': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryShirtDesignInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryShirtDesignOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/remove-lighting': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryRemoveLightingInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryRemoveLightingOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/remove-element': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryRemoveElementInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryRemoveElementOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/next-scene': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryNextSceneInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryNextSceneOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/multiple-angles': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryMultipleAnglesInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/lighting-restoration': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryLightingRestorationInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryLightingRestorationOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/integrate-product': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryIntegrateProductInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryIntegrateProductOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/group-photo': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryGroupPhotoInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryGroupPhotoOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora-gallery/add-background': {
                input: falEndpoints.QwenImageEditPlusLoraGalleryAddBackgroundInput;
                output: falEndpoints.QwenImageEditPlusLoraGalleryAddBackgroundOutput;
            };

            'fal-ai/qwen-image-edit-plus-lora': {
                input: falEndpoints.QwenImageEditPlusLoraInput;
                output: falEndpoints.QwenImageEditPlusLoraOutput;
            };

            'fal-ai/qwen-image-edit-plus': {
                input: falEndpoints.QwenImageEditPlusInput;
                output: falEndpoints.QwenImageEditPlusOutput;
            };

            'fal-ai/qwen-image-edit-lora': {
                input: falEndpoints.QwenImageEditLoraInput;
                output: falEndpoints.QwenImageEditLoraOutput;
            };

            'fal-ai/qwen-image-edit-2511/lora': {
                input: falEndpoints.QwenImageEdit2511LoraInput;
                output: falEndpoints.QwenImageEdit2511LoraOutput;
            };

            'fal-ai/qwen-image-edit-2511-multiple-angles': {
                input: falEndpoints.QwenImageEdit2511MultipleAnglesInput;
                output: falEndpoints.QwenImageEdit2511MultipleAnglesOutput;
            };

            'fal-ai/qwen-image-edit-2511': {
                input: falEndpoints.QwenImageEdit2511Input;
                output: falEndpoints.QwenImageEdit2511Output;
            };

            'fal-ai/qwen-image-edit-2509-trainer': {
                input: falEndpoints.QwenImageEdit2509TrainerInput;
                output: falEndpoints.QwenImageEdit2509TrainerOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/shirt-design': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryShirtDesignInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryShirtDesignOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/remove-lighting': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryRemoveLightingInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryRemoveLightingOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/remove-element': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryRemoveElementInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryRemoveElementOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/next-scene': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryNextSceneInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryNextSceneOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/multiple-angles': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryMultipleAnglesInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/lighting-restoration': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryLightingRestorationInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryLightingRestorationOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/integrate-product': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryIntegrateProductInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryIntegrateProductOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/group-photo': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryGroupPhotoInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryGroupPhotoOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora-gallery/add-background': {
                input: falEndpoints.QwenImageEdit2509LoraGalleryAddBackgroundInput;
                output: falEndpoints.QwenImageEdit2509LoraGalleryAddBackgroundOutput;
            };

            'fal-ai/qwen-image-edit-2509-lora': {
                input: falEndpoints.QwenImageEdit2509LoraInput;
                output: falEndpoints.QwenImageEdit2509LoraOutput;
            };

            'fal-ai/qwen-image-edit-2509': {
                input: falEndpoints.QwenImageEdit2509Input;
                output: falEndpoints.QwenImageEdit2509Output;
            };

            'fal-ai/qwen-image-edit': {
                input: falEndpoints.QwenImageEditInput;
                output: falEndpoints.QwenImageEditOutput;
            };

            'fal-ai/qwen-image-2512/lora': {
                input: falEndpoints.QwenImage2512LoraInput;
                output: falEndpoints.QwenImage2512LoraOutput;
            };

            'fal-ai/qwen-image-2512-trainer': {
                input: falEndpoints.QwenImage2512TrainerInput;
                output: falEndpoints.QwenImage2512TrainerOutput;
            };

            'fal-ai/qwen-image-2512': {
                input: falEndpoints.QwenImage2512Input;
                output: falEndpoints.QwenImage2512Output;
            };

            'fal-ai/qwen-image': {
                input: falEndpoints.QwenImageInput;
                output: falEndpoints.QwenImageOutput;
            };

            'fal-ai/qwen-3-tts/voice-design/1.7b': {
                input: falEndpoints.Qwen3TtsVoiceDesign17bInput;
                output: falEndpoints.Qwen3TtsVoiceDesign17bOutput;
            };

            'fal-ai/qwen-3-tts/text-to-speech/1.7b': {
                input: falEndpoints.Qwen3TtsTextToSpeech17bInput;
                output: falEndpoints.Qwen3TtsTextToSpeech17bOutput;
            };

            'fal-ai/qwen-3-tts/text-to-speech/0.6b': {
                input: falEndpoints.Qwen3TtsTextToSpeech06bInput;
                output: falEndpoints.Qwen3TtsTextToSpeech06bOutput;
            };

            'fal-ai/qwen-3-tts/clone-voice/1.7b': {
                input: falEndpoints.Qwen3TtsCloneVoice17bInput;
                output: falEndpoints.Qwen3TtsCloneVoice17bOutput;
            };

            'fal-ai/qwen-3-tts/clone-voice/0.6b': {
                input: falEndpoints.Qwen3TtsCloneVoice06bInput;
                output: falEndpoints.Qwen3TtsCloneVoice06bOutput;
            };

            'fal-ai/pulid': {
                input: falEndpoints.PulidInput;
                output: falEndpoints.PulidOutput;
            };

            'fal-ai/post-processing/vignette': {
                input: falEndpoints.PostProcessingVignetteInput;
                output: falEndpoints.PostProcessingVignetteOutput;
            };

            'fal-ai/post-processing/solarize': {
                input: falEndpoints.PostProcessingSolarizeInput;
                output: falEndpoints.PostProcessingSolarizeOutput;
            };

            'fal-ai/post-processing/sharpen': {
                input: falEndpoints.PostProcessingSharpenInput;
                output: falEndpoints.PostProcessingSharpenOutput;
            };

            'fal-ai/post-processing/parabolize': {
                input: falEndpoints.PostProcessingParabolizeInput;
                output: falEndpoints.PostProcessingParabolizeOutput;
            };

            'fal-ai/post-processing/grain': {
                input: falEndpoints.PostProcessingGrainInput;
                output: falEndpoints.PostProcessingGrainOutput;
            };

            'fal-ai/post-processing/dodge-burn': {
                input: falEndpoints.PostProcessingDodgeBurnInput;
                output: falEndpoints.PostProcessingDodgeBurnOutput;
            };

            'fal-ai/post-processing/dissolve': {
                input: falEndpoints.PostProcessingDissolveInput;
                output: falEndpoints.PostProcessingDissolveOutput;
            };

            'fal-ai/post-processing/desaturate': {
                input: falEndpoints.PostProcessingDesaturateInput;
                output: falEndpoints.PostProcessingDesaturateOutput;
            };

            'fal-ai/post-processing/color-tint': {
                input: falEndpoints.PostProcessingColorTintInput;
                output: falEndpoints.PostProcessingColorTintOutput;
            };

            'fal-ai/post-processing/color-correction': {
                input: falEndpoints.PostProcessingColorCorrectionInput;
                output: falEndpoints.PostProcessingColorCorrectionOutput;
            };

            'fal-ai/post-processing/chromatic-aberration': {
                input: falEndpoints.PostProcessingChromaticAberrationInput;
                output: falEndpoints.PostProcessingChromaticAberrationOutput;
            };

            'fal-ai/post-processing/blur': {
                input: falEndpoints.PostProcessingBlurInput;
                output: falEndpoints.PostProcessingBlurOutput;
            };

            'fal-ai/post-processing': {
                input: falEndpoints.PostProcessingInput;
                output: falEndpoints.PostProcessingOutput;
            };

            'fal-ai/pony-v7': {
                input: falEndpoints.PonyV7Input;
                output: falEndpoints.PonyV7Output;
            };

            'fal-ai/playground-v25/inpainting': {
                input: falEndpoints.PlaygroundV25InpaintingInput;
                output: falEndpoints.PlaygroundV25InpaintingOutput;
            };

            'fal-ai/playground-v25/image-to-image': {
                input: falEndpoints.PlaygroundV25ImageToImageInput;
                output: falEndpoints.PlaygroundV25ImageToImageOutput;
            };

            'fal-ai/playground-v25': {
                input: falEndpoints.PlaygroundV25Input;
                output: falEndpoints.PlaygroundV25Output;
            };

            'fal-ai/pixverse/v6/transition': {
                input: falEndpoints.PixverseV6TransitionInput;
                output: falEndpoints.PixverseV6TransitionOutput;
            };

            'fal-ai/pixverse/v6/text-to-video': {
                input: falEndpoints.PixverseV6TextToVideoInput;
                output: falEndpoints.PixverseV6TextToVideoOutput;
            };

            'fal-ai/pixverse/v6/image-to-video': {
                input: falEndpoints.PixverseV6ImageToVideoInput;
                output: falEndpoints.PixverseV6ImageToVideoOutput;
            };

            'fal-ai/pixverse/v6/extend': {
                input: falEndpoints.PixverseV6ExtendInput;
                output: falEndpoints.PixverseV6ExtendOutput;
            };

            'fal-ai/pixverse/v5/transition': {
                input: falEndpoints.PixverseV5TransitionInput;
                output: falEndpoints.PixverseV5TransitionOutput;
            };

            'fal-ai/pixverse/v5/text-to-video': {
                input: falEndpoints.PixverseV5TextToVideoInput;
                output: falEndpoints.PixverseV5TextToVideoOutput;
            };

            'fal-ai/pixverse/v5/image-to-video': {
                input: falEndpoints.PixverseV5ImageToVideoInput;
                output: falEndpoints.PixverseV5ImageToVideoOutput;
            };

            'fal-ai/pixverse/v5/effects': {
                input: falEndpoints.PixverseV5EffectsInput;
                output: falEndpoints.PixverseV5EffectsOutput;
            };

            'fal-ai/pixverse/v5.6/transition': {
                input: falEndpoints.PixverseV56TransitionInput;
                output: falEndpoints.PixverseV56TransitionOutput;
            };

            'fal-ai/pixverse/v5.6/text-to-video': {
                input: falEndpoints.PixverseV56TextToVideoInput;
                output: falEndpoints.PixverseV56TextToVideoOutput;
            };

            'fal-ai/pixverse/v5.6/image-to-video': {
                input: falEndpoints.PixverseV56ImageToVideoInput;
                output: falEndpoints.PixverseV56ImageToVideoOutput;
            };

            'fal-ai/pixverse/v5.5/transition': {
                input: falEndpoints.PixverseV55TransitionInput;
                output: falEndpoints.PixverseV55TransitionOutput;
            };

            'fal-ai/pixverse/v5.5/text-to-video': {
                input: falEndpoints.PixverseV55TextToVideoInput;
                output: falEndpoints.PixverseV55TextToVideoOutput;
            };

            'fal-ai/pixverse/v5.5/image-to-video': {
                input: falEndpoints.PixverseV55ImageToVideoInput;
                output: falEndpoints.PixverseV55ImageToVideoOutput;
            };

            'fal-ai/pixverse/v5.5/effects': {
                input: falEndpoints.PixverseV55EffectsInput;
                output: falEndpoints.PixverseV55EffectsOutput;
            };

            'fal-ai/pixverse/v4/text-to-video/fast': {
                input: falEndpoints.PixverseV4TextToVideoFastInput;
                output: falEndpoints.PixverseV4TextToVideoFastOutput;
            };

            'fal-ai/pixverse/v4/text-to-video': {
                input: falEndpoints.PixverseV4TextToVideoInput;
                output: falEndpoints.PixverseV4TextToVideoOutput;
            };

            'fal-ai/pixverse/v4/image-to-video/fast': {
                input: falEndpoints.PixverseV4ImageToVideoFastInput;
                output: falEndpoints.PixverseV4ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v4/image-to-video': {
                input: falEndpoints.PixverseV4ImageToVideoInput;
                output: falEndpoints.PixverseV4ImageToVideoOutput;
            };

            'fal-ai/pixverse/v4/effects': {
                input: falEndpoints.PixverseV4EffectsInput;
                output: falEndpoints.PixverseV4EffectsOutput;
            };

            'fal-ai/pixverse/v4.5/transition': {
                input: falEndpoints.PixverseV45TransitionInput;
                output: falEndpoints.PixverseV45TransitionOutput;
            };

            'fal-ai/pixverse/v4.5/text-to-video/fast': {
                input: falEndpoints.PixverseV45TextToVideoFastInput;
                output: falEndpoints.PixverseV45TextToVideoFastOutput;
            };

            'fal-ai/pixverse/v4.5/text-to-video': {
                input: falEndpoints.PixverseV45TextToVideoInput;
                output: falEndpoints.PixverseV45TextToVideoOutput;
            };

            'fal-ai/pixverse/v4.5/image-to-video/fast': {
                input: falEndpoints.PixverseV45ImageToVideoFastInput;
                output: falEndpoints.PixverseV45ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v4.5/image-to-video': {
                input: falEndpoints.PixverseV45ImageToVideoInput;
                output: falEndpoints.PixverseV45ImageToVideoOutput;
            };

            'fal-ai/pixverse/v4.5/effects': {
                input: falEndpoints.PixverseV45EffectsInput;
                output: falEndpoints.PixverseV45EffectsOutput;
            };

            'fal-ai/pixverse/v3.5/transition': {
                input: falEndpoints.PixverseV35TransitionInput;
                output: falEndpoints.PixverseV35TransitionOutput;
            };

            'fal-ai/pixverse/v3.5/text-to-video/fast': {
                input: falEndpoints.PixverseV35TextToVideoFastInput;
                output: falEndpoints.PixverseV35TextToVideoFastOutput;
            };

            'fal-ai/pixverse/v3.5/text-to-video': {
                input: falEndpoints.PixverseV35TextToVideoInput;
                output: falEndpoints.PixverseV35TextToVideoOutput;
            };

            'fal-ai/pixverse/v3.5/image-to-video/fast': {
                input: falEndpoints.PixverseV35ImageToVideoFastInput;
                output: falEndpoints.PixverseV35ImageToVideoFastOutput;
            };

            'fal-ai/pixverse/v3.5/image-to-video': {
                input: falEndpoints.PixverseV35ImageToVideoInput;
                output: falEndpoints.PixverseV35ImageToVideoOutput;
            };

            'fal-ai/pixverse/v3.5/effects': {
                input: falEndpoints.PixverseV35EffectsInput;
                output: falEndpoints.PixverseV35EffectsOutput;
            };

            'fal-ai/pixverse/swap': {
                input: falEndpoints.PixverseSwapInput;
                output: falEndpoints.PixverseSwapOutput;
            };

            'fal-ai/pixverse/sound-effects': {
                input: falEndpoints.PixverseSoundEffectsInput;
                output: falEndpoints.PixverseSoundEffectsOutput;
            };

            'fal-ai/pixverse/lipsync': {
                input: falEndpoints.PixverseLipsyncInput;
                output: falEndpoints.PixverseLipsyncOutput;
            };

            'fal-ai/pixverse/extend/fast': {
                input: falEndpoints.PixverseExtendFastInput;
                output: falEndpoints.PixverseExtendFastOutput;
            };

            'fal-ai/pixverse/extend': {
                input: falEndpoints.PixverseExtendInput;
                output: falEndpoints.PixverseExtendOutput;
            };

            'fal-ai/pixverse/c1/transition': {
                input: falEndpoints.PixverseC1TransitionInput;
                output: falEndpoints.PixverseC1TransitionOutput;
            };

            'fal-ai/pixverse/c1/text-to-video': {
                input: falEndpoints.PixverseC1TextToVideoInput;
                output: falEndpoints.PixverseC1TextToVideoOutput;
            };

            'fal-ai/pixverse/c1/reference-to-video': {
                input: falEndpoints.PixverseC1ReferenceToVideoInput;
                output: falEndpoints.PixverseC1ReferenceToVideoOutput;
            };

            'fal-ai/pixverse/c1/image-to-video': {
                input: falEndpoints.PixverseC1ImageToVideoInput;
                output: falEndpoints.PixverseC1ImageToVideoOutput;
            };

            'fal-ai/pixart-sigma': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/pixal3d': {
                input: falEndpoints.Pixal3dInput;
                output: falEndpoints.Pixal3dOutput;
            };

            'fal-ai/pika/v2/turbo/text-to-video': {
                input: falEndpoints.PikaV2TurboTextToVideoInput;
                output: falEndpoints.PikaV2TurboTextToVideoOutput;
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

            'fal-ai/pika/v2.2/pikaframes': {
                input: falEndpoints.PikaV22PikaframesInput;
                output: falEndpoints.PikaV22PikaframesOutput;
            };

            'fal-ai/pika/v2.2/image-to-video': {
                input: falEndpoints.PikaV22ImageToVideoInput;
                output: falEndpoints.PikaV22ImageToVideoOutput;
            };

            'fal-ai/pika/v2.1/text-to-video': {
                input: falEndpoints.PikaV21TextToVideoInput;
                output: falEndpoints.PikaV21TextToVideoOutput;
            };

            'fal-ai/pika/v2.1/image-to-video': {
                input: falEndpoints.PikaV21ImageToVideoInput;
                output: falEndpoints.PikaV21ImageToVideoOutput;
            };

            'fal-ai/photomaker': {
                input: falEndpoints.PhotomakerInput;
                output: falEndpoints.PhotomakerOutput;
            };

            'fal-ai/phota/enhance': {
                input: falEndpoints.PhotaEnhanceInput;
                output: falEndpoints.PhotaEnhanceOutput;
            };

            'fal-ai/phota/edit': {
                input: falEndpoints.PhotaEditInput;
                output: falEndpoints.PhotaEditOutput;
            };

            'fal-ai/phota/create-profile': {
                input: falEndpoints.PhotaCreateProfileInput;
                output: falEndpoints.PhotaCreateProfileOutput;
            };

            'fal-ai/phota': {
                input: falEndpoints.PhotaInput;
                output: falEndpoints.PhotaOutput;
            };

            'fal-ai/personaplex/realtime': {
                input: falEndpoints.PersonaplexRealtimeInput;
                output: falEndpoints.PersonaplexRealtimeOutput;
            };

            'fal-ai/personaplex': {
                input: falEndpoints.PersonaplexInput;
                output: falEndpoints.PersonaplexOutput;
            };

            'fal-ai/patina/material/extract': {
                input: falEndpoints.PatinaMaterialExtractInput;
                output: falEndpoints.PatinaMaterialExtractOutput;
            };

            'fal-ai/patina/material': {
                input: falEndpoints.PatinaMaterialInput;
                output: falEndpoints.PatinaMaterialOutput;
            };

            'fal-ai/patina': {
                input: falEndpoints.PatinaInput;
                output: falEndpoints.PatinaOutput;
            };

            'fal-ai/pasd': {
                input: falEndpoints.PasdInput;
                output: falEndpoints.PasdOutput;
            };

            'fal-ai/ovis-image': {
                input: falEndpoints.OvisImageInput;
                output: falEndpoints.OvisImageOutput;
            };

            'fal-ai/ovi/image-to-video': {
                input: falEndpoints.OviImageToVideoInput;
                output: falEndpoints.OviImageToVideoOutput;
            };

            'fal-ai/ovi': {
                input: falEndpoints.OviInput;
                output: falEndpoints.OviOutput;
            };

            'fal-ai/orpheus-tts': {
                input: falEndpoints.OrpheusTtsInput;
                output: falEndpoints.OrpheusTtsOutput;
            };

            'fal-ai/one-to-all-animation/14b': {
                input: falEndpoints.OneToAllAnimation14bInput;
                output: falEndpoints.OneToAllAnimation14bOutput;
            };

            'fal-ai/one-to-all-animation/1.3b': {
                input: falEndpoints.OneToAllAnimation13bInput;
                output: falEndpoints.OneToAllAnimation13bOutput;
            };

            'fal-ai/omnilottie/video-to-lottie': {
                input: falEndpoints.OmnilottieVideoToLottieInput;
                output: falEndpoints.OmnilottieVideoToLottieOutput;
            };

            'fal-ai/omnilottie/image-to-lottie': {
                input: falEndpoints.OmnilottieImageToLottieInput;
                output: falEndpoints.OmnilottieImageToLottieOutput;
            };

            'fal-ai/omnilottie': {
                input: falEndpoints.OmnilottieInput;
                output: falEndpoints.OmnilottieOutput;
            };

            'fal-ai/omnigen-v2': {
                input: falEndpoints.OmnigenV2Input;
                output: falEndpoints.OmnigenV2Output;
            };

            'fal-ai/omnigen-v1': {
                input: falEndpoints.OmnigenV1Input;
                output: falEndpoints.OmnigenV1Output;
            };

            'fal-ai/omni-zero': {
                input: falEndpoints.OmniZeroInput;
                output: falEndpoints.OmniZeroOutput;
            };

            'fal-ai/object-removal/mask': {
                input: falEndpoints.ObjectRemovalMaskInput;
                output: falEndpoints.ObjectRemovalMaskOutput;
            };

            'fal-ai/object-removal/bbox': {
                input: falEndpoints.ObjectRemovalBboxInput;
                output: falEndpoints.ObjectRemovalBboxOutput;
            };

            'fal-ai/object-removal': {
                input: falEndpoints.ObjectRemovalInput;
                output: falEndpoints.ObjectRemovalOutput;
            };

            'fal-ai/nucleus-image': {
                input: falEndpoints.NucleusImageInput;
                output: falEndpoints.NucleusImageOutput;
            };

            'fal-ai/nemotron-diffusion-vlm': {
                input: falEndpoints.NemotronDiffusionVlmInput;
                output: falEndpoints.NemotronDiffusionVlmOutput;
            };

            'fal-ai/nano-banana/edit': {
                input: falEndpoints.NanoBananaEditInput;
                output: falEndpoints.NanoBananaEditOutput;
            };

            'fal-ai/nano-banana-pro/edit': {
                input: falEndpoints.NanoBananaProEditInput;
                output: falEndpoints.NanoBananaProEditOutput;
            };

            'fal-ai/nano-banana-pro': {
                input: falEndpoints.NanoBananaProInput;
                output: falEndpoints.NanoBananaProOutput;
            };

            'fal-ai/nano-banana-2/edit': {
                input: falEndpoints.NanoBanana2EditInput;
                output: falEndpoints.NanoBanana2EditOutput;
            };

            'fal-ai/nano-banana-2': {
                input: falEndpoints.NanoBanana2Input;
                output: falEndpoints.NanoBanana2Output;
            };

            'fal-ai/nano-banana': {
                input: falEndpoints.NanoBananaInput;
                output: falEndpoints.NanoBananaOutput;
            };

            'fal-ai/nafnet/denoise': {
                input: falEndpoints.NafnetDenoiseInput;
                output: falEndpoints.NafnetDenoiseOutput;
            };

            'fal-ai/nafnet/deblur': {
                input: falEndpoints.NafnetDeblurInput;
                output: falEndpoints.NafnetDeblurOutput;
            };

            'fal-ai/musetalk': {
                input: falEndpoints.MusetalkInput;
                output: falEndpoints.MusetalkOutput;
            };

            'fal-ai/moss-image': {
                input: falEndpoints.MossImageInput;
                output: falEndpoints.MossImageOutput;
            };

            'fal-ai/moondream3-preview/segment': {
                input: falEndpoints.Moondream3PreviewSegmentInput;
                output: falEndpoints.Moondream3PreviewSegmentOutput;
            };

            'fal-ai/moondream3-preview/query': {
                input: falEndpoints.Moondream3PreviewQueryInput;
                output: falEndpoints.Moondream3PreviewQueryOutput;
            };

            'fal-ai/moondream3-preview/point': {
                input: falEndpoints.Moondream3PreviewPointInput;
                output: falEndpoints.Moondream3PreviewPointOutput;
            };

            'fal-ai/moondream3-preview/detect': {
                input: falEndpoints.Moondream3PreviewDetectInput;
                output: falEndpoints.Moondream3PreviewDetectOutput;
            };

            'fal-ai/moondream3-preview/caption': {
                input: falEndpoints.Moondream3PreviewCaptionInput;
                output: falEndpoints.Moondream3PreviewCaptionOutput;
            };

            'fal-ai/moondream2/visual-query': {
                input: falEndpoints.Moondream2VisualQueryInput;
                output: falEndpoints.Moondream2VisualQueryOutput;
            };

            'fal-ai/moondream2/point-object-detection': {
                input: falEndpoints.Moondream2PointObjectDetectionInput;
                output: falEndpoints.Moondream2PointObjectDetectionOutput;
            };

            'fal-ai/moondream2/object-detection': {
                input: falEndpoints.Moondream2ObjectDetectionInput;
                output: falEndpoints.Moondream2ObjectDetectionOutput;
            };

            'fal-ai/moondream2': {
                input: falEndpoints.Moondream2Input;
                output: falEndpoints.Moondream2Output;
            };

            'fal-ai/moondream/batched': {
                input: falEndpoints.MoondreamBatchedInput;
                output: falEndpoints.MoondreamBatchedOutput;
            };

            'fal-ai/moondream-next/detection': {
                input: falEndpoints.MoondreamNextDetectionInput;
                output: falEndpoints.MoondreamNextDetectionOutput;
            };

            'fal-ai/moondream-next/batch': {
                input: falEndpoints.MoondreamNextBatchInput;
                output: falEndpoints.MoondreamNextBatchOutput;
            };

            'fal-ai/moondream-next': {
                input: falEndpoints.MoondreamNextInput;
                output: falEndpoints.MoondreamNextOutput;
            };

            'fal-ai/mmaudio-v2/text-to-audio': {
                input: falEndpoints.MmaudioV2TextToAudioInput;
                output: falEndpoints.MmaudioV2TextToAudioOutput;
            };

            'fal-ai/mmaudio-v2': {
                input: falEndpoints.MmaudioV2Input;
                output: falEndpoints.MmaudioV2Output;
            };

            'fal-ai/minimax/voice-design': {
                input: falEndpoints.MinimaxVoiceDesignInput;
                output: falEndpoints.MinimaxVoiceDesignOutput;
            };

            'fal-ai/minimax/voice-clone': {
                input: falEndpoints.MinimaxVoiceCloneInput;
                output: falEndpoints.MinimaxVoiceCloneOutput;
            };

            'fal-ai/minimax/video-01/image-to-video': {
                input: falEndpoints.MinimaxVideo01ImageToVideoInput;
                output: falEndpoints.MinimaxVideo01ImageToVideoOutput;
            };

            'fal-ai/minimax/video-01-subject-reference': {
                input: falEndpoints.MinimaxVideo01SubjectReferenceInput;
                output: falEndpoints.MinimaxVideo01SubjectReferenceOutput;
            };

            'fal-ai/minimax/video-01-live/image-to-video': {
                input: falEndpoints.MinimaxVideo01LiveImageToVideoInput;
                output: falEndpoints.MinimaxVideo01LiveImageToVideoOutput;
            };

            'fal-ai/minimax/video-01-live': {
                input: falEndpoints.MinimaxVideo01LiveInput;
                output: falEndpoints.MinimaxVideo01LiveOutput;
            };

            'fal-ai/minimax/video-01-director/image-to-video': {
                input: falEndpoints.MinimaxVideo01DirectorImageToVideoInput;
                output: falEndpoints.MinimaxVideo01DirectorImageToVideoOutput;
            };

            'fal-ai/minimax/video-01-director': {
                input: falEndpoints.MinimaxVideo01DirectorInput;
                output: falEndpoints.MinimaxVideo01DirectorOutput;
            };

            'fal-ai/minimax/video-01': {
                input: falEndpoints.MinimaxVideo01Input;
                output: falEndpoints.MinimaxVideo01Output;
            };

            'fal-ai/minimax/speech-2.8-turbo': {
                input: falEndpoints.MinimaxSpeech28TurboInput;
                output: falEndpoints.MinimaxSpeech28TurboOutput;
            };

            'fal-ai/minimax/speech-2.8-hd': {
                input: falEndpoints.MinimaxSpeech28HdInput;
                output: falEndpoints.MinimaxSpeech28HdOutput;
            };

            'fal-ai/minimax/speech-2.6-turbo': {
                input: falEndpoints.MinimaxSpeech26TurboInput;
                output: falEndpoints.MinimaxSpeech26TurboOutput;
            };

            'fal-ai/minimax/speech-2.6-hd': {
                input: falEndpoints.MinimaxSpeech26HdInput;
                output: falEndpoints.MinimaxSpeech26HdOutput;
            };

            'fal-ai/minimax/speech-02-turbo': {
                input: falEndpoints.MinimaxSpeech02TurboInput;
                output: falEndpoints.MinimaxSpeech02TurboOutput;
            };

            'fal-ai/minimax/speech-02-hd': {
                input: falEndpoints.MinimaxSpeech02HdInput;
                output: falEndpoints.MinimaxSpeech02HdOutput;
            };

            'fal-ai/minimax/preview/speech-2.5-turbo': {
                input: falEndpoints.MinimaxPreviewSpeech25TurboInput;
                output: falEndpoints.MinimaxPreviewSpeech25TurboOutput;
            };

            'fal-ai/minimax/preview/speech-2.5-hd': {
                input: falEndpoints.MinimaxPreviewSpeech25HdInput;
                output: falEndpoints.MinimaxPreviewSpeech25HdOutput;
            };

            'fal-ai/minimax/image-01/subject-reference': {
                input: falEndpoints.MinimaxImage01SubjectReferenceInput;
                output: falEndpoints.MinimaxImage01SubjectReferenceOutput;
            };

            'fal-ai/minimax/image-01': {
                input: falEndpoints.MinimaxImage01Input;
                output: falEndpoints.MinimaxImage01Output;
            };

            'fal-ai/minimax/hailuo-2.3/standard/text-to-video': {
                input: falEndpoints.MinimaxHailuo23StandardTextToVideoInput;
                output: falEndpoints.MinimaxHailuo23StandardTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo23StandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23StandardImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/pro/text-to-video': {
                input: falEndpoints.MinimaxHailuo23ProTextToVideoInput;
                output: falEndpoints.MinimaxHailuo23ProTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo23ProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23ProImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3-fast/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo23FastStandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23FastStandardImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-2.3-fast/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo23FastProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo23FastProImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/standard/text-to-video': {
                input: falEndpoints.MinimaxHailuo02StandardTextToVideoInput;
                output: falEndpoints.MinimaxHailuo02StandardTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/standard/image-to-video': {
                input: falEndpoints.MinimaxHailuo02StandardImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02StandardImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/pro/text-to-video': {
                input: falEndpoints.MinimaxHailuo02ProTextToVideoInput;
                output: falEndpoints.MinimaxHailuo02ProTextToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02/pro/image-to-video': {
                input: falEndpoints.MinimaxHailuo02ProImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02ProImageToVideoOutput;
            };

            'fal-ai/minimax/hailuo-02-fast/image-to-video': {
                input: falEndpoints.MinimaxHailuo02FastImageToVideoInput;
                output: falEndpoints.MinimaxHailuo02FastImageToVideoOutput;
            };

            'fal-ai/minimax-music/v2.6': {
                input: falEndpoints.MinimaxMusicV26Input;
                output: falEndpoints.MinimaxMusicV26Output;
            };

            'fal-ai/minimax-music/v2.5': {
                input: falEndpoints.MinimaxMusicV25Input;
                output: falEndpoints.MinimaxMusicV25Output;
            };

            'fal-ai/minimax-music/v2': {
                input: falEndpoints.MinimaxMusicV2Input;
                output: falEndpoints.MinimaxMusicV2Output;
            };

            'fal-ai/minimax-music/v1.5': {
                input: falEndpoints.MinimaxMusicV15Input;
                output: falEndpoints.MinimaxMusicV15Output;
            };

            'fal-ai/minimax-music': {
                input: falEndpoints.MinimaxMusicInput;
                output: falEndpoints.MinimaxMusicOutput;
            };

            'fal-ai/meshy/v6/text-to-3d': {
                input: falEndpoints.MeshyV6TextTo3dInput;
                output: falEndpoints.MeshyV6TextTo3dOutput;
            };

            'fal-ai/meshy/v6/image-to-3d': {
                input: falEndpoints.MeshyV6ImageTo3dInput;
                output: falEndpoints.MeshyV6ImageTo3dOutput;
            };

            'fal-ai/meshy/v6-preview/text-to-3d': {
                input: falEndpoints.MeshyV6PreviewTextTo3dInput;
                output: falEndpoints.MeshyV6PreviewTextTo3dOutput;
            };

            'fal-ai/meshy/v6-preview/image-to-3d': {
                input: falEndpoints.MeshyV6PreviewImageTo3dInput;
                output: falEndpoints.MeshyV6PreviewImageTo3dOutput;
            };

            'fal-ai/meshy/rigging/multi-animation': {
                input: falEndpoints.MeshyRiggingMultiAnimationInput;
                output: falEndpoints.MeshyRiggingMultiAnimationOutput;
            };

            'fal-ai/meshy/rigging': {
                input: falEndpoints.MeshyRiggingInput;
                output: falEndpoints.MeshyRiggingOutput;
            };

            'fal-ai/maya/stream': {
                input: falEndpoints.MayaStreamInput;
                output: falEndpoints.MayaStreamOutput;
            };

            'fal-ai/maya/batch': {
                input: falEndpoints.MayaBatchInput;
                output: falEndpoints.MayaBatchOutput;
            };

            'fal-ai/maya': {
                input: falEndpoints.MayaInput;
                output: falEndpoints.MayaOutput;
            };

            'fal-ai/marlin/find': {
                input: falEndpoints.MarlinFindInput;
                output: falEndpoints.MarlinFindOutput;
            };

            'fal-ai/marlin': {
                input: falEndpoints.MarlinInput;
                output: falEndpoints.MarlinOutput;
            };

            'fal-ai/marigold-v2': {
                input: falEndpoints.MarigoldV2Input;
                output: falEndpoints.MarigoldV2Output;
            };

            'fal-ai/magi-distilled/image-to-video': {
                input: falEndpoints.MagiDistilledImageToVideoInput;
                output: falEndpoints.MagiDistilledImageToVideoOutput;
            };

            'fal-ai/magi-distilled/extend-video': {
                input: falEndpoints.MagiDistilledExtendVideoInput;
                output: falEndpoints.MagiDistilledExtendVideoOutput;
            };

            'fal-ai/magi-distilled': {
                input: falEndpoints.MagiDistilledInput;
                output: falEndpoints.MagiDistilledOutput;
            };

            'fal-ai/lyria3/pro': {
                input: falEndpoints.Lyria3ProInput;
                output: falEndpoints.Lyria3ProOutput;
            };

            'fal-ai/lyria3': {
                input: falEndpoints.Lyria3Input;
                output: falEndpoints.Lyria3Output;
            };

            'fal-ai/lyria2': {
                input: falEndpoints.Lyria2Input;
                output: falEndpoints.Lyria2Output;
            };

            'fal-ai/lumina-image/v2': {
                input: falEndpoints.LuminaImageV2Input;
                output: falEndpoints.LuminaImageV2Output;
            };

            'fal-ai/luma-photon/reframe': {
                input: falEndpoints.LumaPhotonReframeInput;
                output: falEndpoints.LumaPhotonReframeOutput;
            };

            'fal-ai/luma-photon/modify': {
                input: falEndpoints.LumaPhotonModifyInput;
                output: falEndpoints.LumaPhotonModifyOutput;
            };

            'fal-ai/luma-photon/flash/reframe': {
                input: falEndpoints.LumaPhotonFlashReframeInput;
                output: falEndpoints.LumaPhotonFlashReframeOutput;
            };

            'fal-ai/luma-photon/flash/modify': {
                input: falEndpoints.LumaPhotonFlashModifyInput;
                output: falEndpoints.LumaPhotonFlashModifyOutput;
            };

            'fal-ai/luma-photon/flash': {
                input: falEndpoints.LumaPhotonFlashInput;
                output: falEndpoints.LumaPhotonFlashOutput;
            };

            'fal-ai/luma-photon': {
                input: falEndpoints.LumaPhotonInput;
                output: falEndpoints.LumaPhotonOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/multiconditioning': {
                input: falEndpoints.Ltxv13b098DistilledMulticonditioningInput;
                output: falEndpoints.Ltxv13b098DistilledMulticonditioningOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/image-to-video': {
                input: falEndpoints.Ltxv13b098DistilledImageToVideoInput;
                output: falEndpoints.Ltxv13b098DistilledImageToVideoOutput;
            };

            'fal-ai/ltxv-13b-098-distilled/extend': {
                input: falEndpoints.Ltxv13b098DistilledExtendInput;
                output: falEndpoints.Ltxv13b098DistilledExtendOutput;
            };

            'fal-ai/ltxv-13b-098-distilled': {
                input: falEndpoints.Ltxv13b098DistilledInput;
                output: falEndpoints.Ltxv13b098DistilledOutput;
            };

            'fal-ai/ltx23-video-trainer': {
                input: falEndpoints.Ltx23VideoTrainerInput;
                output: falEndpoints.Ltx23VideoTrainerOutput;
            };

            'fal-ai/ltx23-v2v-trainer': {
                input: falEndpoints.Ltx23V2vTrainerInput;
                output: falEndpoints.Ltx23V2vTrainerOutput;
            };

            'fal-ai/ltx23-trainer-v2/v2v-masked': {
                input: falEndpoints.Ltx23TrainerV2V2vMaskedInput;
                output: falEndpoints.Ltx23TrainerV2V2vMaskedOutput;
            };

            'fal-ai/ltx23-trainer-v2/v2v': {
                input: falEndpoints.Ltx23TrainerV2V2vInput;
                output: falEndpoints.Ltx23TrainerV2V2vOutput;
            };

            'fal-ai/ltx23-trainer-v2/v2a': {
                input: falEndpoints.Ltx23TrainerV2V2aInput;
                output: falEndpoints.Ltx23TrainerV2V2aOutput;
            };

            'fal-ai/ltx23-trainer-v2/t2v': {
                input: falEndpoints.Ltx23TrainerV2T2vInput;
                output: falEndpoints.Ltx23TrainerV2T2vOutput;
            };

            'fal-ai/ltx23-trainer-v2/t2a': {
                input: falEndpoints.Ltx23TrainerV2T2aInput;
                output: falEndpoints.Ltx23TrainerV2T2aOutput;
            };

            'fal-ai/ltx23-trainer-v2/outpaint': {
                input: falEndpoints.Ltx23TrainerV2OutpaintInput;
                output: falEndpoints.Ltx23TrainerV2OutpaintOutput;
            };

            'fal-ai/ltx23-trainer-v2/interpolate': {
                input: falEndpoints.Ltx23TrainerV2InterpolateInput;
                output: falEndpoints.Ltx23TrainerV2InterpolateOutput;
            };

            'fal-ai/ltx23-trainer-v2/inpaint': {
                input: falEndpoints.Ltx23TrainerV2InpaintInput;
                output: falEndpoints.Ltx23TrainerV2InpaintOutput;
            };

            'fal-ai/ltx23-trainer-v2/ic-lora/v2v-masked': {
                input: falEndpoints.Ltx23TrainerV2IcLoraV2vMaskedInput;
                output: falEndpoints.Ltx23TrainerV2IcLoraV2vMaskedOutput;
            };

            'fal-ai/ltx23-trainer-v2/ic-lora/v2v': {
                input: falEndpoints.Ltx23TrainerV2IcLoraV2vInput;
                output: falEndpoints.Ltx23TrainerV2IcLoraV2vOutput;
            };

            'fal-ai/ltx23-trainer-v2/ic-lora/av2av-masked': {
                input: falEndpoints.Ltx23TrainerV2IcLoraAv2avMaskedInput;
                output: falEndpoints.Ltx23TrainerV2IcLoraAv2avMaskedOutput;
            };

            'fal-ai/ltx23-trainer-v2/ic-lora/av2av': {
                input: falEndpoints.Ltx23TrainerV2IcLoraAv2avInput;
                output: falEndpoints.Ltx23TrainerV2IcLoraAv2avOutput;
            };

            'fal-ai/ltx23-trainer-v2/ic-lora/a2a': {
                input: falEndpoints.Ltx23TrainerV2IcLoraA2aInput;
                output: falEndpoints.Ltx23TrainerV2IcLoraA2aOutput;
            };

            'fal-ai/ltx23-trainer-v2/i2v': {
                input: falEndpoints.Ltx23TrainerV2I2vInput;
                output: falEndpoints.Ltx23TrainerV2I2vOutput;
            };

            'fal-ai/ltx23-trainer-v2/extend-suffix': {
                input: falEndpoints.Ltx23TrainerV2ExtendSuffixInput;
                output: falEndpoints.Ltx23TrainerV2ExtendSuffixOutput;
            };

            'fal-ai/ltx23-trainer-v2/extend-prefix': {
                input: falEndpoints.Ltx23TrainerV2ExtendPrefixInput;
                output: falEndpoints.Ltx23TrainerV2ExtendPrefixOutput;
            };

            'fal-ai/ltx23-trainer-v2/av2av-masked': {
                input: falEndpoints.Ltx23TrainerV2Av2avMaskedInput;
                output: falEndpoints.Ltx23TrainerV2Av2avMaskedOutput;
            };

            'fal-ai/ltx23-trainer-v2/av2av': {
                input: falEndpoints.Ltx23TrainerV2Av2avInput;
                output: falEndpoints.Ltx23TrainerV2Av2avOutput;
            };

            'fal-ai/ltx23-trainer-v2/audio-inpaint': {
                input: falEndpoints.Ltx23TrainerV2AudioInpaintInput;
                output: falEndpoints.Ltx23TrainerV2AudioInpaintOutput;
            };

            'fal-ai/ltx23-trainer-v2/audio-extend-suffix': {
                input: falEndpoints.Ltx23TrainerV2AudioExtendSuffixInput;
                output: falEndpoints.Ltx23TrainerV2AudioExtendSuffixOutput;
            };

            'fal-ai/ltx23-trainer-v2/audio-extend-prefix': {
                input: falEndpoints.Ltx23TrainerV2AudioExtendPrefixInput;
                output: falEndpoints.Ltx23TrainerV2AudioExtendPrefixOutput;
            };

            'fal-ai/ltx23-trainer-v2/a2v': {
                input: falEndpoints.Ltx23TrainerV2A2vInput;
                output: falEndpoints.Ltx23TrainerV2A2vOutput;
            };

            'fal-ai/ltx23-trainer-v2/a2a': {
                input: falEndpoints.Ltx23TrainerV2A2aInput;
                output: falEndpoints.Ltx23TrainerV2A2aOutput;
            };

            'fal-ai/ltx-video/image-to-video': {
                input: falEndpoints.LtxVideoImageToVideoInput;
                output: falEndpoints.LtxVideoImageToVideoOutput;
            };

            'fal-ai/ltx-video-v095/multiconditioning': {
                input: falEndpoints.LtxVideoV095MulticonditioningInput;
                output: falEndpoints.LtxVideoV095MulticonditioningOutput;
            };

            'fal-ai/ltx-video-v095/extend': {
                input: falEndpoints.LtxVideoV095ExtendInput;
                output: falEndpoints.LtxVideoV095ExtendOutput;
            };

            'fal-ai/ltx-video-v095': {
                input: falEndpoints.LtxVideoV095Input;
                output: falEndpoints.LtxVideoV095Output;
            };

            'fal-ai/ltx-video-13b-distilled/multiconditioning': {
                input: falEndpoints.LtxVideo13bDistilledMulticonditioningInput;
                output: falEndpoints.LtxVideo13bDistilledMulticonditioningOutput;
            };

            'fal-ai/ltx-video-13b-distilled/image-to-video': {
                input: falEndpoints.LtxVideo13bDistilledImageToVideoInput;
                output: falEndpoints.LtxVideo13bDistilledImageToVideoOutput;
            };

            'fal-ai/ltx-video-13b-distilled/extend': {
                input: falEndpoints.LtxVideo13bDistilledExtendInput;
                output: falEndpoints.LtxVideo13bDistilledExtendOutput;
            };

            'fal-ai/ltx-video-13b-distilled': {
                input: falEndpoints.LtxVideo13bDistilledInput;
                output: falEndpoints.LtxVideo13bDistilledOutput;
            };

            'fal-ai/ltx-video': {
                input: falEndpoints.LtxVideoInput;
                output: falEndpoints.LtxVideoOutput;
            };

            'fal-ai/ltx-2.3/text-to-video/fast': {
                input: falEndpoints.Ltx23TextToVideoFastInput;
                output: falEndpoints.Ltx23TextToVideoFastOutput;
            };

            'fal-ai/ltx-2.3/text-to-video': {
                input: falEndpoints.Ltx23TextToVideoInput;
                output: falEndpoints.Ltx23TextToVideoOutput;
            };

            'fal-ai/ltx-2.3/retake-video': {
                input: falEndpoints.Ltx23RetakeVideoInput;
                output: falEndpoints.Ltx23RetakeVideoOutput;
            };

            'fal-ai/ltx-2.3/reframe': {
                input: falEndpoints.Ltx23ReframeInput;
                output: falEndpoints.Ltx23ReframeOutput;
            };

            'fal-ai/ltx-2.3/image-to-video/fast': {
                input: falEndpoints.Ltx23ImageToVideoFastInput;
                output: falEndpoints.Ltx23ImageToVideoFastOutput;
            };

            'fal-ai/ltx-2.3/image-to-video': {
                input: falEndpoints.Ltx23ImageToVideoInput;
                output: falEndpoints.Ltx23ImageToVideoOutput;
            };

            'fal-ai/ltx-2.3/extend-video': {
                input: falEndpoints.Ltx23ExtendVideoInput;
                output: falEndpoints.Ltx23ExtendVideoOutput;
            };

            'fal-ai/ltx-2.3/audio-to-video': {
                input: falEndpoints.Ltx23AudioToVideoInput;
                output: falEndpoints.Ltx23AudioToVideoOutput;
            };

            'fal-ai/ltx-2.3-quality/water-simulation': {
                input: falEndpoints.Ltx23QualityWaterSimulationInput;
                output: falEndpoints.Ltx23QualityWaterSimulationOutput;
            };

            'fal-ai/ltx-2.3-quality/text-to-video/lora': {
                input: falEndpoints.Ltx23QualityTextToVideoLoraInput;
                output: falEndpoints.Ltx23QualityTextToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/text-to-video': {
                input: falEndpoints.Ltx23QualityTextToVideoInput;
                output: falEndpoints.Ltx23QualityTextToVideoOutput;
            };

            'fal-ai/ltx-2.3-quality/text-to-audio/lora': {
                input: falEndpoints.Ltx23QualityTextToAudioLoraInput;
                output: falEndpoints.Ltx23QualityTextToAudioLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/text-to-audio': {
                input: falEndpoints.Ltx23QualityTextToAudioInput;
                output: falEndpoints.Ltx23QualityTextToAudioOutput;
            };

            'fal-ai/ltx-2.3-quality/render-to-real': {
                input: falEndpoints.Ltx23QualityRenderToRealInput;
                output: falEndpoints.Ltx23QualityRenderToRealOutput;
            };

            'fal-ai/ltx-2.3-quality/reference-video-to-video/lora': {
                input: falEndpoints.Ltx23QualityReferenceVideoToVideoLoraInput;
                output: falEndpoints.Ltx23QualityReferenceVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/reference-video-to-video': {
                input: falEndpoints.Ltx23QualityReferenceVideoToVideoInput;
                output: falEndpoints.Ltx23QualityReferenceVideoToVideoOutput;
            };

            'fal-ai/ltx-2.3-quality/outpaint/lora': {
                input: falEndpoints.Ltx23QualityOutpaintLoraInput;
                output: falEndpoints.Ltx23QualityOutpaintLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/outpaint': {
                input: falEndpoints.Ltx23QualityOutpaintInput;
                output: falEndpoints.Ltx23QualityOutpaintOutput;
            };

            'fal-ai/ltx-2.3-quality/instant-shave': {
                input: falEndpoints.Ltx23QualityInstantShaveInput;
                output: falEndpoints.Ltx23QualityInstantShaveOutput;
            };

            'fal-ai/ltx-2.3-quality/inpaint/lora': {
                input: falEndpoints.Ltx23QualityInpaintLoraInput;
                output: falEndpoints.Ltx23QualityInpaintLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/inpaint': {
                input: falEndpoints.Ltx23QualityInpaintInput;
                output: falEndpoints.Ltx23QualityInpaintOutput;
            };

            'fal-ai/ltx-2.3-quality/ingredient': {
                input: falEndpoints.Ltx23QualityIngredientInput;
                output: falEndpoints.Ltx23QualityIngredientOutput;
            };

            'fal-ai/ltx-2.3-quality/image-to-video/lora': {
                input: falEndpoints.Ltx23QualityImageToVideoLoraInput;
                output: falEndpoints.Ltx23QualityImageToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/image-to-video': {
                input: falEndpoints.Ltx23QualityImageToVideoInput;
                output: falEndpoints.Ltx23QualityImageToVideoOutput;
            };

            'fal-ai/ltx-2.3-quality/hdr/lora': {
                input: falEndpoints.Ltx23QualityHdrLoraInput;
                output: falEndpoints.Ltx23QualityHdrLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/hdr': {
                input: falEndpoints.Ltx23QualityHdrInput;
                output: falEndpoints.Ltx23QualityHdrOutput;
            };

            'fal-ai/ltx-2.3-quality/extend-video/lora': {
                input: falEndpoints.Ltx23QualityExtendVideoLoraInput;
                output: falEndpoints.Ltx23QualityExtendVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/extend-video': {
                input: falEndpoints.Ltx23QualityExtendVideoInput;
                output: falEndpoints.Ltx23QualityExtendVideoOutput;
            };

            'fal-ai/ltx-2.3-quality/decompression': {
                input: falEndpoints.Ltx23QualityDecompressionInput;
                output: falEndpoints.Ltx23QualityDecompressionOutput;
            };

            'fal-ai/ltx-2.3-quality/deblur': {
                input: falEndpoints.Ltx23QualityDeblurInput;
                output: falEndpoints.Ltx23QualityDeblurOutput;
            };

            'fal-ai/ltx-2.3-quality/day-to-night': {
                input: falEndpoints.Ltx23QualityDayToNightInput;
                output: falEndpoints.Ltx23QualityDayToNightOutput;
            };

            'fal-ai/ltx-2.3-quality/cross-eyed': {
                input: falEndpoints.Ltx23QualityCrossEyedInput;
                output: falEndpoints.Ltx23QualityCrossEyedOutput;
            };

            'fal-ai/ltx-2.3-quality/colorization': {
                input: falEndpoints.Ltx23QualityColorizationInput;
                output: falEndpoints.Ltx23QualityColorizationOutput;
            };

            'fal-ai/ltx-2.3-quality/clean-plate': {
                input: falEndpoints.Ltx23QualityCleanPlateInput;
                output: falEndpoints.Ltx23QualityCleanPlateOutput;
            };

            'fal-ai/ltx-2.3-quality/audio-to-video/lora': {
                input: falEndpoints.Ltx23QualityAudioToVideoLoraInput;
                output: falEndpoints.Ltx23QualityAudioToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-quality/audio-to-video': {
                input: falEndpoints.Ltx23QualityAudioToVideoInput;
                output: falEndpoints.Ltx23QualityAudioToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/video-to-video/lora': {
                input: falEndpoints.Ltx2322bVideoToVideoLoraInput;
                output: falEndpoints.Ltx2322bVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/video-to-video': {
                input: falEndpoints.Ltx2322bVideoToVideoInput;
                output: falEndpoints.Ltx2322bVideoToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/text-to-video/lora': {
                input: falEndpoints.Ltx2322bTextToVideoLoraInput;
                output: falEndpoints.Ltx2322bTextToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/text-to-video': {
                input: falEndpoints.Ltx2322bTextToVideoInput;
                output: falEndpoints.Ltx2322bTextToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/reference-video-to-video/lora': {
                input: falEndpoints.Ltx2322bReferenceVideoToVideoLoraInput;
                output: falEndpoints.Ltx2322bReferenceVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/reference-video-to-video': {
                input: falEndpoints.Ltx2322bReferenceVideoToVideoInput;
                output: falEndpoints.Ltx2322bReferenceVideoToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/image-to-video/lora': {
                input: falEndpoints.Ltx2322bImageToVideoLoraInput;
                output: falEndpoints.Ltx2322bImageToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/image-to-video': {
                input: falEndpoints.Ltx2322bImageToVideoInput;
                output: falEndpoints.Ltx2322bImageToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/extend-video/lora': {
                input: falEndpoints.Ltx2322bExtendVideoLoraInput;
                output: falEndpoints.Ltx2322bExtendVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/extend-video': {
                input: falEndpoints.Ltx2322bExtendVideoInput;
                output: falEndpoints.Ltx2322bExtendVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/video-to-video/lora': {
                input: falEndpoints.Ltx2322bDistilledVideoToVideoLoraInput;
                output: falEndpoints.Ltx2322bDistilledVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/video-to-video': {
                input: falEndpoints.Ltx2322bDistilledVideoToVideoInput;
                output: falEndpoints.Ltx2322bDistilledVideoToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/text-to-video/lora': {
                input: falEndpoints.Ltx2322bDistilledTextToVideoLoraInput;
                output: falEndpoints.Ltx2322bDistilledTextToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/text-to-video': {
                input: falEndpoints.Ltx2322bDistilledTextToVideoInput;
                output: falEndpoints.Ltx2322bDistilledTextToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/reference-video-to-video/lora': {
                input: falEndpoints.Ltx2322bDistilledReferenceVideoToVideoLoraInput;
                output: falEndpoints.Ltx2322bDistilledReferenceVideoToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/reference-video-to-video': {
                input: falEndpoints.Ltx2322bDistilledReferenceVideoToVideoInput;
                output: falEndpoints.Ltx2322bDistilledReferenceVideoToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/image-to-video/lora': {
                input: falEndpoints.Ltx2322bDistilledImageToVideoLoraInput;
                output: falEndpoints.Ltx2322bDistilledImageToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/image-to-video': {
                input: falEndpoints.Ltx2322bDistilledImageToVideoInput;
                output: falEndpoints.Ltx2322bDistilledImageToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/audio-to-video/lora': {
                input: falEndpoints.Ltx2322bDistilledAudioToVideoLoraInput;
                output: falEndpoints.Ltx2322bDistilledAudioToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/distilled/audio-to-video': {
                input: falEndpoints.Ltx2322bDistilledAudioToVideoInput;
                output: falEndpoints.Ltx2322bDistilledAudioToVideoOutput;
            };

            'fal-ai/ltx-2.3-22b/audio-to-video/lora': {
                input: falEndpoints.Ltx2322bAudioToVideoLoraInput;
                output: falEndpoints.Ltx2322bAudioToVideoLoraOutput;
            };

            'fal-ai/ltx-2.3-22b/audio-to-video': {
                input: falEndpoints.Ltx2322bAudioToVideoInput;
                output: falEndpoints.Ltx2322bAudioToVideoOutput;
            };

            'fal-ai/lora/inpaint': {
                input: falEndpoints.LoraInpaintInput;
                output: falEndpoints.LoraInpaintOutput;
            };

            'fal-ai/lora/image-to-image': {
                input: falEndpoints.LoraImageToImageInput;
                output: falEndpoints.LoraImageToImageOutput;
            };

            'fal-ai/lora': {
                input: falEndpoints.LoraInput;
                output: falEndpoints.LoraOutput;
            };

            'fal-ai/longcat-video/text-to-video/720p': {
                input: falEndpoints.LongcatVideoTextToVideo720pInput;
                output: falEndpoints.LongcatVideoTextToVideo720pOutput;
            };

            'fal-ai/longcat-video/text-to-video/480p': {
                input: falEndpoints.LongcatVideoTextToVideo480pInput;
                output: falEndpoints.LongcatVideoTextToVideo480pOutput;
            };

            'fal-ai/longcat-video/image-to-video/720p': {
                input: falEndpoints.LongcatVideoImageToVideo720pInput;
                output: falEndpoints.LongcatVideoImageToVideo720pOutput;
            };

            'fal-ai/longcat-video/image-to-video/480p': {
                input: falEndpoints.LongcatVideoImageToVideo480pInput;
                output: falEndpoints.LongcatVideoImageToVideo480pOutput;
            };

            'fal-ai/longcat-video/distilled/text-to-video/720p': {
                input: falEndpoints.LongcatVideoDistilledTextToVideo720pInput;
                output: falEndpoints.LongcatVideoDistilledTextToVideo720pOutput;
            };

            'fal-ai/longcat-video/distilled/text-to-video/480p': {
                input: falEndpoints.LongcatVideoDistilledTextToVideo480pInput;
                output: falEndpoints.LongcatVideoDistilledTextToVideo480pOutput;
            };

            'fal-ai/longcat-video/distilled/image-to-video/720p': {
                input: falEndpoints.LongcatVideoDistilledImageToVideo720pInput;
                output: falEndpoints.LongcatVideoDistilledImageToVideo720pOutput;
            };

            'fal-ai/longcat-video/distilled/image-to-video/480p': {
                input: falEndpoints.LongcatVideoDistilledImageToVideo480pInput;
                output: falEndpoints.LongcatVideoDistilledImageToVideo480pOutput;
            };

            'fal-ai/longcat-single-avatar/image-audio-to-video': {
                input: falEndpoints.LongcatSingleAvatarImageAudioToVideoInput;
                output: falEndpoints.LongcatSingleAvatarImageAudioToVideoOutput;
            };

            'fal-ai/longcat-single-avatar/audio-to-video': {
                input: falEndpoints.LongcatSingleAvatarAudioToVideoInput;
                output: falEndpoints.LongcatSingleAvatarAudioToVideoOutput;
            };

            'fal-ai/longcat-image/edit': {
                input: falEndpoints.LongcatImageEditInput;
                output: falEndpoints.LongcatImageEditOutput;
            };

            'fal-ai/longcat-image': {
                input: falEndpoints.LongcatImageInput;
                output: falEndpoints.LongcatImageOutput;
            };

            'fal-ai/llava-next': {
                input: falEndpoints.LlavaNextInput;
                output: falEndpoints.LlavaNextOutput;
            };

            'fal-ai/live-portrait/image': {
                input: falEndpoints.LivePortraitImageInput;
                output: falEndpoints.LivePortraitImageOutput;
            };

            'fal-ai/live-portrait': {
                input: falEndpoints.LivePortraitInput;
                output: falEndpoints.LivePortraitOutput;
            };

            'fal-ai/lightx/relight': {
                input: falEndpoints.LightxRelightInput;
                output: falEndpoints.LightxRelightOutput;
            };

            'fal-ai/lightx/recamera': {
                input: falEndpoints.LightxRecameraInput;
                output: falEndpoints.LightxRecameraOutput;
            };

            'fal-ai/leffa/virtual-tryon': {
                input: falEndpoints.LeffaVirtualTryonInput;
                output: falEndpoints.LeffaVirtualTryonOutput;
            };

            'fal-ai/leffa/pose-transfer': {
                input: falEndpoints.LeffaPoseTransferInput;
                output: falEndpoints.LeffaPoseTransferOutput;
            };

            'fal-ai/lcm-sd15-i2i': {
                input: falEndpoints.LcmSd15I2iInput;
                output: falEndpoints.LcmSd15I2iOutput;
            };

            'fal-ai/latentsync': {
                input: falEndpoints.LatentsyncInput;
                output: falEndpoints.LatentsyncOutput;
            };

            'fal-ai/krea-wan-14b/video-to-video': {
                input: falEndpoints.KreaWan14bVideoToVideoInput;
                output: falEndpoints.KreaWan14bVideoToVideoOutput;
            };

            'fal-ai/krea-wan-14b/text-to-video': {
                input: falEndpoints.KreaWan14bTextToVideoInput;
                output: falEndpoints.KreaWan14bTextToVideoOutput;
            };

            'fal-ai/krea-2/turbo/style': {
                input: falEndpoints.Krea2TurboStyleInput;
                output: falEndpoints.Krea2TurboStyleOutput;
            };

            'fal-ai/krea-2/turbo/lora': {
                input: falEndpoints.Krea2TurboLoraInput;
                output: falEndpoints.Krea2TurboLoraOutput;
            };

            'fal-ai/krea-2/turbo': {
                input: falEndpoints.Krea2TurboInput;
                output: falEndpoints.Krea2TurboOutput;
            };

            'fal-ai/krea-2-trainer': {
                input: falEndpoints.Krea2TrainerInput;
                output: falEndpoints.Krea2TrainerOutput;
            };

            'fal-ai/kolors/image-to-image': {
                input: falEndpoints.KolorsImageToImageInput;
                output: falEndpoints.KolorsImageToImageOutput;
            };

            'fal-ai/kolors': {
                input: falEndpoints.KolorsInput;
                output: falEndpoints.KolorsOutput;
            };

            'fal-ai/kokoro/spanish': {
                input: falEndpoints.KokoroSpanishInput;
                output: falEndpoints.KokoroSpanishOutput;
            };

            'fal-ai/kokoro/mandarin-chinese': {
                input: falEndpoints.KokoroMandarinChineseInput;
                output: falEndpoints.KokoroMandarinChineseOutput;
            };

            'fal-ai/kokoro/japanese': {
                input: falEndpoints.KokoroJapaneseInput;
                output: falEndpoints.KokoroJapaneseOutput;
            };

            'fal-ai/kokoro/italian': {
                input: falEndpoints.KokoroItalianInput;
                output: falEndpoints.KokoroItalianOutput;
            };

            'fal-ai/kokoro/hindi': {
                input: falEndpoints.KokoroHindiInput;
                output: falEndpoints.KokoroHindiOutput;
            };

            'fal-ai/kokoro/french': {
                input: falEndpoints.KokoroFrenchInput;
                output: falEndpoints.KokoroFrenchOutput;
            };

            'fal-ai/kokoro/british-english': {
                input: falEndpoints.KokoroBritishEnglishInput;
                output: falEndpoints.KokoroBritishEnglishOutput;
            };

            'fal-ai/kokoro/brazilian-portuguese': {
                input: falEndpoints.KokoroBrazilianPortugueseInput;
                output: falEndpoints.KokoroBrazilianPortugueseOutput;
            };

            'fal-ai/kokoro/american-english': {
                input: falEndpoints.KokoroAmericanEnglishInput;
                output: falEndpoints.KokoroAmericanEnglishOutput;
            };

            'fal-ai/kling-video/video-to-audio': {
                input: falEndpoints.KlingVideoVideoToAudioInput;
                output: falEndpoints.KlingVideoVideoToAudioOutput;
            };

            'fal-ai/kling-video/v3/turbo/standard/text-to-video': {
                input: falEndpoints.KlingVideoV3TurboStandardTextToVideoInput;
                output: falEndpoints.KlingVideoV3TurboStandardTextToVideoOutput;
            };

            'fal-ai/kling-video/v3/turbo/standard/image-to-video': {
                input: falEndpoints.KlingVideoV3TurboStandardImageToVideoInput;
                output: falEndpoints.KlingVideoV3TurboStandardImageToVideoOutput;
            };

            'fal-ai/kling-video/v3/turbo/pro/text-to-video': {
                input: falEndpoints.KlingVideoV3TurboProTextToVideoInput;
                output: falEndpoints.KlingVideoV3TurboProTextToVideoOutput;
            };

            'fal-ai/kling-video/v3/turbo/pro/image-to-video': {
                input: falEndpoints.KlingVideoV3TurboProImageToVideoInput;
                output: falEndpoints.KlingVideoV3TurboProImageToVideoOutput;
            };

            'fal-ai/kling-video/v3/standard/text-to-video': {
                input: falEndpoints.KlingVideoV3StandardTextToVideoInput;
                output: falEndpoints.KlingVideoV3StandardTextToVideoOutput;
            };

            'fal-ai/kling-video/v3/standard/motion-control': {
                input: falEndpoints.KlingVideoV3StandardMotionControlInput;
                output: falEndpoints.KlingVideoV3StandardMotionControlOutput;
            };

            'fal-ai/kling-video/v3/standard/image-to-video': {
                input: falEndpoints.KlingVideoV3StandardImageToVideoInput;
                output: falEndpoints.KlingVideoV3StandardImageToVideoOutput;
            };

            'fal-ai/kling-video/v3/pro/text-to-video': {
                input: falEndpoints.KlingVideoV3ProTextToVideoInput;
                output: falEndpoints.KlingVideoV3ProTextToVideoOutput;
            };

            'fal-ai/kling-video/v3/pro/motion-control': {
                input: falEndpoints.KlingVideoV3ProMotionControlInput;
                output: falEndpoints.KlingVideoV3ProMotionControlOutput;
            };

            'fal-ai/kling-video/v3/pro/image-to-video': {
                input: falEndpoints.KlingVideoV3ProImageToVideoInput;
                output: falEndpoints.KlingVideoV3ProImageToVideoOutput;
            };

            'fal-ai/kling-video/v3/4k/text-to-video': {
                input: falEndpoints.KlingVideoV34kTextToVideoInput;
                output: falEndpoints.KlingVideoV34kTextToVideoOutput;
            };

            'fal-ai/kling-video/v3/4k/image-to-video': {
                input: falEndpoints.KlingVideoV34kImageToVideoInput;
                output: falEndpoints.KlingVideoV34kImageToVideoOutput;
            };

            'fal-ai/kling-video/v2.6/standard/motion-control': {
                input: falEndpoints.KlingVideoV26StandardMotionControlInput;
                output: falEndpoints.KlingVideoV26StandardMotionControlOutput;
            };

            'fal-ai/kling-video/v2.6/pro/text-to-video': {
                input: falEndpoints.KlingVideoV26ProTextToVideoInput;
                output: falEndpoints.KlingVideoV26ProTextToVideoOutput;
            };

            'fal-ai/kling-video/v2.6/pro/motion-control': {
                input: falEndpoints.KlingVideoV26ProMotionControlInput;
                output: falEndpoints.KlingVideoV26ProMotionControlOutput;
            };

            'fal-ai/kling-video/v2.6/pro/image-to-video': {
                input: falEndpoints.KlingVideoV26ProImageToVideoInput;
                output: falEndpoints.KlingVideoV26ProImageToVideoOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/standard/image-to-video': {
                input: falEndpoints.KlingVideoV25TurboStandardImageToVideoInput;
                output: falEndpoints.KlingVideoV25TurboStandardImageToVideoOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/pro/text-to-video': {
                input: falEndpoints.KlingVideoV25TurboProTextToVideoInput;
                output: falEndpoints.KlingVideoV25TurboProTextToVideoOutput;
            };

            'fal-ai/kling-video/v2.5-turbo/pro/image-to-video': {
                input: falEndpoints.KlingVideoV25TurboProImageToVideoInput;
                output: falEndpoints.KlingVideoV25TurboProImageToVideoOutput;
            };

            'fal-ai/kling-video/v1/tts': {
                input: falEndpoints.KlingVideoV1TtsInput;
                output: falEndpoints.KlingVideoV1TtsOutput;
            };

            'fal-ai/kling-video/v1/standard/effects': {
                input: falEndpoints.KlingVideoV1StandardEffectsInput;
                output: falEndpoints.KlingVideoV1StandardEffectsOutput;
            };

            'fal-ai/kling-video/v1/standard/ai-avatar': {
                input: falEndpoints.KlingVideoV1StandardAiAvatarInput;
                output: falEndpoints.KlingVideoV1StandardAiAvatarOutput;
            };

            'fal-ai/kling-video/v1/pro/ai-avatar': {
                input: falEndpoints.KlingVideoV1ProAiAvatarInput;
                output: falEndpoints.KlingVideoV1ProAiAvatarOutput;
            };

            'fal-ai/kling-video/v1.6/standard/effects': {
                input: falEndpoints.KlingVideoV16StandardEffectsInput;
                output: falEndpoints.KlingVideoV16StandardEffectsOutput;
            };

            'fal-ai/kling-video/v1.6/pro/effects': {
                input: falEndpoints.KlingVideoV16ProEffectsInput;
                output: falEndpoints.KlingVideoV16ProEffectsOutput;
            };

            'fal-ai/kling-video/v1.5/pro/effects': {
                input: falEndpoints.KlingVideoV15ProEffectsInput;
                output: falEndpoints.KlingVideoV15ProEffectsOutput;
            };

            'fal-ai/kling-video/o3/standard/video-to-video/reference': {
                input: falEndpoints.KlingVideoO3StandardVideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO3StandardVideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o3/standard/video-to-video/edit': {
                input: falEndpoints.KlingVideoO3StandardVideoToVideoEditInput;
                output: falEndpoints.KlingVideoO3StandardVideoToVideoEditOutput;
            };

            'fal-ai/kling-video/o3/standard/text-to-video': {
                input: falEndpoints.KlingVideoO3StandardTextToVideoInput;
                output: falEndpoints.KlingVideoO3StandardTextToVideoOutput;
            };

            'fal-ai/kling-video/o3/standard/reference-to-video': {
                input: falEndpoints.KlingVideoO3StandardReferenceToVideoInput;
                output: falEndpoints.KlingVideoO3StandardReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o3/standard/image-to-video': {
                input: falEndpoints.KlingVideoO3StandardImageToVideoInput;
                output: falEndpoints.KlingVideoO3StandardImageToVideoOutput;
            };

            'fal-ai/kling-video/o3/pro/video-to-video/reference': {
                input: falEndpoints.KlingVideoO3ProVideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO3ProVideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o3/pro/video-to-video/edit': {
                input: falEndpoints.KlingVideoO3ProVideoToVideoEditInput;
                output: falEndpoints.KlingVideoO3ProVideoToVideoEditOutput;
            };

            'fal-ai/kling-video/o3/pro/text-to-video': {
                input: falEndpoints.KlingVideoO3ProTextToVideoInput;
                output: falEndpoints.KlingVideoO3ProTextToVideoOutput;
            };

            'fal-ai/kling-video/o3/pro/reference-to-video': {
                input: falEndpoints.KlingVideoO3ProReferenceToVideoInput;
                output: falEndpoints.KlingVideoO3ProReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o3/pro/image-to-video': {
                input: falEndpoints.KlingVideoO3ProImageToVideoInput;
                output: falEndpoints.KlingVideoO3ProImageToVideoOutput;
            };

            'fal-ai/kling-video/o3/4k/video-to-video/reference': {
                input: falEndpoints.KlingVideoO34kVideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO34kVideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o3/4k/video-to-video/edit': {
                input: falEndpoints.KlingVideoO34kVideoToVideoEditInput;
                output: falEndpoints.KlingVideoO34kVideoToVideoEditOutput;
            };

            'fal-ai/kling-video/o3/4k/text-to-video': {
                input: falEndpoints.KlingVideoO34kTextToVideoInput;
                output: falEndpoints.KlingVideoO34kTextToVideoOutput;
            };

            'fal-ai/kling-video/o3/4k/reference-to-video': {
                input: falEndpoints.KlingVideoO34kReferenceToVideoInput;
                output: falEndpoints.KlingVideoO34kReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o3/4k/image-to-video': {
                input: falEndpoints.KlingVideoO34kImageToVideoInput;
                output: falEndpoints.KlingVideoO34kImageToVideoOutput;
            };

            'fal-ai/kling-video/o1/video-to-video/reference': {
                input: falEndpoints.KlingVideoO1VideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO1VideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o1/video-to-video/edit': {
                input: falEndpoints.KlingVideoO1VideoToVideoEditInput;
                output: falEndpoints.KlingVideoO1VideoToVideoEditOutput;
            };

            'fal-ai/kling-video/o1/standard/video-to-video/reference': {
                input: falEndpoints.KlingVideoO1StandardVideoToVideoReferenceInput;
                output: falEndpoints.KlingVideoO1StandardVideoToVideoReferenceOutput;
            };

            'fal-ai/kling-video/o1/standard/video-to-video/edit': {
                input: falEndpoints.KlingVideoO1StandardVideoToVideoEditInput;
                output: falEndpoints.KlingVideoO1StandardVideoToVideoEditOutput;
            };

            'fal-ai/kling-video/o1/standard/reference-to-video': {
                input: falEndpoints.KlingVideoO1StandardReferenceToVideoInput;
                output: falEndpoints.KlingVideoO1StandardReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o1/standard/image-to-video': {
                input: falEndpoints.KlingVideoO1StandardImageToVideoInput;
                output: falEndpoints.KlingVideoO1StandardImageToVideoOutput;
            };

            'fal-ai/kling-video/o1/reference-to-video': {
                input: falEndpoints.KlingVideoO1ReferenceToVideoInput;
                output: falEndpoints.KlingVideoO1ReferenceToVideoOutput;
            };

            'fal-ai/kling-video/o1/image-to-video': {
                input: falEndpoints.KlingVideoO1ImageToVideoInput;
                output: falEndpoints.KlingVideoO1ImageToVideoOutput;
            };

            'fal-ai/kling-video/lipsync/text-to-video': {
                input: falEndpoints.KlingVideoLipsyncTextToVideoInput;
                output: falEndpoints.KlingVideoLipsyncTextToVideoOutput;
            };

            'fal-ai/kling-video/lipsync/audio-to-video': {
                input: falEndpoints.KlingVideoLipsyncAudioToVideoInput;
                output: falEndpoints.KlingVideoLipsyncAudioToVideoOutput;
            };

            'fal-ai/kling-video/create-voice': {
                input: falEndpoints.KlingVideoCreateVoiceInput;
                output: falEndpoints.KlingVideoCreateVoiceOutput;
            };

            'fal-ai/kling-video/ai-avatar/v2/standard': {
                input: falEndpoints.KlingVideoAiAvatarV2StandardInput;
                output: falEndpoints.KlingVideoAiAvatarV2StandardOutput;
            };

            'fal-ai/kling-video/ai-avatar/v2/pro': {
                input: falEndpoints.KlingVideoAiAvatarV2ProInput;
                output: falEndpoints.KlingVideoAiAvatarV2ProOutput;
            };

            'fal-ai/kling-image/v3/text-to-image': {
                input: falEndpoints.KlingImageV3TextToImageInput;
                output: falEndpoints.KlingImageV3TextToImageOutput;
            };

            'fal-ai/kling-image/v3/image-to-image': {
                input: falEndpoints.KlingImageV3ImageToImageInput;
                output: falEndpoints.KlingImageV3ImageToImageOutput;
            };

            'fal-ai/kling-image/o3/text-to-image': {
                input: falEndpoints.KlingImageO3TextToImageInput;
                output: falEndpoints.KlingImageO3TextToImageOutput;
            };

            'fal-ai/kling-image/o3/image-to-image': {
                input: falEndpoints.KlingImageO3ImageToImageInput;
                output: falEndpoints.KlingImageO3ImageToImageOutput;
            };

            'fal-ai/kling-image/o1': {
                input: falEndpoints.KlingImageO1Input;
                output: falEndpoints.KlingImageO1Output;
            };

            'fal-ai/kandinsky6-vsr/lite': {
                input: falEndpoints.Kandinsky6VsrLiteInput;
                output: falEndpoints.Kandinsky6VsrLiteOutput;
            };

            'fal-ai/kandinsky6-vsr': {
                input: falEndpoints.Kandinsky6VsrInput;
                output: falEndpoints.Kandinsky6VsrOutput;
            };

            'fal-ai/kandinsky6-pro/text-to-video': {
                input: falEndpoints.Kandinsky6ProTextToVideoInput;
                output: falEndpoints.Kandinsky6ProTextToVideoOutput;
            };

            'fal-ai/kandinsky6-pro/image-to-video': {
                input: falEndpoints.Kandinsky6ProImageToVideoInput;
                output: falEndpoints.Kandinsky6ProImageToVideoOutput;
            };

            'fal-ai/kandinsky6-lite/text-to-video': {
                input: falEndpoints.Kandinsky6LiteTextToVideoInput;
                output: falEndpoints.Kandinsky6LiteTextToVideoOutput;
            };

            'fal-ai/kandinsky6-lite/image-to-video': {
                input: falEndpoints.Kandinsky6LiteImageToVideoInput;
                output: falEndpoints.Kandinsky6LiteImageToVideoOutput;
            };

            'fal-ai/kandinsky5/text-to-video/distill': {
                input: falEndpoints.Kandinsky5TextToVideoDistillInput;
                output: falEndpoints.Kandinsky5TextToVideoDistillOutput;
            };

            'fal-ai/kandinsky5/text-to-video': {
                input: falEndpoints.Kandinsky5TextToVideoInput;
                output: falEndpoints.Kandinsky5TextToVideoOutput;
            };

            'fal-ai/kandinsky5-pro/text-to-video': {
                input: falEndpoints.Kandinsky5ProTextToVideoInput;
                output: falEndpoints.Kandinsky5ProTextToVideoOutput;
            };

            'fal-ai/kandinsky5-pro/image-to-video': {
                input: falEndpoints.Kandinsky5ProImageToVideoInput;
                output: falEndpoints.Kandinsky5ProImageToVideoOutput;
            };

            'fal-ai/joyai-image-edit': {
                input: falEndpoints.JoyaiImageEditInput;
                output: falEndpoints.JoyaiImageEditOutput;
            };

            'fal-ai/janus': {
                input: falEndpoints.JanusInput;
                output: falEndpoints.JanusOutput;
            };

            'fal-ai/ip-adapter-face-id': {
                input: falEndpoints.IpAdapterFaceIdInput;
                output: falEndpoints.IpAdapterFaceIdOutput;
            };

            'fal-ai/inworld-tts': {
                input: falEndpoints.InworldTtsInput;
                output: falEndpoints.InworldTtsOutput;
            };

            'fal-ai/invisible-watermark': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/instant-character': {
                input: falEndpoints.InstantCharacterInput;
                output: falEndpoints.InstantCharacterOutput;
            };

            'fal-ai/inpaint': {
                input: falEndpoints.InpaintInput;
                output: falEndpoints.InpaintOutput;
            };

            'fal-ai/infinity-star/text-to-video': {
                input: falEndpoints.InfinityStarTextToVideoInput;
                output: falEndpoints.InfinityStarTextToVideoOutput;
            };

            'fal-ai/infinitalk/video-to-video': {
                input: falEndpoints.InfinitalkVideoToVideoInput;
                output: falEndpoints.InfinitalkVideoToVideoOutput;
            };

            'fal-ai/infinitalk/single-text': {
                input: falEndpoints.InfinitalkSingleTextInput;
                output: falEndpoints.InfinitalkSingleTextOutput;
            };

            'fal-ai/infinitalk': {
                input: falEndpoints.InfinitalkInput;
                output: falEndpoints.InfinitalkOutput;
            };

            'fal-ai/index-tts-2/text-to-speech': {
                input: falEndpoints.IndexTts2TextToSpeechInput;
                output: falEndpoints.IndexTts2TextToSpeechOutput;
            };

            'fal-ai/imageutils/rembg': {
                input: falEndpoints.ImageutilsRembgInput;
                output: falEndpoints.ImageutilsRembgOutput;
            };

            'fal-ai/imageutils/nsfw': {
                input: falEndpoints.ImageutilsNsfwInput;
                output: falEndpoints.ImageutilsNsfwOutput;
            };

            'fal-ai/imageutils/marigold-depth': {
                input: falEndpoints.ImageutilsMarigoldDepthInput;
                output: falEndpoints.ImageutilsMarigoldDepthOutput;
            };

            'fal-ai/imageutils/depth': {
                input: falEndpoints.ImageutilsDepthInput;
                output: falEndpoints.ImageutilsDepthOutput;
            };

            'fal-ai/image2svg': {
                input: falEndpoints.Image2svgInput;
                output: falEndpoints.Image2svgOutput;
            };

            'fal-ai/image2pixel': {
                input: falEndpoints.Image2pixelInput;
                output: falEndpoints.Image2pixelOutput;
            };

            'fal-ai/image-preprocessors/zoe': {
                input: falEndpoints.ImagePreprocessorsZoeInput;
                output: falEndpoints.ImagePreprocessorsZoeOutput;
            };

            'fal-ai/image-preprocessors/teed': {
                input: falEndpoints.ImagePreprocessorsTeedInput;
                output: falEndpoints.ImagePreprocessorsTeedOutput;
            };

            'fal-ai/image-preprocessors/scribble': {
                input: falEndpoints.ImagePreprocessorsScribbleInput;
                output: falEndpoints.ImagePreprocessorsScribbleOutput;
            };

            'fal-ai/image-preprocessors/sam': {
                input: falEndpoints.ImagePreprocessorsSamInput;
                output: falEndpoints.ImagePreprocessorsSamOutput;
            };

            'fal-ai/image-preprocessors/pidi': {
                input: falEndpoints.ImagePreprocessorsPidiInput;
                output: falEndpoints.ImagePreprocessorsPidiOutput;
            };

            'fal-ai/image-preprocessors/mlsd': {
                input: falEndpoints.ImagePreprocessorsMlsdInput;
                output: falEndpoints.ImagePreprocessorsMlsdOutput;
            };

            'fal-ai/image-preprocessors/midas': {
                input: falEndpoints.ImagePreprocessorsMidasInput;
                output: falEndpoints.ImagePreprocessorsMidasOutput;
            };

            'fal-ai/image-preprocessors/lineart': {
                input: falEndpoints.ImagePreprocessorsLineartInput;
                output: falEndpoints.ImagePreprocessorsLineartOutput;
            };

            'fal-ai/image-preprocessors/hed': {
                input: falEndpoints.ImagePreprocessorsHedInput;
                output: falEndpoints.ImagePreprocessorsHedOutput;
            };

            'fal-ai/image-preprocessors/depth-anything/v2': {
                input: falEndpoints.ImagePreprocessorsDepthAnythingV2Input;
                output: falEndpoints.ImagePreprocessorsDepthAnythingV2Output;
            };

            'fal-ai/image-editing/youtube-thumbnails': {
                input: falEndpoints.ImageEditingYoutubeThumbnailsInput;
                output: falEndpoints.ImageEditingYoutubeThumbnailsOutput;
            };

            'fal-ai/image-editing/wojak-style': {
                input: falEndpoints.ImageEditingWojakStyleInput;
                output: falEndpoints.ImageEditingWojakStyleOutput;
            };

            'fal-ai/image-editing/weather-effect': {
                input: falEndpoints.ImageEditingWeatherEffectInput;
                output: falEndpoints.ImageEditingWeatherEffectOutput;
            };

            'fal-ai/image-editing/time-of-day': {
                input: falEndpoints.ImageEditingTimeOfDayInput;
                output: falEndpoints.ImageEditingTimeOfDayOutput;
            };

            'fal-ai/image-editing/text-removal': {
                input: falEndpoints.ImageEditingTextRemovalInput;
                output: falEndpoints.ImageEditingTextRemovalOutput;
            };

            'fal-ai/image-editing/style-transfer': {
                input: falEndpoints.ImageEditingStyleTransferInput;
                output: falEndpoints.ImageEditingStyleTransferOutput;
            };

            'fal-ai/image-editing/scene-composition': {
                input: falEndpoints.ImageEditingSceneCompositionInput;
                output: falEndpoints.ImageEditingSceneCompositionOutput;
            };

            'fal-ai/image-editing/retouch': {
                input: falEndpoints.ImageEditingRetouchInput;
                output: falEndpoints.ImageEditingRetouchOutput;
            };

            'fal-ai/image-editing/reframe': {
                input: falEndpoints.ImageEditingReframeInput;
                output: falEndpoints.ImageEditingReframeOutput;
            };

            'fal-ai/image-editing/realism': {
                input: falEndpoints.ImageEditingRealismInput;
                output: falEndpoints.ImageEditingRealismOutput;
            };

            'fal-ai/image-editing/professional-photo': {
                input: falEndpoints.ImageEditingProfessionalPhotoInput;
                output: falEndpoints.ImageEditingProfessionalPhotoOutput;
            };

            'fal-ai/image-editing/plushie-style': {
                input: falEndpoints.ImageEditingPlushieStyleInput;
                output: falEndpoints.ImageEditingPlushieStyleOutput;
            };

            'fal-ai/image-editing/photo-restoration': {
                input: falEndpoints.ImageEditingPhotoRestorationInput;
                output: falEndpoints.ImageEditingPhotoRestorationOutput;
            };

            'fal-ai/image-editing/object-removal': {
                input: falEndpoints.ImageEditingObjectRemovalInput;
                output: falEndpoints.ImageEditingObjectRemovalOutput;
            };

            'fal-ai/image-editing/hair-change': {
                input: falEndpoints.ImageEditingHairChangeInput;
                output: falEndpoints.ImageEditingHairChangeOutput;
            };

            'fal-ai/image-editing/face-enhancement': {
                input: falEndpoints.ImageEditingFaceEnhancementInput;
                output: falEndpoints.ImageEditingFaceEnhancementOutput;
            };

            'fal-ai/image-editing/expression-change': {
                input: falEndpoints.ImageEditingExpressionChangeInput;
                output: falEndpoints.ImageEditingExpressionChangeOutput;
            };

            'fal-ai/image-editing/color-correction': {
                input: falEndpoints.ImageEditingColorCorrectionInput;
                output: falEndpoints.ImageEditingColorCorrectionOutput;
            };

            'fal-ai/image-editing/cartoonify': {
                input: falEndpoints.ImageEditingCartoonifyInput;
                output: falEndpoints.ImageEditingCartoonifyOutput;
            };

            'fal-ai/image-editing/broccoli-haircut': {
                input: falEndpoints.ImageEditingBroccoliHaircutInput;
                output: falEndpoints.ImageEditingBroccoliHaircutOutput;
            };

            'fal-ai/image-editing/background-change': {
                input: falEndpoints.ImageEditingBackgroundChangeInput;
                output: falEndpoints.ImageEditingBackgroundChangeOutput;
            };

            'fal-ai/image-editing/baby-version': {
                input: falEndpoints.ImageEditingBabyVersionInput;
                output: falEndpoints.ImageEditingBabyVersionOutput;
            };

            'fal-ai/image-editing/age-progression': {
                input: falEndpoints.ImageEditingAgeProgressionInput;
                output: falEndpoints.ImageEditingAgeProgressionOutput;
            };

            'fal-ai/image-apps-v2/virtual-try-on': {
                input: falEndpoints.ImageAppsV2VirtualTryOnInput;
                output: falEndpoints.ImageAppsV2VirtualTryOnOutput;
            };

            'fal-ai/image-apps-v2/texture-transform': {
                input: falEndpoints.ImageAppsV2TextureTransformInput;
                output: falEndpoints.ImageAppsV2TextureTransformOutput;
            };

            'fal-ai/image-apps-v2/style-transfer': {
                input: falEndpoints.ImageAppsV2StyleTransferInput;
                output: falEndpoints.ImageAppsV2StyleTransferOutput;
            };

            'fal-ai/image-apps-v2/relighting': {
                input: falEndpoints.ImageAppsV2RelightingInput;
                output: falEndpoints.ImageAppsV2RelightingOutput;
            };

            'fal-ai/image-apps-v2/product-photography': {
                input: falEndpoints.ImageAppsV2ProductPhotographyInput;
                output: falEndpoints.ImageAppsV2ProductPhotographyOutput;
            };

            'fal-ai/image-apps-v2/product-holding': {
                input: falEndpoints.ImageAppsV2ProductHoldingInput;
                output: falEndpoints.ImageAppsV2ProductHoldingOutput;
            };

            'fal-ai/image-apps-v2/portrait-enhance': {
                input: falEndpoints.ImageAppsV2PortraitEnhanceInput;
                output: falEndpoints.ImageAppsV2PortraitEnhanceOutput;
            };

            'fal-ai/image-apps-v2/photography-effects': {
                input: falEndpoints.ImageAppsV2PhotographyEffectsInput;
                output: falEndpoints.ImageAppsV2PhotographyEffectsOutput;
            };

            'fal-ai/image-apps-v2/photo-restoration': {
                input: falEndpoints.ImageAppsV2PhotoRestorationInput;
                output: falEndpoints.ImageAppsV2PhotoRestorationOutput;
            };

            'fal-ai/image-apps-v2/perspective': {
                input: falEndpoints.ImageAppsV2PerspectiveInput;
                output: falEndpoints.ImageAppsV2PerspectiveOutput;
            };

            'fal-ai/image-apps-v2/outpaint': {
                input: falEndpoints.ImageAppsV2OutpaintInput;
                output: falEndpoints.ImageAppsV2OutpaintOutput;
            };

            'fal-ai/image-apps-v2/object-removal': {
                input: falEndpoints.ImageAppsV2ObjectRemovalInput;
                output: falEndpoints.ImageAppsV2ObjectRemovalOutput;
            };

            'fal-ai/image-apps-v2/makeup-application': {
                input: falEndpoints.ImageAppsV2MakeupApplicationInput;
                output: falEndpoints.ImageAppsV2MakeupApplicationOutput;
            };

            'fal-ai/image-apps-v2/headshot-photo': {
                input: falEndpoints.ImageAppsV2HeadshotPhotoInput;
                output: falEndpoints.ImageAppsV2HeadshotPhotoOutput;
            };

            'fal-ai/image-apps-v2/hair-change': {
                input: falEndpoints.ImageAppsV2HairChangeInput;
                output: falEndpoints.ImageAppsV2HairChangeOutput;
            };

            'fal-ai/image-apps-v2/expression-change': {
                input: falEndpoints.ImageAppsV2ExpressionChangeInput;
                output: falEndpoints.ImageAppsV2ExpressionChangeOutput;
            };

            'fal-ai/image-apps-v2/city-teleport': {
                input: falEndpoints.ImageAppsV2CityTeleportInput;
                output: falEndpoints.ImageAppsV2CityTeleportOutput;
            };

            'fal-ai/image-apps-v2/age-modify': {
                input: falEndpoints.ImageAppsV2AgeModifyInput;
                output: falEndpoints.ImageAppsV2AgeModifyOutput;
            };

            'fal-ai/illusion-diffusion': {
                input: falEndpoints.IllusionDiffusionInput;
                output: falEndpoints.IllusionDiffusionOutput;
            };

            'fal-ai/ideogram/v3/replace-background': {
                input: falEndpoints.IdeogramV3ReplaceBackgroundInput;
                output: falEndpoints.IdeogramV3ReplaceBackgroundOutput;
            };

            'fal-ai/ideogram/v3/remix': {
                input: falEndpoints.IdeogramV3RemixInput;
                output: falEndpoints.IdeogramV3RemixOutput;
            };

            'fal-ai/ideogram/v3/reframe': {
                input: falEndpoints.IdeogramV3ReframeInput;
                output: falEndpoints.IdeogramV3ReframeOutput;
            };

            'fal-ai/ideogram/v3/layerize-text': {
                input: falEndpoints.IdeogramV3LayerizeTextInput;
                output: falEndpoints.IdeogramV3LayerizeTextOutput;
            };

            'fal-ai/ideogram/v3/generate-transparent': {
                input: falEndpoints.IdeogramV3GenerateTransparentInput;
                output: falEndpoints.IdeogramV3GenerateTransparentOutput;
            };

            'fal-ai/ideogram/v3/edit': {
                input: falEndpoints.IdeogramV3EditInput;
                output: falEndpoints.IdeogramV3EditOutput;
            };

            'fal-ai/ideogram/v3': {
                input: falEndpoints.IdeogramV3Input;
                output: falEndpoints.IdeogramV3Output;
            };

            'fal-ai/ideogram/v2a/turbo/remix': {
                input: falEndpoints.IdeogramV2aTurboRemixInput;
                output: falEndpoints.IdeogramV2aTurboRemixOutput;
            };

            'fal-ai/ideogram/v2a/turbo': {
                input: falEndpoints.IdeogramV2aTurboInput;
                output: falEndpoints.IdeogramV2aTurboOutput;
            };

            'fal-ai/ideogram/v2a/remix': {
                input: falEndpoints.IdeogramV2aRemixInput;
                output: falEndpoints.IdeogramV2aRemixOutput;
            };

            'fal-ai/ideogram/v2a': {
                input: falEndpoints.IdeogramV2aInput;
                output: falEndpoints.IdeogramV2aOutput;
            };

            'fal-ai/ideogram/v2/turbo/remix': {
                input: falEndpoints.IdeogramV2TurboRemixInput;
                output: falEndpoints.IdeogramV2TurboRemixOutput;
            };

            'fal-ai/ideogram/v2/turbo/edit': {
                input: falEndpoints.IdeogramV2TurboEditInput;
                output: falEndpoints.IdeogramV2TurboEditOutput;
            };

            'fal-ai/ideogram/v2/turbo': {
                input: falEndpoints.IdeogramV2TurboInput;
                output: falEndpoints.IdeogramV2TurboOutput;
            };

            'fal-ai/ideogram/v2/remix': {
                input: falEndpoints.IdeogramV2RemixInput;
                output: falEndpoints.IdeogramV2RemixOutput;
            };

            'fal-ai/ideogram/v2/edit': {
                input: falEndpoints.IdeogramV2EditInput;
                output: falEndpoints.IdeogramV2EditOutput;
            };

            'fal-ai/ideogram/v2': {
                input: falEndpoints.IdeogramV2Input;
                output: falEndpoints.IdeogramV2Output;
            };

            'fal-ai/ideogram/upscale': {
                input: falEndpoints.IdeogramUpscaleInput;
                output: falEndpoints.IdeogramUpscaleOutput;
            };

            'fal-ai/ideogram/remove-background': {
                input: falEndpoints.IdeogramRemoveBackgroundInput;
                output: falEndpoints.IdeogramRemoveBackgroundOutput;
            };

            'fal-ai/ideogram/object-removal': {
                input: falEndpoints.IdeogramObjectRemovalInput;
                output: falEndpoints.IdeogramObjectRemovalOutput;
            };

            'fal-ai/ideogram/custom-models/generate': {
                input: falEndpoints.IdeogramCustomModelsGenerateInput;
                output: falEndpoints.IdeogramCustomModelsGenerateOutput;
            };

            'fal-ai/ideogram/custom-models': {
                input: falEndpoints.IdeogramCustomModelsInput;
                output: falEndpoints.IdeogramCustomModelsOutput;
            };

            'fal-ai/ideogram/character/remix': {
                input: falEndpoints.IdeogramCharacterRemixInput;
                output: falEndpoints.IdeogramCharacterRemixOutput;
            };

            'fal-ai/ideogram/character/edit': {
                input: falEndpoints.IdeogramCharacterEditInput;
                output: falEndpoints.IdeogramCharacterEditOutput;
            };

            'fal-ai/ideogram/character': {
                input: falEndpoints.IdeogramCharacterInput;
                output: falEndpoints.IdeogramCharacterOutput;
            };

            'fal-ai/id-v2v/relight': {
                input: falEndpoints.IdV2vRelightInput;
                output: falEndpoints.IdV2vRelightOutput;
            };

            'fal-ai/id-v2v': {
                input: falEndpoints.IdV2vInput;
                output: falEndpoints.IdV2vOutput;
            };

            'fal-ai/iclight-v2': {
                input: falEndpoints.IclightV2Input;
                output: falEndpoints.IclightV2Output;
            };

            'fal-ai/hyper3d/rodin/v2.5/text-to-3d/fast': {
                input: falEndpoints.Hyper3dRodinV25TextTo3dFastInput;
                output: falEndpoints.Hyper3dRodinV25TextTo3dFastOutput;
            };

            'fal-ai/hyper3d/rodin/v2.5/text-to-3d': {
                input: falEndpoints.Hyper3dRodinV25TextTo3dInput;
                output: falEndpoints.Hyper3dRodinV25TextTo3dOutput;
            };

            'fal-ai/hyper3d/rodin/v2.5/fast': {
                input: falEndpoints.Hyper3dRodinV25FastInput;
                output: falEndpoints.Hyper3dRodinV25FastOutput;
            };

            'fal-ai/hyper3d/rodin/v2.5': {
                input: falEndpoints.Hyper3dRodinV25Input;
                output: falEndpoints.Hyper3dRodinV25Output;
            };

            'fal-ai/hyper3d/rodin/v2': {
                input: falEndpoints.Hyper3dRodinV2Input;
                output: falEndpoints.Hyper3dRodinV2Output;
            };

            'fal-ai/hyper3d/rodin': {
                input: falEndpoints.Hyper3dRodinInput;
                output: falEndpoints.Hyper3dRodinOutput;
            };

            'fal-ai/hy-wu-edit': {
                input: falEndpoints.HyWuEditInput;
                output: falEndpoints.HyWuEditOutput;
            };

            'fal-ai/hunyuan3d/v2/turbo': {
                input: falEndpoints.Hunyuan3dV2TurboInput;
                output: falEndpoints.Hunyuan3dV2TurboOutput;
            };

            'fal-ai/hunyuan3d/v2/multi-view/turbo': {
                input: falEndpoints.Hunyuan3dV2MultiViewTurboInput;
                output: falEndpoints.Hunyuan3dV2MultiViewTurboOutput;
            };

            'fal-ai/hunyuan3d/v2/multi-view': {
                input: falEndpoints.Hunyuan3dV2MultiViewInput;
                output: falEndpoints.Hunyuan3dV2MultiViewOutput;
            };

            'fal-ai/hunyuan3d/v2/mini/turbo': {
                input: falEndpoints.Hunyuan3dV2MiniTurboInput;
                output: falEndpoints.Hunyuan3dV2MiniTurboOutput;
            };

            'fal-ai/hunyuan3d/v2/mini': {
                input: falEndpoints.Hunyuan3dV2MiniInput;
                output: falEndpoints.Hunyuan3dV2MiniOutput;
            };

            'fal-ai/hunyuan3d/v2': {
                input: falEndpoints.Hunyuan3dV2Input;
                output: falEndpoints.Hunyuan3dV2Output;
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

            'fal-ai/hunyuan-video/video-to-video': {
                input: falEndpoints.HunyuanVideoVideoToVideoInput;
                output: falEndpoints.HunyuanVideoVideoToVideoOutput;
            };

            'fal-ai/hunyuan-video-v1.5/text-to-video': {
                input: falEndpoints.HunyuanVideoV15TextToVideoInput;
                output: falEndpoints.HunyuanVideoV15TextToVideoOutput;
            };

            'fal-ai/hunyuan-video-v1.5/image-to-video': {
                input: falEndpoints.HunyuanVideoV15ImageToVideoInput;
                output: falEndpoints.HunyuanVideoV15ImageToVideoOutput;
            };

            'fal-ai/hunyuan-video-img2vid-lora': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/hunyuan-video-image-to-video': {
                input: falEndpoints.HunyuanVideoImageToVideoInput;
                output: falEndpoints.HunyuanVideoImageToVideoOutput;
            };

            'fal-ai/hunyuan-video-foley': {
                input: falEndpoints.HunyuanVideoFoleyInput;
                output: falEndpoints.HunyuanVideoFoleyOutput;
            };

            'fal-ai/hunyuan-video': {
                input: falEndpoints.HunyuanVideoInput;
                output: falEndpoints.HunyuanVideoOutput;
            };

            'fal-ai/hunyuan-motion/fast': {
                input: falEndpoints.HunyuanMotionFastInput;
                output: falEndpoints.HunyuanMotionFastOutput;
            };

            'fal-ai/hunyuan-motion': {
                input: falEndpoints.HunyuanMotionInput;
                output: falEndpoints.HunyuanMotionOutput;
            };

            'fal-ai/hunyuan-image/v3/text-to-image': {
                input: falEndpoints.HunyuanImageV3TextToImageInput;
                output: falEndpoints.HunyuanImageV3TextToImageOutput;
            };

            'fal-ai/hunyuan-image/v3/instruct/text-to-image': {
                input: falEndpoints.HunyuanImageV3InstructTextToImageInput;
                output: falEndpoints.HunyuanImageV3InstructTextToImageOutput;
            };

            'fal-ai/hunyuan-image/v3/instruct/edit': {
                input: falEndpoints.HunyuanImageV3InstructEditInput;
                output: falEndpoints.HunyuanImageV3InstructEditOutput;
            };

            'fal-ai/hunyuan-image/v2.1/text-to-image': {
                input: falEndpoints.HunyuanImageV21TextToImageInput;
                output: falEndpoints.HunyuanImageV21TextToImageOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/smart-topology': {
                input: falEndpoints.Hunyuan3dV31SmartTopologyInput;
                output: falEndpoints.Hunyuan3dV31SmartTopologyOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/rapid/text-to-3d': {
                input: falEndpoints.Hunyuan3dV31RapidTextTo3dInput;
                output: falEndpoints.Hunyuan3dV31RapidTextTo3dOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/rapid/image-to-3d': {
                input: falEndpoints.Hunyuan3dV31RapidImageTo3dInput;
                output: falEndpoints.Hunyuan3dV31RapidImageTo3dOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/pro/text-to-3d': {
                input: falEndpoints.Hunyuan3dV31ProTextTo3dInput;
                output: falEndpoints.Hunyuan3dV31ProTextTo3dOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/pro/image-to-3d': {
                input: falEndpoints.Hunyuan3dV31ProImageTo3dInput;
                output: falEndpoints.Hunyuan3dV31ProImageTo3dOutput;
            };

            'fal-ai/hunyuan-3d/v3.1/part': {
                input: falEndpoints.Hunyuan3dV31PartInput;
                output: falEndpoints.Hunyuan3dV31PartOutput;
            };

            'fal-ai/hunyuan_world/image-to-world': {
                input: falEndpoints.Hunyuan_worldImageToWorldInput;
                output: falEndpoints.Hunyuan_worldImageToWorldOutput;
            };

            'fal-ai/hunyuan_world': {
                input: falEndpoints.Hunyuan_worldInput;
                output: falEndpoints.Hunyuan_worldOutput;
            };

            'fal-ai/hidream-o1-image/edit': {
                input: falEndpoints.HidreamO1ImageEditInput;
                output: falEndpoints.HidreamO1ImageEditOutput;
            };

            'fal-ai/hidream-o1-image/dev/edit': {
                input: falEndpoints.HidreamO1ImageDevEditInput;
                output: falEndpoints.HidreamO1ImageDevEditOutput;
            };

            'fal-ai/hidream-o1-image/dev': {
                input: falEndpoints.HidreamO1ImageDevInput;
                output: falEndpoints.HidreamO1ImageDevOutput;
            };

            'fal-ai/hidream-o1-image': {
                input: falEndpoints.HidreamO1ImageInput;
                output: falEndpoints.HidreamO1ImageOutput;
            };

            'fal-ai/hidream-i1-full/image-to-image': {
                input: falEndpoints.HidreamI1FullImageToImageInput;
                output: falEndpoints.HidreamI1FullImageToImageOutput;
            };

            'fal-ai/hidream-i1-full': {
                input: falEndpoints.HidreamI1FullInput;
                output: falEndpoints.HidreamI1FullOutput;
            };

            'fal-ai/hidream-i1-fast': {
                input: falEndpoints.HidreamI1FastInput;
                output: falEndpoints.HidreamI1FastOutput;
            };

            'fal-ai/hidream-i1-dev': {
                input: falEndpoints.HidreamI1DevInput;
                output: falEndpoints.HidreamI1DevOutput;
            };

            'fal-ai/heygen/v3/video-agent': {
                input: falEndpoints.HeygenV3VideoAgentInput;
                output: falEndpoints.HeygenV3VideoAgentOutput;
            };

            'fal-ai/heygen/v3/lipsync/speed': {
                input: falEndpoints.HeygenV3LipsyncSpeedInput;
                output: falEndpoints.HeygenV3LipsyncSpeedOutput;
            };

            'fal-ai/heygen/v3/lipsync/precision': {
                input: falEndpoints.HeygenV3LipsyncPrecisionInput;
                output: falEndpoints.HeygenV3LipsyncPrecisionOutput;
            };

            'fal-ai/heygen/v3/filler-word-removal': {
                input: falEndpoints.HeygenV3FillerWordRemovalInput;
                output: falEndpoints.HeygenV3FillerWordRemovalOutput;
            };

            'fal-ai/heygen/v2/video-agent': {
                input: falEndpoints.HeygenV2VideoAgentInput;
                output: falEndpoints.HeygenV2VideoAgentOutput;
            };

            'fal-ai/heygen/v2/translate/speed': {
                input: falEndpoints.HeygenV2TranslateSpeedInput;
                output: falEndpoints.HeygenV2TranslateSpeedOutput;
            };

            'fal-ai/heygen/v2/translate/precision': {
                input: falEndpoints.HeygenV2TranslatePrecisionInput;
                output: falEndpoints.HeygenV2TranslatePrecisionOutput;
            };

            'fal-ai/heygen/avatar5/digital-twin': {
                input: falEndpoints.HeygenAvatar5DigitalTwinInput;
                output: falEndpoints.HeygenAvatar5DigitalTwinOutput;
            };

            'fal-ai/heygen/avatar4/image-to-video': {
                input: falEndpoints.HeygenAvatar4ImageToVideoInput;
                output: falEndpoints.HeygenAvatar4ImageToVideoOutput;
            };

            'fal-ai/heygen/avatar4/digital-twin': {
                input: falEndpoints.HeygenAvatar4DigitalTwinInput;
                output: falEndpoints.HeygenAvatar4DigitalTwinOutput;
            };

            'fal-ai/heygen/avatar3/digital-twin': {
                input: falEndpoints.HeygenAvatar3DigitalTwinInput;
                output: falEndpoints.HeygenAvatar3DigitalTwinOutput;
            };

            'fal-ai/gpt-image-1/text-to-image': {
                input: falEndpoints.GptImage1TextToImageInput;
                output: falEndpoints.GptImage1TextToImageOutput;
            };

            'fal-ai/gpt-image-1/edit-image': {
                input: falEndpoints.GptImage1EditImageInput;
                output: falEndpoints.GptImage1EditImageOutput;
            };

            'fal-ai/gpt-image-1.5/edit': {
                input: falEndpoints.GptImage15EditInput;
                output: falEndpoints.GptImage15EditOutput;
            };

            'fal-ai/gpt-image-1.5': {
                input: falEndpoints.GptImage15Input;
                output: falEndpoints.GptImage15Output;
            };

            'fal-ai/gpt-image-1-mini/edit': {
                input: falEndpoints.GptImage1MiniEditInput;
                output: falEndpoints.GptImage1MiniEditOutput;
            };

            'fal-ai/gpt-image-1-mini': {
                input: falEndpoints.GptImage1MiniInput;
                output: falEndpoints.GptImage1MiniOutput;
            };

            'fal-ai/got-ocr/v2': {
                input: falEndpoints.GotOcrV2Input;
                output: falEndpoints.GotOcrV2Output;
            };

            'fal-ai/glm-image/image-to-image': {
                input: falEndpoints.GlmImageImageToImageInput;
                output: falEndpoints.GlmImageImageToImageOutput;
            };

            'fal-ai/glm-image': {
                input: falEndpoints.GlmImageInput;
                output: falEndpoints.GlmImageOutput;
            };

            'fal-ai/ghiblify': {
                input: falEndpoints.GhiblifyInput;
                output: falEndpoints.GhiblifyOutput;
            };

            'fal-ai/gemini-tts': {
                input: falEndpoints.GeminiTtsInput;
                output: falEndpoints.GeminiTtsOutput;
            };

            'fal-ai/gemini-3.1-flash-tts': {
                input: falEndpoints.Gemini31FlashTtsInput;
                output: falEndpoints.Gemini31FlashTtsOutput;
            };

            'fal-ai/gemini-3.1-flash-image-preview/edit': {
                input: falEndpoints.Gemini31FlashImagePreviewEditInput;
                output: falEndpoints.Gemini31FlashImagePreviewEditOutput;
            };

            'fal-ai/gemini-3.1-flash-image-preview': {
                input: falEndpoints.Gemini31FlashImagePreviewInput;
                output: falEndpoints.Gemini31FlashImagePreviewOutput;
            };

            'fal-ai/gemini-3-pro-image-preview/edit': {
                input: falEndpoints.Gemini3ProImagePreviewEditInput;
                output: falEndpoints.Gemini3ProImagePreviewEditOutput;
            };

            'fal-ai/gemini-3-pro-image-preview': {
                input: falEndpoints.Gemini3ProImagePreviewInput;
                output: falEndpoints.Gemini3ProImagePreviewOutput;
            };

            'fal-ai/gemini-25-flash-image/edit': {
                input: falEndpoints.Gemini25FlashImageEditInput;
                output: falEndpoints.Gemini25FlashImageEditOutput;
            };

            'fal-ai/gemini-25-flash-image': {
                input: falEndpoints.Gemini25FlashImageInput;
                output: falEndpoints.Gemini25FlashImageOutput;
            };

            'fal-ai/framepack/flf2v': {
                input: falEndpoints.FramepackFlf2vInput;
                output: falEndpoints.FramepackFlf2vOutput;
            };

            'fal-ai/framepack/f1': {
                input: falEndpoints.FramepackF1Input;
                output: falEndpoints.FramepackF1Output;
            };

            'fal-ai/framepack': {
                input: falEndpoints.FramepackInput;
                output: falEndpoints.FramepackOutput;
            };

            'fal-ai/fooocus/upscale-or-vary': {
                input: falEndpoints.FooocusUpscaleOrVaryInput;
                output: falEndpoints.FooocusUpscaleOrVaryOutput;
            };

            'fal-ai/fooocus/inpaint': {
                input: falEndpoints.FooocusInpaintInput;
                output: falEndpoints.FooocusInpaintOutput;
            };

            'fal-ai/fooocus/image-prompt': {
                input: falEndpoints.FooocusImagePromptInput;
                output: falEndpoints.FooocusImagePromptOutput;
            };

            'fal-ai/fooocus': {
                input: falEndpoints.FooocusInput;
                output: falEndpoints.FooocusOutput;
            };

            'fal-ai/flux/srpo/image-to-image': {
                input: falEndpoints.FluxSrpoImageToImageInput;
                output: falEndpoints.FluxSrpoImageToImageOutput;
            };

            'fal-ai/flux/srpo': {
                input: falEndpoints.FluxSrpoInput;
                output: falEndpoints.FluxSrpoOutput;
            };

            'fal-ai/flux/schnell/redux': {
                input: falEndpoints.FluxSchnellReduxInput;
                output: falEndpoints.FluxSchnellReduxOutput;
            };

            'fal-ai/flux/schnell': {
                input: falEndpoints.FluxSchnellInput;
                output: falEndpoints.FluxSchnellOutput;
            };

            'fal-ai/flux/krea/redux': {
                input: falEndpoints.FluxKreaReduxInput;
                output: falEndpoints.FluxKreaReduxOutput;
            };

            'fal-ai/flux/krea/image-to-image': {
                input: falEndpoints.FluxKreaImageToImageInput;
                output: falEndpoints.FluxKreaImageToImageOutput;
            };

            'fal-ai/flux/krea': {
                input: falEndpoints.FluxKreaInput;
                output: falEndpoints.FluxKreaOutput;
            };

            'fal-ai/flux/dev/redux': {
                input: falEndpoints.FluxDevReduxInput;
                output: falEndpoints.FluxDevReduxOutput;
            };

            'fal-ai/flux/dev/image-to-image': {
                input: falEndpoints.FluxDevImageToImageInput;
                output: falEndpoints.FluxDevImageToImageOutput;
            };

            'fal-ai/flux/dev': {
                input: falEndpoints.FluxDevInput;
                output: falEndpoints.FluxDevOutput;
            };

            'fal-ai/flux-vision-upscaler': {
                input: falEndpoints.FluxVisionUpscalerInput;
                output: falEndpoints.FluxVisionUpscalerOutput;
            };

            'fal-ai/flux-subject': {
                input: falEndpoints.FluxSubjectInput;
                output: falEndpoints.FluxSubjectOutput;
            };

            'fal-ai/flux-pulid': {
                input: falEndpoints.FluxPulidInput;
                output: falEndpoints.FluxPulidOutput;
            };

            'fal-ai/flux-pro/v1/vto': {
                input: falEndpoints.FluxProV1VtoInput;
                output: falEndpoints.FluxProV1VtoOutput;
            };

            'fal-ai/flux-pro/v1/fill-finetuned': {
                input: falEndpoints.FluxProV1FillFinetunedInput;
                output: falEndpoints.FluxProV1FillFinetunedOutput;
            };

            'fal-ai/flux-pro/v1/fill': {
                input: falEndpoints.FluxProV1FillInput;
                output: falEndpoints.FluxProV1FillOutput;
            };

            'fal-ai/flux-pro/v1/erase': {
                input: falEndpoints.FluxProV1EraseInput;
                output: falEndpoints.FluxProV1EraseOutput;
            };

            'fal-ai/flux-pro/v1.1/redux': {
                input: falEndpoints.FluxProV11ReduxInput;
                output: falEndpoints.FluxProV11ReduxOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra/redux': {
                input: falEndpoints.FluxProV11UltraReduxInput;
                output: falEndpoints.FluxProV11UltraReduxOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra-finetuned': {
                input: falEndpoints.FluxProV11UltraFinetunedInput;
                output: falEndpoints.FluxProV11UltraFinetunedOutput;
            };

            'fal-ai/flux-pro/v1.1-ultra': {
                input: falEndpoints.FluxProV11UltraInput;
                output: falEndpoints.FluxProV11UltraOutput;
            };

            'fal-ai/flux-pro/v1.1': {
                input: falEndpoints.FluxProV11Input;
                output: falEndpoints.FluxProV11Output;
            };

            'fal-ai/flux-pro/kontext/text-to-image': {
                input: falEndpoints.FluxProKontextTextToImageInput;
                output: falEndpoints.FluxProKontextTextToImageOutput;
            };

            'fal-ai/flux-pro/kontext/multi': {
                input: falEndpoints.FluxProKontextMultiInput;
                output: falEndpoints.FluxProKontextMultiOutput;
            };

            'fal-ai/flux-pro/kontext/max/text-to-image': {
                input: falEndpoints.FluxProKontextMaxTextToImageInput;
                output: falEndpoints.FluxProKontextMaxTextToImageOutput;
            };

            'fal-ai/flux-pro/kontext/max/multi': {
                input: falEndpoints.FluxProKontextMaxMultiInput;
                output: falEndpoints.FluxProKontextMaxMultiOutput;
            };

            'fal-ai/flux-pro/kontext/max': {
                input: falEndpoints.FluxProKontextMaxInput;
                output: falEndpoints.FluxProKontextMaxOutput;
            };

            'fal-ai/flux-pro/kontext': {
                input: falEndpoints.FluxProKontextInput;
                output: falEndpoints.FluxProKontextOutput;
            };

            'fal-ai/flux-lora/stream': {
                input: falEndpoints.FluxLoraStreamInput;
                output: falEndpoints.FluxLoraStreamOutput;
            };

            'fal-ai/flux-lora/inpainting': {
                input: falEndpoints.FluxLoraInpaintingInput;
                output: falEndpoints.FluxLoraInpaintingOutput;
            };

            'fal-ai/flux-lora/image-to-image': {
                input: falEndpoints.FluxLoraImageToImageInput;
                output: falEndpoints.FluxLoraImageToImageOutput;
            };

            'fal-ai/flux-lora-portrait-trainer': {
                input: falEndpoints.FluxLoraPortraitTrainerInput;
                output: falEndpoints.FluxLoraPortraitTrainerOutput;
            };

            'fal-ai/flux-lora-fill': {
                input: falEndpoints.FluxLoraFillInput;
                output: falEndpoints.FluxLoraFillOutput;
            };

            'fal-ai/flux-lora-fast-training': {
                input: falEndpoints.FluxLoraFastTrainingInput;
                output: falEndpoints.FluxLoraFastTrainingOutput;
            };

            'fal-ai/flux-lora-depth': {
                input: falEndpoints.FluxLoraDepthInput;
                output: falEndpoints.FluxLoraDepthOutput;
            };

            'fal-ai/flux-lora-canny': {
                input: falEndpoints.FluxLoraCannyInput;
                output: falEndpoints.FluxLoraCannyOutput;
            };

            'fal-ai/flux-lora': {
                input: falEndpoints.FluxLoraInput;
                output: falEndpoints.FluxLoraOutput;
            };

            'fal-ai/flux-krea-lora/stream': {
                input: falEndpoints.FluxKreaLoraStreamInput;
                output: falEndpoints.FluxKreaLoraStreamOutput;
            };

            'fal-ai/flux-krea-lora/inpainting': {
                input: falEndpoints.FluxKreaLoraInpaintingInput;
                output: falEndpoints.FluxKreaLoraInpaintingOutput;
            };

            'fal-ai/flux-krea-lora/image-to-image': {
                input: falEndpoints.FluxKreaLoraImageToImageInput;
                output: falEndpoints.FluxKreaLoraImageToImageOutput;
            };

            'fal-ai/flux-krea-lora': {
                input: falEndpoints.FluxKreaLoraInput;
                output: falEndpoints.FluxKreaLoraOutput;
            };

            'fal-ai/flux-kontext/dev': {
                input: falEndpoints.FluxKontextDevInput;
                output: falEndpoints.FluxKontextDevOutput;
            };

            'fal-ai/flux-kontext-trainer': {
                input: falEndpoints.FluxKontextTrainerInput;
                output: falEndpoints.FluxKontextTrainerOutput;
            };

            'fal-ai/flux-kontext-lora/text-to-image': {
                input: falEndpoints.FluxKontextLoraTextToImageInput;
                output: falEndpoints.FluxKontextLoraTextToImageOutput;
            };

            'fal-ai/flux-kontext-lora/inpaint': {
                input: falEndpoints.FluxKontextLoraInpaintInput;
                output: falEndpoints.FluxKontextLoraInpaintOutput;
            };

            'fal-ai/flux-kontext-lora': {
                input: falEndpoints.FluxKontextLoraInput;
                output: falEndpoints.FluxKontextLoraOutput;
            };

            'fal-ai/flux-general/rf-inversion': {
                input: falEndpoints.FluxGeneralRfInversionInput;
                output: falEndpoints.FluxGeneralRfInversionOutput;
            };

            'fal-ai/flux-general/inpainting': {
                input: falEndpoints.FluxGeneralInpaintingInput;
                output: falEndpoints.FluxGeneralInpaintingOutput;
            };

            'fal-ai/flux-general/image-to-image': {
                input: falEndpoints.FluxGeneralImageToImageInput;
                output: falEndpoints.FluxGeneralImageToImageOutput;
            };

            'fal-ai/flux-general/differential-diffusion': {
                input: falEndpoints.FluxGeneralDifferentialDiffusionInput;
                output: falEndpoints.FluxGeneralDifferentialDiffusionOutput;
            };

            'fal-ai/flux-general': {
                input: falEndpoints.FluxGeneralInput;
                output: falEndpoints.FluxGeneralOutput;
            };

            'fal-ai/flux-control-lora-depth/image-to-image': {
                input: falEndpoints.FluxControlLoraDepthImageToImageInput;
                output: falEndpoints.FluxControlLoraDepthImageToImageOutput;
            };

            'fal-ai/flux-control-lora-depth': {
                input: falEndpoints.FluxControlLoraDepthInput;
                output: falEndpoints.FluxControlLoraDepthOutput;
            };

            'fal-ai/flux-control-lora-canny/image-to-image': {
                input: falEndpoints.FluxControlLoraCannyImageToImageInput;
                output: falEndpoints.FluxControlLoraCannyImageToImageOutput;
            };

            'fal-ai/flux-control-lora-canny': {
                input: falEndpoints.FluxControlLoraCannyInput;
                output: falEndpoints.FluxControlLoraCannyOutput;
            };

            'fal-ai/flux-3-action/so101': {
                input: falEndpoints.Flux3ActionSo101Input;
                output: falEndpoints.Flux3ActionSo101Output;
            };

            'fal-ai/flux-2/turbo/edit': {
                input: falEndpoints.Flux2TurboEditInput;
                output: falEndpoints.Flux2TurboEditOutput;
            };

            'fal-ai/flux-2/turbo': {
                input: falEndpoints.Flux2TurboInput;
                output: falEndpoints.Flux2TurboOutput;
            };

            'fal-ai/flux-2/lora/edit': {
                input: falEndpoints.Flux2LoraEditInput;
                output: falEndpoints.Flux2LoraEditOutput;
            };

            'fal-ai/flux-2/lora': {
                input: falEndpoints.Flux2LoraInput;
                output: falEndpoints.Flux2LoraOutput;
            };

            'fal-ai/flux-2/klein/realtime': {
                input: falEndpoints.Flux2KleinRealtimeInput;
                output: falEndpoints.Flux2KleinRealtimeOutput;
            };

            'fal-ai/flux-2/klein/9b/lora': {
                input: falEndpoints.Flux2Klein9bLoraInput;
                output: falEndpoints.Flux2Klein9bLoraOutput;
            };

            'fal-ai/flux-2/klein/9b/edit/lora': {
                input: falEndpoints.Flux2Klein9bEditLoraInput;
                output: falEndpoints.Flux2Klein9bEditLoraOutput;
            };

            'fal-ai/flux-2/klein/9b/edit': {
                input: falEndpoints.Flux2Klein9bEditInput;
                output: falEndpoints.Flux2Klein9bEditOutput;
            };

            'fal-ai/flux-2/klein/9b/base/lora': {
                input: falEndpoints.Flux2Klein9bBaseLoraInput;
                output: falEndpoints.Flux2Klein9bBaseLoraOutput;
            };

            'fal-ai/flux-2/klein/9b/base/edit/lora': {
                input: falEndpoints.Flux2Klein9bBaseEditLoraInput;
                output: falEndpoints.Flux2Klein9bBaseEditLoraOutput;
            };

            'fal-ai/flux-2/klein/9b/base/edit': {
                input: falEndpoints.Flux2Klein9bBaseEditInput;
                output: falEndpoints.Flux2Klein9bBaseEditOutput;
            };

            'fal-ai/flux-2/klein/9b/base': {
                input: falEndpoints.Flux2Klein9bBaseInput;
                output: falEndpoints.Flux2Klein9bBaseOutput;
            };

            'fal-ai/flux-2/klein/9b': {
                input: falEndpoints.Flux2Klein9bInput;
                output: falEndpoints.Flux2Klein9bOutput;
            };

            'fal-ai/flux-2/klein/4b/lora': {
                input: falEndpoints.Flux2Klein4bLoraInput;
                output: falEndpoints.Flux2Klein4bLoraOutput;
            };

            'fal-ai/flux-2/klein/4b/edit/lora': {
                input: falEndpoints.Flux2Klein4bEditLoraInput;
                output: falEndpoints.Flux2Klein4bEditLoraOutput;
            };

            'fal-ai/flux-2/klein/4b/edit': {
                input: falEndpoints.Flux2Klein4bEditInput;
                output: falEndpoints.Flux2Klein4bEditOutput;
            };

            'fal-ai/flux-2/klein/4b/base/lora': {
                input: falEndpoints.Flux2Klein4bBaseLoraInput;
                output: falEndpoints.Flux2Klein4bBaseLoraOutput;
            };

            'fal-ai/flux-2/klein/4b/base/edit/lora': {
                input: falEndpoints.Flux2Klein4bBaseEditLoraInput;
                output: falEndpoints.Flux2Klein4bBaseEditLoraOutput;
            };

            'fal-ai/flux-2/klein/4b/base/edit': {
                input: falEndpoints.Flux2Klein4bBaseEditInput;
                output: falEndpoints.Flux2Klein4bBaseEditOutput;
            };

            'fal-ai/flux-2/klein/4b/base': {
                input: falEndpoints.Flux2Klein4bBaseInput;
                output: falEndpoints.Flux2Klein4bBaseOutput;
            };

            'fal-ai/flux-2/klein/4b': {
                input: falEndpoints.Flux2Klein4bInput;
                output: falEndpoints.Flux2Klein4bOutput;
            };

            'fal-ai/flux-2/flash/edit': {
                input: falEndpoints.Flux2FlashEditInput;
                output: falEndpoints.Flux2FlashEditOutput;
            };

            'fal-ai/flux-2/flash': {
                input: falEndpoints.Flux2FlashInput;
                output: falEndpoints.Flux2FlashOutput;
            };

            'fal-ai/flux-2/edit': {
                input: falEndpoints.Flux2EditInput;
                output: falEndpoints.Flux2EditOutput;
            };

            'fal-ai/flux-2-trainer/edit': {
                input: falEndpoints.Flux2TrainerEditInput;
                output: falEndpoints.Flux2TrainerEditOutput;
            };

            'fal-ai/flux-2-trainer-v2/edit': {
                input: falEndpoints.Flux2TrainerV2EditInput;
                output: falEndpoints.Flux2TrainerV2EditOutput;
            };

            'fal-ai/flux-2-trainer-v2': {
                input: falEndpoints.Flux2TrainerV2Input;
                output: falEndpoints.Flux2TrainerV2Output;
            };

            'fal-ai/flux-2-trainer': {
                input: falEndpoints.Flux2TrainerInput;
                output: falEndpoints.Flux2TrainerOutput;
            };

            'fal-ai/flux-2-pro/outpaint': {
                input: falEndpoints.Flux2ProOutpaintInput;
                output: falEndpoints.Flux2ProOutpaintOutput;
            };

            'fal-ai/flux-2-pro/edit': {
                input: falEndpoints.Flux2ProEditInput;
                output: falEndpoints.Flux2ProEditOutput;
            };

            'fal-ai/flux-2-pro': {
                input: falEndpoints.Flux2ProInput;
                output: falEndpoints.Flux2ProOutput;
            };

            'fal-ai/flux-2-max/edit': {
                input: falEndpoints.Flux2MaxEditInput;
                output: falEndpoints.Flux2MaxEditOutput;
            };

            'fal-ai/flux-2-max': {
                input: falEndpoints.Flux2MaxInput;
                output: falEndpoints.Flux2MaxOutput;
            };

            'fal-ai/flux-2-lora-gallery/virtual-tryon': {
                input: falEndpoints.Flux2LoraGalleryVirtualTryonInput;
                output: falEndpoints.Flux2LoraGalleryVirtualTryonOutput;
            };

            'fal-ai/flux-2-lora-gallery/sepia-vintage': {
                input: falEndpoints.Flux2LoraGallerySepiaVintageInput;
                output: falEndpoints.Flux2LoraGallerySepiaVintageOutput;
            };

            'fal-ai/flux-2-lora-gallery/satellite-view-style': {
                input: falEndpoints.Flux2LoraGallerySatelliteViewStyleInput;
                output: falEndpoints.Flux2LoraGallerySatelliteViewStyleOutput;
            };

            'fal-ai/flux-2-lora-gallery/realism': {
                input: falEndpoints.Flux2LoraGalleryRealismInput;
                output: falEndpoints.Flux2LoraGalleryRealismOutput;
            };

            'fal-ai/flux-2-lora-gallery/multiple-angles': {
                input: falEndpoints.Flux2LoraGalleryMultipleAnglesInput;
                output: falEndpoints.Flux2LoraGalleryMultipleAnglesOutput;
            };

            'fal-ai/flux-2-lora-gallery/hdr-style': {
                input: falEndpoints.Flux2LoraGalleryHdrStyleInput;
                output: falEndpoints.Flux2LoraGalleryHdrStyleOutput;
            };

            'fal-ai/flux-2-lora-gallery/face-to-full-portrait': {
                input: falEndpoints.Flux2LoraGalleryFaceToFullPortraitInput;
                output: falEndpoints.Flux2LoraGalleryFaceToFullPortraitOutput;
            };

            'fal-ai/flux-2-lora-gallery/digital-comic-art': {
                input: falEndpoints.Flux2LoraGalleryDigitalComicArtInput;
                output: falEndpoints.Flux2LoraGalleryDigitalComicArtOutput;
            };

            'fal-ai/flux-2-lora-gallery/ballpoint-pen-sketch': {
                input: falEndpoints.Flux2LoraGalleryBallpointPenSketchInput;
                output: falEndpoints.Flux2LoraGalleryBallpointPenSketchOutput;
            };

            'fal-ai/flux-2-lora-gallery/apartment-staging': {
                input: falEndpoints.Flux2LoraGalleryApartmentStagingInput;
                output: falEndpoints.Flux2LoraGalleryApartmentStagingOutput;
            };

            'fal-ai/flux-2-lora-gallery/add-background': {
                input: falEndpoints.Flux2LoraGalleryAddBackgroundInput;
                output: falEndpoints.Flux2LoraGalleryAddBackgroundOutput;
            };

            'fal-ai/flux-2-klein-9b-base-trainer/edit': {
                input: falEndpoints.Flux2Klein9bBaseTrainerEditInput;
                output: falEndpoints.Flux2Klein9bBaseTrainerEditOutput;
            };

            'fal-ai/flux-2-klein-9b-base-trainer': {
                input: falEndpoints.Flux2Klein9bBaseTrainerInput;
                output: falEndpoints.Flux2Klein9bBaseTrainerOutput;
            };

            'fal-ai/flux-2-flex/edit': {
                input: falEndpoints.Flux2FlexEditInput;
                output: falEndpoints.Flux2FlexEditOutput;
            };

            'fal-ai/flux-2-flex': {
                input: falEndpoints.Flux2FlexInput;
                output: falEndpoints.Flux2FlexOutput;
            };

            'fal-ai/flux-2': {
                input: falEndpoints.Flux2Input;
                output: falEndpoints.Flux2Output;
            };

            'fal-ai/flux-1/srpo/image-to-image': {
                input: falEndpoints.Flux1SrpoImageToImageInput;
                output: falEndpoints.Flux1SrpoImageToImageOutput;
            };

            'fal-ai/flux-1/srpo': {
                input: falEndpoints.Flux1SrpoInput;
                output: falEndpoints.Flux1SrpoOutput;
            };

            'fal-ai/flux-1/schnell/redux': {
                input: falEndpoints.Flux1SchnellReduxInput;
                output: falEndpoints.Flux1SchnellReduxOutput;
            };

            'fal-ai/flux-1/schnell': {
                input: falEndpoints.Flux1SchnellInput;
                output: falEndpoints.Flux1SchnellOutput;
            };

            'fal-ai/flux-1/krea/redux': {
                input: falEndpoints.Flux1KreaReduxInput;
                output: falEndpoints.Flux1KreaReduxOutput;
            };

            'fal-ai/flux-1/krea/image-to-image': {
                input: falEndpoints.Flux1KreaImageToImageInput;
                output: falEndpoints.Flux1KreaImageToImageOutput;
            };

            'fal-ai/flux-1/krea': {
                input: falEndpoints.Flux1KreaInput;
                output: falEndpoints.Flux1KreaOutput;
            };

            'fal-ai/flux-1/dev/redux': {
                input: falEndpoints.Flux1DevReduxInput;
                output: falEndpoints.Flux1DevReduxOutput;
            };

            'fal-ai/flux-1/dev/image-to-image': {
                input: falEndpoints.Flux1DevImageToImageInput;
                output: falEndpoints.Flux1DevImageToImageOutput;
            };

            'fal-ai/flux-1/dev': {
                input: falEndpoints.Flux1DevInput;
                output: falEndpoints.Flux1DevOutput;
            };

            'fal-ai/flowedit': {
                input: falEndpoints.FloweditInput;
                output: falEndpoints.FloweditOutput;
            };

            'fal-ai/florence-2-large/region-to-segmentation': {
                input: falEndpoints.Florence2LargeRegionToSegmentationInput;
                output: falEndpoints.Florence2LargeRegionToSegmentationOutput;
            };

            'fal-ai/florence-2-large/region-to-description': {
                input: falEndpoints.Florence2LargeRegionToDescriptionInput;
                output: falEndpoints.Florence2LargeRegionToDescriptionOutput;
            };

            'fal-ai/florence-2-large/region-to-category': {
                input: falEndpoints.Florence2LargeRegionToCategoryInput;
                output: falEndpoints.Florence2LargeRegionToCategoryOutput;
            };

            'fal-ai/florence-2-large/region-proposal': {
                input: falEndpoints.Florence2LargeRegionProposalInput;
                output: falEndpoints.Florence2LargeRegionProposalOutput;
            };

            'fal-ai/florence-2-large/referring-expression-segmentation': {
                input: falEndpoints.Florence2LargeReferringExpressionSegmentationInput;
                output: falEndpoints.Florence2LargeReferringExpressionSegmentationOutput;
            };

            'fal-ai/florence-2-large/open-vocabulary-detection': {
                input: falEndpoints.Florence2LargeOpenVocabularyDetectionInput;
                output: falEndpoints.Florence2LargeOpenVocabularyDetectionOutput;
            };

            'fal-ai/florence-2-large/ocr-with-region': {
                input: falEndpoints.Florence2LargeOcrWithRegionInput;
                output: falEndpoints.Florence2LargeOcrWithRegionOutput;
            };

            'fal-ai/florence-2-large/ocr': {
                input: falEndpoints.Florence2LargeOcrInput;
                output: falEndpoints.Florence2LargeOcrOutput;
            };

            'fal-ai/florence-2-large/object-detection': {
                input: falEndpoints.Florence2LargeObjectDetectionInput;
                output: falEndpoints.Florence2LargeObjectDetectionOutput;
            };

            'fal-ai/florence-2-large/more-detailed-caption': {
                input: falEndpoints.Florence2LargeMoreDetailedCaptionInput;
                output: falEndpoints.Florence2LargeMoreDetailedCaptionOutput;
            };

            'fal-ai/florence-2-large/detailed-caption': {
                input: falEndpoints.Florence2LargeDetailedCaptionInput;
                output: falEndpoints.Florence2LargeDetailedCaptionOutput;
            };

            'fal-ai/florence-2-large/dense-region-caption': {
                input: falEndpoints.Florence2LargeDenseRegionCaptionInput;
                output: falEndpoints.Florence2LargeDenseRegionCaptionOutput;
            };

            'fal-ai/florence-2-large/caption-to-phrase-grounding': {
                input: falEndpoints.Florence2LargeCaptionToPhraseGroundingInput;
                output: falEndpoints.Florence2LargeCaptionToPhraseGroundingOutput;
            };

            'fal-ai/florence-2-large/caption': {
                input: falEndpoints.Florence2LargeCaptionInput;
                output: falEndpoints.Florence2LargeCaptionOutput;
            };

            'fal-ai/flashvsr/upscale/video': {
                input: falEndpoints.FlashvsrUpscaleVideoInput;
                output: falEndpoints.FlashvsrUpscaleVideoOutput;
            };

            'fal-ai/flashtalk': {
                input: falEndpoints.FlashtalkInput;
                output: falEndpoints.FlashtalkOutput;
            };

            'fal-ai/flashhead': {
                input: falEndpoints.FlashheadInput;
                output: falEndpoints.FlashheadOutput;
            };

            'fal-ai/firered-image-edit-v1.1': {
                input: falEndpoints.FireredImageEditV11Input;
                output: falEndpoints.FireredImageEditV11Output;
            };

            'fal-ai/firered-image-edit': {
                input: falEndpoints.FireredImageEditInput;
                output: falEndpoints.FireredImageEditOutput;
            };

            'fal-ai/finegrain-eraser/mask': {
                input: falEndpoints.FinegrainEraserMaskInput;
                output: falEndpoints.FinegrainEraserMaskOutput;
            };

            'fal-ai/finegrain-eraser/bbox': {
                input: falEndpoints.FinegrainEraserBboxInput;
                output: falEndpoints.FinegrainEraserBboxOutput;
            };

            'fal-ai/finegrain-eraser': {
                input: falEndpoints.FinegrainEraserInput;
                output: falEndpoints.FinegrainEraserOutput;
            };

            'fal-ai/film/video': {
                input: falEndpoints.FilmVideoInput;
                output: falEndpoints.FilmVideoOutput;
            };

            'fal-ai/film': {
                input: falEndpoints.FilmInput;
                output: falEndpoints.FilmOutput;
            };

            'fal-ai/ffmpeg-api/waveform': {
                input: falEndpoints.FfmpegApiWaveformInput;
                output: falEndpoints.FfmpegApiWaveformOutput;
            };

            'fal-ai/ffmpeg-api/metadata': {
                input: falEndpoints.FfmpegApiMetadataInput;
                output: falEndpoints.FfmpegApiMetadataOutput;
            };

            'fal-ai/ffmpeg-api/merge-videos': {
                input: falEndpoints.FfmpegApiMergeVideosInput;
                output: falEndpoints.FfmpegApiMergeVideosOutput;
            };

            'fal-ai/ffmpeg-api/merge-audios': {
                input: falEndpoints.FfmpegApiMergeAudiosInput;
                output: falEndpoints.FfmpegApiMergeAudiosOutput;
            };

            'fal-ai/ffmpeg-api/merge-audio-video': {
                input: falEndpoints.FfmpegApiMergeAudioVideoInput;
                output: falEndpoints.FfmpegApiMergeAudioVideoOutput;
            };

            'fal-ai/ffmpeg-api/loudnorm': {
                input: falEndpoints.FfmpegApiLoudnormInput;
                output: falEndpoints.FfmpegApiLoudnormOutput;
            };

            'fal-ai/ffmpeg-api/images-to-video': {
                input: falEndpoints.FfmpegApiImagesToVideoInput;
                output: falEndpoints.FfmpegApiImagesToVideoOutput;
            };

            'fal-ai/ffmpeg-api/extract-frame': {
                input: falEndpoints.FfmpegApiExtractFrameInput;
                output: falEndpoints.FfmpegApiExtractFrameOutput;
            };

            'fal-ai/ffmpeg-api/compose': {
                input: falEndpoints.FfmpegApiComposeInput;
                output: falEndpoints.FfmpegApiComposeOutput;
            };

            'fal-ai/feynobg': {
                input: falEndpoints.FeynobgInput;
                output: falEndpoints.FeynobgOutput;
            };

            'fal-ai/fast-svd/text-to-video': {
                input: falEndpoints.FastSvdTextToVideoInput;
                output: falEndpoints.FastSvdTextToVideoOutput;
            };

            'fal-ai/fast-svd-lcm/text-to-video': {
                input: falEndpoints.FastSvdLcmTextToVideoInput;
                output: falEndpoints.FastSvdLcmTextToVideoOutput;
            };

            'fal-ai/fast-svd-lcm': {
                input: falEndpoints.FastSvdLcmInput;
                output: falEndpoints.FastSvdLcmOutput;
            };

            'fal-ai/fast-sdxl/inpainting': {
                input: falEndpoints.FastSdxlInpaintingInput;
                output: falEndpoints.FastSdxlInpaintingOutput;
            };

            'fal-ai/fast-sdxl/image-to-image': {
                input: falEndpoints.FastSdxlImageToImageInput;
                output: falEndpoints.FastSdxlImageToImageOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny/inpainting': {
                input: falEndpoints.FastSdxlControlnetCannyInpaintingInput;
                output: falEndpoints.FastSdxlControlnetCannyInpaintingOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny/image-to-image': {
                input: falEndpoints.FastSdxlControlnetCannyImageToImageInput;
                output: falEndpoints.FastSdxlControlnetCannyImageToImageOutput;
            };

            'fal-ai/fast-sdxl-controlnet-canny': {
                input: falEndpoints.FastSdxlControlnetCannyInput;
                output: falEndpoints.FastSdxlControlnetCannyOutput;
            };

            'fal-ai/fast-sdxl': {
                input: falEndpoints.FastSdxlInput;
                output: falEndpoints.FastSdxlOutput;
            };

            'fal-ai/fast-lightning-sdxl/inpainting': {
                input: falEndpoints.FastLightningSdxlInpaintingInput;
                output: falEndpoints.FastLightningSdxlInpaintingOutput;
            };

            'fal-ai/fast-lightning-sdxl/image-to-image': {
                input: falEndpoints.FastLightningSdxlImageToImageInput;
                output: falEndpoints.FastLightningSdxlImageToImageOutput;
            };

            'fal-ai/fast-lightning-sdxl': {
                input: falEndpoints.FastLightningSdxlInput;
                output: falEndpoints.FastLightningSdxlOutput;
            };

            'fal-ai/fast-lcm-diffusion/inpainting': {
                input: falEndpoints.FastLcmDiffusionInpaintingInput;
                output: falEndpoints.FastLcmDiffusionInpaintingOutput;
            };

            'fal-ai/fast-lcm-diffusion/image-to-image': {
                input: falEndpoints.FastLcmDiffusionImageToImageInput;
                output: falEndpoints.FastLcmDiffusionImageToImageOutput;
            };

            'fal-ai/fast-lcm-diffusion': {
                input: falEndpoints.FastLcmDiffusionInput;
                output: falEndpoints.FastLcmDiffusionOutput;
            };

            'fal-ai/fast-fooocus-sdxl/image-to-image': {
                input: falEndpoints.FastFooocusSdxlImageToImageInput;
                output: falEndpoints.FastFooocusSdxlImageToImageOutput;
            };

            'fal-ai/fast-animatediff/video-to-video': {
                input: falEndpoints.FastAnimatediffVideoToVideoInput;
                output: falEndpoints.FastAnimatediffVideoToVideoOutput;
            };

            'fal-ai/fast-animatediff/turbo/video-to-video': {
                input: falEndpoints.FastAnimatediffTurboVideoToVideoInput;
                output: falEndpoints.FastAnimatediffTurboVideoToVideoOutput;
            };

            'fal-ai/fast-animatediff/turbo/text-to-video': {
                input: falEndpoints.FastAnimatediffTurboTextToVideoInput;
                output: falEndpoints.FastAnimatediffTurboTextToVideoOutput;
            };

            'fal-ai/fast-animatediff/text-to-video': {
                input: falEndpoints.FastAnimatediffTextToVideoInput;
                output: falEndpoints.FastAnimatediffTextToVideoOutput;
            };

            'fal-ai/fashn/tryon/v1.6': {
                input: falEndpoints.FashnTryonV16Input;
                output: falEndpoints.FashnTryonV16Output;
            };

            'fal-ai/fashn/tryon/v1.5': {
                input: falEndpoints.FashnTryonV15Input;
                output: falEndpoints.FashnTryonV15Output;
            };

            'fal-ai/f5-tts': {
                input: falEndpoints.F5TtsInput;
                output: falEndpoints.F5TtsOutput;
            };

            'fal-ai/evf-sam': {
                input: falEndpoints.EvfSamInput;
                output: falEndpoints.EvfSamOutput;
            };

            'fal-ai/esrgan': {
                input: falEndpoints.EsrganInput;
                output: falEndpoints.EsrganOutput;
            };

            'fal-ai/ernie-image/turbo': {
                input: falEndpoints.ErnieImageTurboInput;
                output: falEndpoints.ErnieImageTurboOutput;
            };

            'fal-ai/ernie-image/lora/turbo': {
                input: falEndpoints.ErnieImageLoraTurboInput;
                output: falEndpoints.ErnieImageLoraTurboOutput;
            };

            'fal-ai/ernie-image/lora': {
                input: falEndpoints.ErnieImageLoraInput;
                output: falEndpoints.ErnieImageLoraOutput;
            };

            'fal-ai/ernie-image-trainer': {
                input: falEndpoints.ErnieImageTrainerInput;
                output: falEndpoints.ErnieImageTrainerOutput;
            };

            'fal-ai/ernie-image': {
                input: falEndpoints.ErnieImageInput;
                output: falEndpoints.ErnieImageOutput;
            };

            'fal-ai/emu-3.5-image/text-to-image': {
                input: falEndpoints.Emu35ImageTextToImageInput;
                output: falEndpoints.Emu35ImageTextToImageOutput;
            };

            'fal-ai/emu-3.5-image/edit-image': {
                input: falEndpoints.Emu35ImageEditImageInput;
                output: falEndpoints.Emu35ImageEditImageOutput;
            };

            'fal-ai/elevenlabs/voice-changer': {
                input: falEndpoints.ElevenlabsVoiceChangerInput;
                output: falEndpoints.ElevenlabsVoiceChangerOutput;
            };

            'fal-ai/elevenlabs/tts/turbo-v2.5': {
                input: falEndpoints.ElevenlabsTtsTurboV25Input;
                output: falEndpoints.ElevenlabsTtsTurboV25Output;
            };

            'fal-ai/elevenlabs/tts/multilingual-v2': {
                input: falEndpoints.ElevenlabsTtsMultilingualV2Input;
                output: falEndpoints.ElevenlabsTtsMultilingualV2Output;
            };

            'fal-ai/elevenlabs/tts/eleven-v3': {
                input: falEndpoints.ElevenlabsTtsElevenV3Input;
                output: falEndpoints.ElevenlabsTtsElevenV3Output;
            };

            'fal-ai/elevenlabs/text-to-dialogue/eleven-v3': {
                input: falEndpoints.ElevenlabsTextToDialogueElevenV3Input;
                output: falEndpoints.ElevenlabsTextToDialogueElevenV3Output;
            };

            'fal-ai/elevenlabs/speech-to-text/scribe-v2': {
                input: falEndpoints.ElevenlabsSpeechToTextScribeV2Input;
                output: falEndpoints.ElevenlabsSpeechToTextScribeV2Output;
            };

            'fal-ai/elevenlabs/speech-to-text': {
                input: falEndpoints.ElevenlabsSpeechToTextInput;
                output: falEndpoints.ElevenlabsSpeechToTextOutput;
            };

            'fal-ai/elevenlabs/sound-effects/v2': {
                input: falEndpoints.ElevenlabsSoundEffectsV2Input;
                output: falEndpoints.ElevenlabsSoundEffectsV2Output;
            };

            'fal-ai/elevenlabs/music': {
                input: falEndpoints.ElevenlabsMusicInput;
                output: falEndpoints.ElevenlabsMusicOutput;
            };

            'fal-ai/elevenlabs/forced-alignment': {
                input: falEndpoints.ElevenlabsForcedAlignmentInput;
                output: falEndpoints.ElevenlabsForcedAlignmentOutput;
            };

            'fal-ai/elevenlabs/dubbing': {
                input: falEndpoints.ElevenlabsDubbingInput;
                output: falEndpoints.ElevenlabsDubbingOutput;
            };

            'fal-ai/elevenlabs/audio-isolation': {
                input: falEndpoints.ElevenlabsAudioIsolationInput;
                output: falEndpoints.ElevenlabsAudioIsolationOutput;
            };

            'fal-ai/editto': {
                input: falEndpoints.EdittoInput;
                output: falEndpoints.EdittoOutput;
            };

            'fal-ai/echomimic-v3': {
                input: falEndpoints.EchomimicV3Input;
                output: falEndpoints.EchomimicV3Output;
            };

            'fal-ai/dwpose/video': {
                input: falEndpoints.DwposeVideoInput;
                output: falEndpoints.DwposeVideoOutput;
            };

            'fal-ai/dwpose': {
                input: falEndpoints.DwposeInput;
                output: falEndpoints.DwposeOutput;
            };

            'fal-ai/dreamshaper': {
                input: falEndpoints.DreamshaperInput;
                output: falEndpoints.DreamshaperOutput;
            };

            'fal-ai/dreamomni2/edit': {
                input: falEndpoints.Dreamomni2EditInput;
                output: falEndpoints.Dreamomni2EditOutput;
            };

            'fal-ai/drct-super-resolution': {
                input: falEndpoints.DrctSuperResolutionInput;
                output: falEndpoints.DrctSuperResolutionOutput;
            };

            'fal-ai/docres/dewarp': {
                input: falEndpoints.DocresDewarpInput;
                output: falEndpoints.DocresDewarpOutput;
            };

            'fal-ai/docres': {
                input: falEndpoints.DocresInput;
                output: falEndpoints.DocresOutput;
            };

            'fal-ai/diffrhythm': {
                input: falEndpoints.DiffrhythmInput;
                output: falEndpoints.DiffrhythmOutput;
            };

            'fal-ai/dia-tts/voice-clone': {
                input: falEndpoints.DiaTtsVoiceCloneInput;
                output: falEndpoints.DiaTtsVoiceCloneOutput;
            };

            'fal-ai/dia-tts': {
                input: falEndpoints.DiaTtsInput;
                output: falEndpoints.DiaTtsOutput;
            };

            'fal-ai/depth-anything-video': {
                input: falEndpoints.DepthAnythingVideoInput;
                output: falEndpoints.DepthAnythingVideoOutput;
            };

            'fal-ai/demucs': {
                input: falEndpoints.DemucsInput;
                output: falEndpoints.DemucsOutput;
            };

            'fal-ai/deepfilternet3': {
                input: falEndpoints.Deepfilternet3Input;
                output: falEndpoints.Deepfilternet3Output;
            };

            'fal-ai/decart/lucy-5b/image-to-video': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/ddcolor': {
                input: falEndpoints.DdcolorInput;
                output: falEndpoints.DdcolorOutput;
            };

            'fal-ai/davinci-magihuman': {
                input: falEndpoints.DavinciMagihumanInput;
                output: falEndpoints.DavinciMagihumanOutput;
            };

            'fal-ai/csm-1b': {
                input: falEndpoints.Csm1bInput;
                output: falEndpoints.Csm1bOutput;
            };

            'fal-ai/creative-upscaler': {
                input: falEndpoints.CreativeUpscalerInput;
                output: falEndpoints.CreativeUpscalerOutput;
            };

            'fal-ai/creatify/aurora': {
                input: falEndpoints.CreatifyAuroraInput;
                output: falEndpoints.CreatifyAuroraOutput;
            };

            'fal-ai/cosmos-predict-2.5/video-to-video': {
                input: falEndpoints.CosmosPredict25VideoToVideoInput;
                output: falEndpoints.CosmosPredict25VideoToVideoOutput;
            };

            'fal-ai/cosmos-predict-2.5/text-to-video': {
                input: falEndpoints.CosmosPredict25TextToVideoInput;
                output: falEndpoints.CosmosPredict25TextToVideoOutput;
            };

            'fal-ai/cosmos-predict-2.5/image-to-video': {
                input: falEndpoints.CosmosPredict25ImageToVideoInput;
                output: falEndpoints.CosmosPredict25ImageToVideoOutput;
            };

            'fal-ai/cosmos-predict-2.5/distilled/text-to-video': {
                input: falEndpoints.CosmosPredict25DistilledTextToVideoInput;
                output: falEndpoints.CosmosPredict25DistilledTextToVideoOutput;
            };

            'fal-ai/controlfoley': {
                input: { [x in string]: any };
                output: { [x in string]: any };
            };

            'fal-ai/control-light': {
                input: falEndpoints.ControlLightInput;
                output: falEndpoints.ControlLightOutput;
            };

            'fal-ai/cohere-transcribe': {
                input: falEndpoints.CohereTranscribeInput;
                output: falEndpoints.CohereTranscribeOutput;
            };

            'fal-ai/cogview4': {
                input: falEndpoints.Cogview4Input;
                output: falEndpoints.Cogview4Output;
            };

            'fal-ai/cogvideox-5b/video-to-video': {
                input: falEndpoints.Cogvideox5bVideoToVideoInput;
                output: falEndpoints.Cogvideox5bVideoToVideoOutput;
            };

            'fal-ai/cogvideox-5b/image-to-video': {
                input: falEndpoints.Cogvideox5bImageToVideoInput;
                output: falEndpoints.Cogvideox5bImageToVideoOutput;
            };

            'fal-ai/cogvideox-5b': {
                input: falEndpoints.Cogvideox5bInput;
                output: falEndpoints.Cogvideox5bOutput;
            };

            'fal-ai/codeformer': {
                input: falEndpoints.CodeformerInput;
                output: falEndpoints.CodeformerOutput;
            };

            'fal-ai/clarity-upscaler': {
                input: falEndpoints.ClarityUpscalerInput;
                output: falEndpoints.ClarityUpscalerOutput;
            };

            'fal-ai/chrono-edit-lora-gallery/upscaler': {
                input: falEndpoints.ChronoEditLoraGalleryUpscalerInput;
                output: falEndpoints.ChronoEditLoraGalleryUpscalerOutput;
            };

            'fal-ai/chrono-edit-lora-gallery/paintbrush': {
                input: falEndpoints.ChronoEditLoraGalleryPaintbrushInput;
                output: falEndpoints.ChronoEditLoraGalleryPaintbrushOutput;
            };

            'fal-ai/chrono-edit-lora': {
                input: falEndpoints.ChronoEditLoraInput;
                output: falEndpoints.ChronoEditLoraOutput;
            };

            'fal-ai/chrono-edit': {
                input: falEndpoints.ChronoEditInput;
                output: falEndpoints.ChronoEditOutput;
            };

            'fal-ai/chatterbox/text-to-speech/multilingual': {
                input: falEndpoints.ChatterboxTextToSpeechMultilingualInput;
                output: falEndpoints.ChatterboxTextToSpeechMultilingualOutput;
            };

            'fal-ai/chatterbox/text-to-speech': {
                input: falEndpoints.ChatterboxTextToSpeechInput;
                output: falEndpoints.ChatterboxTextToSpeechOutput;
            };

            'fal-ai/chatterbox/speech-to-speech': {
                input: falEndpoints.ChatterboxSpeechToSpeechInput;
                output: falEndpoints.ChatterboxSpeechToSpeechOutput;
            };

            'fal-ai/cat-vton': {
                input: falEndpoints.CatVtonInput;
                output: falEndpoints.CatVtonOutput;
            };

            'fal-ai/cartoonify': {
                input: falEndpoints.CartoonifyInput;
                output: falEndpoints.CartoonifyOutput;
            };

            'fal-ai/bytedance/seedream/v4/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV4TextToImageInput;
                output: falEndpoints.BytedanceSeedreamV4TextToImageOutput;
            };

            'fal-ai/bytedance/seedream/v4/edit': {
                input: falEndpoints.BytedanceSeedreamV4EditInput;
                output: falEndpoints.BytedanceSeedreamV4EditOutput;
            };

            'fal-ai/bytedance/seedream/v4.5/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV45TextToImageInput;
                output: falEndpoints.BytedanceSeedreamV45TextToImageOutput;
            };

            'fal-ai/bytedance/seedream/v4.5/edit': {
                input: falEndpoints.BytedanceSeedreamV45EditInput;
                output: falEndpoints.BytedanceSeedreamV45EditOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProTextToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProImageToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/fast/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProFastTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProFastTextToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1/pro/fast/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV1ProFastImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV1ProFastImageToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1.5/pro/text-to-video': {
                input: falEndpoints.BytedanceSeedanceV15ProTextToVideoInput;
                output: falEndpoints.BytedanceSeedanceV15ProTextToVideoOutput;
            };

            'fal-ai/bytedance/seedance/v1.5/pro/image-to-video': {
                input: falEndpoints.BytedanceSeedanceV15ProImageToVideoInput;
                output: falEndpoints.BytedanceSeedanceV15ProImageToVideoOutput;
            };

            'fal-ai/bytedance/seed/v2/mini': {
                input: falEndpoints.BytedanceSeedV2MiniInput;
                output: falEndpoints.BytedanceSeedV2MiniOutput;
            };

            'fal-ai/bytedance/seed-speech/tts/v2': {
                input: falEndpoints.BytedanceSeedSpeechTtsV2Input;
                output: falEndpoints.BytedanceSeedSpeechTtsV2Output;
            };

            'fal-ai/bytedance/omnihuman/v1.5': {
                input: falEndpoints.BytedanceOmnihumanV15Input;
                output: falEndpoints.BytedanceOmnihumanV15Output;
            };

            'fal-ai/bytedance/omnihuman': {
                input: falEndpoints.BytedanceOmnihumanInput;
                output: falEndpoints.BytedanceOmnihumanOutput;
            };

            'fal-ai/bytedance/dreamactor/v2': {
                input: falEndpoints.BytedanceDreamactorV2Input;
                output: falEndpoints.BytedanceDreamactorV2Output;
            };

            'fal-ai/bytedance-upscaler/upscale/video': {
                input: falEndpoints.BytedanceUpscalerUpscaleVideoInput;
                output: falEndpoints.BytedanceUpscalerUpscaleVideoOutput;
            };

            'fal-ai/bria/text-to-image/hd': {
                input: falEndpoints.BriaTextToImageHdInput;
                output: falEndpoints.BriaTextToImageHdOutput;
            };

            'fal-ai/bria/text-to-image/fast': {
                input: falEndpoints.BriaTextToImageFastInput;
                output: falEndpoints.BriaTextToImageFastOutput;
            };

            'fal-ai/bria/text-to-image/base': {
                input: falEndpoints.BriaTextToImageBaseInput;
                output: falEndpoints.BriaTextToImageBaseOutput;
            };

            'fal-ai/bria/reimagine': {
                input: falEndpoints.BriaReimagineInput;
                output: falEndpoints.BriaReimagineOutput;
            };

            'fal-ai/bria/product-shot': {
                input: falEndpoints.BriaProductShotInput;
                output: falEndpoints.BriaProductShotOutput;
            };

            'fal-ai/bria/genfill': {
                input: falEndpoints.BriaGenfillInput;
                output: falEndpoints.BriaGenfillOutput;
            };

            'fal-ai/bria/expand': {
                input: falEndpoints.BriaExpandInput;
                output: falEndpoints.BriaExpandOutput;
            };

            'fal-ai/bria/eraser': {
                input: falEndpoints.BriaEraserInput;
                output: falEndpoints.BriaEraserOutput;
            };

            'fal-ai/bria/background/replace': {
                input: falEndpoints.BriaBackgroundReplaceInput;
                output: falEndpoints.BriaBackgroundReplaceOutput;
            };

            'fal-ai/bria/background/remove': {
                input: falEndpoints.BriaBackgroundRemoveInput;
                output: falEndpoints.BriaBackgroundRemoveOutput;
            };

            'fal-ai/boogu-image/edit': {
                input: falEndpoints.BooguImageEditInput;
                output: falEndpoints.BooguImageEditOutput;
            };

            'fal-ai/boogu-image': {
                input: falEndpoints.BooguImageInput;
                output: falEndpoints.BooguImageOutput;
            };

            'fal-ai/bitdance': {
                input: falEndpoints.BitdanceInput;
                output: falEndpoints.BitdanceOutput;
            };

            'fal-ai/birefnet/v2/video': {
                input: falEndpoints.BirefnetV2VideoInput;
                output: falEndpoints.BirefnetV2VideoOutput;
            };

            'fal-ai/birefnet/v2': {
                input: falEndpoints.BirefnetV2Input;
                output: falEndpoints.BirefnetV2Output;
            };

            'fal-ai/birefnet': {
                input: falEndpoints.BirefnetInput;
                output: falEndpoints.BirefnetOutput;
            };

            'fal-ai/bernini-r/text-to-video': {
                input: falEndpoints.BerniniRTextToVideoInput;
                output: falEndpoints.BerniniRTextToVideoOutput;
            };

            'fal-ai/bernini-r/reference-to-video': {
                input: falEndpoints.BerniniRReferenceToVideoInput;
                output: falEndpoints.BerniniRReferenceToVideoOutput;
            };

            'fal-ai/bernini-r/reference-edit-video': {
                input: falEndpoints.BerniniRReferenceEditVideoInput;
                output: falEndpoints.BerniniRReferenceEditVideoOutput;
            };

            'fal-ai/bernini-r/edit-video': {
                input: falEndpoints.BerniniREditVideoInput;
                output: falEndpoints.BerniniREditVideoOutput;
            };

            'fal-ai/bernini-r/edit-image': {
                input: falEndpoints.BerniniREditImageInput;
                output: falEndpoints.BerniniREditImageOutput;
            };

            'fal-ai/ben/v2/video': {
                input: falEndpoints.BenV2VideoInput;
                output: falEndpoints.BenV2VideoOutput;
            };

            'fal-ai/ben/v2/image': {
                input: falEndpoints.BenV2ImageInput;
                output: falEndpoints.BenV2ImageOutput;
            };

            'fal-ai/bagel/understand': {
                input: falEndpoints.BagelUnderstandInput;
                output: falEndpoints.BagelUnderstandOutput;
            };

            'fal-ai/bagel/edit': {
                input: falEndpoints.BagelEditInput;
                output: falEndpoints.BagelEditOutput;
            };

            'fal-ai/bagel': {
                input: falEndpoints.BagelInput;
                output: falEndpoints.BagelOutput;
            };

            'fal-ai/auto-caption': {
                input: falEndpoints.AutoCaptionInput;
                output: falEndpoints.AutoCaptionOutput;
            };

            'fal-ai/aura-sr': {
                input: falEndpoints.AuraSrInput;
                output: falEndpoints.AuraSrOutput;
            };

            'fal-ai/aura-flow': {
                input: falEndpoints.AuraFlowInput;
                output: falEndpoints.AuraFlowOutput;
            };

            'fal-ai/audio-understanding': {
                input: falEndpoints.AudioUnderstandingInput;
                output: falEndpoints.AudioUnderstandingOutput;
            };

            'fal-ai/amt-interpolation/frame-interpolation': {
                input: falEndpoints.AmtInterpolationFrameInterpolationInput;
                output: falEndpoints.AmtInterpolationFrameInterpolationOutput;
            };

            'fal-ai/amt-interpolation': {
                input: falEndpoints.AmtInterpolationInput;
                output: falEndpoints.AmtInterpolationOutput;
            };

            'fal-ai/ai-avatar/single-text': {
                input: falEndpoints.AiAvatarSingleTextInput;
                output: falEndpoints.AiAvatarSingleTextOutput;
            };

            'fal-ai/ai-avatar/multi-text': {
                input: falEndpoints.AiAvatarMultiTextInput;
                output: falEndpoints.AiAvatarMultiTextOutput;
            };

            'fal-ai/ai-avatar/multi': {
                input: falEndpoints.AiAvatarMultiInput;
                output: falEndpoints.AiAvatarMultiOutput;
            };

            'fal-ai/ace-step/prompt-to-audio': {
                input: falEndpoints.AceStepPromptToAudioInput;
                output: falEndpoints.AceStepPromptToAudioOutput;
            };

            'fal-ai/ace-step/audio-to-audio': {
                input: falEndpoints.AceStepAudioToAudioInput;
                output: falEndpoints.AceStepAudioToAudioOutput;
            };

            'fal-ai/ace-step/audio-outpaint': {
                input: falEndpoints.AceStepAudioOutpaintInput;
                output: falEndpoints.AceStepAudioOutpaintOutput;
            };

            'fal-ai/ace-step/audio-inpaint': {
                input: falEndpoints.AceStepAudioInpaintInput;
                output: falEndpoints.AceStepAudioInpaintOutput;
            };

            'fal-ai/ace-step': {
                input: falEndpoints.AceStepInput;
                output: falEndpoints.AceStepOutput;
            };

            'elevenlabs/tts/eleven-v4-turbo': {
                input: falEndpoints.ElevenlabsTtsElevenV4TurboInput;
                output: falEndpoints.ElevenlabsTtsElevenV4TurboOutput;
            };

            'elevenlabs/tts/eleven-v4': {
                input: falEndpoints.ElevenlabsTtsElevenV4Input;
                output: falEndpoints.ElevenlabsTtsElevenV4Output;
            };

            'elevenlabs/music/v2.5': {
                input: falEndpoints.ElevenlabsMusicV25Input;
                output: falEndpoints.ElevenlabsMusicV25Output;
            };

            'elevenlabs/music/v2': {
                input: falEndpoints.ElevenlabsMusicV2Input;
                output: falEndpoints.ElevenlabsMusicV2Output;
            };

            'decart/lucy2-vton/realtime': {
                input: falEndpoints.DecartLucy2VtonRealtimeInput;
                output: falEndpoints.DecartLucy2VtonRealtimeOutput;
            };

            'decart/lucy-restyle': {
                input: falEndpoints.DecartLucyRestyleInput;
                output: falEndpoints.DecartLucyRestyleOutput;
            };

            'decart/lucy-2-5/realtime': {
                input: falEndpoints.DecartLucy25RealtimeInput;
                output: falEndpoints.DecartLucy25RealtimeOutput;
            };

            'creatify/boreal': {
                input: falEndpoints.CreatifyBorealInput;
                output: falEndpoints.CreatifyBorealOutput;
            };

            'clarityai/crystal-video-upscaler': {
                input: falEndpoints.ClarityaiCrystalVideoUpscalerInput;
                output: falEndpoints.ClarityaiCrystalVideoUpscalerOutput;
            };

            'clarityai/crystal-upscaler': {
                input: falEndpoints.ClarityaiCrystalUpscalerInput;
                output: falEndpoints.ClarityaiCrystalUpscalerOutput;
            };

            'cassetteai/video-sound-effects-generator': {
                input: falEndpoints.CassetteaiVideoSoundEffectsGeneratorInput;
                output: falEndpoints.CassetteaiVideoSoundEffectsGeneratorOutput;
            };

            'cassetteai/sound-effects-generator': {
                input: falEndpoints.CassetteaiSoundEffectsGeneratorInput;
                output: falEndpoints.CassetteaiSoundEffectsGeneratorOutput;
            };

            'cassetteai/music-generator': {
                input: falEndpoints.CassetteaiMusicGeneratorInput;
                output: falEndpoints.CassetteaiMusicGeneratorOutput;
            };

            'bytedance/seedream/v5/pro/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV5ProTextToImageInput;
                output: falEndpoints.BytedanceSeedreamV5ProTextToImageOutput;
            };

            'bytedance/seedream/v5/pro/layerize': {
                input: falEndpoints.BytedanceSeedreamV5ProLayerizeInput;
                output: falEndpoints.BytedanceSeedreamV5ProLayerizeOutput;
            };

            'bytedance/seedream/v5/pro/edit': {
                input: falEndpoints.BytedanceSeedreamV5ProEditInput;
                output: falEndpoints.BytedanceSeedreamV5ProEditOutput;
            };

            'bytedance/seedream/v5/lite/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV5LiteTextToImageInput;
                output: falEndpoints.BytedanceSeedreamV5LiteTextToImageOutput;
            };

            'bytedance/seedream/v5/lite/edit': {
                input: falEndpoints.BytedanceSeedreamV5LiteEditInput;
                output: falEndpoints.BytedanceSeedreamV5LiteEditOutput;
            };

            'bytedance/seedream/v5/flash/text-to-image': {
                input: falEndpoints.BytedanceSeedreamV5FlashTextToImageInput;
                output: falEndpoints.BytedanceSeedreamV5FlashTextToImageOutput;
            };

            'bytedance/seedream/v5/flash/layerize': {
                input: falEndpoints.BytedanceSeedreamV5FlashLayerizeInput;
                output: falEndpoints.BytedanceSeedreamV5FlashLayerizeOutput;
            };

            'bytedance/seedream/v5/flash/edit': {
                input: falEndpoints.BytedanceSeedreamV5FlashEditInput;
                output: falEndpoints.BytedanceSeedreamV5FlashEditOutput;
            };

            'bytedance/seedance-2.5/us/text-to-video': {
                input: falEndpoints.BytedanceSeedance25UsTextToVideoInput;
                output: falEndpoints.BytedanceSeedance25UsTextToVideoOutput;
            };

            'bytedance/seedance-2.5/us/reference-to-video': {
                input: falEndpoints.BytedanceSeedance25UsReferenceToVideoInput;
                output: falEndpoints.BytedanceSeedance25UsReferenceToVideoOutput;
            };

            'bytedance/seedance-2.5/us/image-to-video': {
                input: falEndpoints.BytedanceSeedance25UsImageToVideoInput;
                output: falEndpoints.BytedanceSeedance25UsImageToVideoOutput;
            };

            'bytedance/seedance-2.5/text-to-video': Endpoints['bytedance/seedance-2.5/us/text-to-video'];
            'bytedance/seedance-2.5/reference-to-video': Endpoints['bytedance/seedance-2.5/us/reference-to-video'];
            'bytedance/seedance-2.5/image-to-video': Endpoints['bytedance/seedance-2.5/us/image-to-video'];

            'bytedance/seedance-2.5/draft/complete': {
                input: falEndpoints.BytedanceSeedance25DraftCompleteInput;
                output: falEndpoints.BytedanceSeedance25DraftCompleteOutput;
            };

            'bytedance/seedance-2.0/us/text-to-video': {
                input: falEndpoints.BytedanceSeedance20UsTextToVideoInput;
                output: falEndpoints.BytedanceSeedance20UsTextToVideoOutput;
            };

            'bytedance/seedance-2.0/us/reference-to-video': {
                input: falEndpoints.BytedanceSeedance20UsReferenceToVideoInput;
                output: falEndpoints.BytedanceSeedance20UsReferenceToVideoOutput;
            };

            'bytedance/seedance-2.0/us/image-to-video': {
                input: falEndpoints.BytedanceSeedance20UsImageToVideoInput;
                output: falEndpoints.BytedanceSeedance20UsImageToVideoOutput;
            };

            'bytedance/seedance-2.0/text-to-video': Endpoints['bytedance/seedance-2.0/us/text-to-video'];
            'bytedance/seedance-2.0/reference-to-video': Endpoints['bytedance/seedance-2.0/us/reference-to-video'];

            'bytedance/seedance-2.0/mini/text-to-video': {
                input: falEndpoints.BytedanceSeedance20MiniTextToVideoInput;
                output: falEndpoints.BytedanceSeedance20MiniTextToVideoOutput;
            };

            'bytedance/seedance-2.0/mini/reference-to-video': {
                input: falEndpoints.BytedanceSeedance20MiniReferenceToVideoInput;
                output: falEndpoints.BytedanceSeedance20MiniReferenceToVideoOutput;
            };

            'bytedance/seedance-2.0/mini/image-to-video': {
                input: falEndpoints.BytedanceSeedance20MiniImageToVideoInput;
                output: falEndpoints.BytedanceSeedance20MiniImageToVideoOutput;
            };

            'bytedance/seedance-2.0/image-to-video': Endpoints['bytedance/seedance-2.0/us/image-to-video'];

            'bytedance/seedance-2.0/fast/text-to-video': {
                input: falEndpoints.BytedanceSeedance20FastTextToVideoInput;
                output: falEndpoints.BytedanceSeedance20FastTextToVideoOutput;
            };

            'bytedance/seedance-2.0/fast/reference-to-video': {
                input: falEndpoints.BytedanceSeedance20FastReferenceToVideoInput;
                output: falEndpoints.BytedanceSeedance20FastReferenceToVideoOutput;
            };

            'bytedance/seedance-2.0/fast/image-to-video': {
                input: falEndpoints.BytedanceSeedance20FastImageToVideoInput;
                output: falEndpoints.BytedanceSeedance20FastImageToVideoOutput;
            };

            'bytedance/seed-audio-1.0': {
                input: falEndpoints.BytedanceSeedAudio10Input;
                output: falEndpoints.BytedanceSeedAudio10Output;
            };

            'bytedance/omnihuman/v2': {
                input: falEndpoints.BytedanceOmnihumanV2Input;
                output: falEndpoints.BytedanceOmnihumanV2Output;
            };

            'bytedance/lynx': {
                input: falEndpoints.BytedanceLynxInput;
                output: falEndpoints.BytedanceLynxOutput;
            };

            'bria/video/increase-resolution': {
                input: falEndpoints.BriaVideoIncreaseResolutionInput;
                output: falEndpoints.BriaVideoIncreaseResolutionOutput;
            };

            'bria/video/erase/prompt': {
                input: falEndpoints.BriaVideoErasePromptInput;
                output: falEndpoints.BriaVideoErasePromptOutput;
            };

            'bria/video/erase/mask': {
                input: falEndpoints.BriaVideoEraseMaskInput;
                output: falEndpoints.BriaVideoEraseMaskOutput;
            };

            'bria/video/erase/keypoints': {
                input: falEndpoints.BriaVideoEraseKeypointsInput;
                output: falEndpoints.BriaVideoEraseKeypointsOutput;
            };

            'bria/video/background-removal/v3': {
                input: falEndpoints.BriaVideoBackgroundRemovalV3Input;
                output: falEndpoints.BriaVideoBackgroundRemovalV3Output;
            };

            'bria/video/background-removal/realtime': {
                input: falEndpoints.BriaVideoBackgroundRemovalRealtimeInput;
                output: falEndpoints.BriaVideoBackgroundRemovalRealtimeOutput;
            };

            'bria/video/background-removal/green-screen-despill': {
                input: falEndpoints.BriaVideoBackgroundRemovalGreenScreenDespillInput;
                output: falEndpoints.BriaVideoBackgroundRemovalGreenScreenDespillOutput;
            };

            'bria/video/background-removal': {
                input: falEndpoints.BriaVideoBackgroundRemovalInput;
                output: falEndpoints.BriaVideoBackgroundRemovalOutput;
            };

            'bria/upscale/creative': {
                input: falEndpoints.BriaUpscaleCreativeInput;
                output: falEndpoints.BriaUpscaleCreativeOutput;
            };

            'bria/replace-background': {
                input: falEndpoints.BriaReplaceBackgroundInput;
                output: falEndpoints.BriaReplaceBackgroundOutput;
            };

            'bria/product-dimensions': {
                input: falEndpoints.BriaProductDimensionsInput;
                output: falEndpoints.BriaProductDimensionsOutput;
            };

            'bria/increase-resolution': {
                input: falEndpoints.BriaIncreaseResolutionInput;
                output: falEndpoints.BriaIncreaseResolutionOutput;
            };

            'bria/guided-remove-background': {
                input: falEndpoints.BriaGuidedRemoveBackgroundInput;
                output: falEndpoints.BriaGuidedRemoveBackgroundOutput;
            };

            'bria/genfill/v2': {
                input: falEndpoints.BriaGenfillV2Input;
                output: falEndpoints.BriaGenfillV2Output;
            };

            'bria/fibo/generate/structured_prompt': {
                input: falEndpoints.BriaFiboGenerateStructured_promptInput;
                output: falEndpoints.BriaFiboGenerateStructured_promptOutput;
            };

            'bria/fibo/generate': {
                input: falEndpoints.BriaFiboGenerateInput;
                output: falEndpoints.BriaFiboGenerateOutput;
            };

            'bria/fibo-lite/generate/structured_prompt': {
                input: falEndpoints.BriaFiboLiteGenerateStructured_promptInput;
                output: falEndpoints.BriaFiboLiteGenerateStructured_promptOutput;
            };

            'bria/fibo-lite/generate': {
                input: falEndpoints.BriaFiboLiteGenerateInput;
                output: falEndpoints.BriaFiboLiteGenerateOutput;
            };

            'bria/fibo-gen-1.5/text-to-image': {
                input: falEndpoints.BriaFiboGen15TextToImageInput;
                output: falEndpoints.BriaFiboGen15TextToImageOutput;
            };

            'bria/fibo-edit/sketch_to_colored_image': {
                input: falEndpoints.BriaFiboEditSketch_to_colored_imageInput;
                output: falEndpoints.BriaFiboEditSketch_to_colored_imageOutput;
            };

            'bria/fibo-edit/rewrite_text': {
                input: falEndpoints.BriaFiboEditRewrite_textInput;
                output: falEndpoints.BriaFiboEditRewrite_textOutput;
            };

            'bria/fibo-edit/restyle': {
                input: falEndpoints.BriaFiboEditRestyleInput;
                output: falEndpoints.BriaFiboEditRestyleOutput;
            };

            'bria/fibo-edit/restore': {
                input: falEndpoints.BriaFiboEditRestoreInput;
                output: falEndpoints.BriaFiboEditRestoreOutput;
            };

            'bria/fibo-edit/reseason': {
                input: falEndpoints.BriaFiboEditReseasonInput;
                output: falEndpoints.BriaFiboEditReseasonOutput;
            };

            'bria/fibo-edit/replace_object_by_text': {
                input: falEndpoints.BriaFiboEditReplace_object_by_textInput;
                output: falEndpoints.BriaFiboEditReplace_object_by_textOutput;
            };

            'bria/fibo-edit/relight': {
                input: falEndpoints.BriaFiboEditRelightInput;
                output: falEndpoints.BriaFiboEditRelightOutput;
            };

            'bria/fibo-edit/erase_by_text': {
                input: falEndpoints.BriaFiboEditErase_by_textInput;
                output: falEndpoints.BriaFiboEditErase_by_textOutput;
            };

            'bria/fibo-edit/edit/structured_instruction': {
                input: falEndpoints.BriaFiboEditEditStructured_instructionInput;
                output: falEndpoints.BriaFiboEditEditStructured_instructionOutput;
            };

            'bria/fibo-edit/edit': {
                input: falEndpoints.BriaFiboEditEditInput;
                output: falEndpoints.BriaFiboEditEditOutput;
            };

            'bria/fibo-edit/colorize': {
                input: falEndpoints.BriaFiboEditColorizeInput;
                output: falEndpoints.BriaFiboEditColorizeOutput;
            };

            'bria/fibo-edit/blend': {
                input: falEndpoints.BriaFiboEditBlendInput;
                output: falEndpoints.BriaFiboEditBlendOutput;
            };

            'bria/fibo-edit/add_object_by_text': {
                input: falEndpoints.BriaFiboEditAdd_object_by_textInput;
                output: falEndpoints.BriaFiboEditAdd_object_by_textOutput;
            };

            'bria/fibo-edit-1.5/virtual-try-on': {
                input: falEndpoints.BriaFiboEdit15VirtualTryOnInput;
                output: falEndpoints.BriaFiboEdit15VirtualTryOnOutput;
            };

            'bria/fibo-edit-1.5/product-holding': {
                input: falEndpoints.BriaFiboEdit15ProductHoldingInput;
                output: falEndpoints.BriaFiboEdit15ProductHoldingOutput;
            };

            'bria/fibo-edit-1.5/expand': {
                input: falEndpoints.BriaFiboEdit15ExpandInput;
                output: falEndpoints.BriaFiboEdit15ExpandOutput;
            };

            'bria/fibo-edit-1.5/edit': {
                input: falEndpoints.BriaFiboEdit15EditInput;
                output: falEndpoints.BriaFiboEdit15EditOutput;
            };

            'bria/fibo-bbq-preview/generate': {
                input: falEndpoints.BriaFiboBbqPreviewGenerateInput;
                output: falEndpoints.BriaFiboBbqPreviewGenerateOutput;
            };

            'bria/fibo-2/generate': {
                input: falEndpoints.BriaFibo2GenerateInput;
                output: falEndpoints.BriaFibo2GenerateOutput;
            };

            'bria/fibo-2/edit': {
                input: falEndpoints.BriaFibo2EditInput;
                output: falEndpoints.BriaFibo2EditOutput;
            };

            'bria/extract-object': {
                input: falEndpoints.BriaExtractObjectInput;
                output: falEndpoints.BriaExtractObjectOutput;
            };

            'bria/embed-product': {
                input: falEndpoints.BriaEmbedProductInput;
                output: falEndpoints.BriaEmbedProductOutput;
            };

            'bria/bria_video_eraser/erase/prompt': {
                input: falEndpoints.BriaBria_video_eraserErasePromptInput;
                output: falEndpoints.BriaBria_video_eraserErasePromptOutput;
            };

            'bria/bria_video_eraser/erase/mask': {
                input: falEndpoints.BriaBria_video_eraserEraseMaskInput;
                output: falEndpoints.BriaBria_video_eraserEraseMaskOutput;
            };

            'bria/bria_video_eraser/erase/keypoints': {
                input: falEndpoints.BriaBria_video_eraserEraseKeypointsInput;
                output: falEndpoints.BriaBria_video_eraserEraseKeypointsOutput;
            };

            'bria/ad-delayer': {
                input: falEndpoints.BriaAdDelayerInput;
                output: falEndpoints.BriaAdDelayerOutput;
            };

            'blackforestlabs/flux-video-upscale': {
                input: falEndpoints.BlackforestlabsFluxVideoUpscaleInput;
                output: falEndpoints.BlackforestlabsFluxVideoUpscaleOutput;
            };

            'blackforestlabs/flux-3/text-to-video/draft': {
                input: falEndpoints.BlackforestlabsFlux3TextToVideoDraftInput;
                output: falEndpoints.BlackforestlabsFlux3TextToVideoDraftOutput;
            };

            'blackforestlabs/flux-3/text-to-video': {
                input: falEndpoints.BlackforestlabsFlux3TextToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3TextToVideoOutput;
            };

            'blackforestlabs/flux-3/text-to-image': {
                input: falEndpoints.BlackforestlabsFlux3TextToImageInput;
                output: falEndpoints.BlackforestlabsFlux3TextToImageOutput;
            };

            'blackforestlabs/flux-3/klein/text-to-image': {
                input: falEndpoints.BlackforestlabsFlux3KleinTextToImageInput;
                output: falEndpoints.BlackforestlabsFlux3KleinTextToImageOutput;
            };

            'blackforestlabs/flux-3/klein/edit-image': {
                input: falEndpoints.BlackforestlabsFlux3KleinEditImageInput;
                output: falEndpoints.BlackforestlabsFlux3KleinEditImageOutput;
            };

            'blackforestlabs/flux-3/keyframes-to-video/draft': {
                input: falEndpoints.BlackforestlabsFlux3KeyframesToVideoDraftInput;
                output: falEndpoints.BlackforestlabsFlux3KeyframesToVideoDraftOutput;
            };

            'blackforestlabs/flux-3/keyframes-to-video': {
                input: falEndpoints.BlackforestlabsFlux3KeyframesToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3KeyframesToVideoOutput;
            };

            'blackforestlabs/flux-3/image-to-video/draft': {
                input: falEndpoints.BlackforestlabsFlux3ImageToVideoDraftInput;
                output: falEndpoints.BlackforestlabsFlux3ImageToVideoDraftOutput;
            };

            'blackforestlabs/flux-3/image-to-video': {
                input: falEndpoints.BlackforestlabsFlux3ImageToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3ImageToVideoOutput;
            };

            'blackforestlabs/flux-3/first-last-frame-to-video/draft': {
                input: falEndpoints.BlackforestlabsFlux3FirstLastFrameToVideoDraftInput;
                output: falEndpoints.BlackforestlabsFlux3FirstLastFrameToVideoDraftOutput;
            };

            'blackforestlabs/flux-3/first-last-frame-to-video': {
                input: falEndpoints.BlackforestlabsFlux3FirstLastFrameToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3FirstLastFrameToVideoOutput;
            };

            'blackforestlabs/flux-3/extend-video/draft': {
                input: falEndpoints.BlackforestlabsFlux3ExtendVideoDraftInput;
                output: falEndpoints.BlackforestlabsFlux3ExtendVideoDraftOutput;
            };

            'blackforestlabs/flux-3/extend-video': {
                input: falEndpoints.BlackforestlabsFlux3ExtendVideoInput;
                output: falEndpoints.BlackforestlabsFlux3ExtendVideoOutput;
            };

            'blackforestlabs/flux-3/edit-video': {
                input: falEndpoints.BlackforestlabsFlux3EditVideoInput;
                output: falEndpoints.BlackforestlabsFlux3EditVideoOutput;
            };

            'blackforestlabs/flux-3/edit-image': {
                input: falEndpoints.BlackforestlabsFlux3EditImageInput;
                output: falEndpoints.BlackforestlabsFlux3EditImageOutput;
            };

            'blackforestlabs/flux-3/draft-enhance': {
                input: falEndpoints.BlackforestlabsFlux3DraftEnhanceInput;
                output: falEndpoints.BlackforestlabsFlux3DraftEnhanceOutput;
            };

            'blackforestlabs/flux-3-max/text-to-video': {
                input: falEndpoints.BlackforestlabsFlux3MaxTextToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3MaxTextToVideoOutput;
            };

            'blackforestlabs/flux-3-max/keyframes-to-video': {
                input: falEndpoints.BlackforestlabsFlux3MaxKeyframesToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3MaxKeyframesToVideoOutput;
            };

            'blackforestlabs/flux-3-max/image-to-video': {
                input: falEndpoints.BlackforestlabsFlux3MaxImageToVideoInput;
                output: falEndpoints.BlackforestlabsFlux3MaxImageToVideoOutput;
            };

            'async/tts-pro/v1.0': {
                input: falEndpoints.AsyncTtsProV10Input;
                output: falEndpoints.AsyncTtsProV10Output;
            };

            'argil/avatars/text-to-video': {
                input: falEndpoints.ArgilAvatarsTextToVideoInput;
                output: falEndpoints.ArgilAvatarsTextToVideoOutput;
            };

            'argil/avatars/audio-to-video': {
                input: falEndpoints.ArgilAvatarsAudioToVideoInput;
                output: falEndpoints.ArgilAvatarsAudioToVideoOutput;
            };

            'alibaba/wan-3.0/text-to-video': {
                input: falEndpoints.AlibabaWan30TextToVideoInput;
                output: falEndpoints.AlibabaWan30TextToVideoOutput;
            };

            'alibaba/wan-3.0/reference-to-video': {
                input: falEndpoints.AlibabaWan30ReferenceToVideoInput;
                output: falEndpoints.AlibabaWan30ReferenceToVideoOutput;
            };

            'alibaba/wan-3.0/image-to-video': {
                input: falEndpoints.AlibabaWan30ImageToVideoInput;
                output: falEndpoints.AlibabaWan30ImageToVideoOutput;
            };

            'alibaba/wan-3.0-prime/text-to-video': {
                input: falEndpoints.AlibabaWan30PrimeTextToVideoInput;
                output: falEndpoints.AlibabaWan30PrimeTextToVideoOutput;
            };

            'alibaba/wan-3.0-prime/reference-to-video': {
                input: falEndpoints.AlibabaWan30PrimeReferenceToVideoInput;
                output: falEndpoints.AlibabaWan30PrimeReferenceToVideoOutput;
            };

            'alibaba/wan-3.0-prime/image-to-video': {
                input: falEndpoints.AlibabaWan30PrimeImageToVideoInput;
                output: falEndpoints.AlibabaWan30PrimeImageToVideoOutput;
            };

            'alibaba/qwen-image-3/text-to-image': {
                input: falEndpoints.AlibabaQwenImage3TextToImageInput;
                output: falEndpoints.AlibabaQwenImage3TextToImageOutput;
            };

            'alibaba/qwen-image-3/edit': {
                input: falEndpoints.AlibabaQwenImage3EditInput;
                output: falEndpoints.AlibabaQwenImage3EditOutput;
            };

            'alibaba/qwen-audio-3-tts': {
                input: falEndpoints.AlibabaQwenAudio3TtsInput;
                output: falEndpoints.AlibabaQwenAudio3TtsOutput;
            };

            'alibaba/happy-horse/video-edit': {
                input: falEndpoints.AlibabaHappyHorseVideoEditInput;
                output: falEndpoints.AlibabaHappyHorseVideoEditOutput;
            };

            'alibaba/happy-horse/v1.1/text-to-video': {
                input: falEndpoints.AlibabaHappyHorseV11TextToVideoInput;
                output: falEndpoints.AlibabaHappyHorseV11TextToVideoOutput;
            };

            'alibaba/happy-horse/v1.1/reference-to-video': {
                input: falEndpoints.AlibabaHappyHorseV11ReferenceToVideoInput;
                output: falEndpoints.AlibabaHappyHorseV11ReferenceToVideoOutput;
            };

            'alibaba/happy-horse/v1.1/image-to-video': {
                input: falEndpoints.AlibabaHappyHorseV11ImageToVideoInput;
                output: falEndpoints.AlibabaHappyHorseV11ImageToVideoOutput;
            };

            'alibaba/happy-horse/text-to-video': {
                input: falEndpoints.AlibabaHappyHorseTextToVideoInput;
                output: falEndpoints.AlibabaHappyHorseTextToVideoOutput;
            };

            'alibaba/happy-horse/reference-to-video': {
                input: falEndpoints.AlibabaHappyHorseReferenceToVideoInput;
                output: falEndpoints.AlibabaHappyHorseReferenceToVideoOutput;
            };

            'alibaba/happy-horse/image-to-video': {
                input: falEndpoints.AlibabaHappyHorseImageToVideoInput;
                output: falEndpoints.AlibabaHappyHorseImageToVideoOutput;
            };

            'alibaba/abot-world-0': {
                input: falEndpoints.AlibabaAbotWorld0Input;
                output: falEndpoints.AlibabaAbotWorld0Output;
            };
        }
    }
}

export {};
