export interface File {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface File_nuu {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface registry__image__fast_sdxl__models__Image {
    /** Height */
    height: number;
    /**
     * Content Type
     * @default image/jpeg
     */
    content_type: string;
    /** Url */
    url: string;
    /** Width */
    width: number;
}

export interface ImageSize {
    /**
     * Height
     * @description The height of the generated image.
     * @default 512
     */
    height: number;
    /**
     * Width
     * @description The width of the generated image.
     * @default 512
     */
    width: number;
}

export interface RGBColor {
    /**
     * R
     * @description Red color value
     * @default 0
     */
    r: number;
    /**
     * B
     * @description Blue color value
     * @default 0
     */
    b: number;
    /**
     * G
     * @description Green color value
     * @default 0
     */
    g: number;
}

export interface LoRAInput {
    /**
     * Path
     * @description URL, HuggingFace repo ID (owner/repo), or local path to LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description Scale factor for LoRA application (0.0 to 4.0).
     * @default 1
     */
    scale: number;
}

export interface ImageFile {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface VideoFile {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface Video {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface Image {
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
}

export interface LoraWeight {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Used only if `path` is a Hugging Face repository, and required only if you have more than 1 safetensors file in the repo.
     */
    weight_name?: string;
}

export interface Image_j14 {
    /** Height */
    height: number;
    /**
     * Content Type
     * @default image/jpeg
     */
    content_type: string;
    /** Url */
    url: string;
    /** Width */
    width: number;
}

export interface ControlLoraWeight {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model. Providing a dictionary as {"layer_name":layer_scale} allows per-layer lora scale settings. Layers with no scale provided will have scale 1.0.
     * @default 1
     */
    scale: Record<string, never> | number;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * Preprocess
     * @description Type of preprocessing to apply to the input image.
     * @default None
     * @enum {string}
     */
    preprocess: 'canny' | 'depth' | 'None';
}

export interface LoraWeight_x7e {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model. Providing a dictionary as {"layer_name":layer_scale} allows per-layer lora scale settings. Layers with no scale provided will have scale 1.0.
     * @default 1
     */
    scale: Record<string, never> | number;
}

export interface EasyControlWeight {
    /**
     * Scale
     * @description Scale for the control method.
     * @default 1
     */
    scale: number;
    /**
     * Image Control Type
     * @description Control type of the image. Must be one of `spatial` or `subject`.
     * @enum {string}
     */
    image_control_type: 'subject' | 'spatial';
    /**
     * Control Method Url
     * @description URL to safetensor weights of control method to be applied. Can also be one of `canny`, `depth`, `hedsketch`, `inpainting`, `pose`, `seg`, `subject`, `ghibli`
     * @example canny
     * @example depth
     * @example hedsketch
     * @example inpainting
     * @example pose
     * @example seg
     * @example subject
     * @example ghibli
     */
    control_method_url: string;
    /**
     * Image Url
     * @description URL of an image to use as a control
     */
    image_url: string;
}

export interface ImageFillInput {
    /**
     * Fill Image Url
     * @description URLs of images to be filled for redux prompting
     * @default []
     */
    fill_image_url: string | string[];
}

export interface ControlNetUnion {
    /**
     * Controls
     * @description The control images and modes to use for the control net.
     */
    controls: {
        /**
         * Conditioning Scale
         * @description The scale of the control net weight. This is used to scale the control net weight
         *                 before merging it with the base model.
         * @default 1
         */
        conditioning_scale: number;
        /**
         * Mask Threshold
         * @description Threshold for mask.
         * @default 0.5
         */
        mask_threshold: number;
        /**
         * End Percentage
         * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
         * @default 1
         */
        end_percentage: number;
        /**
         * Mask Image Url
         * @description URL of the mask for the control image.
         */
        mask_image_url?: string;
        /**
         * Control Image Url
         * @description URL of the image to be used as the control image.
         */
        control_image_url: string;
        /**
         * Control Mode
         * @description Control Mode for Flux Controlnet Union. Supported values are:
         *             - canny: Uses the edges for guided generation.
         *             - tile: Uses the tiles for guided generation.
         *             - depth: Utilizes a grayscale depth map for guided generation.
         *             - blur: Adds a blur to the image.
         *             - pose: Uses the pose of the image for guided generation.
         *             - gray: Converts the image to grayscale.
         *             - low-quality: Converts the image to a low-quality image.
         * @enum {string}
         */
        control_mode: 'canny' | 'tile' | 'depth' | 'blur' | 'pose' | 'gray' | 'low-quality';
        /**
         * Start Percentage
         * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
         * @default 0
         */
        start_percentage: number;
    }[];
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Variant
     * @description The optional variant if a Hugging Face repo key is used.
     */
    variant?: string;
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
}

export interface IPAdapter {
    /**
     * Path
     * @description Hugging Face path to the IP-Adapter
     */
    path: string;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold: number;
    /**
     * Image Encoder Weight Name
     * @description Name of the image encoder.
     */
    image_encoder_weight_name?: string;
    /**
     * Image Encoder Subfolder
     * @description Subfolder in which the image encoder weights exist.
     */
    image_encoder_subfolder?: string;
    /**
     * Image Url
     * @description URL of Image for IP-Adapter conditioning.
     */
    image_url: string;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Subfolder
     * @description Subfolder in which the ip_adapter weights exist
     */
    subfolder?: string;
    /**
     * Scale
     * @description Scale for ip adapter.
     */
    scale: number;
    /**
     * Image Encoder Path
     * @description Path to the Image Encoder for the IP-Adapter, for example 'openai/clip-vit-large-patch14'
     */
    image_encoder_path: string;
    /**
     * Weight Name
     * @description Name of the safetensors file containing the ip-adapter weights
     */
    weight_name?: string;
}

export interface ControlNet {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale: number;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold: number;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage: number;
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Variant
     * @description The optional variant if a Hugging Face repo key is used.
     */
    variant?: string;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage: number;
}

export interface ControlNetUnionInput {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale: number;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold: number;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage: number;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * Control Mode
     * @description Control Mode for Flux Controlnet Union. Supported values are:
     *             - canny: Uses the edges for guided generation.
     *             - tile: Uses the tiles for guided generation.
     *             - depth: Utilizes a grayscale depth map for guided generation.
     *             - blur: Adds a blur to the image.
     *             - pose: Uses the pose of the image for guided generation.
     *             - gray: Converts the image to grayscale.
     *             - low-quality: Converts the image to a low-quality image.
     * @enum {string}
     */
    control_mode: 'canny' | 'tile' | 'depth' | 'blur' | 'pose' | 'gray' | 'low-quality';
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage: number;
}

export interface ControlNet_2ed {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale: number;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage: number;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage: number;
}

export interface IPAdapter_jak {
    /**
     * Path
     * @description Hugging Face path to the IP-Adapter
     */
    path: string;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold: number;
    /**
     * Image Encoder Weight Name
     * @description Name of the image encoder.
     */
    image_encoder_weight_name?: string;
    /**
     * Image Url
     * @description URL of Image for IP-Adapter conditioning.
     */
    image_url: string;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Image Encoder Subfolder
     * @description Subfolder in which the image encoder weights exist.
     */
    image_encoder_subfolder?: string;
    /**
     * Subfolder
     * @description Subfolder in which the ip_adapter weights exist
     */
    subfolder?: string;
    /**
     * Scale
     * @description Scale for ip adapter.
     */
    scale: number;
    /**
     * Image Encoder Path
     * @description Path to the Image Encoder for the IP-Adapter, for example 'openai/clip-vit-large-patch14'
     */
    image_encoder_path: string;
    /**
     * Weight Name
     * @description Name of the safetensors file containing the ip-adapter weights
     */
    weight_name?: string;
}

export interface LoraWeight_dax {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
}

export interface Image_4mp {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
}

export interface Image_645 {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface ImageFile_kso {
    /**
     * Height
     * @description The height of the image
     */
    height?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface TranscriptionWord {
    /**
     * Text
     * @description The transcribed word or audio event
     */
    text: string;
    /**
     * Start
     * @description Start time in seconds
     */
    start: number;
    /**
     * Type
     * @description Type of element (word, spacing, or audio_event)
     */
    type: string;
    /**
     * End
     * @description End time in seconds
     */
    end: number;
    /**
     * Speaker Id
     * @description Speaker identifier if diarization was enabled
     */
    speaker_id?: string;
}

export interface UsageInfo {
    /** Prompt Tokens */
    prompt_tokens?: number;
    /**
     * Total Tokens
     * @default 0
     */
    total_tokens: number;
    /** Completion Tokens */
    completion_tokens?: number;
    /** Cost */
    cost: number;
}

export interface NovaSRTimings {
    /**
     * Postprocess
     * @description Time taken to postprocess the audio in seconds.
     */
    postprocess: number;
    /**
     * Inference
     * @description Time taken to run the inference in seconds.
     */
    inference: number;
    /**
     * Preprocess
     * @description Time taken to preprocess the audio in seconds.
     */
    preprocess: number;
}

export interface AudioFile {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the audio
     */
    duration?: number;
    /**
     * Bitrate
     * @description The bitrate of the audio
     */
    bitrate?: string;
    /**
     * Channels
     * @description The number of channels in the audio
     */
    channels?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Sample Rate
     * @description The sample rate of the audio
     */
    sample_rate?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface BoundingBox {
    /**
     * Y
     * @description Y-coordinate of the top-left corner
     */
    y: number;
    /**
     * X
     * @description X-coordinate of the top-left corner
     */
    x: number;
    /**
     * H
     * @description Height of the bounding box
     */
    h: number;
    /**
     * W
     * @description Width of the bounding box
     */
    w: number;
    /**
     * Label
     * @description Label of the bounding box
     */
    label: string;
}

export interface DeepFilterNetTimings {
    /**
     * Postprocess
     * @description Postprocessing time.
     */
    postprocess: number;
    /**
     * Inference
     * @description Inference time.
     */
    inference: number;
    /**
     * Preprocess
     * @description Preprocessing time.
     */
    preprocess: number;
}

export interface AudioFile_sb9 {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the audio
     */
    duration?: number;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
    /**
     * Bitrate
     * @description The bitrate of the audio
     */
    bitrate?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Sample Rate
     * @description The sample rate of the audio
     */
    sample_rate?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Channels
     * @description The number of channels in the audio
     */
    channels?: number;
}

export interface LoRAInput_60h {
    /**
     * Path
     * @description URL, HuggingFace repo ID (owner/repo) to lora weights.
     */
    path: string;
    /**
     * Scale
     * @description Scale factor for LoRA application (0.0 to 4.0).
     * @default 1
     */
    scale: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Only used if `path` is a HuggingFace repository, and is only required when the repository contains multiple LoRA weights.
     */
    weight_name?: string;
}

export interface VideoFile_s4k {
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface SpeechTimestamp {
    /**
     * End Time
     * @description The end time of the speech in seconds.
     */
    end: number;
    /**
     * Start Time
     * @description The start time of the speech in seconds.
     */
    start: number;
}

export interface V2VValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Reference Video Url
     * @description URL to reference video for IC-LoRA validation. This is the input video that will be transformed.
     */
    reference_video_url: string;
}

export interface Validation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Image Url
     * @description An image to use for image-to-video validation. If provided for one validation, _all_ validation inputs must have an image.
     */
    image_url?: string;
}

export interface AudioTimeSpan {
    /**
     * End
     * @description End time of the span in seconds
     * @example 1.5
     * @example 4
     */
    end: number;
    /**
     * Start
     * @description Start time of the span in seconds
     * @example 0.5
     * @example 2
     */
    start: number;
    /**
     * Include
     * @description Whether to include (True) or exclude (False) sounds in this span
     * @default true
     */
    include: boolean;
}

export interface SemanticImageInput {
    /**
     * Hypothesis
     * @description The hypothesis image to use for the measurement.
     */
    hypothesis: string;
    /**
     * Reference
     * @description The text reference to use for the measurement.
     */
    reference: string;
}

export interface ReferenceImageInput {
    /**
     * Hypothesis
     * @description The hypothesis image to use for the measurement.
     */
    hypothesis: string;
    /**
     * Reference
     * @description The image to use for the measurement.
     */
    reference: string;
}

export interface ImageInput {
    /**
     * Hypothesis
     * @description The image to use for the measurement.
     */
    hypothesis: string;
}

export interface LoRAInput_ibh {
    /**
     * Path
     * @description URL, HuggingFace repo ID (owner/repo) to lora weights.
     */
    path: string;
    /**
     * Scale
     * @description Scale factor for LoRA application (0.0 to 4.0).
     * @default 1
     */
    scale: number;
}

export interface MusicCompositionPlan {
    /**
     * Negative Global Styles
     * @description The styles that should not be present in the entire song.
     */
    negative_global_styles: string[];
    /**
     * Sections
     * @description The sections of the song.
     */
    sections: {
        /**
         * Positive Local Styles
         * @description The styles that should be present in this section.
         */
        positive_local_styles: string[];
        /**
         * Lines
         * @description The lyrics of the section. Each line must be at most 200 characters long.
         */
        lines: string[];
        /**
         * Negative Local Styles
         * @description The styles that should not be present in this section.
         */
        negative_local_styles: string[];
        /**
         * Duration Ms
         * @description The duration of the section in milliseconds. Must be between 3000ms and 120000ms.
         */
        duration_ms: number;
        /**
         * Section Name
         * @description The name of the section. Must be between 1 and 100 characters.
         */
        section_name: string;
    }[];
    /**
     * Positive Global Styles
     * @description The styles that should be present in the entire song.
     */
    positive_global_styles: string[];
}

export interface MusicSection {
    /**
     * Positive Local Styles
     * @description The styles that should be present in this section.
     */
    positive_local_styles: string[];
    /**
     * Lines
     * @description The lyrics of the section. Each line must be at most 200 characters long.
     */
    lines: string[];
    /**
     * Negative Local Styles
     * @description The styles that should not be present in this section.
     */
    negative_local_styles: string[];
    /**
     * Duration Ms
     * @description The duration of the section in milliseconds. Must be between 3000ms and 120000ms.
     */
    duration_ms: number;
    /**
     * Section Name
     * @description The name of the section. Must be between 1 and 100 characters.
     */
    section_name: string;
}

export interface VideoFile_t2a {
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface TrajectoryParameters {
    /**
     * Theta
     * @description Horizontal rotation angles (degrees) for each keyframe.
     * @example [
     *       0,
     *       2,
     *       8,
     *       10,
     *       5,
     *       3,
     *       0,
     *       -2,
     *       -5,
     *       -8,
     *       -5,
     *       -3,
     *       0
     *     ]
     */
    theta: number[];
    /**
     * Radius
     * @description Camera distance scaling factors for each keyframe.
     * @example [
     *       0,
     *       0.02,
     *       0.09,
     *       0.16,
     *       0.25,
     *       0.2,
     *       0.09,
     *       0
     *     ]
     */
    radius: number[];
    /**
     * Phi
     * @description Vertical rotation angles (degrees) for each keyframe.
     * @example [
     *       0,
     *       -3,
     *       -8,
     *       -15,
     *       -20,
     *       -15,
     *       -10,
     *       -5,
     *       0
     *     ]
     */
    phi: number[];
}

export interface RelightParameters {
    /**
     * Relight Prompt
     * @description Text prompt describing the desired lighting condition.
     * @example Sunlight
     * @example Red and Blue Neon Light
     * @example Warm indoor lighting
     */
    relight_prompt: string;
    /**
     * Bg Source
     * @description Direction of the light source (used for IC-light).
     * @default Left
     * @enum {string}
     */
    bg_source: 'Left' | 'Right' | 'Top' | 'Bottom';
    /**
     * Use Sky Mask
     * @description Whether to use sky masking for outdoor scenes.
     * @default false
     */
    use_sky_mask: boolean;
    /**
     * Cfg
     * @description Classifier-free guidance scale for relighting.
     * @default 2
     */
    cfg: number;
}

export interface ModelUrls {
    /**
     * Fbx
     * @description FBX format 3D model
     */
    fbx?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Usdz
     * @description USDZ format 3D model
     */
    usdz?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Glb
     * @description GLB format 3D model
     */
    glb?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Obj
     * @description OBJ format 3D model
     */
    obj?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
}

export interface StructuredPrompt {
    /**
     * Background Setting
     * @description The background setting of the image to be generated.
     */
    background_setting?: string;
    /**
     * Artistic Style
     * @description The artistic style of the image to be generated.
     */
    artistic_style?: string;
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render: unknown[];
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects: {
        /**
         * Relative Size
         * @description The relative size of the object in the image.
         */
        relative_size?: string;
        /**
         * Description
         * @description A description of the object to be generated.
         */
        description?: string;
        /**
         * Skin Tone And Texture
         * @description The skin tone and texture of the object in the image.
         */
        skin_tone_and_texture?: string;
        /**
         * Appearance Details
         * @description The appearance details of the object.
         */
        appearance_details?: string;
        /**
         * Number Of Objects
         * @description The number of objects in the image.
         */
        number_of_objects?: number;
        /**
         * Pose
         * @description The pose of the object in the image.
         */
        pose?: string;
        /**
         * Expression
         * @description The expression of the object in the image.
         */
        expression?: string;
        /**
         * Shape And Color
         * @description The shape and color of the object.
         */
        shape_and_color?: string;
        /**
         * Relationship
         * @description The relationship of the object to other objects in the image.
         */
        relationship: string;
        /**
         * Texture
         * @description The texture of the object.
         */
        texture?: string;
        /**
         * Gender
         * @description The gender of the object in the image.
         */
        gender?: string;
        /**
         * Clothing
         * @description The clothing of the object in the image.
         */
        clothing?: string;
        /**
         * Location
         * @description The location of the object in the image.
         */
        location?: string;
        /**
         * Orientation
         * @description The orientation of the object in the image.
         */
        orientation?: string;
        /**
         * Action
         * @description The action of the object in the image.
         */
        action?: string;
    }[];
    /**
     * Style Medium
     * @description The style medium of the image to be generated.
     */
    style_medium?: string;
    /** @description The photographic characteristics of the image to be generated. */
    photographic_characteristics?: {
        /**
         * Focus
         * @description The focus in the image to be generated.
         */
        focus?: string;
        /**
         * Lens Focal Length
         * @description The focal length of the lens in the image to be generated.
         */
        lens_focal_length?: string;
        /**
         * Camera Angle
         * @description The angle of the camera in the image to be generated.
         */
        camera_angle?: string;
        /**
         * Depth Of Field
         * @description The depth of field in the image to be generated.
         */
        depth_of_field?: string;
    };
    /** @description The aesthetics of the image to be generated. */
    aesthetics?: {
        /**
         * Composition
         * @description The composition of the image to be generated.
         */
        composition?: string;
        /**
         * Mood Atmosphere
         * @description The mood and atmosphere of the image to be generated.
         */
        mood_atmosphere?: string;
        /**
         * Color Scheme
         * @description The color scheme of the image to be generated.
         */
        color_scheme?: string;
    };
    /** @description The lighting of the image to be generated. */
    lighting?: {
        /**
         * Shadows
         * @description The shadows in the image to be generated.
         */
        shadows?: string;
        /**
         * Conditions
         * @description The conditions of the lighting in the image to be generated.
         */
        conditions?: string;
        /**
         * Direction
         * @description The direction of the lighting in the image to be generated.
         */
        direction?: string;
    };
    /**
     * Short Description
     * @description A short description of the image to be generated.
     */
    short_description?: string;
}

export interface PromptObject {
    /**
     * Relative Size
     * @description The relative size of the object in the image.
     */
    relative_size?: string;
    /**
     * Description
     * @description A description of the object to be generated.
     */
    description?: string;
    /**
     * Skin Tone And Texture
     * @description The skin tone and texture of the object in the image.
     */
    skin_tone_and_texture?: string;
    /**
     * Appearance Details
     * @description The appearance details of the object.
     */
    appearance_details?: string;
    /**
     * Number Of Objects
     * @description The number of objects in the image.
     */
    number_of_objects?: number;
    /**
     * Pose
     * @description The pose of the object in the image.
     */
    pose?: string;
    /**
     * Expression
     * @description The expression of the object in the image.
     */
    expression?: string;
    /**
     * Shape And Color
     * @description The shape and color of the object.
     */
    shape_and_color?: string;
    /**
     * Relationship
     * @description The relationship of the object to other objects in the image.
     */
    relationship: string;
    /**
     * Texture
     * @description The texture of the object.
     */
    texture?: string;
    /**
     * Gender
     * @description The gender of the object in the image.
     */
    gender?: string;
    /**
     * Clothing
     * @description The clothing of the object in the image.
     */
    clothing?: string;
    /**
     * Location
     * @description The location of the object in the image.
     */
    location?: string;
    /**
     * Orientation
     * @description The orientation of the object in the image.
     */
    orientation?: string;
    /**
     * Action
     * @description The action of the object in the image.
     */
    action?: string;
}

export interface PhotographicCharacteristics {
    /**
     * Focus
     * @description The focus in the image to be generated.
     */
    focus?: string;
    /**
     * Lens Focal Length
     * @description The focal length of the lens in the image to be generated.
     */
    lens_focal_length?: string;
    /**
     * Camera Angle
     * @description The angle of the camera in the image to be generated.
     */
    camera_angle?: string;
    /**
     * Depth Of Field
     * @description The depth of field in the image to be generated.
     */
    depth_of_field?: string;
}

export interface Aesthetics {
    /**
     * Composition
     * @description The composition of the image to be generated.
     */
    composition?: string;
    /**
     * Mood Atmosphere
     * @description The mood and atmosphere of the image to be generated.
     */
    mood_atmosphere?: string;
    /**
     * Color Scheme
     * @description The color scheme of the image to be generated.
     */
    color_scheme?: string;
}

export interface Lighting {
    /**
     * Shadows
     * @description The shadows in the image to be generated.
     */
    shadows?: string;
    /**
     * Conditions
     * @description The conditions of the lighting in the image to be generated.
     */
    conditions?: string;
    /**
     * Direction
     * @description The direction of the lighting in the image to be generated.
     */
    direction?: string;
}

export interface OmniVideoElementInput {
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 1-3 images supported. At least one image is required.
     */
    reference_image_urls?: string[];
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     *
     *     Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect ratio: 0.40, Max aspect ratio: 2.50, Timeout: 20.0s
     */
    frontal_image_url: string;
}

export interface VideoFile_o4a {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface VideoFile_2pa {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface SAM3DBodyAlignmentInfo {
    /**
     * Cropped Vertices Count
     * @description Number of cropped vertices
     */
    cropped_vertices_count: number;
    /**
     * Translation
     * @description Translation [tx, ty, tz]
     */
    translation: number[];
    /**
     * Person Id
     * @description Index of the person
     */
    person_id: number;
    /**
     * Scale Factor
     * @description Scale factor applied for alignment
     */
    scale_factor: number;
    /**
     * Target Points Count
     * @description Number of target points for alignment
     */
    target_points_count: number;
    /**
     * Focal Length
     * @description Focal length used
     */
    focal_length: number;
}

export interface SAM3DBodyMetadata {
    /**
     * People
     * @description Per-person metadata
     */
    people: {
        /**
         * Pred Cam T
         * @description Predicted camera translation [tx, ty, tz]
         */
        pred_cam_t: number[];
        /**
         * Person Id
         * @description Index of the person in the scene
         */
        person_id: number;
        /**
         * Bbox
         * @description Bounding box [x_min, y_min, x_max, y_max]
         */
        bbox: number[];
        /**
         * Keypoints 3D
         * @description 3D keypoints [[x, y, z], ...] - 70 body keypoints in camera space
         */
        keypoints_3d?: number[][];
        /**
         * Keypoints 2D
         * @description 2D keypoints [[x, y], ...] - 70 body keypoints
         */
        keypoints_2d: number[][];
        /**
         * Focal Length
         * @description Estimated focal length
         */
        focal_length: number;
    }[];
    /**
     * Num People
     * @description Number of people detected
     */
    num_people: number;
}

export interface SAM3DBodyPersonMetadata {
    /**
     * Pred Cam T
     * @description Predicted camera translation [tx, ty, tz]
     */
    pred_cam_t: number[];
    /**
     * Person Id
     * @description Index of the person in the scene
     */
    person_id: number;
    /**
     * Bbox
     * @description Bounding box [x_min, y_min, x_max, y_max]
     */
    bbox: number[];
    /**
     * Keypoints 3D
     * @description 3D keypoints [[x, y, z], ...] - 70 body keypoints in camera space
     */
    keypoints_3d?: number[][];
    /**
     * Keypoints 2D
     * @description 2D keypoints [[x, y], ...] - 70 body keypoints
     */
    keypoints_2d: number[][];
    /**
     * Focal Length
     * @description Estimated focal length
     */
    focal_length: number;
}

export interface BoxPromptBase {
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     */
    y_min?: number;
    /**
     * Object Id
     * @description Optional object identifier. Boxes sharing an object id refine the same object.
     */
    object_id?: number;
    /**
     * X Max
     * @description X Max Coordinate of the box
     */
    x_max?: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     */
    x_min?: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the box
     */
    y_max?: number;
}

export interface PointPromptBase {
    /**
     * Y
     * @description Y Coordinate of the prompt
     */
    y?: number;
    /**
     * Label
     * @description 1 for foreground, 0 for background
     */
    label?: 0 | 1;
    /**
     * Object Id
     * @description Optional object identifier. Prompts sharing an object id refine the same object.
     */
    object_id?: number;
    /**
     * X
     * @description X Coordinate of the prompt
     */
    x?: number;
}

export interface SAM3DObjectMetadata {
    /**
     * Rotation
     * @description Rotation quaternion [x, y, z, w]
     */
    rotation?: number[][];
    /**
     * Translation
     * @description Translation [tx, ty, tz]
     */
    translation?: number[][];
    /**
     * Object Index
     * @description Index of the object in the scene
     */
    object_index: number;
    /**
     * Scale
     * @description Scale factors [sx, sy, sz]
     */
    scale?: number[][];
    /**
     * Camera Pose
     * @description Camera pose matrix
     */
    camera_pose?: number[][];
}

export interface Image_w98 {
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface OmniImageElementInput {
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 1-3 images supported. At least one image is required.
     */
    reference_image_urls?: string[];
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     */
    frontal_image_url: string;
}

export interface VideoFile_2eg {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface ImageOutput {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
}

export interface ChronoLoraWeight {
    /**
     * Path
     * @description URL or path to the LoRA weights (Safetensors).
     */
    path: string;
    /**
     * Scale
     * @description Scale factor controlling LoRA strength.
     * @default 1
     */
    scale: number;
}

export interface BoxPrompt {
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     */
    y_min?: number;
    /**
     * Object Id
     * @description Optional object identifier. Boxes sharing an object id refine the same object.
     */
    object_id?: number;
    /**
     * Frame Index
     * @description The frame index to interact with.
     */
    frame_index?: number;
    /**
     * X Max
     * @description X Max Coordinate of the box
     */
    x_max?: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     */
    x_min?: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the box
     */
    y_max?: number;
}

export interface PointPrompt {
    /**
     * Y
     * @description Y Coordinate of the prompt
     */
    y?: number;
    /**
     * Label
     * @description 1 for foreground, 0 for background
     */
    label?: 0 | 1;
    /**
     * Object Id
     * @description Optional object identifier. Prompts sharing an object id refine the same object.
     */
    object_id?: number;
    /**
     * Frame Index
     * @description The frame index to interact with.
     */
    frame_index?: number;
    /**
     * X
     * @description X Coordinate of the prompt
     */
    x?: number;
}

export interface MaskMetadata {
    /**
     * Box
     * @description Bounding box for the mask in normalized cxcywh coordinates.
     */
    box?: number[];
    /**
     * Index
     * @description Index of the mask inside the model output.
     */
    index: number;
    /**
     * Score
     * @description Score for this mask.
     */
    score?: number;
}

export interface VideoFile_e97 {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
}

export interface KeyframeTransition {
    /**
     * Prompt
     * @description Specific prompt for this transition. Overrides the global prompt if provided.
     * @example null
     */
    prompt?: string;
    /**
     * Duration
     * @description Duration of this transition in seconds
     * @default 5
     */
    duration: number;
}

export interface AudioSetting {
    /**
     * Format
     * @description Audio format
     * @default mp3
     * @enum {string}
     */
    format: 'mp3' | 'pcm' | 'flac';
    /**
     * Sample Rate
     * @description Sample rate of generated audio
     * @default 44100
     * @enum {integer}
     */
    sample_rate: 8000 | 16000 | 22050 | 24000 | 32000 | 44100;
    /**
     * Bitrate
     * @description Bitrate of generated audio
     * @default 256000
     * @enum {integer}
     */
    bitrate: 32000 | 64000 | 128000 | 256000;
}

export interface StructuredPrompt_20n {
    /**
     * Background Setting
     * @description The background setting of the image to be generated.
     */
    background_setting?: string;
    /**
     * Artistic Style
     * @description The artistic style of the image to be generated.
     */
    artistic_style?: string;
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render: unknown[];
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects: {
        /**
         * Clothing
         * @description The clothing of the object in the image.
         */
        clothing?: string;
        /**
         * Description
         * @description A description of the object to be generated.
         */
        description?: string;
        /**
         * Skin Tone And Texture
         * @description The skin tone and texture of the object in the image.
         */
        skin_tone_and_texture?: string;
        /**
         * Appearance Details
         * @description The appearance details of the object.
         */
        appearance_details?: string;
        /**
         * Number Of Objects
         * @description The number of objects in the image.
         */
        number_of_objects?: number;
        /**
         * Expression
         * @description The expression of the object in the image.
         */
        expression?: string;
        /**
         * Pose
         * @description The pose of the object in the image.
         */
        pose?: string;
        /**
         * Shape And Color
         * @description The shape and color of the object.
         */
        shape_and_color?: string;
        /**
         * Relationship
         * @description The relationship of the object to other objects in the image.
         */
        relationship: string;
        /**
         * Texture
         * @description The texture of the object.
         */
        texture?: string;
        /**
         * Gender
         * @description The gender of the object in the image.
         */
        gender?: string;
        /**
         * Relative Size
         * @description The relative size of the object in the image.
         */
        relative_size?: string;
        /**
         * Location
         * @description The location of the object in the image.
         */
        location?: string;
        /**
         * Orientation
         * @description The orientation of the object in the image.
         */
        orientation?: string;
        /**
         * Action
         * @description The action of the object in the image.
         */
        action?: string;
    }[];
    /** @description The aesthetics of the image to be generated. */
    aesthetics?: {
        /**
         * Composition
         * @description The composition of the image to be generated.
         */
        composition?: string;
        /**
         * Mood Atmosphere
         * @description The mood and atmosphere of the image to be generated.
         */
        mood_atmosphere?: string;
        /**
         * Color Scheme
         * @description The color scheme of the image to be generated.
         */
        color_scheme?: string;
    };
    /** @description The photographic characteristics of the image to be generated. */
    photographic_characteristics?: {
        /**
         * Focus
         * @description The focus in the image to be generated.
         */
        focus?: string;
        /**
         * Lens Focal Length
         * @description The focal length of the lens in the image to be generated.
         */
        lens_focal_length?: string;
        /**
         * Camera Angle
         * @description The angle of the camera in the image to be generated.
         */
        camera_angle?: string;
        /**
         * Depth Of Field
         * @description The depth of field in the image to be generated.
         */
        depth_of_field?: string;
    };
    /**
     * Style Medium
     * @description The style medium of the image to be generated.
     */
    style_medium?: string;
    /** @description The lighting of the image to be generated. */
    lighting?: {
        /**
         * Shadows
         * @description The shadows in the image to be generated.
         */
        shadows?: string;
        /**
         * Conditions
         * @description The conditions of the lighting in the image to be generated.
         */
        conditions?: string;
        /**
         * Direction
         * @description The direction of the lighting in the image to be generated.
         */
        direction?: string;
    };
    /**
     * Short Description
     * @description A short description of the image to be generated.
     */
    short_description?: string;
}

export interface PromptObject_7hb {
    /**
     * Clothing
     * @description The clothing of the object in the image.
     */
    clothing?: string;
    /**
     * Description
     * @description A description of the object to be generated.
     */
    description?: string;
    /**
     * Skin Tone And Texture
     * @description The skin tone and texture of the object in the image.
     */
    skin_tone_and_texture?: string;
    /**
     * Appearance Details
     * @description The appearance details of the object.
     */
    appearance_details?: string;
    /**
     * Number Of Objects
     * @description The number of objects in the image.
     */
    number_of_objects?: number;
    /**
     * Expression
     * @description The expression of the object in the image.
     */
    expression?: string;
    /**
     * Pose
     * @description The pose of the object in the image.
     */
    pose?: string;
    /**
     * Shape And Color
     * @description The shape and color of the object.
     */
    shape_and_color?: string;
    /**
     * Relationship
     * @description The relationship of the object to other objects in the image.
     */
    relationship: string;
    /**
     * Texture
     * @description The texture of the object.
     */
    texture?: string;
    /**
     * Gender
     * @description The gender of the object in the image.
     */
    gender?: string;
    /**
     * Relative Size
     * @description The relative size of the object in the image.
     */
    relative_size?: string;
    /**
     * Location
     * @description The location of the object in the image.
     */
    location?: string;
    /**
     * Orientation
     * @description The orientation of the object in the image.
     */
    orientation?: string;
    /**
     * Action
     * @description The action of the object in the image.
     */
    action?: string;
}

export interface PronunciationDict {
    /**
     * Tone List
     * @description List of pronunciation replacements in format ['text/(pronunciation)', ...]. For Chinese, tones are 1-5. Example: ['燕少飞/(yan4)(shao3)(fei1)']
     */
    tone_list?: string[];
}

export interface VoiceSetting {
    /**
     * Speed
     * @description Speech speed (0.5-2.0)
     * @default 1
     */
    speed: number;
    /**
     * Vol
     * @description Volume (0-10)
     * @default 1
     */
    vol: number;
    /**
     * Voice Id
     * @description Predefined voice ID to use for synthesis
     * @default Wise_Woman
     * @example Wise_Woman
     * @example Friendly_Person
     * @example Inspirational_girl
     * @example Deep_Voice_Man
     * @example Calm_Woman
     * @example Casual_Guy
     * @example Lively_Girl
     * @example Patient_Man
     * @example Young_Knight
     * @example Determined_Man
     * @example Lovely_Girl
     * @example Decent_Boy
     * @example Imposing_Manner
     * @example Elegant_Man
     * @example Abbess
     * @example Sweet_Girl_2
     * @example Exuberant_Girl
     */
    voice_id: string;
    /**
     * Pitch
     * @description Voice pitch (-12 to 12)
     * @default 0
     */
    pitch: number;
    /**
     * English Normalization
     * @description Enables English text normalization to improve number reading performance, with a slight increase in latency
     * @default false
     */
    english_normalization: boolean;
    /**
     * Emotion
     * @description Emotion of the generated speech
     * @enum {string}
     */
    emotion?: 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised' | 'neutral';
}

export interface LoudnessNormalizationSetting {
    /**
     * Enabled
     * @description Enable loudness normalization for the audio
     * @default true
     */
    enabled: boolean;
    /**
     * Target Loudness
     * @description Target loudness in LUFS (default -18.0)
     * @default -18
     */
    target_loudness: number;
    /**
     * Target Range
     * @description Target loudness range in LU (default 8.0)
     * @default 8
     */
    target_range: number;
    /**
     * Target Peak
     * @description Target peak level in dBTP (default -0.5).
     * @default -0.5
     */
    target_peak: number;
}

export interface AudioSetting_f7u {
    /**
     * Format
     * @description Audio format
     * @default mp3
     * @enum {string}
     */
    format: 'mp3' | 'pcm' | 'flac';
    /**
     * Sample Rate
     * @description Sample rate of generated audio
     * @default 32000
     * @enum {integer}
     */
    sample_rate: 8000 | 16000 | 22050 | 24000 | 32000 | 44100;
    /**
     * Channel
     * @description Number of audio channels (1=mono, 2=stereo)
     * @default 1
     * @enum {integer}
     */
    channel: 1 | 2;
    /**
     * Bitrate
     * @description Bitrate of generated audio
     * @default 128000
     * @enum {integer}
     */
    bitrate: 32000 | 64000 | 128000 | 256000;
}

export interface ModelUrls_y8e {
    /**
     * Usdz
     * @description USDZ format 3D model
     */
    usdz?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Fbx
     * @description FBX format 3D model
     */
    fbx?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Blend
     * @description Blender format 3D model
     */
    blend?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Stl
     * @description STL format 3D model
     */
    stl?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Glb
     * @description GLB format 3D model
     */
    glb?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Obj
     * @description OBJ format 3D model
     */
    obj?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
}

export interface TextureFiles {
    /**
     * Base Color
     * @description Base color texture
     */
    base_color: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Normal
     * @description Normal texture (PBR)
     */
    normal?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Roughness
     * @description Roughness texture (PBR)
     */
    roughness?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
    /**
     * Metallic
     * @description Metallic texture (PBR)
     */
    metallic?: {
        /**
         * File Size
         * @description The size of the file in bytes.
         * @example 4404019
         */
        file_size?: number;
        /**
         * File Name
         * @description The name of the file. It will be auto-generated if not provided.
         * @example z9RV14K95DvU.png
         */
        file_name?: string;
        /**
         * Content Type
         * @description The mime type of the file.
         * @example image/png
         */
        content_type?: string;
        /**
         * Url
         * @description The URL where the file can be downloaded from.
         */
        url: string;
        /**
         * File Data
         * Format: binary
         * @description File data
         */
        file_data?: string;
    };
}

export interface VideoOutput {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface AudioOutput {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface UsageInfo_n8p {
    /**
     * Output Tokens
     * @description Number of output tokens generated
     */
    output_tokens: number;
    /**
     * Decode Time Ms
     * @description Time taken for decoding in milliseconds
     */
    decode_time_ms: number;
    /**
     * Input Tokens
     * @description Number of input tokens processed
     */
    input_tokens: number;
    /**
     * Ttft Ms
     * @description Time to first token in milliseconds
     */
    ttft_ms: number;
    /**
     * Prefill Time Ms
     * @description Time taken for prefill in milliseconds
     */
    prefill_time_ms: number;
}

export interface Point {
    /**
     * Y
     * @description Y coordinate of the point in normalized format (0 to 1)
     */
    y: number;
    /**
     * X
     * @description X coordinate of the point in normalized format (0 to 1)
     */
    x: number;
}

export interface Object {
    /**
     * Y Min
     * @description Top boundary of detection box in normalized format (0 to 1)
     */
    y_min: number;
    /**
     * X Max
     * @description Right boundary of detection box in normalized format (0 to 1)
     */
    x_max: number;
    /**
     * X Min
     * @description Left boundary of detection box in normalized format (0 to 1)
     */
    x_min: number;
    /**
     * Y Max
     * @description Bottom boundary of detection box in normalized format (0 to 1)
     */
    y_max: number;
}

export interface EmotionalStrengths {
    /**
     * Afraid
     * @description Strength of fear emotion
     * @default 0
     */
    afraid: number;
    /**
     * Calm
     * @description Strength of calm emotion
     * @default 0
     */
    calm: number;
    /**
     * Disgusted
     * @description Strength of disgust emotion
     * @default 0
     */
    disgusted: number;
    /**
     * Angry
     * @description Strength of anger emotion
     * @default 0
     */
    angry: number;
    /**
     * Sad
     * @description Strength of sadness emotion
     * @default 0
     */
    sad: number;
    /**
     * Melancholic
     * @description Strength of melancholic emotion
     * @default 0
     */
    melancholic: number;
    /**
     * Surprised
     * @description Strength of surprise emotion
     * @default 0
     */
    surprised: number;
    /**
     * Happy
     * @description Strength of happiness emotion
     * @default 0
     */
    happy: number;
}

export interface AspectRatio {
    /**
     * Ratio
     * @description Aspect ratio for 4K resolution output
     * @default 1:1
     * @enum {string}
     */
    ratio: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
}

export interface VideoFile_hf6 {
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
}

export interface CompletionUsage {
    /**
     * Completion Tokens
     * @description Number of tokens in the completion
     */
    completion_tokens: number;
    /**
     * Total Tokens
     * @description Total tokens used
     */
    total_tokens: number;
    /**
     * Prompt Tokens
     * @description Number of tokens in the prompt
     */
    prompt_tokens: number;
}

export interface DialogueBlock {
    /**
     * Text
     * @description The dialogue text
     */
    text: string;
    /**
     * Voice
     * @description The name or the ID of the voice to be used for the generation.
     * @example Aria
     * @example Roger
     * @example Sarah
     * @example Laura
     * @example Charlie
     * @example George
     * @example Callum
     * @example River
     * @example Liam
     * @example Charlotte
     * @example Alice
     * @example Matilda
     * @example Will
     * @example Jessica
     * @example Eric
     * @example Chris
     * @example Brian
     * @example Daniel
     * @example Lily
     * @example Bill
     */
    voice: string;
}

export interface PronunciationDictionaryLocator {
    /**
     * Version Id
     * @description The ID of the version of the pronunciation dictionary. If not provided, the latest version will be used.
     */
    version_id?: string;
    /**
     * Pronunciation Dictionary Id
     * @description The ID of the pronunciation dictionary.
     */
    pronunciation_dictionary_id: string;
}

export interface VibeVoiceSpeaker {
    /**
     * Preset
     * @description Default voice preset to use for the speaker. Not used if `audio_url` is provided.
     * @default Alice [EN]
     * @example Alice [EN]
     * @enum {string}
     */
    preset:
        | 'Alice [EN]'
        | 'Carter [EN]'
        | 'Frank [EN]'
        | 'Mary [EN] (Background Music)'
        | 'Maya [EN]'
        | 'Anchen [ZH] (Background Music)'
        | 'Bowen [ZH]'
        | 'Xinran [ZH]';
    /**
     * Audio URL
     * @description URL to a voice sample audio file. If provided, `preset` will be ignored.
     */
    audio_url?: string;
}

export interface InpaintSection {
    /**
     * End
     * @description End time in seconds of the section to inpaint.
     * @example 9.45
     */
    end: number;
    /**
     * Start
     * @description Start time in seconds of the section to inpaint.
     * @example 0
     */
    start: number;
}

export interface Audio {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface ColorPalette {
    /**
     * Members
     * @description A list of color palette members that define the color palette
     */
    members?: {
        /**
         * Color Weight
         * @description The weight of the color in the color palette
         * @default 0.5
         */
        color_weight: number;
        /** @description RGB color value for the palette member */
        rgb: {
            /**
             * R
             * @description Red color value
             * @default 0
             */
            r: number;
            /**
             * B
             * @description Blue color value
             * @default 0
             */
            b: number;
            /**
             * G
             * @description Green color value
             * @default 0
             */
            g: number;
        };
    }[];
    /**
     * Name
     * @description A color palette preset value
     */
    name?: 'EMBER' | 'FRESH' | 'JUNGLE' | 'MAGIC' | 'MELON' | 'MOSAIC' | 'PASTEL' | 'ULTRAMARINE';
}

export interface ColorPaletteMember {
    /**
     * Color Weight
     * @description The weight of the color in the color palette
     * @default 0.5
     */
    color_weight: number;
    /** @description RGB color value for the palette member */
    rgb: {
        /**
         * R
         * @description Red color value
         * @default 0
         */
        r: number;
        /**
         * B
         * @description Blue color value
         * @default 0
         */
        b: number;
        /**
         * G
         * @description Green color value
         * @default 0
         */
        g: number;
    };
}

export interface LoRAWeight {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
    /**
     * Transformer
     * @description Specifies the transformer to load the lora weight into. 'high' loads into the high-noise transformer, 'low' loads it into the low-noise transformer, while 'both' loads the LoRA into both transformers.
     * @default high
     * @enum {string}
     */
    transformer: 'high' | 'low' | 'both';
    /**
     * Weight Name
     * @description Name of the LoRA weight. Used only if `path` is a Hugging Face repository, and required only if you have more than 1 safetensors file in the repo.
     */
    weight_name?: string;
}

export interface LoRAWeight_lpz {
    /**
     * Path
     * @description URL or path to the LoRA weights.
     */
    path: string;
    /**
     * Scale
     * @description Scale of the LoRA weight. This is a multiplier applied to the LoRA weight when loading it.
     * @default 1
     */
    scale: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Only used if `path` is a HuggingFace repository, and is only required when the repository contains multiple LoRA weights.
     */
    weight_name?: string;
}

export interface ExtendVideoConditioningInput {
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num: number;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video: boolean;
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps: boolean;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 24
     * @example 24
     */
    target_fps: number;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 1441
     * @example 1441
     */
    max_num_frames: number;
}

export interface ImageConditioningInput {
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength: number;
    /**
     * Start Frame Number
     * @description Frame number of the image from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num: number;
    /**
     * Image URL
     * @description URL of image to use as conditioning
     */
    image_url: string;
}

export interface VideoConditioningInput {
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num: number;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video: boolean;
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps: boolean;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 24
     * @example 24
     */
    target_fps: number;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 1441
     * @example 1441
     */
    max_num_frames: number;
    /**
     * Conditioning Type
     * @description Type of conditioning this video provides. This is relevant to ensure in-context LoRA weights are applied correctly, as well as selecting the correct preprocessing pipeline, when enabled.
     * @default rgb
     * @example rgb
     * @enum {string}
     */
    conditioning_type: 'rgb' | 'depth' | 'pose' | 'canny';
    /**
     * Preprocess
     * @description Whether to preprocess the video. If True, the video will be preprocessed to match the conditioning type. This is a no-op for RGB conditioning.
     * @default false
     */
    preprocess: boolean;
}

export interface LoudnormSummary {
    /**
     * Output Integrated
     * @description Output integrated loudness in LUFS
     */
    output_integrated?: number;
    /**
     * Output True Peak
     * @description Output true peak in dBTP
     */
    output_true_peak?: number;
    /**
     * Input Lra
     * @description Input loudness range in LU
     */
    input_lra?: number;
    /**
     * Normalization Type
     * @description Type of normalization applied (Dynamic/Linear)
     */
    normalization_type?: string;
    /**
     * Output Lra
     * @description Output loudness range in LU
     */
    output_lra?: number;
    /**
     * Output Threshold
     * @description Output threshold in LUFS
     */
    output_threshold?: number;
    /**
     * Input Integrated
     * @description Input integrated loudness in LUFS
     */
    input_integrated?: number;
    /**
     * Input True Peak
     * @description Input true peak in dBTP
     */
    input_true_peak?: number;
    /**
     * Target Offset
     * @description Target offset in LU
     */
    target_offset?: number;
    /**
     * Input Threshold
     * @description Input threshold in LUFS
     */
    input_threshold?: number;
}

export interface VideoFile_5tp {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the video
     */
    width?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
}

export interface BBoxPromptBase {
    /**
     * Y Min
     * @description Y Min Coordinate of the box (0-1)
     * @default 0
     */
    y_min: number;
    /**
     * X Max
     * @description X Max Coordinate of the prompt (0-1)
     * @default 0
     */
    x_max: number;
    /**
     * X Min
     * @description X Min Coordinate of the box (0-1)
     * @default 0
     */
    x_min: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt (0-1)
     * @default 0
     */
    y_max: number;
}

export interface Audio_041 {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface fal__toolkit__image__image__Image {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
}

export interface VideoConditioningInput_io0 {
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video: boolean;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num: number;
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps: boolean;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 30
     * @example 30
     */
    target_fps: number;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 121
     * @example 121
     */
    max_num_frames: number;
    /**
     * Conditioning Type
     * @description Type of conditioning this video provides. This is relevant to ensure in-context LoRA weights are applied correctly, as well as selecting the correct preprocessing pipeline, when enabled.
     * @default rgb
     * @example rgb
     * @enum {string}
     */
    conditioning_type: 'rgb' | 'depth' | 'pose' | 'canny';
    /**
     * Preprocess
     * @description Whether to preprocess the video. If True, the video will be preprocessed to match the conditioning type. This is a no-op for RGB conditioning.
     * @default false
     */
    preprocess: boolean;
}

export interface VideoConditioningInput_vem {
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num: number;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video: boolean;
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps: boolean;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 30
     * @example 30
     */
    target_fps: number;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 121
     * @example 121
     */
    max_num_frames: number;
    /**
     * Conditioning Type
     * @description Type of conditioning this video provides. This is relevant to ensure in-context LoRA weights are applied correctly, as well as selecting the correct preprocessing pipeline, when enabled.
     * @default rgb
     * @example rgb
     * @enum {string}
     */
    conditioning_type: 'rgb' | 'depth' | 'pose' | 'canny';
    /**
     * Preprocess
     * @description Whether to preprocess the video. If True, the video will be preprocessed to match the conditioning type. This is a no-op for RGB conditioning.
     * @default false
     */
    preprocess: boolean;
}

export interface ImageCondition {
    /**
     * Strength
     * @description The strength of the condition.
     * @default 1
     */
    strength: number;
    /**
     * Start Frame Number
     * @description The frame number to start the condition on.
     * @default 0
     */
    start_frame_number: number;
    /**
     * Image Url
     * @description The URL of the image to use as input.
     */
    image_url: string;
}

export interface VideoCondition {
    /**
     * Strength
     * @description The strength of the condition.
     * @default 1
     */
    strength: number;
    /**
     * Start Frame Number
     * @description The frame number to start the condition on.
     * @default 0
     */
    start_frame_number: number;
    /**
     * Video Url
     * @description The URL of the video to use as input.
     */
    video_url: string;
}

export interface BoxPromptBase_6l1 {
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     * @default 0
     */
    y_min: number;
    /**
     * X Max
     * @description X Max Coordinate of the prompt
     * @default 0
     */
    x_max: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     * @default 0
     */
    x_min: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt
     * @default 0
     */
    y_max: number;
}

export interface Video_uh7 {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
    /**
     * File Data
     * @description File data
     */
    file_data?: string;
}

export interface Turn {
    /** Text */
    text: string;
    /** Speaker Id */
    speaker_id: number;
}

export interface Speaker {
    /** Prompt */
    prompt: string;
    /** Audio Url */
    audio_url: string;
    /** Speaker Id */
    speaker_id: number;
}

export interface ImageConditioningInput_dyi {
    /**
     * Start Frame Num
     * @description Frame number of the image from which the conditioning starts. Must be a multiple of 8.
     */
    start_frame_num: number;
    /**
     * Image Url
     * @description URL of image to use as conditioning
     */
    image_url: string;
}

export interface VideoConditioningInput_0dy {
    /**
     * Video Url
     * @description URL of video to be extended
     */
    video_url: string;
    /**
     * Start Frame Num
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     */
    start_frame_num: number;
}

export interface Track {
    /**
     * Type
     * @description Type of track ('video' or 'audio')
     */
    type: string;
    /**
     * Id
     * @description Unique identifier for the track
     */
    id: string;
    /**
     * Keyframes
     * @description List of keyframes that make up this track
     */
    keyframes: {
        /**
         * Duration
         * @description The duration in milliseconds of this keyframe
         */
        duration: number;
        /**
         * Timestamp
         * @description The timestamp in milliseconds where this keyframe starts
         */
        timestamp: number;
        /**
         * Url
         * @description The URL where this keyframe's media file can be accessed
         */
        url: string;
    }[];
}

export interface Keyframe {
    /**
     * Duration
     * @description The duration in milliseconds of this keyframe
     */
    duration: number;
    /**
     * Timestamp
     * @description The timestamp in milliseconds where this keyframe starts
     */
    timestamp: number;
    /**
     * Url
     * @description The URL where this keyframe's media file can be accessed
     */
    url: string;
}

export interface Video_um5 {
    /**
     * File Size
     * @description Size of the file in bytes
     */
    file_size: number;
    /**
     * Timebase
     * @description Time base used for frame timestamps
     */
    timebase: string;
    /**
     * Start Frame Url
     * @description URL of the extracted first frame
     */
    start_frame_url?: string;
    /**
     * Duration
     * @description Duration of the media in seconds
     */
    duration: number;
    /**
     * Url
     * @description URL where the media file can be accessed
     */
    url: string;
    /**
     * Media Type
     * @description Type of media (always 'video')
     * @default video
     * @constant
     */
    media_type: 'video';
    /**
     * Codec
     * @description Codec used to encode the media
     */
    codec: string;
    /**
     * Fps
     * @description Frames per second
     */
    fps: number;
    /**
     * End Frame Url
     * @description URL of the extracted last frame
     */
    end_frame_url?: string;
    /**
     * Content Type
     * @description MIME type of the media file
     */
    content_type: string;
    /**
     * Container
     * @description Container format of the media file (e.g., 'mp4', 'mov')
     */
    container: string;
    /**
     * Bitrate
     * @description Overall bitrate of the media in bits per second
     */
    bitrate: number;
    /** @description Detailed video format information */
    format: {
        /**
         * Profile
         * @description Codec profile (e.g., 'main', 'high')
         */
        profile: string;
        /**
         * Level
         * @description Codec level (e.g., 4.1)
         */
        level: number;
        /**
         * Pixel Format
         * @description Pixel format used (e.g., 'yuv420p')
         */
        pixel_format: string;
        /**
         * Video Codec
         * @description Video codec used (e.g., 'h264')
         */
        video_codec: string;
        /**
         * Container
         * @description Container format of the video
         */
        container: string;
        /**
         * Bitrate
         * @description Video bitrate in bits per second
         */
        bitrate: number;
    };
    /** @description Video resolution information */
    resolution: {
        /**
         * Height
         * @description Height of the video in pixels
         */
        height: number;
        /**
         * Aspect Ratio
         * @description Display aspect ratio (e.g., '16:9')
         */
        aspect_ratio: string;
        /**
         * Width
         * @description Width of the video in pixels
         */
        width: number;
    };
    /**
     * Frame Count
     * @description Total number of frames in the video
     */
    frame_count: number;
    /**
     * File Name
     * @description Original filename of the media
     */
    file_name: string;
    /** @description Audio track information if video has audio */
    audio?: {
        /**
         * Codec
         * @description Audio codec used (e.g., 'aac', 'mp3')
         */
        codec: string;
        /**
         * Channels
         * @description Number of audio channels
         */
        channels: number;
        /**
         * Sample Rate
         * @description Audio sample rate in Hz
         */
        sample_rate: number;
        /**
         * Bitrate
         * @description Audio bitrate in bits per second
         */
        bitrate: number;
    };
}

export interface Audio_00r {
    /**
     * File Size
     * @description Size of the file in bytes
     */
    file_size: number;
    /**
     * Duration
     * @description Duration of the media in seconds
     */
    duration: number;
    /**
     * Channels
     * @description Number of audio channels
     */
    channels: number;
    /**
     * Url
     * @description URL where the media file can be accessed
     */
    url: string;
    /**
     * Media Type
     * @description Type of media (always 'audio')
     * @default audio
     * @constant
     */
    media_type: 'audio';
    /**
     * Codec
     * @description Codec used to encode the media
     */
    codec: string;
    /**
     * File Name
     * @description Original filename of the media
     */
    file_name: string;
    /**
     * Sample Rate
     * @description Audio sample rate in Hz
     */
    sample_rate: number;
    /**
     * Content Type
     * @description MIME type of the media file
     */
    content_type: string;
    /**
     * Container
     * @description Container format of the media file (e.g., 'mp4', 'mov')
     */
    container: string;
    /**
     * Bitrate
     * @description Overall bitrate of the media in bits per second
     */
    bitrate: number;
}

export interface VideoFormat {
    /**
     * Profile
     * @description Codec profile (e.g., 'main', 'high')
     */
    profile: string;
    /**
     * Level
     * @description Codec level (e.g., 4.1)
     */
    level: number;
    /**
     * Pixel Format
     * @description Pixel format used (e.g., 'yuv420p')
     */
    pixel_format: string;
    /**
     * Video Codec
     * @description Video codec used (e.g., 'h264')
     */
    video_codec: string;
    /**
     * Container
     * @description Container format of the video
     */
    container: string;
    /**
     * Bitrate
     * @description Video bitrate in bits per second
     */
    bitrate: number;
}

export interface Resolution {
    /**
     * Height
     * @description Height of the video in pixels
     */
    height: number;
    /**
     * Aspect Ratio
     * @description Display aspect ratio (e.g., '16:9')
     */
    aspect_ratio: string;
    /**
     * Width
     * @description Width of the video in pixels
     */
    width: number;
}

export interface AudioTrack {
    /**
     * Codec
     * @description Audio codec used (e.g., 'aac', 'mp3')
     */
    codec: string;
    /**
     * Channels
     * @description Number of audio channels
     */
    channels: number;
    /**
     * Sample Rate
     * @description Audio sample rate in Hz
     */
    sample_rate: number;
    /**
     * Bitrate
     * @description Audio bitrate in bits per second
     */
    bitrate: number;
}

export interface GuidanceInput {
    /**
     * Method
     * @description Which guidance type you would like to include in the generation. Up to 4 guidance methods can be combined during a single inference. This parameter is optional.
     * @enum {string}
     */
    method?:
        | 'controlnet_canny'
        | 'controlnet_depth'
        | 'controlnet_recoloring'
        | 'controlnet_color_grid';
    /**
     * Scale
     * @description Impact of the guidance.
     * @default 1
     */
    scale: number;
    /**
     * Image Url
     * @description The image that should be used as guidance, in base64 format, with the method defined in guidance_method_1. Accepted formats are jpeg, jpg, png, webp. Maximum file size 12MB. If more then one guidance method is used, all guidance images must be of the same aspect ratio, and this will be the aspect ratio of the generated results. If guidance_method_1 is selected, an image must be provided.
     */
    image_url: string;
}

export interface ImageFillInput_bul {
    /**
     * In Context Fill
     * @description Uses the provided fill image in context with the base image to fill in more faithfully. Will increase price.
     * @default false
     */
    in_context_fill: boolean;
    /**
     * Use Prompt
     * @description Whether to use the prompt as well in the generation, along with the redux image.
     * @default false
     */
    use_prompt: boolean;
    /**
     * Fill Image Url
     * @description URLs of images to be filled into the masked area.
     */
    fill_image_url?: string[] | string;
}

export interface CameraControl {
    /**
     * Movement Type
     * @description The type of camera movement
     * @example horizontal
     * @enum {string}
     */
    movement_type: 'horizontal' | 'vertical' | 'pan' | 'tilt' | 'roll' | 'zoom';
    /**
     * Movement Value
     * @description The value of the camera movement
     * @example 10
     */
    movement_value: number;
}

export interface AudioFile_xgw {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * File Name
     * @default 8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     * @example 8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     */
    file_name: string;
    /**
     * Content Type
     * @default audio/wav
     * @example audio/wav
     */
    content_type: string;
    /**
     * Url
     * @example https://v2.fal.media/files/8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     */
    url: string;
}

export interface DynamicMask {
    /**
     * Trajectories
     * @description List of trajectories
     * @example [
     *       {
     *         "y": 219,
     *         "x": 279
     *       },
     *       {
     *         "y": 65,
     *         "x": 417
     *       }
     *     ]
     */
    trajectories?: {
        /**
         * Y
         * @description Y coordinate of the motion trajectory
         * @example 219
         */
        y: number;
        /**
         * X
         * @description X coordinate of the motion trajectory
         * @example 279
         */
        x: number;
    }[];
    /**
     * Mask Url
     * @description URL of the image for Dynamic Brush Application Area (Mask image created by users using the motion brush)
     * @example https://storage.googleapis.com/falserverless/kling/new_dynamic_mask.png
     */
    mask_url: string;
}

export interface Trajectory {
    /**
     * Y
     * @description Y coordinate of the motion trajectory
     * @example 219
     */
    y: number;
    /**
     * X
     * @description X coordinate of the motion trajectory
     * @example 279
     */
    x: number;
}

export interface PointPrompt_a9y {
    /**
     * Y
     * @description Y Coordinate of the prompt
     * @default 350
     */
    y: number;
    /**
     * Label
     * @description Label of the prompt. 1 for foreground, 0 for background
     * @default 1
     * @enum {integer}
     */
    label: 0 | 1;
    /**
     * Frame Index
     * @description The frame index to interact with.
     * @default 0
     */
    frame_index: number;
    /**
     * X
     * @description X Coordinate of the prompt
     * @default 305
     */
    x: number;
}

export interface BoxPrompt_u79 {
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     * @default 0
     */
    y_min: number;
    /**
     * Frame Index
     * @description The frame index to interact with.
     * @default 0
     */
    frame_index: number;
    /**
     * X Max
     * @description X Max Coordinate of the prompt
     * @default 0
     */
    x_max: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     * @default 0
     */
    x_min: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt
     * @default 0
     */
    y_max: number;
}

export interface ImagePrompt {
    /**
     * Weight
     * @default 1
     */
    weight: number;
    /**
     * Stop At
     * @default 0.5
     */
    stop_at: number;
    /**
     * Type
     * @default ImagePrompt
     * @enum {string}
     */
    type: 'ImagePrompt' | 'PyraCanny' | 'CPDS' | 'FaceSwap';
    /** Image Url */
    image_url?: string;
}

export interface LoraWeight_0o8 {
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     * @example https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_offset_example-lora_1.0.safetensors
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 0.1
     */
    scale: number;
}

export interface Embedding {
    /**
     * Tokens
     * @description The list of tokens to use for the embedding.
     * @default [
     *       "<s0>",
     *       "<s1>"
     *     ]
     */
    tokens: string[];
    /**
     * Path
     * @description URL or the path to the embedding weights.
     * @example https://civitai.com/api/download/models/135931
     * @example https://filebin.net/3chfqasxpqu21y8n/my-custom-lora-v1.safetensors
     */
    path: string;
}

export interface LoraWeight_8fq {
    /**
     * Path
     * @description URL or the path to the LoRA weights. Or HF model name.
     * @example https://civitai.com/api/download/models/135931
     * @example https://filebin.net/3chfqasxpqu21y8n/my-custom-lora-v1.safetensors
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
    /**
     * Force
     * @description If set to true, the embedding will be forced to be used.
     * @default false
     */
    force: boolean;
}

export interface Frame {
    /**
     * URL
     * @description URL of the frame
     */
    url: string;
}

export interface PolygonOutput {
    /**
     * Polygons
     * @description List of polygons
     */
    polygons: {
        /**
         * Points
         * @description List of points
         */
        points: {
            [key: string]: number;
        }[];
        /**
         * Label
         * @description Label of the polygon
         */
        label: string;
    }[];
}

export interface Polygon {
    /**
     * Points
     * @description List of points
     */
    points: {
        [key: string]: number;
    }[];
    /**
     * Label
     * @description Label of the polygon
     */
    label: string;
}

export interface BoundingBoxes {
    /**
     * Bboxes
     * @description List of bounding boxes
     */
    bboxes: {
        /**
         * Y
         * @description Y-coordinate of the top-left corner
         */
        y: number;
        /**
         * Label
         * @description Label of the bounding box
         */
        label: string;
        /**
         * H
         * @description Height of the bounding box
         */
        h: number;
        /**
         * W
         * @description Width of the bounding box
         */
        w: number;
        /**
         * X
         * @description X-coordinate of the top-left corner
         */
        x: number;
    }[];
}

export interface BoundingBox_ftn {
    /**
     * Y
     * @description Y-coordinate of the top-left corner
     */
    y: number;
    /**
     * Label
     * @description Label of the bounding box
     */
    label: string;
    /**
     * H
     * @description Height of the bounding box
     */
    h: number;
    /**
     * W
     * @description Width of the bounding box
     */
    w: number;
    /**
     * X
     * @description X-coordinate of the top-left corner
     */
    x: number;
}

export interface Region {
    /**
     * Y1
     * @description Y-coordinate of the top-left corner
     */
    y1: number;
    /**
     * X2
     * @description X-coordinate of the bottom-right corner
     */
    x2: number;
    /**
     * X1
     * @description X-coordinate of the top-left corner
     */
    x1: number;
    /**
     * Y2
     * @description Y-coordinate of the bottom-right corner
     */
    y2: number;
}

export interface OCRBoundingBox {
    /**
     * Quad Boxes
     * @description List of quadrilateral boxes
     */
    quad_boxes: {
        /**
         * Y
         * @description Y-coordinate of the top-left corner
         */
        y: number;
        /**
         * Label
         * @description Label of the bounding box
         */
        label: string;
        /**
         * H
         * @description Height of the bounding box
         */
        h: number;
        /**
         * W
         * @description Width of the bounding box
         */
        w: number;
        /**
         * X
         * @description X-coordinate of the top-left corner
         */
        x: number;
    }[];
}

export interface OCRBoundingBoxSingle {
    /**
     * Y
     * @description Y-coordinate of the top-left corner
     */
    y: number;
    /**
     * Label
     * @description Label of the bounding box
     */
    label: string;
    /**
     * H
     * @description Height of the bounding box
     */
    h: number;
    /**
     * W
     * @description Width of the bounding box
     */
    w: number;
    /**
     * X
     * @description X-coordinate of the top-left corner
     */
    x: number;
}

export interface LoraWeight_m8t {
    /**
     * Path
     * @description URL or the path to the LoRA weights. Or HF model name.
     * @example https://civitai.com/api/download/models/135931
     * @example https://filebin.net/3chfqasxpqu21y8n/my-custom-lora-v1.safetensors
     */
    path: string;
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
}

export interface Embedding_67o {
    /**
     * Tokens
     * @description The tokens to map the embedding weights to. Use these tokens in your prompts.
     * @default [
     *       "<s0>",
     *       "<s1>"
     *     ]
     */
    tokens: string[];
    /**
     * Path
     * @description URL or the path to the embedding weights.
     */
    path: string;
}

export interface IPAdapter_3p2 {
    /**
     * Unconditional Noising Factor
     * @description The factor to apply to the unconditional noising of the IP adapter.
     * @default 0
     */
    unconditional_noising_factor: number;
    /**
     * Ip Adapter Image Url
     * @description URL of the image to be used as the IP adapter.
     */
    ip_adapter_image_url: string | string[];
    /**
     * Path
     * @description URL or the path to the IP adapter weights.
     */
    path: string;
    /**
     * Image Projection Shortcut
     * @description The value to set the image projection shortcut to. For FaceID plus V1 models,
     *                 this should be set to False. For FaceID plus V2 models, this should be set to True.
     *                 Default is True.
     * @default true
     */
    image_projection_shortcut: boolean;
    /**
     * Scale Json
     * @description The scale of the IP adapter weight. This is used to scale the IP adapter weight
     *                 before merging it with the base model.
     */
    scale_json?: Record<string, never>;
    /**
     * Ip Adapter Mask Url
     * @description The mask to use for the IP adapter. When using a mask, the ip-adapter image size and the mask size must be the same
     */
    ip_adapter_mask_url?: string;
    /**
     * Model Subfolder
     * @description Subfolder in the model directory where the IP adapter weights are stored.
     */
    model_subfolder?: string;
    /**
     * Scale
     * @description The scale of the IP adapter weight. This is used to scale the IP adapter weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale: number;
    /**
     * Insight Face Model Path
     * @description URL or the path to the InsightFace model weights.
     */
    insight_face_model_path?: string;
    /**
     * Weight Name
     * @description Name of the weight file.
     */
    weight_name?: string;
}

export interface SigmasInput {
    /**
     * Method
     * @description The method to use for the sigmas. If set to 'custom', the sigmas will be set based
     *                 on the provided sigmas schedule in the `array` field.
     *                 Defaults to 'default' which means the scheduler will use the sigmas of the scheduler.
     * @default default
     * @enum {string}
     */
    method: 'default' | 'array';
    /**
     * Array
     * @description Sigmas schedule to be used if 'custom' method is selected.
     * @default []
     */
    array: number[];
}

export interface TimestepsInput {
    /**
     * Method
     * @description The method to use for the timesteps. If set to 'array', the timesteps will be set based
     *                 on the provided timesteps schedule in the `array` field.
     *                 Defaults to 'default' which means the scheduler will use the `num_inference_steps` parameter.
     * @default default
     * @enum {string}
     */
    method: 'default' | 'array';
    /**
     * Array
     * @description Timesteps schedule to be used if 'custom' method is selected.
     * @default []
     */
    array: number[];
}

export interface ControlNet_q67 {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale: number;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Ip Adapter Index
     * @description The index of the IP adapter to be applied to the controlnet. This is only needed for InstantID ControlNets.
     */
    ip_adapter_index?: number;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage: number;
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
    /**
     * Image Url
     * @description URL of the image to be used as the control net.
     */
    image_url: string;
    /**
     * Variant
     * @description The optional variant if a Hugging Face repo key is used.
     */
    variant?: string;
    /**
     * Mask Url
     * @description The mask to use for the controlnet. When using a mask, the control image size and the mask size must be the same and divisible by 32.
     */
    mask_url?: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage: number;
}

export interface WhisperChunk {
    /**
     * Text
     * @description Transcription of the chunk
     */
    text: string;
    /**
     * Timestamp
     * @description Start and end timestamp of the chunk
     */
    timestamp: [number, number];
}

export interface MoondreamInputParam {
    /**
     * Prompt
     * @description Prompt to be used for the image
     * @default Describe this image.
     * @example Do you know who drew this painting?
     */
    prompt: string;
    /**
     * Image URL
     * @description URL of the image to be processed
     * @example https://llava-vl.github.io/static/images/monalisa.jpg
     */
    image_url: string;
}

export interface WhisperChunk_m2b {
    /**
     * Text
     * @description Transcription of the chunk
     */
    text: string;
    /**
     * Timestamp
     * @description Start and end timestamp of the chunk
     */
    timestamp: unknown[];
    /**
     * Speaker
     * @description Speaker ID of the chunk. Only present if diarization is enabled.
     */
    speaker?: string;
}

export interface DiarizationSegment {
    /**
     * Timestamp
     * @description Start and end timestamp of the segment
     */
    timestamp: unknown[];
    /**
     * Speaker
     * @description Speaker ID of the segment
     */
    speaker: string;
}

export interface Image_wip {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @example 1024
     */
    height?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     * @example https://url.to/generated/file/z9RV14K95DvU.png
     */
    url: string;
    /**
     * Width
     * @description The width of the image in pixels.
     * @example 1024
     */
    width?: number;
}

export interface ReferenceFace {
    /**
     * Image Url
     * @description URL of the reference face image
     */
    image_url: string;
}

export interface File_cwl {
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name: string;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type: string;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     * @example https://url.to/generated/file/z9RV14K95DvU.png
     */
    url: string;
}

export {};
