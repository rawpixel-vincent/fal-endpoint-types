export interface WhisperChunk_1 {
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

export interface WhisperChunk {
    /**
     * Speaker
     * @description Speaker ID of the chunk. Only present if diarization is enabled.
     */
    speaker?: string;
    /**
     * Text
     * @description Transcription of the chunk
     */
    text: string;
    /**
     * Timestamp
     * @description Start and end timestamp of the chunk
     */
    timestamp: { [x: string]: any }[];
}

export interface VoiceSetting {
    /**
     * Emotion
     * @description Emotion of the generated speech
     * @enum {string}
     */
    emotion?: 'happy' | 'sad' | 'angry' | 'fearful' | 'disgusted' | 'surprised' | 'neutral';
    /**
     * English Normalization
     * @description Enables English text normalization to improve number reading performance, with a slight increase in latency
     * @default false
     */
    english_normalization?: boolean;
    /**
     * Pitch
     * @description Voice pitch (-12 to 12)
     * @default 0
     */
    pitch?: number;
    /**
     * Speed
     * @description Speech speed (0.5-2.0)
     * @default 1
     */
    speed?: number;
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
    voice_id?: string;
    /**
     * Vol
     * @description Volume (0-10)
     * @default 1
     */
    vol?: number;
}

export interface VoiceModify {
    /**
     * Intensity
     * @description Intensity/energy of the voice. Range: -100 to 100. Higher values create more energetic speech.
     * @default 0
     */
    intensity?: number;
    /**
     * Pitch
     * @description Pitch adjustment in semitones. Range: -100 to 100. Positive values raise pitch, negative values lower it.
     * @default 0
     */
    pitch?: number;
    /**
     * Timbre
     * @description Timbre adjustment. Range: -100 to 100. Affects the tonal quality of the voice.
     * @default 0
     */
    timbre?: number;
}

export interface VideoFormat {
    /**
     * Bitrate
     * @description Video bitrate in bits per second
     */
    bitrate: number;
    /**
     * Container
     * @description Container format of the video
     */
    container: string;
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
     * Profile
     * @description Codec profile (e.g., 'main', 'high')
     */
    profile: string;
    /**
     * Video Codec
     * @description Video codec used (e.g., 'h264')
     */
    video_codec: string;
}

export interface VideoFile_1 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * File Data
     * Format: binary
     * @description File data
     */
    file_data?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
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
}

export interface VideoFile {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * Duration
     * @description The duration of the video
     */
    duration?: number;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Fps
     * @description The FPS of the video
     */
    fps?: number;
    /**
     * Height
     * @description The height of the video
     */
    height?: number;
    /**
     * Num Frames
     * @description The number of frames in the video
     */
    num_frames?: number;
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
}

export interface VideoConditioningInput_2 {
    /**
     * Conditioning Type
     * @description Type of conditioning this video provides. This is relevant to ensure in-context LoRA weights are applied correctly, as well as selecting the correct preprocessing pipeline, when enabled.
     * @default rgb
     * @example rgb
     * @enum {string}
     */
    conditioning_type?: 'rgb' | 'depth' | 'pose' | 'canny';
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames?: boolean;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 1441
     * @example 1441
     */
    max_num_frames?: number;
    /**
     * Preprocess
     * @description Whether to preprocess the video. If True, the video will be preprocessed to match the conditioning type. This is a no-op for RGB conditioning.
     * @default false
     */
    preprocess?: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps?: boolean;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video?: boolean;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num?: number;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength?: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 24
     * @example 24
     */
    target_fps?: number;
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
}

export interface VideoConditioningInput_1 {
    /**
     * Start Frame Num
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     */
    start_frame_num: number;
    /**
     * Video Url
     * @description URL of video to be extended
     */
    video_url: string;
}

export interface VideoConditioningInput {
    /**
     * Conditioning Type
     * @description Type of conditioning this video provides. This is relevant to ensure in-context LoRA weights are applied correctly, as well as selecting the correct preprocessing pipeline, when enabled.
     * @default rgb
     * @example rgb
     * @enum {string}
     */
    conditioning_type?: 'rgb' | 'depth' | 'pose' | 'canny';
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames?: boolean;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 121
     * @example 121
     */
    max_num_frames?: number;
    /**
     * Preprocess
     * @description Whether to preprocess the video. If True, the video will be preprocessed to match the conditioning type. This is a no-op for RGB conditioning.
     * @default false
     */
    preprocess?: boolean;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps?: boolean;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video?: boolean;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num?: number;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength?: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 30
     * @example 30
     */
    target_fps?: number;
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
}

export interface VideoCondition {
    /**
     * Start Frame Number
     * @description The frame number to start the condition on.
     * @default 0
     */
    start_frame_number?: number;
    /**
     * Strength
     * @description The strength of the condition.
     * @default 1
     */
    strength?: number;
    /**
     * Video Url
     * @description The URL of the video to use as input.
     */
    video_url: string;
}

export interface Video_1 {
    /** @description Audio track information if video has audio */
    audio?: AudioTrack;
    /**
     * Bitrate
     * @description Overall bitrate of the media in bits per second
     */
    bitrate: number;
    /**
     * Codec
     * @description Codec used to encode the media
     */
    codec: string;
    /**
     * Container
     * @description Container format of the media file (e.g., 'mp4', 'mov')
     */
    container: string;
    /**
     * Content Type
     * @description MIME type of the media file
     */
    content_type: string;
    /**
     * Duration
     * @description Duration of the media in seconds
     */
    duration: number;
    /**
     * End Frame Url
     * @description URL of the extracted last frame
     */
    end_frame_url?: string;
    /**
     * File Name
     * @description Original filename of the media
     */
    file_name: string;
    /**
     * File Size
     * @description Size of the file in bytes
     */
    file_size: number;
    /** @description Detailed video format information */
    format: VideoFormat;
    /**
     * Fps
     * @description Frames per second
     */
    fps: number;
    /**
     * Frame Count
     * @description Total number of frames in the video
     */
    frame_count: number;
    /**
     * Media Type
     * @description Type of media (always 'video')
     * @default video
     * @constant
     */
    media_type?: 'video';
    /** @description Video resolution information */
    resolution: Resolution;
    /**
     * Start Frame Url
     * @description URL of the extracted first frame
     */
    start_frame_url?: string;
    /**
     * Timebase
     * @description Time base used for frame timestamps
     */
    timebase: string;
    /**
     * Url
     * @description URL where the media file can be accessed
     */
    url: string;
}

export interface Video {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * @description File data
     */
    file_data?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface VibeVoiceSpeaker {
    /**
     * Audio URL
     * @description URL to a voice sample audio file. If provided, `preset` will be ignored.
     */
    audio_url?: string;
    /**
     * Preset
     * @description Default voice preset to use for the speaker. Not used if `audio_url` is provided.
     * @default Alice [EN]
     * @example Alice [EN]
     * @enum {string}
     */
    preset?:
        | 'Alice [EN]'
        | 'Carter [EN]'
        | 'Frank [EN]'
        | 'Mary [EN] (Background Music)'
        | 'Maya [EN]'
        | 'Anchen [ZH] (Background Music)'
        | 'Bowen [ZH]'
        | 'Xinran [ZH]';
}

export interface Validation {
    /**
     * Image Url
     * @description An image to use for image-to-video validation. If provided for one validation, _all_ validation inputs must have an image.
     */
    image_url?: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
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

export interface UsageInfo_1 {
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
     * Output Tokens
     * @description Number of output tokens generated
     */
    output_tokens: number;
    /**
     * Prefill Time Ms
     * @description Time taken for prefill in milliseconds
     */
    prefill_time_ms: number;
    /**
     * Ttft Ms
     * @description Time to first token in milliseconds
     */
    ttft_ms: number;
}

export interface UsageInfo {
    /** Completion Tokens */
    completion_tokens?: number;
    /** Cost */
    cost: number;
    /** Prompt Tokens */
    prompt_tokens?: number;
    /**
     * Total Tokens
     * @default 0
     */
    total_tokens?: number;
}

export interface Turn {
    /** Speaker Id */
    speaker_id: number;
    /** Text */
    text: string;
}

export interface TranscriptionWord {
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
    /**
     * Start
     * @description Start time in seconds
     */
    start: number;
    /**
     * Text
     * @description The transcribed word or audio event
     */
    text: string;
    /**
     * Type
     * @description Type of element (word, spacing, or audio_event)
     */
    type: string;
}

export interface TrajectoryParameters {
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
}

export interface Trajectory {
    /**
     * X
     * @description X coordinate of the motion trajectory
     * @example 279
     */
    x: number;
    /**
     * Y
     * @description Y coordinate of the motion trajectory
     * @example 219
     */
    y: number;
}

export interface Track {
    /**
     * Id
     * @description Unique identifier for the track
     */
    id: string;
    /**
     * Keyframes
     * @description List of keyframes that make up this track
     */
    keyframes: Keyframe[];
    /**
     * Type
     * @description Type of track ('video' or 'audio')
     */
    type: string;
}

export interface TimestepsInput {
    /**
     * Array
     * @description Timesteps schedule to be used if 'custom' method is selected.
     * @default []
     */
    array?: number[];
    /**
     * Method
     * @description The method to use for the timesteps. If set to 'array', the timesteps will be set based
     *                 on the provided timesteps schedule in the `array` field.
     *                 Defaults to 'default' which means the scheduler will use the `num_inference_steps` parameter.
     * @default default
     * @enum {string}
     */
    method?: 'default' | 'array';
}

export interface TextureFiles {
    /**
     * Base Color
     * @description Base color texture
     */
    base_color: File_1;
    /**
     * Metallic
     * @description Metallic texture (PBR)
     */
    metallic?: File_1;
    /**
     * Normal
     * @description Normal texture (PBR)
     */
    normal?: File_1;
    /**
     * Roughness
     * @description Roughness texture (PBR)
     */
    roughness?: File_1;
}

export interface StructuredPrompt {
    /** @description The aesthetics of the image to be generated. */
    aesthetics?: Aesthetics;
    /**
     * Artistic Style
     * @description The artistic style of the image to be generated.
     */
    artistic_style?: string;
    /**
     * Background Setting
     * @description The background setting of the image to be generated.
     */
    background_setting?: string;
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    /** @description The lighting of the image to be generated. */
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
    /** @description The photographic characteristics of the image to be generated. */
    photographic_characteristics?: PhotographicCharacteristics;
    /**
     * Short Description
     * @description A short description of the image to be generated.
     */
    short_description?: string;
    /**
     * Style Medium
     * @description The style medium of the image to be generated.
     */
    style_medium?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render?: { [x: string]: any }[];
}

export interface StructuredInstruction {
    /** @description The aesthetics of the image to be generated. */
    aesthetics?: Aesthetics;
    /**
     * Artistic Style
     * @description The artistic style of the image to be generated.
     */
    artistic_style?: string;
    /**
     * Background Setting
     * @description The background setting of the image to be generated.
     */
    background_setting?: string;
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    /**
     * Edit Instruction
     * @description The edit instruction for the image.
     */
    edit_instruction?: string;
    /** @description The lighting of the image to be generated. */
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
    /** @description The photographic characteristics of the image to be generated. */
    photographic_characteristics?: PhotographicCharacteristics;
    /**
     * Short Description
     * @description A short description of the image to be generated.
     */
    short_description?: string;
    /**
     * Style Medium
     * @description The style medium of the image to be generated.
     */
    style_medium?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render?: { [x: string]: any }[];
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

export interface Speaker {
    /** Audio Url */
    audio_url: string;
    /** Prompt */
    prompt: string;
    /** Speaker Id */
    speaker_id: number;
}

export interface SigmasInput {
    /**
     * Array
     * @description Sigmas schedule to be used if 'custom' method is selected.
     * @default []
     */
    array?: number[];
    /**
     * Method
     * @description The method to use for the sigmas. If set to 'custom', the sigmas will be set based
     *                 on the provided sigmas schedule in the `array` field.
     *                 Defaults to 'default' which means the scheduler will use the sigmas of the scheduler.
     * @default default
     * @enum {string}
     */
    method?: 'default' | 'array';
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

export interface SAM3DObjectMetadata {
    /**
     * Camera Pose
     * @description Camera pose matrix
     */
    camera_pose?: number[][];
    /**
     * Object Index
     * @description Index of the object in the scene
     */
    object_index: number;
    /**
     * Rotation
     * @description Rotation quaternion [x, y, z, w]
     */
    rotation?: number[][];
    /**
     * Scale
     * @description Scale factors [sx, sy, sz]
     */
    scale?: number[][];
    /**
     * Translation
     * @description Translation [tx, ty, tz]
     */
    translation?: number[][];
}

export interface SAM3DBodyPersonMetadata {
    /**
     * Bbox
     * @description Bounding box [x_min, y_min, x_max, y_max]
     */
    bbox: number[];
    /**
     * Focal Length
     * @description Estimated focal length
     */
    focal_length: number;
    /**
     * Keypoints 2D
     * @description 2D keypoints [[x, y], ...] - 70 body keypoints
     */
    keypoints_2d: number[][];
    /**
     * Keypoints 3D
     * @description 3D keypoints [[x, y, z], ...] - 70 body keypoints in camera space
     */
    keypoints_3d?: number[][];
    /**
     * Person Id
     * @description Index of the person in the scene
     */
    person_id: number;
    /**
     * Pred Cam T
     * @description Predicted camera translation [tx, ty, tz]
     */
    pred_cam_t: number[];
}

export interface SAM3DBodyMetadata {
    /**
     * Num People
     * @description Number of people detected
     */
    num_people: number;
    /**
     * People
     * @description Per-person metadata
     */
    people: SAM3DBodyPersonMetadata[];
}

export interface SAM3DBodyAlignmentInfo {
    /**
     * Cropped Vertices Count
     * @description Number of cropped vertices
     */
    cropped_vertices_count: number;
    /**
     * Focal Length
     * @description Focal length used
     */
    focal_length: number;
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
     * Translation
     * @description Translation [tx, ty, tz]
     */
    translation: number[];
}

export interface RGBColor {
    /**
     * B
     * @description Blue color value
     * @default 0
     */
    b?: number;
    /**
     * G
     * @description Green color value
     * @default 0
     */
    g?: number;
    /**
     * R
     * @description Red color value
     * @default 0
     */
    r?: number;
}

export interface Resolution {
    /**
     * Aspect Ratio
     * @description Display aspect ratio (e.g., '16:9')
     */
    aspect_ratio: string;
    /**
     * Height
     * @description Height of the video in pixels
     */
    height: number;
    /**
     * Width
     * @description Width of the video in pixels
     */
    width: number;
}

export interface RelightParameters {
    /**
     * Bg Source
     * @description Direction of the light source (used for IC-light).
     * @default Left
     * @enum {string}
     */
    bg_source?: 'Left' | 'Right' | 'Top' | 'Bottom';
    /**
     * Cfg
     * @description Classifier-free guidance scale for relighting.
     * @default 2
     */
    cfg?: number;
    /**
     * Relight Prompt
     * @description Text prompt describing the desired lighting condition.
     * @example Sunlight
     * @example Red and Blue Neon Light
     * @example Warm indoor lighting
     */
    relight_prompt: string;
    /**
     * Use Sky Mask
     * @description Whether to use sky masking for outdoor scenes.
     * @default false
     */
    use_sky_mask?: boolean;
}

export interface Region {
    /**
     * X1
     * @description X-coordinate of the top-left corner
     */
    x1: number;
    /**
     * X2
     * @description X-coordinate of the bottom-right corner
     */
    x2: number;
    /**
     * Y1
     * @description Y-coordinate of the top-left corner
     */
    y1: number;
    /**
     * Y2
     * @description Y-coordinate of the bottom-right corner
     */
    y2: number;
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

export interface ReferenceFace {
    /**
     * Image Url
     * @description URL of the reference face image
     */
    image_url: string;
}

export interface PronunciationDictionaryLocator {
    /**
     * Pronunciation Dictionary Id
     * @description The ID of the pronunciation dictionary.
     */
    pronunciation_dictionary_id: string;
    /**
     * Version Id
     * @description The ID of the version of the pronunciation dictionary. If not provided, the latest version will be used.
     */
    version_id?: string;
}

export interface PronunciationDict {
    /**
     * Tone List
     * @description List of pronunciation replacements in format ['text/(pronunciation)', ...]. For Chinese, tones are 1-5. Example: ['燕少飞/(yan4)(shao3)(fei1)']
     */
    tone_list?: string[];
}

export interface PromptObject {
    /**
     * Action
     * @description The action of the object in the image.
     */
    action?: string;
    /**
     * Appearance Details
     * @description The appearance details of the object.
     */
    appearance_details?: string;
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
     * Expression
     * @description The expression of the object in the image.
     */
    expression?: string;
    /**
     * Gender
     * @description The gender of the object in the image.
     */
    gender?: string;
    /**
     * Location
     * @description The location of the object in the image.
     */
    location?: string;
    /**
     * Number Of Objects
     * @description The number of objects in the image.
     */
    number_of_objects?: number;
    /**
     * Orientation
     * @description The orientation of the object in the image.
     */
    orientation?: string;
    /**
     * Pose
     * @description The pose of the object in the image.
     */
    pose?: string;
    /**
     * Relationship
     * @description The relationship of the object to other objects in the image.
     */
    relationship: string;
    /**
     * Relative Size
     * @description The relative size of the object in the image.
     */
    relative_size?: string;
    /**
     * Shape And Color
     * @description The shape and color of the object.
     */
    shape_and_color?: string;
    /**
     * Skin Tone And Texture
     * @description The skin tone and texture of the object in the image.
     */
    skin_tone_and_texture?: string;
    /**
     * Texture
     * @description The texture of the object.
     */
    texture?: string;
}

export interface PolygonOutput {
    /**
     * Polygons
     * @description List of polygons
     */
    polygons: Polygon[];
}

export interface Polygon {
    /**
     * Label
     * @description Label of the polygon
     */
    label: string;
    /**
     * Points
     * @description List of points
     */
    points: {
        [key: string]: number;
    }[];
}

export interface PointPromptBase {
    /**
     * Label
     * @description 1 for foreground, 0 for background
     * @enum {integer}
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
    /**
     * Y
     * @description Y Coordinate of the prompt
     */
    y?: number;
}

export interface PointPrompt_1 {
    /**
     * Frame Index
     * @description The frame index to interact with.
     * @default 0
     */
    frame_index?: number;
    /**
     * Label
     * @description Label of the prompt. 1 for foreground, 0 for background
     * @default 1
     * @enum {integer}
     */
    label?: 0 | 1;
    /**
     * X
     * @description X Coordinate of the prompt
     * @default 305
     */
    x?: number;
    /**
     * Y
     * @description Y Coordinate of the prompt
     * @default 350
     */
    y?: number;
}

export interface PointPrompt {
    /**
     * Frame Index
     * @description The frame index to interact with.
     */
    frame_index?: number;
    /**
     * Label
     * @description 1 for foreground, 0 for background
     * @enum {integer}
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
    /**
     * Y
     * @description Y Coordinate of the prompt
     */
    y?: number;
}

export interface Point {
    /**
     * X
     * @description X coordinate of the point in normalized format (0 to 1)
     */
    x: number;
    /**
     * Y
     * @description Y coordinate of the point in normalized format (0 to 1)
     */
    y: number;
}

export interface PhotographicCharacteristics {
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
}

export interface OmniVideoElementInput {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     *
     *     Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect ratio: 0.40, Max aspect ratio: 2.50, Timeout: 20.0s
     */
    frontal_image_url: string;
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 1-3 images supported. At least one image is required.
     */
    reference_image_urls?: string[];
}

export interface OCRBoundingBox {
    /**
     * Quad Boxes
     * @description List of quadrilateral boxes
     */
    quad_boxes: BoundingBox[];
}

export interface Object {
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
    /**
     * Y Min
     * @description Top boundary of detection box in normalized format (0 to 1)
     */
    y_min: number;
}

export interface NovaSRTimings {
    /**
     * Inference
     * @description Time taken to run the inference in seconds.
     */
    inference: number;
    /**
     * Postprocess
     * @description Time taken to postprocess the audio in seconds.
     */
    postprocess: number;
    /**
     * Preprocess
     * @description Time taken to preprocess the audio in seconds.
     */
    preprocess: number;
}

export interface MusicSection {
    /**
     * Duration Ms
     * @description The duration of the section in milliseconds. Must be between 3000ms and 120000ms.
     */
    duration_ms: number;
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
     * Positive Local Styles
     * @description The styles that should be present in this section.
     */
    positive_local_styles: string[];
    /**
     * Section Name
     * @description The name of the section. Must be between 1 and 100 characters.
     */
    section_name: string;
}

export interface MusicCompositionPlan {
    /**
     * Negative Global Styles
     * @description The styles that should not be present in the entire song.
     */
    negative_global_styles: string[];
    /**
     * Positive Global Styles
     * @description The styles that should be present in the entire song.
     */
    positive_global_styles: string[];
    /**
     * Sections
     * @description The sections of the song.
     */
    sections: MusicSection[];
}

export interface MoondreamInputParam {
    /**
     * Image URL
     * @description URL of the image to be processed
     * @example https://llava-vl.github.io/static/images/monalisa.jpg
     */
    image_url: string;
    /**
     * Prompt
     * @description Prompt to be used for the image
     * @default Describe this image.
     * @example Do you know who drew this painting?
     */
    prompt?: string;
}

export interface ModelUrls_2 {
    /**
     * Fbx
     * @description FBX format 3D model
     */
    fbx?: File_1;
    /**
     * Glb
     * @description GLB format 3D model
     */
    glb?: File_1;
    /**
     * Obj
     * @description OBJ format 3D model
     */
    obj?: File_1;
    /**
     * Usdz
     * @description USDZ format 3D model
     */
    usdz?: File_1;
}

export interface ModelUrls_1 {
    /**
     * Blend
     * @description Blender format 3D model
     */
    blend?: File_1;
    /**
     * Fbx
     * @description FBX format 3D model
     */
    fbx?: File_1;
    /**
     * Glb
     * @description GLB format 3D model
     */
    glb?: File_1;
    /**
     * Obj
     * @description OBJ format 3D model
     */
    obj?: File_1;
    /**
     * Stl
     * @description STL format 3D model
     */
    stl?: File_1;
    /**
     * Usdz
     * @description USDZ format 3D model
     */
    usdz?: File_1;
}

export interface ModelUrls {
    /**
     * Fbx
     * @description FBX format 3D model
     */
    fbx?: File_1;
    /**
     * Glb
     * @description GLB format 3D model
     */
    glb?: File_1;
    /**
     * Mtl
     * @description MTL material file for OBJ model
     */
    mtl?: File_1;
    /**
     * Obj
     * @description OBJ format 3D model
     */
    obj?: File_1;
    /**
     * Texture
     * @description Texture image for the 3D model
     */
    texture?: File_1;
    /**
     * Usdz
     * @description USDZ format 3D model
     */
    usdz?: File_1;
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

export interface LoudnormSummary {
    /**
     * Input Integrated
     * @description Input integrated loudness in LUFS
     */
    input_integrated?: number;
    /**
     * Input Lra
     * @description Input loudness range in LU
     */
    input_lra?: number;
    /**
     * Input Threshold
     * @description Input threshold in LUFS
     */
    input_threshold?: number;
    /**
     * Input True Peak
     * @description Input true peak in dBTP
     */
    input_true_peak?: number;
    /**
     * Normalization Type
     * @description Type of normalization applied (Dynamic/Linear)
     */
    normalization_type?: string;
    /**
     * Output Integrated
     * @description Output integrated loudness in LUFS
     */
    output_integrated?: number;
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
     * Output True Peak
     * @description Output true peak in dBTP
     */
    output_true_peak?: number;
    /**
     * Target Offset
     * @description Target offset in LU
     */
    target_offset?: number;
}

export interface LoudnessNormalizationSetting {
    /**
     * Enabled
     * @description Enable loudness normalization for the audio
     * @default true
     */
    enabled?: boolean;
    /**
     * Target Loudness
     * @description Target loudness in LUFS (default -18.0)
     * @default -18
     */
    target_loudness?: number;
    /**
     * Target Peak
     * @description Target peak level in dBTP (default -0.5).
     * @default -0.5
     */
    target_peak?: number;
    /**
     * Target Range
     * @description Target loudness range in LU (default 8.0)
     * @default 8
     */
    target_range?: number;
}

export interface LoraWeight_5 {
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
    scale?: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Used only if `path` is a Hugging Face repository, and required only if you have more than 1 safetensors file in the repo.
     */
    weight_name?: string;
}

export interface LoraWeight_4 {
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
    scale?: number;
}

export interface LoraWeight_3 {
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
    scale?: number;
}

export interface LoraWeight_2 {
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
    scale?: Record<string, number> | number;
}

export interface LoRAWeight_1 {
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
    scale?: number;
    /**
     * Transformer
     * @description Specifies the transformer to load the lora weight into. 'high' loads into the high-noise transformer, 'low' loads it into the low-noise transformer, while 'both' loads the LoRA into both transformers.
     * @default high
     * @enum {string}
     */
    transformer?: 'high' | 'low' | 'both';
    /**
     * Weight Name
     * @description Name of the LoRA weight. Used only if `path` is a Hugging Face repository, and required only if you have more than 1 safetensors file in the repo.
     */
    weight_name?: string;
}

export interface LoraWeight_1 {
    /**
     * Force
     * @description If set to true, the embedding will be forced to be used.
     * @default false
     */
    force?: boolean;
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
    scale?: number;
}

export interface LoRAWeight {
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
    scale?: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Only used if `path` is a HuggingFace repository, and is only required when the repository contains multiple LoRA weights.
     */
    weight_name?: string;
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
    scale?: number;
}

export interface LoRAInput_2 {
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
    scale?: number;
}

export interface LoRAInput_1 {
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
    scale?: number;
}

export interface LoRAInput {
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
    scale?: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight. Only used if `path` is a HuggingFace repository, and is only required when the repository contains multiple LoRA weights.
     */
    weight_name?: string;
}

export interface Lighting {
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
    /**
     * Shadows
     * @description The shadows in the image to be generated.
     */
    shadows?: string;
}

export interface KlingV3MultiPromptElement {
    /**
     * Duration
     * @description The duration of this shot in seconds
     * @default 5
     * @enum {string}
     */
    duration?: '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15';
    /**
     * Prompt
     * @description The prompt for this shot.
     */
    prompt: string;
}

export interface KlingV3ImageElementInput {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     *
     *     Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect ratio: 0.40, Max aspect ratio: 2.50, Timeout: 20.0s
     */
    frontal_image_url?: string;
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 1-3 images supported. At least one image is required.
     */
    reference_image_urls?: string[];
}

export interface KlingV3ComboElementInput {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     *
     *     Max file size: 10.0MB, Min width: 300px, Min height: 300px, Min aspect ratio: 0.40, Max aspect ratio: 2.50, Timeout: 20.0s
     */
    frontal_image_url?: string;
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 1-3 images supported. At least one image is required.
     */
    reference_image_urls?: string[];
    /**
     * Video Url
     * @description The video URL of the element. A request can only have one element with a video.
     *
     *     Max file size: 200.0MB, Min width: 720px, Min height: 720px, Max width: 2160px, Max height: 2160px, Min duration: 3.0s, Max duration: 10.05s, Min FPS: 24.0, Max FPS: 60.0, Timeout: 30.0s
     */
    video_url?: string;
}

export interface KeyframeTransition {
    /**
     * Duration
     * @description Duration of this transition in seconds
     * @default 5
     */
    duration?: number;
    /**
     * Prompt
     * @description Specific prompt for this transition. Overrides the global prompt if provided.
     * @example null
     */
    prompt?: string;
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

export interface IPAdapter_1 {
    /**
     * Image Projection Shortcut
     * @description The value to set the image projection shortcut to. For FaceID plus V1 models,
     *                 this should be set to False. For FaceID plus V2 models, this should be set to True.
     *                 Default is True.
     * @default true
     */
    image_projection_shortcut?: boolean;
    /**
     * Insight Face Model Path
     * @description URL or the path to the InsightFace model weights.
     */
    insight_face_model_path?: string;
    /**
     * Ip Adapter Image Url
     * @description URL of the image to be used as the IP adapter.
     */
    ip_adapter_image_url: string | string[];
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
     * Path
     * @description URL or the path to the IP adapter weights.
     */
    path: string;
    /**
     * Scale
     * @description The scale of the IP adapter weight. This is used to scale the IP adapter weight
     *                 before merging it with the base model.
     * @default 1
     */
    scale?: number;
    /**
     * Scale Json
     * @description The scale of the IP adapter weight. This is used to scale the IP adapter weight
     *                 before merging it with the base model.
     */
    scale_json?: Record<string, number>;
    /**
     * Unconditional Noising Factor
     * @description The factor to apply to the unconditional noising of the IP adapter.
     * @default 0
     */
    unconditional_noising_factor?: number;
    /**
     * Weight Name
     * @description Name of the weight file.
     */
    weight_name?: string;
}

export interface IPAdapter {
    /**
     * Image Encoder Path
     * @description Path to the Image Encoder for the IP-Adapter, for example 'openai/clip-vit-large-patch14'
     */
    image_encoder_path: string;
    /**
     * Image Encoder Subfolder
     * @description Subfolder in which the image encoder weights exist.
     */
    image_encoder_subfolder?: string;
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
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold?: number;
    /**
     * Path
     * @description Hugging Face path to the IP-Adapter
     */
    path: string;
    /**
     * Scale
     * @description Scale for ip adapter.
     */
    scale: number;
    /**
     * Subfolder
     * @description Subfolder in which the ip_adapter weights exist
     */
    subfolder?: string;
    /**
     * Weight Name
     * @description Name of the safetensors file containing the ip-adapter weights
     */
    weight_name?: string;
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

export interface ImageSize {
    /**
     * Height
     * @description The height of the generated image.
     * @default 512
     */
    height?: number;
    /**
     * Width
     * @description The width of the generated image.
     * @default 512
     */
    width?: number;
}

export interface ImagePrompt {
    /** Image Url */
    image_url?: string;
    /**
     * Stop At
     * @default 0.5
     */
    stop_at?: number;
    /**
     * Type
     * @default ImagePrompt
     * @enum {string}
     */
    type?: 'ImagePrompt' | 'PyraCanny' | 'CPDS' | 'FaceSwap';
    /**
     * Weight
     * @default 1
     */
    weight?: number;
}

export interface ImageInput {
    /**
     * Hypothesis
     * @description The image to use for the measurement.
     */
    hypothesis: string;
}

export interface ImageFillInput_1 {
    /**
     * Fill Image Url
     * @description URLs of images to be filled into the masked area.
     */
    fill_image_url?: string[] | string;
    /**
     * In Context Fill
     * @description Uses the provided fill image in context with the base image to fill in more faithfully. Will increase price.
     * @default false
     */
    in_context_fill?: boolean;
    /**
     * Use Prompt
     * @description Whether to use the prompt as well in the generation, along with the redux image.
     * @default false
     */
    use_prompt?: boolean;
}

export interface ImageFillInput {
    /**
     * Fill Image Url
     * @description URLs of images to be filled for redux prompting
     * @default []
     */
    fill_image_url?: string | string[];
}

export interface ImageFile_1 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface ImageFile {
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
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface ImageConditioningInput_1 {
    /**
     * Image Url
     * @description URL of image to use as conditioning
     */
    image_url: string;
    /**
     * Start Frame Num
     * @description Frame number of the image from which the conditioning starts. Must be a multiple of 8.
     */
    start_frame_num: number;
}

export interface ImageConditioningInput {
    /**
     * Image URL
     * @description URL of image to use as conditioning
     */
    image_url: string;
    /**
     * Start Frame Number
     * @description Frame number of the image from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num?: number;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength?: number;
}

export interface ImageCondition {
    /**
     * Image Url
     * @description The URL of the image to use as input.
     */
    image_url: string;
    /**
     * Start Frame Number
     * @description The frame number to start the condition on.
     * @default 0
     */
    start_frame_number?: number;
    /**
     * Strength
     * @description The strength of the condition.
     * @default 1
     */
    strength?: number;
}

export interface Image_3 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name: string;
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

export interface Image_2 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface Image_1 {
    /**
     * Content Type
     * @default image/jpeg
     */
    content_type?: string;
    /** Height */
    height: number;
    /** Url */
    url: string;
    /** Width */
    width: number;
}

export interface Image {
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
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface GuidanceInput {
    /**
     * Image Url
     * @description The image that should be used as guidance, in base64 format, with the method defined in guidance_method_1. Accepted formats are jpeg, jpg, png, webp. Maximum file size 12MB. If more then one guidance method is used, all guidance images must be of the same aspect ratio, and this will be the aspect ratio of the generated results. If guidance_method_1 is selected, an image must be provided.
     */
    image_url: string;
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
    scale?: number;
}

export interface Frame {
    /**
     * URL
     * @description URL of the frame
     */
    url: string;
}

export interface File_2 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     * @example https://url.to/generated/file/z9RV14K95DvU.png
     */
    url: string;
}

export interface File_1 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface File {
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
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
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
}

export interface ExtendVideoConditioningInput {
    /**
     * Limit Number of Frames
     * @description Whether to limit the number of frames used from the video. If True, the `max_num_frames` parameter will be used to limit the number of frames.
     * @default false
     */
    limit_num_frames?: boolean;
    /**
     * Maximum Number of Frames
     * @description Maximum number of frames to use from the video. If None, all frames will be used.
     * @default 1441
     * @example 1441
     */
    max_num_frames?: number;
    /**
     * Resample FPS
     * @description Whether to resample the video to a specific FPS. If True, the `target_fps` parameter will be used to resample the video.
     * @default false
     */
    resample_fps?: boolean;
    /**
     * Reverse Video
     * @description Whether to reverse the video. This is useful for tasks where the video conditioning should be applied in reverse order.
     * @default false
     */
    reverse_video?: boolean;
    /**
     * Start Frame Number
     * @description Frame number of the video from which the conditioning starts. Must be a multiple of 8.
     * @default 0
     */
    start_frame_num?: number;
    /**
     * Strength
     * @description Strength of the conditioning. 0.0 means no conditioning, 1.0 means full conditioning.
     * @default 1
     */
    strength?: number;
    /**
     * Target FPS
     * @description Target FPS to resample the video to. Only relevant if `resample_fps` is True.
     * @default 24
     * @example 24
     */
    target_fps?: number;
    /**
     * Video URL
     * @description URL of video to use as conditioning
     */
    video_url: string;
}

export interface EmotionalStrengths {
    /**
     * Afraid
     * @description Strength of fear emotion
     * @default 0
     */
    afraid?: number;
    /**
     * Angry
     * @description Strength of anger emotion
     * @default 0
     */
    angry?: number;
    /**
     * Calm
     * @description Strength of calm emotion
     * @default 0
     */
    calm?: number;
    /**
     * Disgusted
     * @description Strength of disgust emotion
     * @default 0
     */
    disgusted?: number;
    /**
     * Happy
     * @description Strength of happiness emotion
     * @default 0
     */
    happy?: number;
    /**
     * Melancholic
     * @description Strength of melancholic emotion
     * @default 0
     */
    melancholic?: number;
    /**
     * Sad
     * @description Strength of sadness emotion
     * @default 0
     */
    sad?: number;
    /**
     * Surprised
     * @description Strength of surprise emotion
     * @default 0
     */
    surprised?: number;
}

export interface Embedding_1 {
    /**
     * Path
     * @description URL or the path to the embedding weights.
     */
    path: string;
    /**
     * Tokens
     * @description The tokens to map the embedding weights to. Use these tokens in your prompts.
     * @default [
     *       "<s0>",
     *       "<s1>"
     *     ]
     */
    tokens?: string[];
}

export interface Embedding {
    /**
     * Path
     * @description URL or the path to the embedding weights.
     * @example https://civitai.com/api/download/models/135931
     * @example https://filebin.net/3chfqasxpqu21y8n/my-custom-lora-v1.safetensors
     */
    path: string;
    /**
     * Tokens
     * @description The list of tokens to use for the embedding.
     * @default [
     *       "<s0>",
     *       "<s1>"
     *     ]
     */
    tokens?: string[];
}

export interface ElementInput {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view). Optional.
     */
    frontal_image_url?: string;
    /**
     * Reference Image Urls
     * @description Additional reference images from different angles. 0-3 images supported. Optional.
     */
    reference_image_urls?: string[];
}

export interface EasyControlWeight {
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
     * Image Control Type
     * @description Control type of the image. Must be one of `spatial` or `subject`.
     * @enum {string}
     */
    image_control_type: 'subject' | 'spatial';
    /**
     * Image Url
     * @description URL of an image to use as a control
     */
    image_url: string;
    /**
     * Scale
     * @description Scale for the control method.
     * @default 1
     */
    scale?: number;
}

export interface DynamicMask {
    /**
     * Mask Url
     * @description URL of the image for Dynamic Brush Application Area (Mask image created by users using the motion brush)
     * @example https://storage.googleapis.com/falserverless/kling/new_dynamic_mask.png
     */
    mask_url: string;
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
    trajectories?: Trajectory[];
}

export interface DiarizationSegment {
    /**
     * Speaker
     * @description Speaker ID of the segment
     */
    speaker: string;
    /**
     * Timestamp
     * @description Start and end timestamp of the segment
     */
    timestamp: { [x: string]: any }[];
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

export interface DeepFilterNetTimings {
    /**
     * Inference
     * @description Inference time.
     */
    inference: number;
    /**
     * Postprocess
     * @description Postprocessing time.
     */
    postprocess: number;
    /**
     * Preprocess
     * @description Preprocessing time.
     */
    preprocess: number;
}

export interface ControlNetUnionInput {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale?: number;
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
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage?: number;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold?: number;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage?: number;
}

export interface ControlNetUnion {
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
    /**
     * Controls
     * @description The control images and modes to use for the control net.
     */
    controls: ControlNetUnionInput[];
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
}

export interface ControlNet_2 {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale?: number;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage?: number;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage?: number;
}

export interface ControlNet_1 {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale?: number;
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage?: number;
    /**
     * Image Url
     * @description URL of the image to be used as the control net.
     */
    image_url: string;
    /**
     * Ip Adapter Index
     * @description The index of the IP adapter to be applied to the controlnet. This is only needed for InstantID ControlNets.
     */
    ip_adapter_index?: number;
    /**
     * Mask Url
     * @description The mask to use for the controlnet. When using a mask, the control image size and the mask size must be the same and divisible by 32.
     */
    mask_url?: string;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage?: number;
    /**
     * Variant
     * @description The optional variant if a Hugging Face repo key is used.
     */
    variant?: string;
}

export interface ControlNet {
    /**
     * Conditioning Scale
     * @description The scale of the control net weight. This is used to scale the control net weight
     *                 before merging it with the base model.
     * @default 1
     */
    conditioning_scale?: number;
    /**
     * Config Url
     * @description optional URL to the controlnet config.json file.
     */
    config_url?: string;
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * End Percentage
     * @description The percentage of the image to end applying the controlnet in terms of the total timesteps.
     * @default 1
     */
    end_percentage?: number;
    /**
     * Mask Image Url
     * @description URL of the mask for the control image.
     */
    mask_image_url?: string;
    /**
     * Mask Threshold
     * @description Threshold for mask.
     * @default 0.5
     */
    mask_threshold?: number;
    /**
     * Path
     * @description URL or the path to the control net weights.
     */
    path: string;
    /**
     * Start Percentage
     * @description The percentage of the image to start applying the controlnet in terms of the total timesteps.
     * @default 0
     */
    start_percentage?: number;
    /**
     * Variant
     * @description The optional variant if a Hugging Face repo key is used.
     */
    variant?: string;
}

export interface ControlLoraWeight {
    /**
     * Control Image Url
     * @description URL of the image to be used as the control image.
     */
    control_image_url: string;
    /**
     * Path
     * @description URL or the path to the LoRA weights.
     */
    path: string;
    /**
     * Preprocess
     * @description Type of preprocessing to apply to the input image.
     * @default None
     * @enum {string}
     */
    preprocess?: 'canny' | 'depth' | 'None';
    /**
     * Scale
     * @description The scale of the LoRA weight. This is used to scale the LoRA weight
     *                 before merging it with the base model. Providing a dictionary as {"layer_name":layer_scale} allows per-layer lora scale settings. Layers with no scale provided will have scale 1.0.
     * @default 1
     */
    scale?: Record<string, number> | number;
}

export interface CompletionUsage {
    /**
     * Completion Tokens
     * @description Number of tokens in the completion
     */
    completion_tokens: number;
    /**
     * Prompt Tokens
     * @description Number of tokens in the prompt
     */
    prompt_tokens: number;
    /**
     * Total Tokens
     * @description Total tokens used
     */
    total_tokens: number;
}

export interface ColorPaletteMember {
    /**
     * Color Weight
     * @description The weight of the color in the color palette
     * @default 0.5
     */
    color_weight?: number;
    /** @description RGB color value for the palette member */
    rgb: RGBColor;
}

export interface ColorPalette {
    /**
     * Members
     * @description A list of color palette members that define the color palette
     */
    members?: ColorPaletteMember[];
    /**
     * Name
     * @description A color palette preset value
     */
    name?: 'EMBER' | 'FRESH' | 'JUNGLE' | 'MAGIC' | 'MELON' | 'MOSAIC' | 'PASTEL' | 'ULTRAMARINE';
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
    scale?: number;
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

export interface bria_fibovlm_StructuredPrompt {
    /** @description The aesthetics of the image to be generated. */
    aesthetics?: bria_fibovlm_Aesthetics;
    /**
     * Artistic Style
     * @description The artistic style of the image to be generated.
     */
    artistic_style?: string;
    /**
     * Background Setting
     * @description The background setting of the image to be generated.
     */
    background_setting?: string;
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    /** @description The lighting of the image to be generated. */
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
    /** @description The photographic characteristics of the image to be generated. */
    photographic_characteristics?: PhotographicCharacteristics;
    /**
     * Short Description
     * @description A short description of the image to be generated.
     */
    short_description?: string;
    /**
     * Style Medium
     * @description The style medium of the image to be generated.
     */
    style_medium?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render?: { [x: string]: any }[];
}

export interface bria_fibovlm_Aesthetics {
    /**
     * Aesthetic Score
     * @description The aesthetic score of the image.
     */
    aesthetic_score: string;
    /**
     * Color Scheme
     * @description The color scheme of the image to be generated.
     */
    color_scheme?: string;
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
     * Preference Score
     * @description The preference score of the image.
     */
    preference_score: string;
}

export interface BoxPromptBase_1 {
    /**
     * X Max
     * @description X Max Coordinate of the prompt
     * @default 0
     */
    x_max?: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     * @default 0
     */
    x_min?: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt
     * @default 0
     */
    y_max?: number;
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     * @default 0
     */
    y_min?: number;
}

export interface BoxPromptBase {
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
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     */
    y_min?: number;
}

export interface BoxPrompt_1 {
    /**
     * Frame Index
     * @description The frame index to interact with.
     * @default 0
     */
    frame_index?: number;
    /**
     * X Max
     * @description X Max Coordinate of the prompt
     * @default 0
     */
    x_max?: number;
    /**
     * X Min
     * @description X Min Coordinate of the box
     * @default 0
     */
    x_min?: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt
     * @default 0
     */
    y_max?: number;
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     * @default 0
     */
    y_min?: number;
}

export interface BoxPrompt {
    /**
     * Frame Index
     * @description The frame index to interact with.
     */
    frame_index?: number;
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
    /**
     * Y Min
     * @description Y Min Coordinate of the box
     */
    y_min?: number;
}

export interface BoundingBoxes {
    /**
     * Bboxes
     * @description List of bounding boxes
     */
    bboxes: BoundingBox[];
}

export interface BoundingBox {
    /**
     * H
     * @description Height of the bounding box
     */
    h: number;
    /**
     * Label
     * @description Label of the bounding box
     */
    label: string;
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
    /**
     * Y
     * @description Y-coordinate of the top-left corner
     */
    y: number;
}

export interface BBoxPromptBase {
    /**
     * X Max
     * @description X Max Coordinate of the prompt (0-1)
     * @default 0
     */
    x_max?: number;
    /**
     * X Min
     * @description X Min Coordinate of the box (0-1)
     * @default 0
     */
    x_min?: number;
    /**
     * Y Max
     * @description Y Max Coordinate of the prompt (0-1)
     * @default 0
     */
    y_max?: number;
    /**
     * Y Min
     * @description Y Min Coordinate of the box (0-1)
     * @default 0
     */
    y_min?: number;
}

export interface AudioTrack {
    /**
     * Bitrate
     * @description Audio bitrate in bits per second
     */
    bitrate: number;
    /**
     * Channels
     * @description Number of audio channels
     */
    channels: number;
    /**
     * Codec
     * @description Audio codec used (e.g., 'aac', 'mp3')
     */
    codec: string;
    /**
     * Sample Rate
     * @description Audio sample rate in Hz
     */
    sample_rate: number;
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
     * Include
     * @description Whether to include (True) or exclude (False) sounds in this span
     * @default true
     */
    include?: boolean;
    /**
     * Start
     * @description Start time of the span in seconds
     * @example 0.5
     * @example 2
     */
    start: number;
}

export interface AudioSetting_1 {
    /**
     * Bitrate
     * @description Bitrate of generated audio
     * @default 256000
     * @enum {integer}
     */
    bitrate?: 32000 | 64000 | 128000 | 256000;
    /**
     * Format
     * @description Audio format
     * @default mp3
     * @enum {string}
     */
    format?: 'mp3' | 'pcm' | 'flac';
    /**
     * Sample Rate
     * @description Sample rate of generated audio
     * @default 44100
     * @enum {integer}
     */
    sample_rate?: 8000 | 16000 | 22050 | 24000 | 32000 | 44100;
}

export interface AudioSetting {
    /**
     * Bitrate
     * @description Bitrate of generated audio
     * @default 128000
     * @enum {integer}
     */
    bitrate?: 32000 | 64000 | 128000 | 256000;
    /**
     * Channel
     * @description Number of audio channels (1=mono, 2=stereo)
     * @default 1
     * @enum {integer}
     */
    channel?: 1 | 2;
    /**
     * Format
     * @description Audio format
     * @default mp3
     * @enum {string}
     */
    format?: 'mp3' | 'pcm' | 'flac';
    /**
     * Sample Rate
     * @description Sample rate of generated audio
     * @default 32000
     * @enum {integer}
     */
    sample_rate?: 8000 | 16000 | 22050 | 24000 | 32000 | 44100;
}

export interface AudioFile_2 {
    /**
     * Content Type
     * @default audio/wav
     * @example audio/wav
     */
    content_type?: string;
    /**
     * File Name
     * @default 8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     * @example 8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Url
     * @example https://v2.fal.media/files/8535dd59e911496a947daa35c07e67a3_tmplkcy6tut.wav
     */
    url: string;
}

export interface AudioFile_1 {
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
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
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
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Sample Rate
     * @description The sample rate of the audio
     */
    sample_rate?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface AudioFile {
    /**
     * Bitrate
     * @description The bitrate of the audio (e.g., '192k' or 192000)
     */
    bitrate?: string | number;
    /**
     * Channels
     * @description The number of channels in the audio
     */
    channels?: number;
    /**
     * Content Type
     * @description The mime type of the file.
     * @example image/png
     */
    content_type?: string;
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
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @example 4404019
     */
    file_size?: number;
    /**
     * Sample Rate
     * @description The sample rate of the audio
     */
    sample_rate?: number;
    /**
     * Url
     * @description The URL where the file can be downloaded from.
     */
    url: string;
}

export interface Audio {
    /**
     * Bitrate
     * @description Overall bitrate of the media in bits per second
     */
    bitrate: number;
    /**
     * Channels
     * @description Number of audio channels
     */
    channels: number;
    /**
     * Codec
     * @description Codec used to encode the media
     */
    codec: string;
    /**
     * Container
     * @description Container format of the media file (e.g., 'mp4', 'mov')
     */
    container: string;
    /**
     * Content Type
     * @description MIME type of the media file
     */
    content_type: string;
    /**
     * Duration
     * @description Duration of the media in seconds
     */
    duration: number;
    /**
     * File Name
     * @description Original filename of the media
     */
    file_name: string;
    /**
     * File Size
     * @description Size of the file in bytes
     */
    file_size: number;
    /**
     * Media Type
     * @description Type of media (always 'audio')
     * @default audio
     * @constant
     */
    media_type?: 'audio';
    /**
     * Sample Rate
     * @description Audio sample rate in Hz
     */
    sample_rate: number;
    /**
     * Url
     * @description URL where the media file can be accessed
     */
    url: string;
}

export interface AspectRatio {
    /**
     * Ratio
     * @description Aspect ratio for 4K resolution output
     * @default 1:1
     * @enum {string}
     */
    ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
}

export interface Aesthetics {
    /**
     * Color Scheme
     * @description The color scheme of the image to be generated.
     */
    color_scheme?: string;
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
}

export {};
