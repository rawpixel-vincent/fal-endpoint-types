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
    timestamp: [number, number];
}

export interface VoiceSetting {
    /**
     * Emotion
     * @description Emotion of the generated speech
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

export interface VideoAgentConfig {
    /**
     * Avatar
     * @description Optional avatar name to use
     * @default Adriana SuitSofa Front
     * @example Adriana SuitSofa Front
     * @enum {string}
     */
    avatar?:
        | 'Abigail (Upper Body)'
        | 'Abigail Office Front'
        | 'Abigail Office Side'
        | 'Abigail Sofa Front'
        | 'Abigail Sofa Side'
        | 'Aditya in Brown blazer'
        | 'Aditya in Blue blazer'
        | 'Aditya in Blue shirt'
        | 'Aditya in Blue t-shirt'
        | 'Aditya in Beige blazer'
        | 'Adrian in Blue Shirt'
        | 'Adrian in Blue Suit'
        | 'Adrian in Blue Sweater'
        | 'Adriana BizTalk Front'
        | 'Adriana BizTalk Side'
        | 'Adriana Business Front 2'
        | 'Adriana Business Front '
        | 'Adriana Business Side'
        | 'Adriana Nurse Front 2'
        | 'Adriana Nurse Front'
        | 'Adriana Nurse Side 2'
        | 'Adriana Nurse Side'
        | 'Adriana Nurse Sitting Side'
        | 'Adriana SuitSofa Front'
        | 'Aiko'
        | 'Albert in Blue Polo shirt'
        | 'Albert in Blue blazer'
        | 'Albert in Blue shirt'
        | 'Albert in Blue suit'
        | 'Albert in Khaki blazer'
        | 'Albert in White shirt'
        | 'Amanda in Blue Shirt (Front)'
        | 'Amanda in Blue Shirt (Left)'
        | 'Amanda in Blue Shirt (Right)'
        | 'Amanda in Grey Shirt (Front)'
        | 'Amanda in Grey Shirt (Left)'
        | 'Amanda in Grey Shirt (Right)'
        | 'Amanda in Maintenance (Front)'
        | 'Amanda in Maintenance (Left)'
        | 'Amanda in Maintenance (Right)'
        | 'Amelia Business Training Front 2'
        | 'Amelia Business Training Front'
        | 'Amelia Business Training Side 2'
        | 'Amelia Business Training Side'
        | 'Amelia Lounge Front 2'
        | 'Amelia Lounge Front'
        | 'Amelia Lounge Side 2'
        | 'Amelia Lounge Side'
        | 'Amelia Yoga Front 2'
        | 'Amelia Yoga Front'
        | 'Amelia Yoga Side 2'
        | 'Amelia Yoga Side'
        | 'Alex in Black Suit'
        | 'Alex in Jacket'
        | 'Alex in White Coat'
        | 'Alex in Yellow Sweater'
        | 'Anja Office Front'
        | 'Anja Office Side '
        | 'Anja Sofa Front'
        | 'Anja Sofa Side '
        | 'Ann Business Front'
        | 'Ann Business Sitting'
        | 'Ann Casual Front'
        | 'Ann Casual Lying'
        | 'Ann Casual Sitting 2'
        | 'Ann Casual Sitting'
        | 'Ann Doctor Sitting'
        | 'Ann Doctor Standing'
        | 'Ann Sweater Front'
        | 'Ann Sweater Side'
        | 'Ann Therapist'
        | 'Anna in White T-shirt'
        | 'Anna in Turtleneck T-shirt'
        | 'Anna in Brown T-shirt'
        | 'Annelise in Dark blue dress'
        | 'Annelise in Off white dress'
        | 'Annelise in Sky blue dress'
        | 'Annelise in White dress'
        | 'Annelore in Blue blazer'
        | 'Annelore in Blue dress'
        | 'Annelore in Red blazer'
        | 'Annelore in Red sweater'
        | 'Annelore in White shirt'
        | 'Annie in Grey Jacket'
        | 'Annie in White Shirt'
        | 'Annie in Tan Jacket'
        | 'Annie in Blue Casual'
        | 'Annie in Light Blue'
        | 'Annie in Brown Shirt'
        | 'Annie in Black Shirt'
        | 'Annie in Pink Suit'
        | 'Annie in Grey Dress'
        | 'Annie in Blue Vest'
        | 'Annie in Black V-neck Shirt'
        | 'Annie in Blue Suit'
        | 'Annie Bar Sitting Front'
        | 'Annie Bar Sitting Side'
        | 'Annie Bar Standing Front 2'
        | 'Annie Bar Standing Front 3'
        | 'Annie Bar Standing Front'
        | 'Annie Bar Standing Side 2'
        | 'Annie Bar Standing Side 3'
        | 'Annie Bar Standing Side'
        | 'Annie Business Casual Standing Front 2'
        | 'Annie Business Casual Standing Front'
        | 'Annie Business Casual Standing Side 2'
        | 'Annie Business Casual Standing Side'
        | 'Annie Casual Sitting Front 2'
        | 'Annie Casual Sitting Front'
        | 'Annie Casual Sitting Side 2'
        | 'Annie Casual Sitting Side'
        | 'Annie Casual Standing Front 2'
        | 'Annie Casual Standing Front'
        | 'Annie Casual Standing Side 2'
        | 'Annie Casual Standing Side'
        | 'Annie Desk Sitting Front 2'
        | 'Annie Desk Sitting Front'
        | 'Annie Desk Sitting Side 2'
        | 'Annie Desk Sitting Side'
        | 'Annie Lounge Standing Front'
        | 'Annie Lounge Standing Side'
        | 'Annie Office Sitting Front 2'
        | 'Annie Office Sitting Front'
        | 'Annie Office Sitting Side 2'
        | 'Annie Office Sitting Side'
        | 'Annie Office Standing Front'
        | 'Annie Office Standing Side'
        | 'Annie Sofa Sitting Front 3'
        | 'Annie Sofa Sitting Front'
        | 'Annie Sofa Sitting Side 2'
        | 'Annie Sofa Sitting Side 3'
        | 'Annie Sofa Sitting Side'
        | 'Annie Sofa Sitting Front 2'
        | 'Annie Studio Pink Sitting Front'
        | 'Annie Studio Pink Sitting Side'
        | 'Annie Studio Pink Standing Front'
        | 'Annie Studio Pink Standing Side'
        | 'Armando Casual Front'
        | 'Armando Casual Side'
        | 'Armando Suit Front'
        | 'Armando Suit Side'
        | 'Armando Sweater Front 2'
        | 'Armando Sweater Front'
        | 'Armando Sweater Side 2'
        | 'Armando Sweater Side'
        | 'Artur Office Front 2'
        | 'Artur Office Front'
        | 'Artur Office Side 2'
        | 'Artur Office Side'
        | 'Artur Sofa Casual Front 2'
        | 'Artur Sofa Casual Front'
        | 'Artur Sofa Casual Side 2'
        | 'Artur Sofa Causal Side'
        | 'Aubrey Sofa Side'
        | 'Aubrey (Upper Body)'
        | 'Aubrey Night Scene Front'
        | 'Aubrey Outdoor Sport Front'
        | 'Aubrey Outdoor Sport Side'
        | 'Aubrey Sofa Front'
        | 'August Casual Front 2'
        | 'August Casual Front'
        | 'August Cool Sitting'
        | 'August Cool Style'
        | 'August Employee Front'
        | 'August Hoodies Front 2'
        | 'August Hoodies Front'
        | 'Bahar (Upper Body)'
        | 'Bahar Business Front'
        | 'Bahar Business Side'
        | 'Bahar Business Sitting Front'
        | 'Bahar Business Sitting Side'
        | 'Bahar Casual Sitting Front 2'
        | 'Bahar Casual Sitting Front'
        | 'Bahar Casual Sitting Side 2'
        | 'Bahar Casual Sitting Side'
        | 'Bahar Denim Casual Front'
        | 'Bahar Denim Casual Side'
        | 'Bahar Denim Front'
        | 'Bahar Denim Side'
        | 'Bahar Jacket Casual Front'
        | 'Bahar Jacket Casual Side'
        | 'Bahar Jacket Front'
        | 'Bahar Jacket Side'
        | 'Bahar Suit Front'
        | 'Bahar Suit Side'
        | 'Bastien in Blue T-shirt'
        | 'Bastien in Blue blazer'
        | 'Bastien in Blue shirt'
        | 'Bastien in White shirt'
        | 'Blanka Lounge Front'
        | 'Blanka Lounge Side'
        | 'Blanka Outdoor Business Front'
        | 'Blanka Outdoor Business Side'
        | 'Blanka Outdoor Reading Front'
        | 'Blanka Outdoor Reading Side'
        | 'Blanka Picnic Front'
        | 'Blanka Picnic Side'
        | 'Bojan Business Training Front 2'
        | 'Bojan Business Training Front'
        | 'Bojan Business Training Side 2'
        | 'Bojan Business Training Side'
        | 'Bojan Lounge Front 2'
        | 'Bojan Lounge Front'
        | 'Bojan Lounge Side 2'
        | 'Bojan Lounge Side'
        | 'Bojan Sport Front 2'
        | 'Bojan Sport Front'
        | 'Bojan Sport Side 2'
        | 'Bojan Sport Side'
        | 'Bradley in Blue Polo (Front)'
        | 'Bradley in Blue Polo (Left)'
        | 'Bradley in Blue Polo (Right)'
        | 'Bradley in Blue Shirt (Front)'
        | 'Bradley in Blue Shirt (Left)'
        | 'Bradley in Blue Shirt (Right)'
        | 'Bradley in Doctor (Front)'
        | 'Bradley in Doctor (Left)'
        | 'Bradley in Doctor (Right)'
        | 'Brandon in Grey Suit'
        | 'Brandon in Blue Sweater'
        | 'Brandon in White Shirt'
        | 'Brandon Business Sitting Front'
        | 'Brandon Business Sitting Side'
        | 'Brandon Business Standing Front'
        | 'Brandon Business Standing Side'
        | 'Brandon Casual Sitting Front'
        | 'Brandon Casual Sitting Side'
        | 'Brandon Kitchen Standing Front'
        | 'Brandon Kitchen Standing Side'
        | 'Brandon Lobby Sitting Front'
        | 'Brandon Lobby Sitting Side'
        | 'Brandon Lobby Standing Front'
        | 'Brandon Lobby Standing Side'
        | 'Brandon Office Sitting Front'
        | 'Brandon Office Sitting Side'
        | 'Brandon Office Standing Front'
        | 'Brandon Office Standing Side'
        | 'Brandon Sofa Sitting Front'
        | 'Brandon Sofa Sitting Side'
        | 'Brent Office Front 2'
        | 'Brent Office Front'
        | 'Brent Office Side 2'
        | 'Brent Office Side'
        | 'Brent Sofa Front 2'
        | 'Brent Sofa Front'
        | 'Brent Sofa Side 2'
        | 'Brent Sofa Side'
        | 'Briana in White shirt'
        | 'Briana in Striped T-shirt'
        | 'Briana in Brown suit'
        | 'Bruce'
        | 'Bryan Casual Front'
        | 'Bryan Casual Side'
        | 'Bryan Fitness Coach'
        | 'Bryan Tech Expert'
        | 'Bryan Plaid Shirt Front'
        | 'Bryan Plaid Shirt Side'
        | 'Bryan Suit Front'
        | 'Bryan Suit Side'
        | 'Bryce in Black t-shirt'
        | 'Bryce in Blue blazer'
        | 'Bryce in Blue shirt'
        | 'Bryce in Grey blazer'
        | 'Bryce in White shirt'
        | 'Byron Business Front 2'
        | 'Byron Business Front'
        | 'Byron Business Side 2'
        | 'Byron Business Side'
        | 'Byron Business Sitting Front'
        | 'Byron Business Sitting Size'
        | 'Byron Casual Front 2'
        | 'Byron Casual Front'
        | 'Byron Casual Side 2'
        | 'Byron Casual Side'
        | 'Byron Casual Sitting Front'
        | 'Byron Casual Sitting Side'
        | 'Byron Jacket Front'
        | 'Byron Jacket Side'
        | 'Byron Sitting Front'
        | 'Byron Sitting Side'
        | 'Byron Suit Front'
        | 'Byron Suit Side'
        | 'Candace in Beige Dress (Front)'
        | 'Candace in Beige Dress (Left)'
        | 'Candace in Beige Dress (Right)'
        | 'Candace in Doctor (Front)'
        | 'Candace in Doctor (Left)'
        | 'Candace in Doctor (Right)'
        | 'Candace in Pink Blazer (Front)'
        | 'Candace in Pink Blazer (Right)'
        | 'Candace in Pink Blazer  (Left)'
        | 'Carla in Doctor (Front)'
        | 'Carla in Doctor (Left)'
        | 'Carla in Doctor (Right)'
        | 'Carla in Dress  (Left)'
        | 'Carla in Shirt (Front)'
        | 'Carla in Shirt (Left)'
        | 'Carla in Shirt (Right)'
        | 'Carlotta BizTalk Front'
        | 'Carlotta BizTalk Side'
        | 'Carlotta Business Front'
        | 'Carlotta Business Side'
        | 'Carlotta Casual Front'
        | 'Carlotta Casual Side'
        | 'Carlotta Casual Sitting Front'
        | 'Carlotta Casual Sitting Side'
        | 'Carlotta Half Front'
        | 'Carlotta Pink Jumpsuit Front 2'
        | 'Carlotta Pink Jumpsuit Front'
        | 'Carlotta Pink Jumpsuit Side 2'
        | 'Carlotta Pink Jumpsuit Side'
        | 'Carlotta Pink Jumpsuit Sitting Front'
        | 'Carlotta Pink Jumpsuit Sitting Side'
        | 'Caroline Business Sitting Front'
        | 'Caroline Business Sitting Side'
        | 'Caroline Business Standing Front'
        | 'Caroline Business Standing Side'
        | 'Caroline in Blue Suit'
        | 'Caroline in White Shirt'
        | 'Caroline in Yellow Casual'
        | 'Caroline in Yellow Skirt'
        | 'Caroline Casual Sitting Front'
        | 'Caroline Casual Sitting Side'
        | 'Caroline Kitchen Standing Front'
        | 'Caroline Kitchen Standing Side'
        | 'Caroline Lobby Sitting Front'
        | 'Caroline Lobby Sitting Side'
        | 'Caroline Lobby Standing Front'
        | 'Caroline Lobby Standing Side'
        | 'Caroline Office Sitting Front'
        | 'Caroline Office Sitting Side'
        | 'Caroline Office Standing Front'
        | 'Caroline Office Standing Side'
        | 'Caroline Sofa Sitting Front'
        | 'Caroline Sofa Sitting Side'
        | 'Chad in Blue Shirt (Front)'
        | 'Chad in Blue Shirt (Left)'
        | 'Chad in Blue Shirt (Right)'
        | 'Chad in Grey Shirt (Front)'
        | 'Chad in Grey Shirt (Left)'
        | 'Chad in Grey Shirt (Right)'
        | 'Chad in Maintenance (Front)'
        | 'Chad in Maintenance (Left)'
        | 'Chad in Maintenance (Right)'
        | 'Chakir in Headscarf (Front)'
        | 'Chakir in Headscarf (Left)'
        | 'Chakir in Headscarf (Right)'
        | 'Chakir in White Shirt (Front)'
        | 'Chakir in White Shirt (Right)'
        | 'Chakir in white Shirt (Left)'
        | 'Chloe (Upper Body)'
        | 'Chloe Lounge Front'
        | 'Chloe Lounge Side'
        | 'Chloe Outdoor Side'
        | 'Colin Business Front 2'
        | 'Colin Business Front'
        | 'Colin Jacket Front'
        | 'Colin Sitting Cool Style 2'
        | 'Colin Sitting Cool Style'
        | 'Colin Suit Front'
        | 'Colin Sweater Front'
        | 'Colin Sweater Sitting Front'
        | 'Connie Business Front'
        | 'Connie Business Sitting Front'
        | 'Connie Casual Sitting Front'
        | 'Connie Casual Sitting Side'
        | 'Connie Education Front'
        | 'Connie Education Side 2'
        | 'Connie Education Side'
        | 'Connie Skirt Front'
        | 'Connie Skirt Side'
        | 'Connie Skirt Sitting Front'
        | 'Connie Skirt Sitting Side'
        | 'Connie Suit Front'
        | 'Conrad House Front'
        | 'Conrad House Side'
        | 'Conrad Sofa Front'
        | 'Conrad Sofa Side'
        | 'Crisanto Business Front'
        | 'Crisanto Business Side'
        | 'Crisanto Chef Front 2'
        | 'Crisanto Chef Front'
        | 'Crisanto Chef Side 2'
        | 'Crisanto Chef Side'
        | 'Crisanto Chef Sitting '
        | 'Crisanto Education Front'
        | 'Crisanto Education Side'
        | 'Crisanto Nurse Front 2'
        | 'Crisanto Nurse Front'
        | 'Crisanto Nurse Side 2'
        | 'Crisanto Nurse Side'
        | 'Crisanto Nurse Sitting Front'
        | 'Crisanto Nurse Sitting Side'
        | 'Crisanto Suit Front'
        | 'Crisanto Suit Side'
        | 'Daphne in Blue blazer'
        | 'Daphne in Blue shirt'
        | 'Daphne in Grey blazer'
        | 'Daphne in Grey suit'
        | 'Daphne in Pink hoodie'
        | 'Daphne in White t-shirt'
        | 'Darnell in Blue Shirt (Front)'
        | 'Darnell in Blue Shirt (Left)'
        | 'Darnell in Blue Shirt (Right)'
        | 'Darnell in Bordeaux Polo (Front)'
        | 'Darnell in Bordeaux Polo (Left)'
        | 'Darnell in Bordeaux Polo (Right)'
        | 'Darnell in Doctor (Front)'
        | 'Darnell in Doctor (Left)'
        | 'Darnell in Doctor (Right)'
        | 'Derya Indoor Front 2'
        | 'Derya Indoor Front'
        | 'Derya Indoor Side 2'
        | 'Derya Indoor Side'
        | 'Derya Office Front 2'
        | 'Derya Office Front'
        | 'Derya Office Side 2'
        | 'Derya Office Side'
        | 'Dexter Casual Front'
        | 'Dexter Casuat Side'
        | 'Dexter Doctor Sitting'
        | 'Dexter Doctor Standing'
        | 'Dexter Lawyer'
        | 'Dexter Suit Front'
        | 'Dexter Suit Side'
        | 'Dexter Winter Coat Front'
        | 'Dexter Winter Coat Side'
        | 'Diana in Black Camisole Top'
        | 'Diana in Striped Shirt'
        | 'Diana in White Shirt'
        | 'Diora in Blue blazer'
        | 'Diora in Green blazer'
        | 'Diora in Pink shirt'
        | 'Diora in White shirt'
        | 'Diora in White t-shirt'
        | 'Diran Casual Front'
        | 'Diran Casual Side'
        | 'Diran Jacket Front'
        | 'Diran Jacket Side'
        | 'Diran Macbook Business Front'
        | 'Diran Macbook Business Side'
        | 'Diran Macbook Casual Front'
        | 'Diran Macbook Casual Side'
        | 'Diran Macbook Sitting Front 2'
        | 'Diran Macbook Sitting Front'
        | 'Diran Macbook Sitting Side 2'
        | 'Diran Macbook Sitting Side'
        | 'Diran Suit Front'
        | 'Diran Suit Side'
        | 'Diran iPad Front'
        | 'Diran iPad Side'
        | 'Diran iPad Sitting Front'
        | 'Diran iPad Sitting Side'
        | 'Elenora Casual Front'
        | 'Elenora Casual Side'
        | 'Elenora Fitness Coach'
        | 'Elenora Fitness Coach 2'
        | 'Elenora Tech Expert'
        | 'Elenora Suit Front'
        | 'Elenora Suit Side'
        | 'Elenora YellowDress Front'
        | 'Elenora YellowDress Side'
        | 'Emanuel Office Front'
        | 'Emanuel Office Side'
        | 'Emanuel Sofa Front'
        | 'Emanuel Sofa Side'
        | 'Emery in Blue blazer'
        | 'Emery in Blue suit'
        | 'Emery in Green shirt'
        | 'Emery in Khaki blazer'
        | 'Emery in Red blazer'
        | 'Emery in White t-shirt'
        | 'Emilia Outdoor Business Front'
        | 'Emilia Outdoor Business Side'
        | 'Emilia Outdoor Yoga Front 2'
        | 'Emilia Outdoor Yoga Front'
        | 'Emilia Outdoor Yoga Side'
        | 'Emilia Picnic Front'
        | 'Emilia Picnic Side'
        | 'Edward in Black Suit'
        | 'Edward'
        | 'Edward in Blue Shirt'
        | 'Esmond in Black coat'
        | 'Esmond in Black shirt'
        | 'Esmond in Blue blazer'
        | 'Esmond in Blue suit'
        | 'Esmond in Grey sweater'
        | 'Fernando Business Indoor Front'
        | 'Fernando Business Indoor Side'
        | 'Fernando OutdoorChair Front 2'
        | 'Fernando Outdoor Chair Front'
        | 'Fernando Outdoor Chair Side'
        | 'Fernando Outdoor Front'
        | 'Fernando Outdoor Side'
        | 'Fernando Outdoor Table Front'
        | 'Fernando Outdoor Table Side'
        | 'Fina Business Sitting Front'
        | 'Fina Business Sitting Side'
        | 'Fina Casual Front 2'
        | 'Fina Casual Front'
        | 'Fina Casual Side 2'
        | 'Fina Casual Side'
        | 'Fina Casual Sitting Front'
        | 'Fina Casual Sitting Side'
        | 'Fina Denim Front'
        | 'Fina Denim Side'
        | 'Fina Denim Sitting Front'
        | 'Fina Employee Front'
        | 'Fina Employee Side'
        | 'Fina Suit Front'
        | 'Fina Suit Side'
        | 'Fina Support Front'
        | 'Fina Support Side'
        | 'Florin Business Sitting Front'
        | 'Florin Business Sitting Side'
        | 'Florin Maintain Front 2'
        | 'Florin Maintain Front'
        | 'Florin Maintain Side 2'
        | 'Florin Maintain Side'
        | 'Florin Maintain Siiting Front'
        | 'Florin Maintain Siiting Side'
        | 'Florin Suit Front 2'
        | 'Florin Suit Front'
        | 'Florin Suit Side 2'
        | 'Florin Suit Side'
        | 'Francis in Blazer (Front)'
        | 'Francis in Blazer (Left)'
        | 'Francis in Blazer (Right)'
        | 'Francis in Doctor (Front)'
        | 'Francis in Doctor (Left)'
        | 'Francis in Doctor (Right)'
        | 'Francis in Shirt (Front)'
        | 'Francis in Shirt (Left)'
        | 'Francis in Shirt (Right)'
        | 'Fred in Blue Long Shirt (Front)'
        | 'Fred in Blue Long Shirt (Left)'
        | 'Fred in Blue Long Shirt (Right)'
        | 'Fred in Blue Short Shirt (Front)'
        | 'Fred in Blue Short Shirt (Left)'
        | 'Fred in Blue Short Shirt (Right)'
        | 'Freja in Blue blazer'
        | 'Freja in Grey blazer'
        | 'Freja in White blazer'
        | 'Freja in White polo shirt'
        | 'Freja in White shirt'
        | 'Gabriel in Black Sweatshirt'
        | 'Gabriel in Blue Suit'
        | 'Gabriel in Gray Shirt'
        | 'Gala Bedroom Front'
        | 'Gala Business Sofa Front 2'
        | 'Gala Business Sofa Front 3'
        | 'Gala Business Sofa Front'
        | 'Gala Business Sofa Side 2'
        | 'Gala Business Sofa Side 3'
        | 'Gala Business Sofa Side'
        | 'Gala Casual Sofa with iPad Front'
        | 'Gala Casual Sofa with iPad Side 2'
        | 'Gala Casual Sofa with iPad Side'
        | 'Gala Office Front'
        | 'Gala Office Side'
        | 'Gala Sofa Front 2'
        | 'Gala Sofa Front 3'
        | 'Gala Sofa Front'
        | 'Gala Sofa Side 2'
        | 'Gala Sofa Side 3'
        | 'Gala Sofa Side'
        | 'Georgia (Upper Body)'
        | 'Georgia Casual Front'
        | 'Georgia Casual Side'
        | 'Georgia Office Front'
        | 'Georgia Office Side'
        | 'Gerardo Sofa Side'
        | 'Gerardo Indoor Front'
        | 'Gerardo Indoor Side'
        | 'Gerardo Night Scene Front 2'
        | 'Gerardo Night Scene Front'
        | 'Gerardo Outdoor Sport Front'
        | 'Gerardo Outdoor Sport Side'
        | 'Gerardo Sofa Front'
        | 'Giulia Office Front 2'
        | 'Giulia Office Front'
        | 'Giulia Office Side 2'
        | 'Giulia Office Side'
        | 'Giulia Sofa Front'
        | 'Giulia Sofa Side'
        | 'Giulia Sofa  Front 2'
        | 'Giulia Sofa  Side 3'
        | 'Hada Casual Cup Front'
        | 'Hada Casual Cup Side'
        | 'Hada Casual Front'
        | 'Hada Casual Side'
        | 'Hada Casual Sitting Front 2'
        | 'Hada Casual Sitting Front'
        | 'Hada Casual Sitting Side 2'
        | 'Hada Casual Sitting Side'
        | 'Hada LivelyGestures Front'
        | 'Hada LivelyGestures Side'
        | 'Hada LivelyGestures Sitting Front'
        | 'Hada LivelyGestures Sitting Side'
        | 'Hada Suit Front 2'
        | 'Hada Suit Front'
        | 'Hada Suit Side 2'
        | 'Hada Suit Side'
        | 'Hada Suit Sitting Front 2'
        | 'Hada Suit Sitting Front'
        | 'Hada Suit Sitting Side'
        | 'Harrison in Black Suit'
        | 'Harrison in Gray Suit'
        | 'Harrison in White Shirt'
        | 'Ian in Beige Shirt'
        | 'Ian in Black Jacket'
        | 'Ian in Gray Suit'
        | 'Ida Lounge Front 2'
        | 'Ida Lounge Front'
        | 'Ida Lounge Side 2'
        | 'Ida Lounge Side'
        | 'Ida Sofa Front 2'
        | 'Ida Sofa Front'
        | 'Ida Sofa Side 2'
        | 'Ida Sofa Side'
        | 'Iker in Almond sweater'
        | 'Iker in Black blazer'
        | 'Iker in Blue shirt'
        | 'Iker in Grey blazer'
        | 'Iker in White shirt'
        | 'Imelda BizTalk Front'
        | 'Imelda BizTalk Side'
        | 'Imelda Business Front'
        | 'Imelda Business Side'
        | 'Imelda Business Sitting Front 2'
        | 'Imelda Business Sitting Front'
        | 'Imelda Business Sitting Side 2'
        | 'Imelda Business Sitting Side'
        | 'Imelda Casual Front'
        | 'Imelda Casual Side'
        | 'Imelda Coat Front 2'
        | 'Imelda Coat Front'
        | 'Imelda Coat Side'
        | 'Imelda Customer Support Front'
        | 'Imelda Customer Support Side'
        | 'Imelda Full Side '
        | 'Imelda Suit Front'
        | 'Imelda Suit Side'
        | 'Ivan in Black Suit'
        | 'Ivan in Gary Suit'
        | 'Ivan in Suit'
        | 'Ivan in Sweater'
        | 'Jason in Black Jacket'
        | 'Jason in Blue Suit'
        | 'Jason in Gray Shirt'
        | 'Javi Intense Sitting Speaking Front'
        | 'Javi Intense Sitting Speaking Side'
        | 'Javi Intense Sitting Speaking '
        | 'Javi Intense Speaking Front 2'
        | 'Javi Intense Speaking Front 3'
        | 'Javi Intense Speaking Front'
        | 'Javi Intense Speaking Side 3'
        | 'Javi Intense Speaking Side'
        | 'Javi in Passionate Gestures 2'
        | 'Javi in Passionate Gestures 3'
        | 'Javi in Passionate Gestures'
        | 'Jin (Upper Body)'
        | 'Jin Blue Casual Front'
        | 'Jin Blue Casual Side'
        | 'Jin Business Café Mode Front'
        | 'Jin Business Café Mode Side'
        | 'Jin Business Sitting Front'
        | 'Jin Business Sitting Side'
        | 'Jin Casual Café Mode Front'
        | 'Jin Casual Café Mode Side'
        | 'Jin Casual Sitting Front'
        | 'Jin Casual Sitting Side'
        | 'Jin Suit Front'
        | 'Jin Suit Side'
        | 'Jin Vest Front'
        | 'Jin Vest Side'
        | 'Jin Vest Sitting Front'
        | 'Jin Vest Sitting Side'
        | 'Jin in Education Front'
        | 'Jin in Education Side'
        | 'Jinwoo in Black vest'
        | 'Jinwoo in Blue suit'
        | 'Jinwoo in White T-shirt'
        | 'Jinwoo in White shirt'
        | 'Jinwoo in White suit'
        | 'Jocelyn Office Front 2'
        | 'Jocelyn Office Front'
        | 'Jocelyn Office Side 2'
        | 'Jocelyn Office Side'
        | 'Jocelyn Sofa Front 2'
        | 'Jocelyn Sofa Front'
        | 'Jocelyn Sofa Side 2'
        | 'Jocelyn Sofa Side'
        | 'Joel Couch Front'
        | 'Joel Couch Side'
        | 'Joel Gym Front'
        | 'Joel Gym Side'
        | 'Joel Mountain Front'
        | 'Joel Mountain Side'
        | 'Jonas (Upper Body)'
        | 'Jonas Gym Front 2'
        | 'Jonas Gym Front'
        | 'Jonas Gym Side 2'
        | 'Jonas Gym Side '
        | 'June Office Front 2'
        | 'Juan Office Front'
        | 'Juan Office Side 2'
        | 'Juan Office Side'
        | 'Juan Sofa Front 2'
        | 'Juan Sofa Front'
        | 'Juan Sofa Side 2'
        | 'Juan Sofa Side'
        | 'Judita (Upper Body)'
        | 'Judita Yoga Front 2'
        | 'Judita Yoga Front'
        | 'Judita Yoga Side 2'
        | 'Judita Yoga Side'
        | 'Judith (Upper Body)'
        | 'Judith Business Front 2'
        | 'Judith Business Front'
        | 'Judith Business Sitting Front'
        | 'Judith Casual Front'
        | 'Judith Casual Sitting Front'
        | 'Judith Suit Front'
        | 'Judy Business Front'
        | 'Judy Business Side'
        | 'Judy Business Sitting Front'
        | 'Judy Casual Front'
        | 'Judy Casual Side'
        | 'Judy Casual Sitting'
        | 'Judy ConfidentSpeaking Front'
        | 'Judy ConfidentSpeaking Side'
        | 'Judy Doctor Sitting'
        | 'Judy Doctor Standing'
        | 'Judy Lawyer'
        | 'Judy NurseSitting Front 2'
        | 'Judy NurseSitting Front'
        | 'Judy NurseSitting Side 2'
        | 'Judy NurseSitting Side'
        | 'Judy Nurse Front 2'
        | 'Judy Nurse Front'
        | 'Judy Nurse OnDuty Front'
        | 'Judy Nurse OnDuty Side'
        | 'Judy Nurse Side 2'
        | 'Judy Nurse Side'
        | 'Judy Suit Front'
        | 'Judy Suit Side'
        | 'Judy Teacher Sitting'
        | 'Judy HR'
        | 'Judy Teacher Standing'
        | 'June (Upper Body)'
        | 'June HR'
        | 'June Office Front'
        | 'June Office Side 2'
        | 'June Office Side'
        | 'June Sofa Casual Front 2'
        | 'June Sofa Casual Front'
        | 'June Sofa Casual Side 2'
        | 'June Sofa Casual Side'
        | 'Justin in Black Shirt'
        | 'Justin in Black Suit'
        | 'Justin in White Shirt'
        | 'Justo Business Front 2'
        | 'Justo Business Front'
        | 'Justo Business Side 2'
        | 'Justo Business Side'
        | 'Justo Casual Sitting'
        | 'Justo CustomerService Front 2'
        | 'Justo CustomerService Front'
        | 'Justo CustomerService Side'
        | 'Justo CustomerService Sitting Front'
        | 'Justo CustomerService Sitting Side'
        | 'Justo EmployeeTraining Front'
        | 'Justo Suit Casual Front '
        | 'Justo Suit Casual Side '
        | 'Karolin in Gray Suit'
        | 'Karolin in Sweatshirt'
        | 'Karolin in Black Suit'
        | 'Kavya Indoor Front'
        | 'Kavya Indoor Side'
        | 'Kavya Outdoor Side'
        | 'Kavya Outdoor Sport Front'
        | 'Kavya Outdoor Sport Side'
        | 'Kavya Sofa Front'
        | 'Kavya Sofa Side'
        | 'Kelly in Blue Shirt  (Front)'
        | 'Kelly in Blue Shirt (Left)'
        | 'Kelly in Blue Shirt (Right)'
        | 'Kelly in Doctor (Front)'
        | 'Kelly in Doctor (Left)'
        | 'Kelly in Doctor (Right)'
        | 'Kelly in Pink Shirt (Front)'
        | 'Kelly in Pink Shirt (Left)'
        | 'Kelly in Pink Shirt (Right)'
        | 'Klara in Black blazer'
        | 'Klara in Blue blazer'
        | 'Klara in Blue dress'
        | 'Klara in Pink shirt'
        | 'Klara in White blazer'
        | 'Klara in White shirt'
        | 'Kristin in Lace Dress'
        | 'Kristin in V-neck Shirt'
        | 'Kristin in Black Suit'
        | 'Leos Office Front 2'
        | 'Leos Office Front'
        | 'Leos Office Side 2'
        | 'Leos Office Side'
        | 'Leos Sofa Front 2'
        | 'Leos Sofa Front'
        | 'Leos Sofa Side 2'
        | 'Leos Sofa Side'
        | 'Leszek Lounge Front'
        | 'Leszek Lounge Side'
        | 'Leszek Outdoor Business Front'
        | 'Leszek Outdoor Business Side'
        | 'Leszek Outdoor Casual Front'
        | 'Leszek Outdoor Casual Side'
        | 'Leszek Sofa Front'
        | 'Leszek Sofa Side'
        | 'Leah'
        | 'Leah in Black Suit'
        | 'Lina Casual Front 2'
        | 'Lina Casual Front'
        | 'Lina Casual Side 2'
        | 'Lina Casual Side'
        | 'Lina Casual Sitting Front'
        | 'Lina Casual Sitting Side'
        | 'Lina Dress Front'
        | 'Lina Dress Side 2'
        | 'Lina Dress Side'
        | 'Lina Dress Sitting Front'
        | 'Lina Dress Sitting Side'
        | 'Lina Sweater Front 2'
        | 'Lina Sweater Front'
        | 'Lina Sweater Side 2'
        | 'Lina Sweater Side'
        | 'Lina Sweater Sitting Front 2'
        | 'Lina Sweater Sitting Front'
        | 'Lina Sweater Sitting Side 2'
        | 'Lina Sweater Sitting Side'
        | 'Lisa'
        | 'Luca'
        | 'Lucien in Black coat'
        | 'Lucien in Black polo-shirt'
        | 'Lucien in Blue blazer'
        | 'Lucien in Blue shirt'
        | 'Lucien in Grey blazer'
        | 'Lucien in White shirt'
        | 'Luke in Brown Suit'
        | 'Luke in Yellow Jacket'
        | 'Luke in Blue Suit'
        | 'Marcus (Upper Body)'
        | 'Marcus Café Front 2'
        | 'Marcus Café Front'
        | 'Marcus Café Side 2'
        | 'Marcus Café Side'
        | 'Marcus Casual Front'
        | 'Marcus Casual Side'
        | 'Marcus Casual Sitting Front 2'
        | 'Marcus Casual Sitting Front'
        | 'Marcus Casual Sitting Side 2'
        | 'Marcus Casual Sitting Side'
        | 'Marcus Denim Jacket Front'
        | 'Marcus Denim Jacket Side'
        | 'Marcus Education Front'
        | 'Marcus Education Side'
        | 'Marcus Sitting Front'
        | 'Marcus Sitting Side'
        | 'Marcus Suit Front'
        | 'Marcus Suit Side'
        | 'Maria in Suit'
        | 'Maria in Sweater'
        | 'Maria in Black Suit'
        | 'Martina Office Front 2'
        | 'Martina Office Front'
        | 'Martina Office Side 2'
        | 'Martina Office Side'
        | 'Martina Sofa Front 2'
        | 'Martina Sofa Front'
        | 'Martina Sofa Side 2'
        | 'Martina Sofa Side'
        | 'Masha Office Front 2'
        | 'Masha Office Front'
        | 'Masha Office Side 2'
        | 'Masha Office Side'
        | 'Masha Sofa Casual Front 2'
        | 'Masha Sofa Casual Front'
        | 'Masha Sofa Casual Side 2'
        | 'Masha Sofa Casual Side'
        | 'Mason in Blue Suit'
        | 'Mason in White Shirt'
        | 'Mason in Blue Sweater'
        | 'Matteo Office Front 2'
        | 'Matteo Office Front'
        | 'Matteo Office Side 2'
        | 'Matteo Office Side'
        | 'Matteo Sofa Front 2'
        | 'Matteo Sofa Front'
        | 'Matteo Sofa Side 2'
        | 'Matteo Sofa Side'
        | 'Max (Upper Body)'
        | 'Max Indoor Front'
        | 'Max Indoor Side'
        | 'Max Outdoor Sport Front'
        | 'Max Outdoor Sport Side'
        | 'Milena Office Front 2'
        | 'Milena Office Front'
        | 'Milena Office Side 2'
        | 'Milena Office Side'
        | 'Milena Sofa Front 2'
        | 'Milena Sofa Front'
        | 'Milena Sofa Side 2'
        | 'Milena Sofa Side'
        | 'Miles (Upper Body)'
        | 'Miles Outdoor Front'
        | 'Miles Outdoor Side'
        | 'Miles Sofa Front 2'
        | 'Miles Sofa Front'
        | 'Miles Sofa Side 2'
        | 'Miles Sofa Side'
        | 'Minho in Blue blazer'
        | 'Minho in Blue shirt'
        | 'Minho in Green polo-shirt'
        | 'Minho in Khaki jacket'
        | 'Minho in White shirt'
        | 'Minho in White t-shirt'
        | 'Mireia Business Indoor Front'
        | 'Mireia Business Indoor Side'
        | 'Mireia Outdoor Chair Front'
        | 'Mireia Outdoor Front'
        | 'Mireia Outdoor Side'
        | 'Mireia Outdoor Table Front'
        | 'Mireia Outdoor Table Side'
        | 'Miyu Office Front 2'
        | 'Miyu Office Front'
        | 'Miyu Office Side 2'
        | 'Miyu Office Side'
        | 'Miyu Sofa Business Front'
        | 'Miyu Sofa Business Side'
        | 'Miyu Sofa Casual Front 2'
        | 'Miyu Sofa Casual Front'
        | 'Miyu Sofa Casual Side 2 '
        | 'Miyu Sofa Casual Side'
        | 'Nadim in Black blazer'
        | 'Nadim in Blue blazer'
        | 'Nadim in Blue jacket'
        | 'Nadim in Puffer vest'
        | 'Nadim in White shirt'
        | 'Neil in Black Shirt'
        | 'Neil in Black Suit '
        | 'Neil in Yellow Jacket'
        | 'Nico'
        | 'Noah Lobby Front 2'
        | 'Noah Lobby Front'
        | 'Noah Lobby Side 2'
        | 'Noah Lobby Side'
        | 'Noah Office Front 2'
        | 'Noah Office Front'
        | 'Noah Office Side 2'
        | 'Noah Office Side'
        | 'Noah Sofa Front 2'
        | 'Noah Sofa Front '
        | 'Noah Sofa Side 2'
        | 'Noah Sofa Side'
        | 'Nour in Black blazer'
        | 'Nour in Brown dress'
        | 'Nour in Grey hoodie'
        | 'Nour in Sporty vest'
        | 'Nour in White shirt'
        | 'Odelia in Blue Suit'
        | 'Odelia in Red Dress '
        | 'Odelia in Yellow Suit'
        | 'Onat (Upper Body)'
        | 'Onat Casual Front'
        | 'Onat Casual Side'
        | 'Onat Casual Sitting Front'
        | 'Onat Casual Sitting Side'
        | 'Onat Macbook Front 2'
        | 'Onat Macbook Front'
        | 'Onat Macbook Side 2'
        | 'Onat Macbook Side'
        | 'Onat Suit Front'
        | 'Onat Suit Side'
        | 'Onat Suit Sitting Front'
        | 'Onat Suit Sitting Side'
        | 'Onat iPad Front'
        | 'Onat iPad Side'
        | 'Onat iPad Sitting Front'
        | 'Onat iPad Sitting Side'
        | 'Oxana (Upper Body)'
        | 'Oxana Gym Front 2'
        | 'Oxana Gym Front'
        | 'Oxana Gym Side 2'
        | 'Oxana Gym Side'
        | 'Oxana Office Front 2'
        | 'Oxana Office Front'
        | 'Oxana Office Side 2'
        | 'Oxana Office Side'
        | 'Oxana Sofa Front 2'
        | 'Oxana Sofa Front'
        | 'Oxana Sofa Side 2'
        | 'Oxana Sofa Side'
        | 'Oxana Yoga Front 2'
        | 'Oxana Yoga Front'
        | 'Oxana Yoga Side 2'
        | 'Oxana Yoga Side'
        | 'Patrizio Business Training Front'
        | 'Patrizio Business Training Side'
        | 'Patrizio Office Front'
        | 'Patrizio Office Side 2'
        | 'Patrizio Office Side'
        | 'Patrizio Sofa Front'
        | 'Patrizio Sofa Side'
        | 'Piper Business Sofa Front'
        | 'Piper Business Sofa Side'
        | 'Piper Education Front'
        | 'Piper Education Side'
        | 'Rasmus Lounge Front 2'
        | 'Rasmus Lounge Front'
        | 'Rasmus Lounge Side 2'
        | 'Rasmus Lounge Side'
        | 'Rasmus Sofa Front 2'
        | 'Rasmus Sofa Front'
        | 'Rasmus Sofa Side 2'
        | 'Rasmus Sofa Side'
        | 'Raul (Upper Body)'
        | 'Raul Business Sofa Front 2'
        | 'Raul Business Sofa Front'
        | 'Raul Business Sofa Side 2'
        | 'Raul Business Sofa Side'
        | 'Raul Casual Sofa Front 2'
        | 'Raul Casual Sofa Front'
        | 'Raul Casual Sofa Side 2'
        | 'Raul Casual Sofa Side'
        | 'Raul Casual Sofa no iPad Front'
        | 'Raul Casual Sofa no iPad Side'
        | 'Raul Casual Sofa with iPad Front'
        | 'Raul Casual Sofa with iPad Side'
        | 'Raul Office Front 2'
        | 'Raul Office Front'
        | 'Raul Office Side'
        | 'Raul Sofa Front 2'
        | 'Raul Sofa Front'
        | 'Raul Sofa Side 2'
        | 'Raul Sofa Side'
        | 'Rebecca'
        | 'Ren (Upper Body)'
        | 'Ren Office Front 2'
        | 'Ren Office Front'
        | 'Ren Office Side 2'
        | 'Ren Office Side'
        | 'Ren Sofa Business Front'
        | 'Ren Sofa Business Side'
        | 'Ren Sofa Casual Front 2'
        | 'Ren Sofa Casual Front'
        | 'Ren Sofa Casual Side 2 '
        | 'Ren Sofa Casual Side'
        | 'Riley (Upper Body)'
        | 'Riley Casual Front'
        | 'Riley Casual Side'
        | 'Riley Office Front'
        | 'Riley Office Side'
        | 'Roman Outdoor Sport Front'
        | 'Roman Outdoor Sport Side'
        | 'Sabine Office Front 2'
        | 'Sabine Office Front'
        | 'Sabine Office Side'
        | 'Sabine Sofa Side'
        | 'Salma in headscarf (Front)'
        | 'Salma in headscarf (Left)'
        | 'Salma in headscarf (Right)'
        | 'Santa Avatar Present Standing '
        | 'Santa Avatar Sitting 2'
        | 'Santa Avatar Sitting'
        | 'Santa Avatar Sitting Side'
        | 'Santa Avatar Standing'
        | 'Santa Fireplace Front'
        | 'Santa Fireplace Side'
        | 'Saskia in Blue blazer'
        | 'Saskia in Blue shirt'
        | 'Saskia in Green blazer'
        | 'Saskia in Grey vest'
        | 'Saskia in White blazer'
        | 'Scarlett Couch Front 2'
        | 'Scarlett Couch Front'
        | 'Scarlett Couch Side 2'
        | 'Scarlett Couch Side'
        | 'Scarlett Fireplace Front'
        | 'Scarlett Fireplace Side'
        | 'Scarlett Hall Front'
        | 'Scarlett Hall Side'
        | 'Scarlett Yoga Front'
        | 'Scarlett Yoga Side'
        | 'Seema Business Front'
        | 'Seema Business Side'
        | 'Seema Business Sitting Side'
        | 'Seema Casual Front'
        | 'Seema Casual Side'
        | 'Seema Casual Sitting Front'
        | 'Seema Casual Sitting Side'
        | 'Seema Nurse Front 2'
        | 'Seema Nurse Front'
        | 'Seema Nurse Side 2'
        | 'Seema Nurse Side'
        | 'Shawn Business Front'
        | 'Shawn Business Side'
        | 'Shawn Casual Sitting Front'
        | 'Shawn Casual Sitting Side'
        | 'Shawn Sitting Front'
        | 'Shawn Sitting Side'
        | 'Shawn Suit Front'
        | 'Shawn Suit Side'
        | 'Shawn Therapist'
        | 'Shirley Business Front'
        | 'Shirley Business Side'
        | 'Shirley Casual Front 2'
        | 'Shirley Casual Front'
        | 'Shirley Casual Side'
        | 'Shirley Casual Sitting Front 2'
        | 'Shirley Casual Sitting Front'
        | 'Shirley Casual Sitting Side 2'
        | 'Shirley Casual Sitting Side'
        | 'Shirley Education Front'
        | 'Shirley Education Side 2'
        | 'Shirley Education Side'
        | 'Shirley Sitting Front'
        | 'Shirley Sitting Side'
        | 'Shirley Skirt Front'
        | 'Shirley Skirt Side'
        | 'Shirley Suit Front'
        | 'Shirley Suit Side'
        | 'Silas (Upper Body)'
        | 'Silas Customer Support'
        | 'Silas HR'
        | 'Silas Lounge Front'
        | 'Silas Lounge Side'
        | 'Silas Sofa Side 2'
        | 'Silas Sofa Side'
        | 'Sloane in Blue dress'
        | 'Sloane in Grey suit'
        | 'Sloane in Pink sweater'
        | 'Sophia in Black Shirt'
        | 'Sophia in Suit '
        | 'Sophia in White Suit'
        | 'Sophie'
        | 'Stacy in Doctor (Front)'
        | 'Stacy in Doctor (Left)'
        | 'Stacy in Doctor (Right)'
        | 'Stacy in Dress (Front)'
        | 'Stacy in Dress (Left)'
        | 'Stacy in Dress (Right)'
        | 'Stacy in Shirt (Front)'
        | 'Stacy in Shirt (Left)'
        | 'Stacy in Shirt (Right)'
        | 'Susan in Black Shirt'
        | 'Susan in Black Suit'
        | 'Susan in Suit'
        | 'Tahlia in Blue dress'
        | 'Tahlia in Blue suit'
        | 'Tahlia in Dark blue suit'
        | 'Tahlia in Red suit'
        | 'Tahlia in White shirt'
        | 'Teodor (Upper Body)'
        | 'Teodor Office Front 2'
        | 'Teodor Office Front'
        | 'Teodor Office Side 2'
        | 'Teodor Office Side'
        | 'Teodor Sofa Front 2'
        | 'Teodor Sofa Front'
        | 'Teodor Sofa Side 2'
        | 'Teodor Sofa Side'
        | 'Timothy (Upper Body)'
        | 'Timothy Casual Front'
        | 'Timothy Casual Side'
        | 'Timothy Office Front'
        | 'Timothy Office Side'
        | 'Tito Casual Front 2'
        | 'Tito Casual Front'
        | 'Tito Casual Side 2'
        | 'Tito Casual Side'
        | 'Tito Casual Sitting Front'
        | 'Tito Casual Sitting Side'
        | 'Tito Coat Front 2'
        | 'Tito Coat Front'
        | 'Tito Coat Full Side'
        | 'Tito Coat Side 2'
        | 'Tito Coat Side'
        | 'Tito Painter Front'
        | 'Tito Painter Full Side'
        | 'Tito Painter Side'
        | 'Tito Painter Sitting Front'
        | 'Tito Painter Sitting Side'
        | 'Travis in Polo Shirt'
        | 'Travis in Gray Suit'
        | 'Travis in Black Suit'
        | 'Trevor  in Plaid Shirt'
        | 'Trevor in Blue Shirt'
        | 'Trevor in Blue Suit'
        | 'Trevor in Suit'
        | 'Tuba Business Chair Front'
        | 'Tuba Business Chair Side'
        | 'Tuba Business Front'
        | 'Tuba Business Side'
        | 'Tuba Business Sofa Front'
        | 'Tuba Business Sofa Side'
        | 'Tuba Casual Front'
        | 'Tuba Casual Side'
        | 'Tuba Casual Sitting Front'
        | 'Tuba Casual Sitting Side'
        | 'Tuba Macbook Front'
        | 'Tuba Macbook Side'
        | 'Veit Office Front'
        | 'Veit Office Side'
        | 'Veit Sofa Front'
        | 'Veit Sofa Side'
        | 'Vernon Office Front 2'
        | 'Vernon Office Front'
        | 'Vernon Office Side 2'
        | 'Vernon Office Side'
        | 'Verena Office Front'
        | 'Verena Office Side'
        | 'Verena Sofa Front'
        | 'Verena Sofa Side'
        | 'Vernon (Upper Body)'
        | 'Vernon Lounge Front 2'
        | 'Vernon Lounge Side 2'
        | 'Vernon Lounge Side'
        | 'Vince (Upper Body)'
        | 'Vince Business Sofa Front'
        | 'Vince Business Training Front'
        | 'Vince Business Training Side 2'
        | 'Vince Business Training Side'
        | 'Vince Sofa Casual Front 2'
        | 'Vince Sofa Casual Front'
        | 'Vince Sofa Casual Side 2'
        | 'Vince Sofa Casual Side'
        | 'Violante Brown Suit Front 2'
        | 'Violante Brown Suit Front '
        | 'Violante Business Sitting Front'
        | 'Violante Business Sitting Side'
        | 'Violante Casual Sitting Front '
        | 'Violante Casual Sitting Side'
        | 'Violante Sport Front 2'
        | 'Violante Sport Front'
        | 'Violante Sport Side'
        | 'Violante Sport Sitting Side'
        | 'Violante Suit Front'
        | 'Vivianna in Black shirt'
        | 'Wade in Black Suit'
        | 'Wade in Black Jacket'
        | 'Wade in Gray Jacket'
        | 'Yola Active Speaking Front'
        | 'Yola Active Speaking Side'
        | 'Yola Business Front'
        | 'Yola Business Side'
        | 'Yola Calm Speaking Front'
        | 'Yola Calm Speaking Side'
        | 'Yola Casual Front'
        | 'Yola Casual Side'
        | 'Yola Employee Badge Front'
        | 'Yola Employee Badge Side'
        | 'Zosia in Blue blazer'
        | 'Zosia in Green dress'
        | 'Zosia in Khaki blazer'
        | 'Zosia in White dress'
        | 'Zosia in Yellow shirt'
        | 'Austin in Suit'
        | 'Austin in Blue Casual Suit'
        | 'Austin in Black Jacket'
        | 'Austin in Blue Suit'
        | 'Candace in Pink Blazer (Upper Body)'
        | 'Chad in Blue Shirt (Upper Body)'
        | 'Daisy in Suit'
        | 'Daisy in Shirt'
        | 'Daisy in Dress'
        | 'Daisy in T-shirt'
        | 'Francis in Blazer (Upper Body)'
        | 'Matthew'
        | 'Matthew in Suit'
        | 'Matthew in Flowery Shirt'
        | 'Matthew in Grey Sweater'
        | 'Nik in Black Shirt'
        | 'Nik in Blue Sweater'
        | 'Tyler in Casual Suit'
        | 'Tyler in Shirt'
        | 'Tyler in Suit';
    /**
     * Duration
     * @description Approximate duration in seconds (minimum 5). Suggested presets: 30, 60, or 90 seconds.
     * @example 30
     * @example 60
     * @example 90
     */
    duration?: number;
    /**
     * Orientation
     * @description Video orientation
     * @default portrait
     * @enum {string}
     */
    orientation?: 'portrait' | 'landscape';
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
    end?: number;
    /**
     * Speaker Id
     * @description Speaker identifier if diarization was enabled
     */
    speaker_id?: string;
    /**
     * Start
     * @description Start time in seconds
     */
    start?: number;
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

export interface TextVoice {
    /**
     * Prompt
     * @description The text that the avatar will speak in the video
     * @example The Tesla Cybertruck is a battery-electric full-size pickup truck manufactured by Tesla, Inc. since 2023. It was first unveiled as a prototype in November 2019, featuring a distinctive angular design composed of flat, unpainted stainless steel body panels, drawing comparisons to low-polygon computer models.
     */
    prompt: string;
    /**
     * Speed
     * @description Speed of the speech (0.5 to 2.0)
     * @default 1
     * @example 1
     * @example 1.1
     * @example 0.9
     */
    speed?: number;
    /**
     * Voice
     * @description Name of the voice to use for the avatar
     * @example Charming Charlie - Excited 🤩
     * @enum {string}
     */
    voice:
        | 'Warm Pro Narrator'
        | 'Chill Brian'
        | 'Ivy'
        | 'John Doe'
        | 'Monika Sogam'
        | 'Hope '
        | 'Archer '
        | 'Brittney'
        | 'Patrick'
        | 'David Castlemore'
        | 'Michael C'
        | 'Adam Stone '
        | 'Juniper'
        | 'Cassidy '
        | 'Jessica Anne Bogart'
        | 'Arabella'
        | 'Andrew'
        | 'Spuds Oxley '
        | 'Grace Elder'
        | 'Helen'
        | 'Canyon Rivers'
        | 'Derya - Lifelike - Excited 🤩'
        | 'Mellow Marcus'
        | 'Jack Sterling - Broadcaster 🎙️'
        | 'Brenda - UGC - 1.mp4'
        | 'Reid'
        | 'Reagan'
        | 'Terry'
        | 'Jenny'
        | 'Radio Rick'
        | 'Denise'
        | 'Tim in car - Excited 🤩'
        | 'Iskander'
        | 'Thompson'
        | 'Delicate Daisy - Excited 🤩'
        | 'Kingston'
        | 'George UGC 1'
        | 'Bold Blake'
        | 'Jane'
        | 'Expressive Evan'
        | 'Marianne - IA'
        | 'Aaron'
        | 'Modern Recipe Host - Voice 1'
        | 'Willow'
        | 'Cute Chloe - Friendly 😊'
        | 'Rafael'
        | 'June - Lifelike'
        | 'Crisp Chloe'
        | 'Slick Simon'
        | 'Nassim - Informative'
        | 'Baritone Ben'
        | 'Maxwell'
        | 'Ellie Faye - Excited 🤩'
        | 'Milani'
        | 'Feisty Fiona - Excited 🤩'
        | 'Professor Dean'
        | 'Rose - UGC - 1.mp4'
        | 'Shona'
        | 'Hudson Wilder'
        | 'Ann - IA'
        | 'Alastair Kensington'
        | 'Oxley'
        | 'Christina'
        | 'Andrew Rizz '
        | 'Peyton'
        | 'Gerardo - Outdoor'
        | 'Chloe - Lifelike'
        | 'Stephanie'
        | 'Anthony - IA'
        | 'Signal - Voice 1'
        | 'Luca'
        | 'Lisa - Voice 1'
        | 'T.W.Tucker'
        | 'Jack Sullivan - Serious 😐'
        | 'Winter'
        | 'Mireia - Lifelike'
        | 'Georgia'
        | 'Stella'
        | 'Masha - Lifelike'
        | 'Charming Charles - Friendly 😊'
        | 'Serenity'
        | 'Annie - Excited'
        | 'Ralph'
        | 'Bethany'
        | 'Dominic'
        | 'Mason Finn'
        | 'Leena'
        | 'Veteran Victor'
        | 'Tamara'
        | 'Nik Public'
        | 'Calm Chloe'
        | 'Sevik'
        | 'Reilly'
        | 'Raul'
        | 'Imposing Ian'
        | 'Relaxed Ray'
        | 'Dexter - Professional'
        | 'Relaxed Rick'
        | 'Edwin'
        | 'Rupert Blackwood'
        | 'Ginny'
        | 'Hope';
}

export interface TextureFiles {
    /** @description Base color texture */
    base_color: File;
    /** @description Metallic texture (PBR) */
    metallic?: File;
    /** @description Normal texture (PBR) */
    normal?: File;
    /** @description Roughness texture (PBR) */
    roughness?: File;
}

export interface TextRender {
    /**
     * Appearance Details
     * @description Any other notable visual details.
     */
    appearance_details?: string;
    /**
     * Color
     * @description E.g., 'red', 'blue', 'green'.
     */
    color: string;
    /**
     * Font
     * @description E.g., 'realistic', 'cartoonish', 'minimalist'.
     */
    font: string;
    /**
     * Location
     * @description E.g., 'center', 'top-left', 'bottom-right foreground'.
     */
    location: string;
    /**
     * Size
     * @description E.g., 'small', 'medium', 'large within frame'.
     */
    size: string;
    /**
     * Text
     * @description The text content.
     */
    text: string;
}

export interface StructuredPrompt_1 {
    /** @description Details about the image aesthetics. */
    aesthetics: AestheticsDetails;
    /**
     * Artistic Style
     * @description describe specific artistic characteristics, 3 words maximum.
     */
    artistic_style: string;
    /**
     * Background Setting
     * @description Describe the overall environment, setting, or background, including any notable background elements.
     */
    background_setting: string;
    /**
     * Context
     * @description Provide any additional context that helps understand the image better.
     */
    context: string;
    /** @description Details about the lighting. */
    lighting: LightingDetails;
    /**
     * Objects
     * @description List of prominent foreground/midground objects.
     */
    objects: ObjectDescription[];
    /** @description Details about photographic characteristics. */
    photographic_characteristics?: PhotographicCharacteristicsDetails;
    /**
     * Short Description
     * @description A concise summary of the image content, 200 words maximum.
     */
    short_description: string;
    /**
     * Style Medium
     * @description Identify the artistic style or medium.
     */
    style_medium?: string;
    /**
     * Subject Emotions
     * @description Explicitly describe any visible emotions or expressions on subjects.
     */
    subject_emotions?: string;
    /**
     * Text Render
     * @description List of text renders in the image.
     */
    text_render?: TextRender[];
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

export interface Shot {
    /**
     * Num Frames
     * @description Number of frames for this shot. Each shot must have between 17 and 100 frames.
     * @default 65
     */
    num_frames?: number;
    /**
     * Prompt
     * @description Caption describing what happens in this shot, including subject actions, camera angles, and scene details.
     * @example Subject 1 is smiling and gesturing with his right hand while facing the camera. Subject 2 is seen from behind, facing Subject 1. The scene is indoors in a well-decorated room, with a dark door and ornate glass visible in the background. The camera is static, providing a medium close-up shot of Subject 1.
     */
    prompt: string;
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

export interface RawImage {
    /**
     * Content
     * Format: binary
     */
    content: string;
    /**
     * Content Type
     * @default image/jpeg
     */
    content_type?: string;
    /** Height */
    height: number;
    /** Width */
    width: number;
}

export interface PronunciationDictionaryLocator {
    /**
     * Pronunciation Dictionary Id
     * @description The ID of the pronunciation dictionary.
     */
    pronunciation_dictionary_id?: string;
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

export interface PhotographicCharacteristicsDetails {
    /**
     * Camera Angle
     * @description E.g., 'eye-level', 'low angle', 'high angle', 'dutch angle'.
     */
    camera_angle: string;
    /**
     * Depth Of Field
     * @description E.g., 'shallow', 'deep', 'bokeh background'.
     */
    depth_of_field: string;
    /**
     * Focus
     * @description E.g., 'sharp focus on subject', 'soft focus', 'motion blur'.
     */
    focus: string;
    /**
     * Lens Focal Length
     * @description E.g., 'wide-angle', 'telephoto', 'macro', 'fisheye'.
     */
    lens_focal_length: string;
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

export interface ObjectDescription {
    /**
     * Action
     * @description Describe the action of the human.
     */
    action?: string;
    /**
     * Appearance Details
     * @description Any other notable visual details.
     */
    appearance_details?: string;
    /**
     * Clothing
     * @description Describe attire.
     */
    clothing?: string;
    /**
     * Description
     * @description Short description of the object.
     */
    description: string;
    /**
     * Expression
     * @description Describe facial expression.
     */
    expression?: string;
    /**
     * Gender
     * @description Describe the gender of the human.
     */
    gender?: string;
    /**
     * Location
     * @description E.g., 'center', 'top-left', 'bottom-right foreground'.
     */
    location: string;
    /**
     * Number Of Objects
     * @description The number of objects in the cluster.
     */
    number_of_objects?: number;
    /**
     * Orientation
     * @description Describe the orientation of the human.
     */
    orientation?: string;
    /**
     * Pose
     * @description Describe the body position.
     */
    pose?: string;
    /**
     * Relationship
     * @description Describe the relationship between the object and the other objects in the image.
     */
    relationship: string;
    /**
     * Relative Size
     * @description E.g., 'small', 'medium', 'large within frame'.
     */
    relative_size?: string;
    /**
     * Shape And Color
     * @description Describe the basic shape and dominant color.
     */
    shape_and_color?: string;
    /**
     * Skin Tone And Texture
     * @description Describe the skin tone and texture.
     */
    skin_tone_and_texture?: string;
    /**
     * Texture
     * @description E.g., 'smooth', 'rough', 'metallic', 'furry'.
     */
    texture?: string;
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
    /** @description FBX format 3D model */
    fbx?: File;
    /** @description GLB format 3D model */
    glb?: File;
    /** @description OBJ format 3D model */
    obj?: File;
    /** @description USDZ format 3D model */
    usdz?: File;
}

export interface ModelUrls_1 {
    /** @description FBX format 3D model */
    fbx?: File;
    /** @description GLB format 3D model */
    glb?: File;
    /** @description MTL material file for OBJ model */
    mtl?: File;
    /** @description OBJ format 3D model */
    obj?: File;
    /** @description Texture image for the 3D model */
    texture?: File;
    /** @description USDZ format 3D model */
    usdz?: File;
}

export interface ModelUrls {
    /** @description Blender format 3D model */
    blend?: File;
    /** @description FBX format 3D model */
    fbx?: File;
    /** @description GLB format 3D model */
    glb?: File;
    /** @description OBJ format 3D model */
    obj?: File;
    /** @description STL format 3D model */
    stl?: File;
    /** @description USDZ format 3D model */
    usdz?: File;
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

export interface LoraWeight_4 {
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

export interface LoraWeight_3 {
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

export interface LightingDetails {
    /**
     * Conditions
     * @description E.g., 'bright daylight', 'dim indoor', 'studio lighting', 'golden hour'.
     */
    conditions: string;
    /**
     * Direction
     * @description E.g., 'front-lit', 'backlit', 'side-lit from left'.
     */
    direction: string;
    /**
     * Shadows
     * @description Describe the presence of shadows.
     */
    shadows?: string;
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

export interface LavaSRTimings {
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

export interface ImageFile {
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

export interface File {
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

export interface EmbedItem {
    coordinates: Coordinates;
    /**
     * Image Source
     * @description URL of the image.
     */
    image_source?: string;
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
    timestamp: [number, number];
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

export interface Coordinates {
    /**
     * Height
     * @description Height of the product in the image.
     * @example 30
     */
    height: number;
    /**
     * Width
     * @description Width of the product in the image.
     * @example 10
     */
    width: number;
    /**
     * X
     * @description X coordinate of the product in the image.
     * @example 100
     */
    x: number;
    /**
     * Y
     * @description Y coordinate of the product in the image.
     * @example 100
     */
    y: number;
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

export interface Character {
    /**
     * Avatar
     * @description ID of the avatar to use in the video
     * @example Florin Business Sitting Side
     * @enum {string}
     */
    avatar:
        | 'Abigail (Upper Body)'
        | 'Abigail Office Front'
        | 'Abigail Office Side'
        | 'Abigail Sofa Front'
        | 'Abigail Sofa Side'
        | 'Aditya in Brown blazer'
        | 'Aditya in Blue blazer'
        | 'Aditya in Blue shirt'
        | 'Aditya in Blue t-shirt'
        | 'Aditya in Beige blazer'
        | 'Adrian in Blue Shirt'
        | 'Adrian in Blue Suit'
        | 'Adrian in Blue Sweater'
        | 'Adriana BizTalk Front'
        | 'Adriana BizTalk Side'
        | 'Adriana Business Front 2'
        | 'Adriana Business Front '
        | 'Adriana Business Side'
        | 'Adriana Nurse Front 2'
        | 'Adriana Nurse Front'
        | 'Adriana Nurse Side 2'
        | 'Adriana Nurse Side'
        | 'Adriana Nurse Sitting Side'
        | 'Adriana SuitSofa Front'
        | 'Aiko'
        | 'Albert in Blue Polo shirt'
        | 'Albert in Blue blazer'
        | 'Albert in Blue shirt'
        | 'Albert in Blue suit'
        | 'Albert in Khaki blazer'
        | 'Albert in White shirt'
        | 'Amanda in Blue Shirt (Front)'
        | 'Amanda in Blue Shirt (Left)'
        | 'Amanda in Blue Shirt (Right)'
        | 'Amanda in Grey Shirt (Front)'
        | 'Amanda in Grey Shirt (Left)'
        | 'Amanda in Grey Shirt (Right)'
        | 'Amanda in Maintenance (Front)'
        | 'Amanda in Maintenance (Left)'
        | 'Amanda in Maintenance (Right)'
        | 'Amelia Business Training Front 2'
        | 'Amelia Business Training Front'
        | 'Amelia Business Training Side 2'
        | 'Amelia Business Training Side'
        | 'Amelia Lounge Front 2'
        | 'Amelia Lounge Front'
        | 'Amelia Lounge Side 2'
        | 'Amelia Lounge Side'
        | 'Amelia Yoga Front 2'
        | 'Amelia Yoga Front'
        | 'Amelia Yoga Side 2'
        | 'Amelia Yoga Side'
        | 'Alex in Black Suit'
        | 'Alex in Jacket'
        | 'Alex in White Coat'
        | 'Alex in Yellow Sweater'
        | 'Anja Office Front'
        | 'Anja Office Side '
        | 'Anja Sofa Front'
        | 'Anja Sofa Side '
        | 'Ann Business Front'
        | 'Ann Business Sitting'
        | 'Ann Casual Front'
        | 'Ann Casual Lying'
        | 'Ann Casual Sitting 2'
        | 'Ann Casual Sitting'
        | 'Ann Doctor Sitting'
        | 'Ann Doctor Standing'
        | 'Ann Sweater Front'
        | 'Ann Sweater Side'
        | 'Ann Therapist'
        | 'Anna in White T-shirt'
        | 'Anna in Turtleneck T-shirt'
        | 'Anna in Brown T-shirt'
        | 'Annelise in Dark blue dress'
        | 'Annelise in Off white dress'
        | 'Annelise in Sky blue dress'
        | 'Annelise in White dress'
        | 'Annelore in Blue blazer'
        | 'Annelore in Blue dress'
        | 'Annelore in Red blazer'
        | 'Annelore in Red sweater'
        | 'Annelore in White shirt'
        | 'Annie in Grey Jacket'
        | 'Annie in White Shirt'
        | 'Annie in Tan Jacket'
        | 'Annie in Blue Casual'
        | 'Annie in Light Blue'
        | 'Annie in Brown Shirt'
        | 'Annie in Black Shirt'
        | 'Annie in Pink Suit'
        | 'Annie in Grey Dress'
        | 'Annie in Blue Vest'
        | 'Annie in Black V-neck Shirt'
        | 'Annie in Blue Suit'
        | 'Annie Bar Sitting Front'
        | 'Annie Bar Sitting Side'
        | 'Annie Bar Standing Front 2'
        | 'Annie Bar Standing Front 3'
        | 'Annie Bar Standing Front'
        | 'Annie Bar Standing Side 2'
        | 'Annie Bar Standing Side 3'
        | 'Annie Bar Standing Side'
        | 'Annie Business Casual Standing Front 2'
        | 'Annie Business Casual Standing Front'
        | 'Annie Business Casual Standing Side 2'
        | 'Annie Business Casual Standing Side'
        | 'Annie Casual Sitting Front 2'
        | 'Annie Casual Sitting Front'
        | 'Annie Casual Sitting Side 2'
        | 'Annie Casual Sitting Side'
        | 'Annie Casual Standing Front 2'
        | 'Annie Casual Standing Front'
        | 'Annie Casual Standing Side 2'
        | 'Annie Casual Standing Side'
        | 'Annie Desk Sitting Front 2'
        | 'Annie Desk Sitting Front'
        | 'Annie Desk Sitting Side 2'
        | 'Annie Desk Sitting Side'
        | 'Annie Lounge Standing Front'
        | 'Annie Lounge Standing Side'
        | 'Annie Office Sitting Front 2'
        | 'Annie Office Sitting Front'
        | 'Annie Office Sitting Side 2'
        | 'Annie Office Sitting Side'
        | 'Annie Office Standing Front'
        | 'Annie Office Standing Side'
        | 'Annie Sofa Sitting Front 3'
        | 'Annie Sofa Sitting Front'
        | 'Annie Sofa Sitting Side 2'
        | 'Annie Sofa Sitting Side 3'
        | 'Annie Sofa Sitting Side'
        | 'Annie Sofa Sitting Front 2'
        | 'Annie Studio Pink Sitting Front'
        | 'Annie Studio Pink Sitting Side'
        | 'Annie Studio Pink Standing Front'
        | 'Annie Studio Pink Standing Side'
        | 'Armando Casual Front'
        | 'Armando Casual Side'
        | 'Armando Suit Front'
        | 'Armando Suit Side'
        | 'Armando Sweater Front 2'
        | 'Armando Sweater Front'
        | 'Armando Sweater Side 2'
        | 'Armando Sweater Side'
        | 'Artur Office Front 2'
        | 'Artur Office Front'
        | 'Artur Office Side 2'
        | 'Artur Office Side'
        | 'Artur Sofa Casual Front 2'
        | 'Artur Sofa Casual Front'
        | 'Artur Sofa Casual Side 2'
        | 'Artur Sofa Causal Side'
        | 'Aubrey Sofa Side'
        | 'Aubrey (Upper Body)'
        | 'Aubrey Night Scene Front'
        | 'Aubrey Outdoor Sport Front'
        | 'Aubrey Outdoor Sport Side'
        | 'Aubrey Sofa Front'
        | 'August Casual Front 2'
        | 'August Casual Front'
        | 'August Cool Sitting'
        | 'August Cool Style'
        | 'August Employee Front'
        | 'August Hoodies Front 2'
        | 'August Hoodies Front'
        | 'Bahar (Upper Body)'
        | 'Bahar Business Front'
        | 'Bahar Business Side'
        | 'Bahar Business Sitting Front'
        | 'Bahar Business Sitting Side'
        | 'Bahar Casual Sitting Front 2'
        | 'Bahar Casual Sitting Front'
        | 'Bahar Casual Sitting Side 2'
        | 'Bahar Casual Sitting Side'
        | 'Bahar Denim Casual Front'
        | 'Bahar Denim Casual Side'
        | 'Bahar Denim Front'
        | 'Bahar Denim Side'
        | 'Bahar Jacket Casual Front'
        | 'Bahar Jacket Casual Side'
        | 'Bahar Jacket Front'
        | 'Bahar Jacket Side'
        | 'Bahar Suit Front'
        | 'Bahar Suit Side'
        | 'Bastien in Blue T-shirt'
        | 'Bastien in Blue blazer'
        | 'Bastien in Blue shirt'
        | 'Bastien in White shirt'
        | 'Blanka Lounge Front'
        | 'Blanka Lounge Side'
        | 'Blanka Outdoor Business Front'
        | 'Blanka Outdoor Business Side'
        | 'Blanka Outdoor Reading Front'
        | 'Blanka Outdoor Reading Side'
        | 'Blanka Picnic Front'
        | 'Blanka Picnic Side'
        | 'Bojan Business Training Front 2'
        | 'Bojan Business Training Front'
        | 'Bojan Business Training Side 2'
        | 'Bojan Business Training Side'
        | 'Bojan Lounge Front 2'
        | 'Bojan Lounge Front'
        | 'Bojan Lounge Side 2'
        | 'Bojan Lounge Side'
        | 'Bojan Sport Front 2'
        | 'Bojan Sport Front'
        | 'Bojan Sport Side 2'
        | 'Bojan Sport Side'
        | 'Bradley in Blue Polo (Front)'
        | 'Bradley in Blue Polo (Left)'
        | 'Bradley in Blue Polo (Right)'
        | 'Bradley in Blue Shirt (Front)'
        | 'Bradley in Blue Shirt (Left)'
        | 'Bradley in Blue Shirt (Right)'
        | 'Bradley in Doctor (Front)'
        | 'Bradley in Doctor (Left)'
        | 'Bradley in Doctor (Right)'
        | 'Brandon in Grey Suit'
        | 'Brandon in Blue Sweater'
        | 'Brandon in White Shirt'
        | 'Brandon Business Sitting Front'
        | 'Brandon Business Sitting Side'
        | 'Brandon Business Standing Front'
        | 'Brandon Business Standing Side'
        | 'Brandon Casual Sitting Front'
        | 'Brandon Casual Sitting Side'
        | 'Brandon Kitchen Standing Front'
        | 'Brandon Kitchen Standing Side'
        | 'Brandon Lobby Sitting Front'
        | 'Brandon Lobby Sitting Side'
        | 'Brandon Lobby Standing Front'
        | 'Brandon Lobby Standing Side'
        | 'Brandon Office Sitting Front'
        | 'Brandon Office Sitting Side'
        | 'Brandon Office Standing Front'
        | 'Brandon Office Standing Side'
        | 'Brandon Sofa Sitting Front'
        | 'Brandon Sofa Sitting Side'
        | 'Brent Office Front 2'
        | 'Brent Office Front'
        | 'Brent Office Side 2'
        | 'Brent Office Side'
        | 'Brent Sofa Front 2'
        | 'Brent Sofa Front'
        | 'Brent Sofa Side 2'
        | 'Brent Sofa Side'
        | 'Briana in White shirt'
        | 'Briana in Striped T-shirt'
        | 'Briana in Brown suit'
        | 'Bruce'
        | 'Bryan Casual Front'
        | 'Bryan Casual Side'
        | 'Bryan Fitness Coach'
        | 'Bryan Tech Expert'
        | 'Bryan Plaid Shirt Front'
        | 'Bryan Plaid Shirt Side'
        | 'Bryan Suit Front'
        | 'Bryan Suit Side'
        | 'Bryce in Black t-shirt'
        | 'Bryce in Blue blazer'
        | 'Bryce in Blue shirt'
        | 'Bryce in Grey blazer'
        | 'Bryce in White shirt'
        | 'Byron Business Front 2'
        | 'Byron Business Front'
        | 'Byron Business Side 2'
        | 'Byron Business Side'
        | 'Byron Business Sitting Front'
        | 'Byron Business Sitting Size'
        | 'Byron Casual Front 2'
        | 'Byron Casual Front'
        | 'Byron Casual Side 2'
        | 'Byron Casual Side'
        | 'Byron Casual Sitting Front'
        | 'Byron Casual Sitting Side'
        | 'Byron Jacket Front'
        | 'Byron Jacket Side'
        | 'Byron Sitting Front'
        | 'Byron Sitting Side'
        | 'Byron Suit Front'
        | 'Byron Suit Side'
        | 'Candace in Beige Dress (Front)'
        | 'Candace in Beige Dress (Left)'
        | 'Candace in Beige Dress (Right)'
        | 'Candace in Doctor (Front)'
        | 'Candace in Doctor (Left)'
        | 'Candace in Doctor (Right)'
        | 'Candace in Pink Blazer (Front)'
        | 'Candace in Pink Blazer (Right)'
        | 'Candace in Pink Blazer  (Left)'
        | 'Carla in Doctor (Front)'
        | 'Carla in Doctor (Left)'
        | 'Carla in Doctor (Right)'
        | 'Carla in Dress  (Left)'
        | 'Carla in Shirt (Front)'
        | 'Carla in Shirt (Left)'
        | 'Carla in Shirt (Right)'
        | 'Carlotta BizTalk Front'
        | 'Carlotta BizTalk Side'
        | 'Carlotta Business Front'
        | 'Carlotta Business Side'
        | 'Carlotta Casual Front'
        | 'Carlotta Casual Side'
        | 'Carlotta Casual Sitting Front'
        | 'Carlotta Casual Sitting Side'
        | 'Carlotta Half Front'
        | 'Carlotta Pink Jumpsuit Front 2'
        | 'Carlotta Pink Jumpsuit Front'
        | 'Carlotta Pink Jumpsuit Side 2'
        | 'Carlotta Pink Jumpsuit Side'
        | 'Carlotta Pink Jumpsuit Sitting Front'
        | 'Carlotta Pink Jumpsuit Sitting Side'
        | 'Caroline Business Sitting Front'
        | 'Caroline Business Sitting Side'
        | 'Caroline Business Standing Front'
        | 'Caroline Business Standing Side'
        | 'Caroline in Blue Suit'
        | 'Caroline in White Shirt'
        | 'Caroline in Yellow Casual'
        | 'Caroline in Yellow Skirt'
        | 'Caroline Casual Sitting Front'
        | 'Caroline Casual Sitting Side'
        | 'Caroline Kitchen Standing Front'
        | 'Caroline Kitchen Standing Side'
        | 'Caroline Lobby Sitting Front'
        | 'Caroline Lobby Sitting Side'
        | 'Caroline Lobby Standing Front'
        | 'Caroline Lobby Standing Side'
        | 'Caroline Office Sitting Front'
        | 'Caroline Office Sitting Side'
        | 'Caroline Office Standing Front'
        | 'Caroline Office Standing Side'
        | 'Caroline Sofa Sitting Front'
        | 'Caroline Sofa Sitting Side'
        | 'Chad in Blue Shirt (Front)'
        | 'Chad in Blue Shirt (Left)'
        | 'Chad in Blue Shirt (Right)'
        | 'Chad in Grey Shirt (Front)'
        | 'Chad in Grey Shirt (Left)'
        | 'Chad in Grey Shirt (Right)'
        | 'Chad in Maintenance (Front)'
        | 'Chad in Maintenance (Left)'
        | 'Chad in Maintenance (Right)'
        | 'Chakir in Headscarf (Front)'
        | 'Chakir in Headscarf (Left)'
        | 'Chakir in Headscarf (Right)'
        | 'Chakir in White Shirt (Front)'
        | 'Chakir in White Shirt (Right)'
        | 'Chakir in white Shirt (Left)'
        | 'Chloe (Upper Body)'
        | 'Chloe Lounge Front'
        | 'Chloe Lounge Side'
        | 'Chloe Outdoor Side'
        | 'Colin Business Front 2'
        | 'Colin Business Front'
        | 'Colin Jacket Front'
        | 'Colin Sitting Cool Style 2'
        | 'Colin Sitting Cool Style'
        | 'Colin Suit Front'
        | 'Colin Sweater Front'
        | 'Colin Sweater Sitting Front'
        | 'Connie Business Front'
        | 'Connie Business Sitting Front'
        | 'Connie Casual Sitting Front'
        | 'Connie Casual Sitting Side'
        | 'Connie Education Front'
        | 'Connie Education Side 2'
        | 'Connie Education Side'
        | 'Connie Skirt Front'
        | 'Connie Skirt Side'
        | 'Connie Skirt Sitting Front'
        | 'Connie Skirt Sitting Side'
        | 'Connie Suit Front'
        | 'Conrad House Front'
        | 'Conrad House Side'
        | 'Conrad Sofa Front'
        | 'Conrad Sofa Side'
        | 'Crisanto Business Front'
        | 'Crisanto Business Side'
        | 'Crisanto Chef Front 2'
        | 'Crisanto Chef Front'
        | 'Crisanto Chef Side 2'
        | 'Crisanto Chef Side'
        | 'Crisanto Chef Sitting '
        | 'Crisanto Education Front'
        | 'Crisanto Education Side'
        | 'Crisanto Nurse Front 2'
        | 'Crisanto Nurse Front'
        | 'Crisanto Nurse Side 2'
        | 'Crisanto Nurse Side'
        | 'Crisanto Nurse Sitting Front'
        | 'Crisanto Nurse Sitting Side'
        | 'Crisanto Suit Front'
        | 'Crisanto Suit Side'
        | 'Daphne in Blue blazer'
        | 'Daphne in Blue shirt'
        | 'Daphne in Grey blazer'
        | 'Daphne in Grey suit'
        | 'Daphne in Pink hoodie'
        | 'Daphne in White t-shirt'
        | 'Darnell in Blue Shirt (Front)'
        | 'Darnell in Blue Shirt (Left)'
        | 'Darnell in Blue Shirt (Right)'
        | 'Darnell in Bordeaux Polo (Front)'
        | 'Darnell in Bordeaux Polo (Left)'
        | 'Darnell in Bordeaux Polo (Right)'
        | 'Darnell in Doctor (Front)'
        | 'Darnell in Doctor (Left)'
        | 'Darnell in Doctor (Right)'
        | 'Derya Indoor Front 2'
        | 'Derya Indoor Front'
        | 'Derya Indoor Side 2'
        | 'Derya Indoor Side'
        | 'Derya Office Front 2'
        | 'Derya Office Front'
        | 'Derya Office Side 2'
        | 'Derya Office Side'
        | 'Dexter Casual Front'
        | 'Dexter Casuat Side'
        | 'Dexter Doctor Sitting'
        | 'Dexter Doctor Standing'
        | 'Dexter Lawyer'
        | 'Dexter Suit Front'
        | 'Dexter Suit Side'
        | 'Dexter Winter Coat Front'
        | 'Dexter Winter Coat Side'
        | 'Diana in Black Camisole Top'
        | 'Diana in Striped Shirt'
        | 'Diana in White Shirt'
        | 'Diora in Blue blazer'
        | 'Diora in Green blazer'
        | 'Diora in Pink shirt'
        | 'Diora in White shirt'
        | 'Diora in White t-shirt'
        | 'Diran Casual Front'
        | 'Diran Casual Side'
        | 'Diran Jacket Front'
        | 'Diran Jacket Side'
        | 'Diran Macbook Business Front'
        | 'Diran Macbook Business Side'
        | 'Diran Macbook Casual Front'
        | 'Diran Macbook Casual Side'
        | 'Diran Macbook Sitting Front 2'
        | 'Diran Macbook Sitting Front'
        | 'Diran Macbook Sitting Side 2'
        | 'Diran Macbook Sitting Side'
        | 'Diran Suit Front'
        | 'Diran Suit Side'
        | 'Diran iPad Front'
        | 'Diran iPad Side'
        | 'Diran iPad Sitting Front'
        | 'Diran iPad Sitting Side'
        | 'Elenora Casual Front'
        | 'Elenora Casual Side'
        | 'Elenora Fitness Coach'
        | 'Elenora Fitness Coach 2'
        | 'Elenora Tech Expert'
        | 'Elenora Suit Front'
        | 'Elenora Suit Side'
        | 'Elenora YellowDress Front'
        | 'Elenora YellowDress Side'
        | 'Emanuel Office Front'
        | 'Emanuel Office Side'
        | 'Emanuel Sofa Front'
        | 'Emanuel Sofa Side'
        | 'Emery in Blue blazer'
        | 'Emery in Blue suit'
        | 'Emery in Green shirt'
        | 'Emery in Khaki blazer'
        | 'Emery in Red blazer'
        | 'Emery in White t-shirt'
        | 'Emilia Outdoor Business Front'
        | 'Emilia Outdoor Business Side'
        | 'Emilia Outdoor Yoga Front 2'
        | 'Emilia Outdoor Yoga Front'
        | 'Emilia Outdoor Yoga Side'
        | 'Emilia Picnic Front'
        | 'Emilia Picnic Side'
        | 'Edward in Black Suit'
        | 'Edward'
        | 'Edward in Blue Shirt'
        | 'Esmond in Black coat'
        | 'Esmond in Black shirt'
        | 'Esmond in Blue blazer'
        | 'Esmond in Blue suit'
        | 'Esmond in Grey sweater'
        | 'Fernando Business Indoor Front'
        | 'Fernando Business Indoor Side'
        | 'Fernando OutdoorChair Front 2'
        | 'Fernando Outdoor Chair Front'
        | 'Fernando Outdoor Chair Side'
        | 'Fernando Outdoor Front'
        | 'Fernando Outdoor Side'
        | 'Fernando Outdoor Table Front'
        | 'Fernando Outdoor Table Side'
        | 'Fina Business Sitting Front'
        | 'Fina Business Sitting Side'
        | 'Fina Casual Front 2'
        | 'Fina Casual Front'
        | 'Fina Casual Side 2'
        | 'Fina Casual Side'
        | 'Fina Casual Sitting Front'
        | 'Fina Casual Sitting Side'
        | 'Fina Denim Front'
        | 'Fina Denim Side'
        | 'Fina Denim Sitting Front'
        | 'Fina Employee Front'
        | 'Fina Employee Side'
        | 'Fina Suit Front'
        | 'Fina Suit Side'
        | 'Fina Support Front'
        | 'Fina Support Side'
        | 'Florin Business Sitting Front'
        | 'Florin Business Sitting Side'
        | 'Florin Maintain Front 2'
        | 'Florin Maintain Front'
        | 'Florin Maintain Side 2'
        | 'Florin Maintain Side'
        | 'Florin Maintain Siiting Front'
        | 'Florin Maintain Siiting Side'
        | 'Florin Suit Front 2'
        | 'Florin Suit Front'
        | 'Florin Suit Side 2'
        | 'Florin Suit Side'
        | 'Francis in Blazer (Front)'
        | 'Francis in Blazer (Left)'
        | 'Francis in Blazer (Right)'
        | 'Francis in Doctor (Front)'
        | 'Francis in Doctor (Left)'
        | 'Francis in Doctor (Right)'
        | 'Francis in Shirt (Front)'
        | 'Francis in Shirt (Left)'
        | 'Francis in Shirt (Right)'
        | 'Fred in Blue Long Shirt (Front)'
        | 'Fred in Blue Long Shirt (Left)'
        | 'Fred in Blue Long Shirt (Right)'
        | 'Fred in Blue Short Shirt (Front)'
        | 'Fred in Blue Short Shirt (Left)'
        | 'Fred in Blue Short Shirt (Right)'
        | 'Freja in Blue blazer'
        | 'Freja in Grey blazer'
        | 'Freja in White blazer'
        | 'Freja in White polo shirt'
        | 'Freja in White shirt'
        | 'Gabriel in Black Sweatshirt'
        | 'Gabriel in Blue Suit'
        | 'Gabriel in Gray Shirt'
        | 'Gala Bedroom Front'
        | 'Gala Business Sofa Front 2'
        | 'Gala Business Sofa Front 3'
        | 'Gala Business Sofa Front'
        | 'Gala Business Sofa Side 2'
        | 'Gala Business Sofa Side 3'
        | 'Gala Business Sofa Side'
        | 'Gala Casual Sofa with iPad Front'
        | 'Gala Casual Sofa with iPad Side 2'
        | 'Gala Casual Sofa with iPad Side'
        | 'Gala Office Front'
        | 'Gala Office Side'
        | 'Gala Sofa Front 2'
        | 'Gala Sofa Front 3'
        | 'Gala Sofa Front'
        | 'Gala Sofa Side 2'
        | 'Gala Sofa Side 3'
        | 'Gala Sofa Side'
        | 'Georgia (Upper Body)'
        | 'Georgia Casual Front'
        | 'Georgia Casual Side'
        | 'Georgia Office Front'
        | 'Georgia Office Side'
        | 'Gerardo Sofa Side'
        | 'Gerardo Indoor Front'
        | 'Gerardo Indoor Side'
        | 'Gerardo Night Scene Front 2'
        | 'Gerardo Night Scene Front'
        | 'Gerardo Outdoor Sport Front'
        | 'Gerardo Outdoor Sport Side'
        | 'Gerardo Sofa Front'
        | 'Giulia Office Front 2'
        | 'Giulia Office Front'
        | 'Giulia Office Side 2'
        | 'Giulia Office Side'
        | 'Giulia Sofa Front'
        | 'Giulia Sofa Side'
        | 'Giulia Sofa  Front 2'
        | 'Giulia Sofa  Side 3'
        | 'Hada Casual Cup Front'
        | 'Hada Casual Cup Side'
        | 'Hada Casual Front'
        | 'Hada Casual Side'
        | 'Hada Casual Sitting Front 2'
        | 'Hada Casual Sitting Front'
        | 'Hada Casual Sitting Side 2'
        | 'Hada Casual Sitting Side'
        | 'Hada LivelyGestures Front'
        | 'Hada LivelyGestures Side'
        | 'Hada LivelyGestures Sitting Front'
        | 'Hada LivelyGestures Sitting Side'
        | 'Hada Suit Front 2'
        | 'Hada Suit Front'
        | 'Hada Suit Side 2'
        | 'Hada Suit Side'
        | 'Hada Suit Sitting Front 2'
        | 'Hada Suit Sitting Front'
        | 'Hada Suit Sitting Side'
        | 'Harrison in Black Suit'
        | 'Harrison in Gray Suit'
        | 'Harrison in White Shirt'
        | 'Ian in Beige Shirt'
        | 'Ian in Black Jacket'
        | 'Ian in Gray Suit'
        | 'Ida Lounge Front 2'
        | 'Ida Lounge Front'
        | 'Ida Lounge Side 2'
        | 'Ida Lounge Side'
        | 'Ida Sofa Front 2'
        | 'Ida Sofa Front'
        | 'Ida Sofa Side 2'
        | 'Ida Sofa Side'
        | 'Iker in Almond sweater'
        | 'Iker in Black blazer'
        | 'Iker in Blue shirt'
        | 'Iker in Grey blazer'
        | 'Iker in White shirt'
        | 'Imelda BizTalk Front'
        | 'Imelda BizTalk Side'
        | 'Imelda Business Front'
        | 'Imelda Business Side'
        | 'Imelda Business Sitting Front 2'
        | 'Imelda Business Sitting Front'
        | 'Imelda Business Sitting Side 2'
        | 'Imelda Business Sitting Side'
        | 'Imelda Casual Front'
        | 'Imelda Casual Side'
        | 'Imelda Coat Front 2'
        | 'Imelda Coat Front'
        | 'Imelda Coat Side'
        | 'Imelda Customer Support Front'
        | 'Imelda Customer Support Side'
        | 'Imelda Full Side '
        | 'Imelda Suit Front'
        | 'Imelda Suit Side'
        | 'Ivan in Black Suit'
        | 'Ivan in Gary Suit'
        | 'Ivan in Suit'
        | 'Ivan in Sweater'
        | 'Jason in Black Jacket'
        | 'Jason in Blue Suit'
        | 'Jason in Gray Shirt'
        | 'Javi Intense Sitting Speaking Front'
        | 'Javi Intense Sitting Speaking Side'
        | 'Javi Intense Sitting Speaking '
        | 'Javi Intense Speaking Front 2'
        | 'Javi Intense Speaking Front 3'
        | 'Javi Intense Speaking Front'
        | 'Javi Intense Speaking Side 3'
        | 'Javi Intense Speaking Side'
        | 'Javi in Passionate Gestures 2'
        | 'Javi in Passionate Gestures 3'
        | 'Javi in Passionate Gestures'
        | 'Jin (Upper Body)'
        | 'Jin Blue Casual Front'
        | 'Jin Blue Casual Side'
        | 'Jin Business Café Mode Front'
        | 'Jin Business Café Mode Side'
        | 'Jin Business Sitting Front'
        | 'Jin Business Sitting Side'
        | 'Jin Casual Café Mode Front'
        | 'Jin Casual Café Mode Side'
        | 'Jin Casual Sitting Front'
        | 'Jin Casual Sitting Side'
        | 'Jin Suit Front'
        | 'Jin Suit Side'
        | 'Jin Vest Front'
        | 'Jin Vest Side'
        | 'Jin Vest Sitting Front'
        | 'Jin Vest Sitting Side'
        | 'Jin in Education Front'
        | 'Jin in Education Side'
        | 'Jinwoo in Black vest'
        | 'Jinwoo in Blue suit'
        | 'Jinwoo in White T-shirt'
        | 'Jinwoo in White shirt'
        | 'Jinwoo in White suit'
        | 'Jocelyn Office Front 2'
        | 'Jocelyn Office Front'
        | 'Jocelyn Office Side 2'
        | 'Jocelyn Office Side'
        | 'Jocelyn Sofa Front 2'
        | 'Jocelyn Sofa Front'
        | 'Jocelyn Sofa Side 2'
        | 'Jocelyn Sofa Side'
        | 'Joel Couch Front'
        | 'Joel Couch Side'
        | 'Joel Gym Front'
        | 'Joel Gym Side'
        | 'Joel Mountain Front'
        | 'Joel Mountain Side'
        | 'Jonas (Upper Body)'
        | 'Jonas Gym Front 2'
        | 'Jonas Gym Front'
        | 'Jonas Gym Side 2'
        | 'Jonas Gym Side '
        | 'June Office Front 2'
        | 'Juan Office Front'
        | 'Juan Office Side 2'
        | 'Juan Office Side'
        | 'Juan Sofa Front 2'
        | 'Juan Sofa Front'
        | 'Juan Sofa Side 2'
        | 'Juan Sofa Side'
        | 'Judita (Upper Body)'
        | 'Judita Yoga Front 2'
        | 'Judita Yoga Front'
        | 'Judita Yoga Side 2'
        | 'Judita Yoga Side'
        | 'Judith (Upper Body)'
        | 'Judith Business Front 2'
        | 'Judith Business Front'
        | 'Judith Business Sitting Front'
        | 'Judith Casual Front'
        | 'Judith Casual Sitting Front'
        | 'Judith Suit Front'
        | 'Judy Business Front'
        | 'Judy Business Side'
        | 'Judy Business Sitting Front'
        | 'Judy Casual Front'
        | 'Judy Casual Side'
        | 'Judy Casual Sitting'
        | 'Judy ConfidentSpeaking Front'
        | 'Judy ConfidentSpeaking Side'
        | 'Judy Doctor Sitting'
        | 'Judy Doctor Standing'
        | 'Judy Lawyer'
        | 'Judy NurseSitting Front 2'
        | 'Judy NurseSitting Front'
        | 'Judy NurseSitting Side 2'
        | 'Judy NurseSitting Side'
        | 'Judy Nurse Front 2'
        | 'Judy Nurse Front'
        | 'Judy Nurse OnDuty Front'
        | 'Judy Nurse OnDuty Side'
        | 'Judy Nurse Side 2'
        | 'Judy Nurse Side'
        | 'Judy Suit Front'
        | 'Judy Suit Side'
        | 'Judy Teacher Sitting'
        | 'Judy HR'
        | 'Judy Teacher Standing'
        | 'June (Upper Body)'
        | 'June HR'
        | 'June Office Front'
        | 'June Office Side 2'
        | 'June Office Side'
        | 'June Sofa Casual Front 2'
        | 'June Sofa Casual Front'
        | 'June Sofa Casual Side 2'
        | 'June Sofa Casual Side'
        | 'Justin in Black Shirt'
        | 'Justin in Black Suit'
        | 'Justin in White Shirt'
        | 'Justo Business Front 2'
        | 'Justo Business Front'
        | 'Justo Business Side 2'
        | 'Justo Business Side'
        | 'Justo Casual Sitting'
        | 'Justo CustomerService Front 2'
        | 'Justo CustomerService Front'
        | 'Justo CustomerService Side'
        | 'Justo CustomerService Sitting Front'
        | 'Justo CustomerService Sitting Side'
        | 'Justo EmployeeTraining Front'
        | 'Justo Suit Casual Front '
        | 'Justo Suit Casual Side '
        | 'Karolin in Gray Suit'
        | 'Karolin in Sweatshirt'
        | 'Karolin in Black Suit'
        | 'Kavya Indoor Front'
        | 'Kavya Indoor Side'
        | 'Kavya Outdoor Side'
        | 'Kavya Outdoor Sport Front'
        | 'Kavya Outdoor Sport Side'
        | 'Kavya Sofa Front'
        | 'Kavya Sofa Side'
        | 'Kelly in Blue Shirt  (Front)'
        | 'Kelly in Blue Shirt (Left)'
        | 'Kelly in Blue Shirt (Right)'
        | 'Kelly in Doctor (Front)'
        | 'Kelly in Doctor (Left)'
        | 'Kelly in Doctor (Right)'
        | 'Kelly in Pink Shirt (Front)'
        | 'Kelly in Pink Shirt (Left)'
        | 'Kelly in Pink Shirt (Right)'
        | 'Klara in Black blazer'
        | 'Klara in Blue blazer'
        | 'Klara in Blue dress'
        | 'Klara in Pink shirt'
        | 'Klara in White blazer'
        | 'Klara in White shirt'
        | 'Kristin in Lace Dress'
        | 'Kristin in V-neck Shirt'
        | 'Kristin in Black Suit'
        | 'Leos Office Front 2'
        | 'Leos Office Front'
        | 'Leos Office Side 2'
        | 'Leos Office Side'
        | 'Leos Sofa Front 2'
        | 'Leos Sofa Front'
        | 'Leos Sofa Side 2'
        | 'Leos Sofa Side'
        | 'Leszek Lounge Front'
        | 'Leszek Lounge Side'
        | 'Leszek Outdoor Business Front'
        | 'Leszek Outdoor Business Side'
        | 'Leszek Outdoor Casual Front'
        | 'Leszek Outdoor Casual Side'
        | 'Leszek Sofa Front'
        | 'Leszek Sofa Side'
        | 'Leah'
        | 'Leah in Black Suit'
        | 'Lina Casual Front 2'
        | 'Lina Casual Front'
        | 'Lina Casual Side 2'
        | 'Lina Casual Side'
        | 'Lina Casual Sitting Front'
        | 'Lina Casual Sitting Side'
        | 'Lina Dress Front'
        | 'Lina Dress Side 2'
        | 'Lina Dress Side'
        | 'Lina Dress Sitting Front'
        | 'Lina Dress Sitting Side'
        | 'Lina Sweater Front 2'
        | 'Lina Sweater Front'
        | 'Lina Sweater Side 2'
        | 'Lina Sweater Side'
        | 'Lina Sweater Sitting Front 2'
        | 'Lina Sweater Sitting Front'
        | 'Lina Sweater Sitting Side 2'
        | 'Lina Sweater Sitting Side'
        | 'Lisa'
        | 'Luca'
        | 'Lucien in Black coat'
        | 'Lucien in Black polo-shirt'
        | 'Lucien in Blue blazer'
        | 'Lucien in Blue shirt'
        | 'Lucien in Grey blazer'
        | 'Lucien in White shirt'
        | 'Luke in Brown Suit'
        | 'Luke in Yellow Jacket'
        | 'Luke in Blue Suit'
        | 'Marcus (Upper Body)'
        | 'Marcus Café Front 2'
        | 'Marcus Café Front'
        | 'Marcus Café Side 2'
        | 'Marcus Café Side'
        | 'Marcus Casual Front'
        | 'Marcus Casual Side'
        | 'Marcus Casual Sitting Front 2'
        | 'Marcus Casual Sitting Front'
        | 'Marcus Casual Sitting Side 2'
        | 'Marcus Casual Sitting Side'
        | 'Marcus Denim Jacket Front'
        | 'Marcus Denim Jacket Side'
        | 'Marcus Education Front'
        | 'Marcus Education Side'
        | 'Marcus Sitting Front'
        | 'Marcus Sitting Side'
        | 'Marcus Suit Front'
        | 'Marcus Suit Side'
        | 'Maria in Suit'
        | 'Maria in Sweater'
        | 'Maria in Black Suit'
        | 'Martina Office Front 2'
        | 'Martina Office Front'
        | 'Martina Office Side 2'
        | 'Martina Office Side'
        | 'Martina Sofa Front 2'
        | 'Martina Sofa Front'
        | 'Martina Sofa Side 2'
        | 'Martina Sofa Side'
        | 'Masha Office Front 2'
        | 'Masha Office Front'
        | 'Masha Office Side 2'
        | 'Masha Office Side'
        | 'Masha Sofa Casual Front 2'
        | 'Masha Sofa Casual Front'
        | 'Masha Sofa Casual Side 2'
        | 'Masha Sofa Casual Side'
        | 'Mason in Blue Suit'
        | 'Mason in White Shirt'
        | 'Mason in Blue Sweater'
        | 'Matteo Office Front 2'
        | 'Matteo Office Front'
        | 'Matteo Office Side 2'
        | 'Matteo Office Side'
        | 'Matteo Sofa Front 2'
        | 'Matteo Sofa Front'
        | 'Matteo Sofa Side 2'
        | 'Matteo Sofa Side'
        | 'Max (Upper Body)'
        | 'Max Indoor Front'
        | 'Max Indoor Side'
        | 'Max Outdoor Sport Front'
        | 'Max Outdoor Sport Side'
        | 'Milena Office Front 2'
        | 'Milena Office Front'
        | 'Milena Office Side 2'
        | 'Milena Office Side'
        | 'Milena Sofa Front 2'
        | 'Milena Sofa Front'
        | 'Milena Sofa Side 2'
        | 'Milena Sofa Side'
        | 'Miles (Upper Body)'
        | 'Miles Outdoor Front'
        | 'Miles Outdoor Side'
        | 'Miles Sofa Front 2'
        | 'Miles Sofa Front'
        | 'Miles Sofa Side 2'
        | 'Miles Sofa Side'
        | 'Minho in Blue blazer'
        | 'Minho in Blue shirt'
        | 'Minho in Green polo-shirt'
        | 'Minho in Khaki jacket'
        | 'Minho in White shirt'
        | 'Minho in White t-shirt'
        | 'Mireia Business Indoor Front'
        | 'Mireia Business Indoor Side'
        | 'Mireia Outdoor Chair Front'
        | 'Mireia Outdoor Front'
        | 'Mireia Outdoor Side'
        | 'Mireia Outdoor Table Front'
        | 'Mireia Outdoor Table Side'
        | 'Miyu Office Front 2'
        | 'Miyu Office Front'
        | 'Miyu Office Side 2'
        | 'Miyu Office Side'
        | 'Miyu Sofa Business Front'
        | 'Miyu Sofa Business Side'
        | 'Miyu Sofa Casual Front 2'
        | 'Miyu Sofa Casual Front'
        | 'Miyu Sofa Casual Side 2 '
        | 'Miyu Sofa Casual Side'
        | 'Nadim in Black blazer'
        | 'Nadim in Blue blazer'
        | 'Nadim in Blue jacket'
        | 'Nadim in Puffer vest'
        | 'Nadim in White shirt'
        | 'Neil in Black Shirt'
        | 'Neil in Black Suit '
        | 'Neil in Yellow Jacket'
        | 'Nico'
        | 'Noah Lobby Front 2'
        | 'Noah Lobby Front'
        | 'Noah Lobby Side 2'
        | 'Noah Lobby Side'
        | 'Noah Office Front 2'
        | 'Noah Office Front'
        | 'Noah Office Side 2'
        | 'Noah Office Side'
        | 'Noah Sofa Front 2'
        | 'Noah Sofa Front '
        | 'Noah Sofa Side 2'
        | 'Noah Sofa Side'
        | 'Nour in Black blazer'
        | 'Nour in Brown dress'
        | 'Nour in Grey hoodie'
        | 'Nour in Sporty vest'
        | 'Nour in White shirt'
        | 'Odelia in Blue Suit'
        | 'Odelia in Red Dress '
        | 'Odelia in Yellow Suit'
        | 'Onat (Upper Body)'
        | 'Onat Casual Front'
        | 'Onat Casual Side'
        | 'Onat Casual Sitting Front'
        | 'Onat Casual Sitting Side'
        | 'Onat Macbook Front 2'
        | 'Onat Macbook Front'
        | 'Onat Macbook Side 2'
        | 'Onat Macbook Side'
        | 'Onat Suit Front'
        | 'Onat Suit Side'
        | 'Onat Suit Sitting Front'
        | 'Onat Suit Sitting Side'
        | 'Onat iPad Front'
        | 'Onat iPad Side'
        | 'Onat iPad Sitting Front'
        | 'Onat iPad Sitting Side'
        | 'Oxana (Upper Body)'
        | 'Oxana Gym Front 2'
        | 'Oxana Gym Front'
        | 'Oxana Gym Side 2'
        | 'Oxana Gym Side'
        | 'Oxana Office Front 2'
        | 'Oxana Office Front'
        | 'Oxana Office Side 2'
        | 'Oxana Office Side'
        | 'Oxana Sofa Front 2'
        | 'Oxana Sofa Front'
        | 'Oxana Sofa Side 2'
        | 'Oxana Sofa Side'
        | 'Oxana Yoga Front 2'
        | 'Oxana Yoga Front'
        | 'Oxana Yoga Side 2'
        | 'Oxana Yoga Side'
        | 'Patrizio Business Training Front'
        | 'Patrizio Business Training Side'
        | 'Patrizio Office Front'
        | 'Patrizio Office Side 2'
        | 'Patrizio Office Side'
        | 'Patrizio Sofa Front'
        | 'Patrizio Sofa Side'
        | 'Piper Business Sofa Front'
        | 'Piper Business Sofa Side'
        | 'Piper Education Front'
        | 'Piper Education Side'
        | 'Rasmus Lounge Front 2'
        | 'Rasmus Lounge Front'
        | 'Rasmus Lounge Side 2'
        | 'Rasmus Lounge Side'
        | 'Rasmus Sofa Front 2'
        | 'Rasmus Sofa Front'
        | 'Rasmus Sofa Side 2'
        | 'Rasmus Sofa Side'
        | 'Raul (Upper Body)'
        | 'Raul Business Sofa Front 2'
        | 'Raul Business Sofa Front'
        | 'Raul Business Sofa Side 2'
        | 'Raul Business Sofa Side'
        | 'Raul Casual Sofa Front 2'
        | 'Raul Casual Sofa Front'
        | 'Raul Casual Sofa Side 2'
        | 'Raul Casual Sofa Side'
        | 'Raul Casual Sofa no iPad Front'
        | 'Raul Casual Sofa no iPad Side'
        | 'Raul Casual Sofa with iPad Front'
        | 'Raul Casual Sofa with iPad Side'
        | 'Raul Office Front 2'
        | 'Raul Office Front'
        | 'Raul Office Side'
        | 'Raul Sofa Front 2'
        | 'Raul Sofa Front'
        | 'Raul Sofa Side 2'
        | 'Raul Sofa Side'
        | 'Rebecca'
        | 'Ren (Upper Body)'
        | 'Ren Office Front 2'
        | 'Ren Office Front'
        | 'Ren Office Side 2'
        | 'Ren Office Side'
        | 'Ren Sofa Business Front'
        | 'Ren Sofa Business Side'
        | 'Ren Sofa Casual Front 2'
        | 'Ren Sofa Casual Front'
        | 'Ren Sofa Casual Side 2 '
        | 'Ren Sofa Casual Side'
        | 'Riley (Upper Body)'
        | 'Riley Casual Front'
        | 'Riley Casual Side'
        | 'Riley Office Front'
        | 'Riley Office Side'
        | 'Roman Outdoor Sport Front'
        | 'Roman Outdoor Sport Side'
        | 'Sabine Office Front 2'
        | 'Sabine Office Front'
        | 'Sabine Office Side'
        | 'Sabine Sofa Side'
        | 'Salma in headscarf (Front)'
        | 'Salma in headscarf (Left)'
        | 'Salma in headscarf (Right)'
        | 'Santa Avatar Present Standing '
        | 'Santa Avatar Sitting 2'
        | 'Santa Avatar Sitting'
        | 'Santa Avatar Sitting Side'
        | 'Santa Avatar Standing'
        | 'Santa Fireplace Front'
        | 'Santa Fireplace Side'
        | 'Saskia in Blue blazer'
        | 'Saskia in Blue shirt'
        | 'Saskia in Green blazer'
        | 'Saskia in Grey vest'
        | 'Saskia in White blazer'
        | 'Scarlett Couch Front 2'
        | 'Scarlett Couch Front'
        | 'Scarlett Couch Side 2'
        | 'Scarlett Couch Side'
        | 'Scarlett Fireplace Front'
        | 'Scarlett Fireplace Side'
        | 'Scarlett Hall Front'
        | 'Scarlett Hall Side'
        | 'Scarlett Yoga Front'
        | 'Scarlett Yoga Side'
        | 'Seema Business Front'
        | 'Seema Business Side'
        | 'Seema Business Sitting Side'
        | 'Seema Casual Front'
        | 'Seema Casual Side'
        | 'Seema Casual Sitting Front'
        | 'Seema Casual Sitting Side'
        | 'Seema Nurse Front 2'
        | 'Seema Nurse Front'
        | 'Seema Nurse Side 2'
        | 'Seema Nurse Side'
        | 'Shawn Business Front'
        | 'Shawn Business Side'
        | 'Shawn Casual Sitting Front'
        | 'Shawn Casual Sitting Side'
        | 'Shawn Sitting Front'
        | 'Shawn Sitting Side'
        | 'Shawn Suit Front'
        | 'Shawn Suit Side'
        | 'Shawn Therapist'
        | 'Shirley Business Front'
        | 'Shirley Business Side'
        | 'Shirley Casual Front 2'
        | 'Shirley Casual Front'
        | 'Shirley Casual Side'
        | 'Shirley Casual Sitting Front 2'
        | 'Shirley Casual Sitting Front'
        | 'Shirley Casual Sitting Side 2'
        | 'Shirley Casual Sitting Side'
        | 'Shirley Education Front'
        | 'Shirley Education Side 2'
        | 'Shirley Education Side'
        | 'Shirley Sitting Front'
        | 'Shirley Sitting Side'
        | 'Shirley Skirt Front'
        | 'Shirley Skirt Side'
        | 'Shirley Suit Front'
        | 'Shirley Suit Side'
        | 'Silas (Upper Body)'
        | 'Silas Customer Support'
        | 'Silas HR'
        | 'Silas Lounge Front'
        | 'Silas Lounge Side'
        | 'Silas Sofa Side 2'
        | 'Silas Sofa Side'
        | 'Sloane in Blue dress'
        | 'Sloane in Grey suit'
        | 'Sloane in Pink sweater'
        | 'Sophia in Black Shirt'
        | 'Sophia in Suit '
        | 'Sophia in White Suit'
        | 'Sophie'
        | 'Stacy in Doctor (Front)'
        | 'Stacy in Doctor (Left)'
        | 'Stacy in Doctor (Right)'
        | 'Stacy in Dress (Front)'
        | 'Stacy in Dress (Left)'
        | 'Stacy in Dress (Right)'
        | 'Stacy in Shirt (Front)'
        | 'Stacy in Shirt (Left)'
        | 'Stacy in Shirt (Right)'
        | 'Susan in Black Shirt'
        | 'Susan in Black Suit'
        | 'Susan in Suit'
        | 'Tahlia in Blue dress'
        | 'Tahlia in Blue suit'
        | 'Tahlia in Dark blue suit'
        | 'Tahlia in Red suit'
        | 'Tahlia in White shirt'
        | 'Teodor (Upper Body)'
        | 'Teodor Office Front 2'
        | 'Teodor Office Front'
        | 'Teodor Office Side 2'
        | 'Teodor Office Side'
        | 'Teodor Sofa Front 2'
        | 'Teodor Sofa Front'
        | 'Teodor Sofa Side 2'
        | 'Teodor Sofa Side'
        | 'Timothy (Upper Body)'
        | 'Timothy Casual Front'
        | 'Timothy Casual Side'
        | 'Timothy Office Front'
        | 'Timothy Office Side'
        | 'Tito Casual Front 2'
        | 'Tito Casual Front'
        | 'Tito Casual Side 2'
        | 'Tito Casual Side'
        | 'Tito Casual Sitting Front'
        | 'Tito Casual Sitting Side'
        | 'Tito Coat Front 2'
        | 'Tito Coat Front'
        | 'Tito Coat Full Side'
        | 'Tito Coat Side 2'
        | 'Tito Coat Side'
        | 'Tito Painter Front'
        | 'Tito Painter Full Side'
        | 'Tito Painter Side'
        | 'Tito Painter Sitting Front'
        | 'Tito Painter Sitting Side'
        | 'Travis in Polo Shirt'
        | 'Travis in Gray Suit'
        | 'Travis in Black Suit'
        | 'Trevor  in Plaid Shirt'
        | 'Trevor in Blue Shirt'
        | 'Trevor in Blue Suit'
        | 'Trevor in Suit'
        | 'Tuba Business Chair Front'
        | 'Tuba Business Chair Side'
        | 'Tuba Business Front'
        | 'Tuba Business Side'
        | 'Tuba Business Sofa Front'
        | 'Tuba Business Sofa Side'
        | 'Tuba Casual Front'
        | 'Tuba Casual Side'
        | 'Tuba Casual Sitting Front'
        | 'Tuba Casual Sitting Side'
        | 'Tuba Macbook Front'
        | 'Tuba Macbook Side'
        | 'Veit Office Front'
        | 'Veit Office Side'
        | 'Veit Sofa Front'
        | 'Veit Sofa Side'
        | 'Vernon Office Front 2'
        | 'Vernon Office Front'
        | 'Vernon Office Side 2'
        | 'Vernon Office Side'
        | 'Verena Office Front'
        | 'Verena Office Side'
        | 'Verena Sofa Front'
        | 'Verena Sofa Side'
        | 'Vernon (Upper Body)'
        | 'Vernon Lounge Front 2'
        | 'Vernon Lounge Side 2'
        | 'Vernon Lounge Side'
        | 'Vince (Upper Body)'
        | 'Vince Business Sofa Front'
        | 'Vince Business Training Front'
        | 'Vince Business Training Side 2'
        | 'Vince Business Training Side'
        | 'Vince Sofa Casual Front 2'
        | 'Vince Sofa Casual Front'
        | 'Vince Sofa Casual Side 2'
        | 'Vince Sofa Casual Side'
        | 'Violante Brown Suit Front 2'
        | 'Violante Brown Suit Front '
        | 'Violante Business Sitting Front'
        | 'Violante Business Sitting Side'
        | 'Violante Casual Sitting Front '
        | 'Violante Casual Sitting Side'
        | 'Violante Sport Front 2'
        | 'Violante Sport Front'
        | 'Violante Sport Side'
        | 'Violante Sport Sitting Side'
        | 'Violante Suit Front'
        | 'Vivianna in Black shirt'
        | 'Wade in Black Suit'
        | 'Wade in Black Jacket'
        | 'Wade in Gray Jacket'
        | 'Yola Active Speaking Front'
        | 'Yola Active Speaking Side'
        | 'Yola Business Front'
        | 'Yola Business Side'
        | 'Yola Calm Speaking Front'
        | 'Yola Calm Speaking Side'
        | 'Yola Casual Front'
        | 'Yola Casual Side'
        | 'Yola Employee Badge Front'
        | 'Yola Employee Badge Side'
        | 'Zosia in Blue blazer'
        | 'Zosia in Green dress'
        | 'Zosia in Khaki blazer'
        | 'Zosia in White dress'
        | 'Zosia in Yellow shirt'
        | 'Austin in Suit'
        | 'Austin in Blue Casual Suit'
        | 'Austin in Black Jacket'
        | 'Austin in Blue Suit'
        | 'Candace in Pink Blazer (Upper Body)'
        | 'Chad in Blue Shirt (Upper Body)'
        | 'Daisy in Suit'
        | 'Daisy in Shirt'
        | 'Daisy in Dress'
        | 'Daisy in T-shirt'
        | 'Francis in Blazer (Upper Body)'
        | 'Matthew'
        | 'Matthew in Suit'
        | 'Matthew in Flowery Shirt'
        | 'Matthew in Grey Sweater'
        | 'Nik in Black Shirt'
        | 'Nik in Blue Sweater'
        | 'Tyler in Casual Suit'
        | 'Tyler in Shirt'
        | 'Tyler in Suit';
    /**
     * Avatar Style
     * @description Style of the avatar display
     * @default closeUp
     * @enum {string}
     */
    avatar_style?: 'normal' | 'circle' | 'closeUp';
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

export interface AvatarIVBackground {
    /**
     * Type
     * @description Type of background
     * @default color
     * @enum {string}
     */
    type?: 'color' | 'image' | 'video';
    /**
     * Value
     * @description Background value - hex color for 'color' type, URL for 'image' or 'video' type
     * @default #FFFFFF
     */
    value?: string;
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
     * Content Type
     * @description Content type of the audio file
     */
    content_type: string;
    /**
     * File Name
     * @description Name of the audio file
     */
    file_name: string;
    /**
     * File Size
     * @description Size of the audio file in bytes
     */
    file_size: number;
    /**
     * Url
     * @description URL of the audio file
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

export interface AestheticsDetails {
    /**
     * Aesthetic Score
     * @description E.g., 'very low', 'low', 'medium', 'high', 'very high'.
     */
    aesthetic_score: string;
    /**
     * Color Scheme
     * @description E.g., 'monochromatic blue', 'warm complementary colors', 'high contrast'.
     */
    color_scheme: string;
    /**
     * Composition
     * @description E.g., 'rule of thirds', 'symmetrical', 'centered', 'leading lines'.
     */
    composition: string;
    /**
     * Mood Atmosphere
     * @description E.g., 'serene', 'energetic', 'mysterious', 'joyful'.
     */
    mood_atmosphere: string;
    /**
     * Preference Score
     * @description E.g., 'very low', 'low', 'medium', 'high', 'very high'.
     */
    preference_score: string;
}

export interface Aesthetics_1 {
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
