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

export interface WeightInput {
    /**
     * Label
     * @default Weight
     * @enum {string}
     */
    label?: 'Weight' | 'Net Weight';
    /**
     * Unit
     * @enum {string}
     */
    unit: 'lb' | 'oz' | 'g' | 'kg';
    value: number;
}

export interface WebSearchUserLocation {
    /**
     * City
     * @description City name, e.g. 'San Francisco'.
     */
    city?: string;
    /**
     * Country
     * @description Two-letter country code, e.g. 'US'.
     */
    country?: string;
    /**
     * Region
     * @description Region or state, e.g. 'California'.
     */
    region?: string;
    /**
     * Timezone
     * @description IANA timezone, e.g. 'America/Los_Angeles'.
     */
    timezone?: string;
    /**
     * Type
     * @description Location type. Only 'approximate' is supported.
     * @default approximate
     * @constant
     */
    type?: 'approximate';
}

export interface WebSearchOptions {
    /**
     * Allowed Domains
     * @description Limit results to these domains. Supported by Exa and most native providers (not Google native search).
     */
    allowed_domains?: string[];
    /**
     * Engine
     * @description Search engine to use. 'auto' uses native provider search when available and falls back to Exa. 'native' prefers the provider's built-in web search (OpenAI, Anthropic, Google, xAI, Perplexity), falling back to Exa for models without native support. 'exa' always uses Exa's search API.
     * @default auto
     * @enum {string}
     */
    engine?: 'auto' | 'native' | 'exa';
    /**
     * Excluded Domains
     * @description Exclude results from these domains. Supported by Exa and some native providers (not OpenAI or Google native search).
     */
    excluded_domains?: string[];
    /**
     * Max Characters
     * @description Exact maximum characters of content per result (1-100,000). Applies to the Exa engine; ignored with native provider search. Takes precedence over search_context_size when both are set.
     */
    max_characters?: number;
    /**
     * Max Results
     * @description Maximum results per search call (1-25). Applies to the Exa engine; ignored with native provider search. Defaults to 5.
     */
    max_results?: number;
    /**
     * Max Total Results
     * @description Maximum total results across all search calls in a single request. Useful for controlling cost and context size in agentic loops.
     */
    max_total_results?: number;
    /**
     * Max Uses
     * @description Maximum number of searches the model may perform in a single request. Once reached, further search calls return an error result instead of executing. With native provider search, forwarded only to Anthropic; other native providers ignore it.
     */
    max_uses?: number;
    /**
     * Search Context Size
     * @description How much content to retrieve per result. For Exa: low=5K, medium=15K, high=30K characters per result; when omitted, Exa picks adaptively (~2-4K per result). Ignored with native provider search. Overridden by max_characters when both are set.
     */
    search_context_size?: 'low' | 'medium' | 'high';
    user_location?: WebSearchUserLocation;
}

export interface Watermark {
    /**
     * Image Url
     * @description Logo/watermark image URL. If empty, no watermark is added.
     */
    image_url?: string;
    /**
     * Margin
     * @description Inset from the edge. '%' (0–49%) of the canvas, or 'px'.
     * @default 3%
     * @example 3%
     */
    margin?: string;
    /**
     * Opacity
     * @description Watermark opacity (0–1).
     * @default 1
     */
    opacity?: number;
    /**
     * Position
     * @description Where to place the watermark.
     * @default bottom_right
     * @example bottom_right
     * @enum {string}
     */
    position?: 'top_left' | 'top_right' | 'bottom_left' | 'bottom_right' | 'center';
    /**
     * Remove Background
     * @description Remove the watermark image's own background (via background removal) before overlaying it.
     * @default false
     */
    remove_background?: boolean;
    /**
     * Scale
     * @description Watermark width as a fraction of the canvas width.
     * @default 0.1
     * @example 0.1
     */
    scale?: number;
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

export interface Voice {
    /**
     * Name
     * @description Predefined voice, chosen by name. Ignored when `id` is set.
     * @default Jennie
     * @enum {string}
     */
    name?:
        | 'Jennie'
        | 'Stella'
        | 'Max'
        | 'Hayes'
        | 'Elara'
        | 'Cleo'
        | 'Fisher'
        | 'Corin'
        | 'Thaddeus'
        | 'Lucina'
        | 'Acadia'
        | 'Huxley'
        | 'Winslet'
        | 'Jethro'
        | 'Elio'
        | 'Rupert'
        | 'Eira'
        | 'Nyra'
        | 'Arian'
        | 'Lily'
        | 'Pierce'
        | 'Kaela'
        | 'Elowen'
        | 'Freya'
        | 'Lenny'
        | 'Alessa'
        | 'Pandora'
        | 'Fia'
        | 'Abbott'
        | 'Kael'
        | 'Orla'
        | 'Sable'
        | 'Marnie'
        | 'Sera'
        | 'Virel'
        | 'Liora'
        | 'Riven'
        | 'Elys'
        | 'Dreena'
        | 'Rhea'
        | 'Vela'
        | 'Nymera'
        | 'Isolde'
        | 'Lirien'
        | 'Zella'
        | 'Avenna'
        | 'Mirelle'
        | 'Calia'
        | 'Lunea'
        | 'Lucan'
        | 'Tarian'
        | 'Arlo'
        | 'Jovan'
        | 'Neron'
        | 'Ziven'
        | 'Dax'
        | 'Orien'
        | 'Lior'
        | 'Eryx'
        | 'Tyren'
        | 'Nox'
        | 'Elric'
        | 'Varian'
        | 'Zoran'
        | 'Miro'
        | 'Dalen'
        | 'Ronix'
        | 'Jarek'
        | 'Nyxie'
        | 'Soren'
        | 'Viona'
        | 'Selene'
        | 'Rachiel'
        | 'Corbin'
        | 'Abigail'
        | 'Faith'
        | 'Kimberly'
        | 'Dave'
        | 'Grace'
        | 'Alden'
        | 'Renly'
        | 'Violet'
        | 'Joel'
        | 'Xavier'
        | 'Esmeralda'
        | 'Robert'
        | 'Lila'
        | 'Brooks'
        | 'Lennox'
        | 'Vanessa'
        | 'Simon'
        | 'Nyomi'
        | 'Jack'
        | 'Penelope'
        | 'Brayden'
        | 'Abel'
        | 'Nellie'
        | 'Connie'
        | 'Andrew'
        | 'Lincoln';
}

export interface VocabularyEntry {
    /**
     * Replaces
     * @description Misspellings that should be replaced with `word`. Matched whole-word and case-insensitively — list each misspelling once; you don't need to enumerate casings (e.g. `['vid']` already covers `Vid`, `VID`).
     * @example [
     *       "vid",
     *       "feed"
     *     ]
     */
    replaces: string[];
    /**
     * Word
     * @description The correctly-spelled term. Brand names, product names, and domain jargon work best.
     * @example VEED
     * @example TikTok
     */
    word: string;
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

export interface VglEdit {
    aesthetics?: Aesthetics_1;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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
    text_render?: TextRender[];
    [key: string]: any;
}

export interface Vgl_1 {
    aesthetics?: Aesthetics_1;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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

export interface Vgl {
    aesthetics?: Aesthetics_1;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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
    text_render?: TextRender[];
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

export interface V2VMaskedValidation {
    /**
     * Mask Url
     * @description URL to the mask (image or video). Standard convention: WHITE marks the region to regenerate/edit, BLACK is kept unchanged.
     */
    mask_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Reference Video Url
     * @description URL to the reference (control) video that guides the regenerated region.
     */
    reference_video_url: string;
    /**
     * Video Url
     * @description URL to the source video. Its UNMASKED region is kept pixel-faithful and the masked region is regenerated.
     */
    video_url: string;
}

export interface V2AValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Video Url
     * @description URL to the silent video the model should generate audio for.
     */
    video_url: string;
}

export interface UsageInfo_2 {
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

export interface UsageInfo_1 {
    completion_tokens?: number;
    cost: number;
    prompt_tokens?: number;
    prompt_tokens_details?: PromptTokensDetails;
    /**
     * Total Tokens
     * @default 0
     */
    total_tokens?: number;
}

export interface UsageInfo {
    /**
     * Input Tokens
     * @description Number of input tokens processed.
     */
    input_tokens: number;
    /**
     * Output Tokens
     * @description Number of output tokens generated.
     */
    output_tokens: number;
}

export interface Turn {
    speaker_id: number;
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
    keyframes: Keyframe_1[];
    /**
     * Type
     * @description Type of track ('video', 'audio', or 'image')
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
     * @example The Tesla Cybertruck is a battery-electric full-size pickup truck manufactured by Tesla, Inc. since 2023.
     */
    prompt?: string;
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
     * @enum {unknown}
     */
    voice?:
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
    /**
     * Voice Id
     * @description Direct voice ID. When provided, this is used instead of looking up the voice by name.
     */
    voice_id?: string;
}

export interface TextureFiles {
    base_color: File;
    metallic?: File;
    normal?: File;
    roughness?: File;
}

export interface TextRender_1 {
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

export interface TextRender {
    /**
     * Appearance Details
     * @description Any other notable visual details of the text.
     */
    appearance_details?: string;
    /**
     * Color
     * @description The color of the text.
     */
    color?: string;
    /**
     * Font
     * @description The style of the font.
     */
    font?: string;
    /**
     * Location
     * @description Where the text sits in the image.
     */
    location?: string;
    /**
     * Size
     * @description The size of the text in the image.
     */
    size?: string;
    /**
     * Text
     * @description The text to render. fibo-2 is also shown an image of it, so it renders as written.
     */
    text: string;
}

export interface TextCustomizations {
    /**
     * Baseline (all words)
     * @description Baseline styling applied to every word in the transcript. This is what a reader sees by default, before any per-word emphasis is applied.
     */
    baseline?: TextCustomization;
    /**
     * Highlighted (mid-rank)
     * @description Mid-rank words (automatically marked as noteworthy: key nouns, action verbs, salient adjectives). Presets typically bump size or weight on these.
     */
    highlighted?: TextCustomization;
}

export interface TextCustomization {
    /**
     * Color
     * @description Override the text color for this tier.
     */
    color?: string;
    /**
     * Font
     * @description Override the font used for this text tier. Must be a supported Google Font — see https://www.veed.io/api/v1/subtitle-renders/fonts for the canonical list. Unrecognized fonts are rejected with a 400.
     */
    font?: string;
    /**
     * Weight
     * @description Font weight 100-900. Values >= 700 render as bold
     */
    weight?: number;
}

export interface TailoredStructuredPrompt {
    action_description?: string;
    actor_prefix?: string;
    aesthetics?: Aesthetics_1;
    art_direction?: string;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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
    sub_trigger_word?: string;
    /**
     * Text Render
     * @description A list of text to be rendered in the image.
     * @default []
     */
    text_render?: { [x: string]: any }[];
    trigger_word?: string;
}

export interface T2AValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
}

export interface Sync3GenerationOptions {
    active_speaker_detection?: Sync3ActiveSpeakerDetection;
    /**
     * Model Mode
     * @description Edit region for the model. This is a Sync.so option primarily used by react-1.
     */
    model_mode?: 'lips' | 'face' | 'head' | 'lipsync' | 'emotion' | 'talking_head';
    /**
     * Occlusion Detection Enabled
     * @description Whether to detect occlusion during generation. Sync.so handles this automatically for sync-3, so this option is ignored by sync-3.
     */
    occlusion_detection_enabled?: boolean;
    /**
     * Prompt
     * @description Emotion prompt for generation. This is a Sync.so option primarily used by react-1.
     */
    prompt?: 'happy' | 'sad' | 'angry' | 'disgusted' | 'surprised' | 'neutral';
    /**
     * Sync Mode
     * @description Defines how to handle duration mismatches between video and audio inputs. Overrides the top-level sync_mode when provided.
     */
    sync_mode?: 'cut_off' | 'loop' | 'bounce' | 'silence' | 'remap';
    /**
     * Temperature
     * @description Controls how expressive lipsync can be; 0 is least expressive, 1 is most expressive. Sync.so handles this natively for sync-3, so this option is ignored by sync-3.
     */
    temperature?: number;
}

export interface Sync3ActiveSpeakerDetection {
    /**
     * Auto Detect
     * @description Whether to automatically detect and apply generation to the active speaker.
     */
    auto_detect?: boolean;
    /**
     * Bounding Boxes
     * @description Per-frame bounding boxes [x1, y1, x2, y2] for the detected face.
     */
    bounding_boxes?: number[][];
    /**
     * Bounding Boxes Url
     * @description URL to a JSON file containing per-frame bounding boxes.
     */
    bounding_boxes_url?: string;
    /**
     * Coordinates
     * @description Reference point [x, y] on the speaker's face in frame_number.
     */
    coordinates?: number[];
    /**
     * Face Image
     * @description Base64 encoded face image for manual speaker selection.
     */
    face_image?: string;
    /**
     * Frame Number
     * @description Frame index for manual speaker selection coordinates.
     */
    frame_number?: number;
    /**
     * Use V2
     * @description Deprecated Sync.so option for active speaker detection v2.
     */
    use_v2?: boolean;
    /**
     * V3
     * @description Whether to use Sync.so's active speaker detection v3.
     */
    v3?: boolean;
}

export interface Style {
    /**
     * Id
     * @description Krea style identifier (a LoRA-based preset style) returned by the Krea styles catalog.
     */
    id: string;
    /**
     * Strength
     * @description How strongly the style influences the generated image. Negative values push away from the style.
     * @default 1
     */
    strength?: number;
}

export interface StructuredPrompt_2 {
    aesthetics?: Aesthetics_1;
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
     * Color Palette
     * @description A list of colors that define the overall color palette of the image.
     */
    color_palette?: Color[];
    /**
     * Context
     * @description The context of the image to be generated.
     */
    context?: string;
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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

export interface StructuredPrompt_1 {
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
    lighting: LightingDetails;
    /**
     * Objects
     * @description List of prominent foreground/midground objects.
     */
    objects: ObjectDescription[];
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
    aesthetics?: Aesthetics_1;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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
    aesthetics?: Aesthetics_1;
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
    lighting?: Lighting;
    /**
     * Objects
     * @description A list of objects in the image to be generated, along with their attributes and relationships to other objects in the image.
     * @default []
     */
    objects?: PromptObject[];
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
    [key: string]: any;
}

export interface SpeechTurn {
    /**
     * Speaker ID
     * @description Alias of a configured speaker.
     */
    speaker_id: string;
    /**
     * Style Instructions
     * @description Optional delivery style for this turn.
     */
    style_instructions?: string;
    /**
     * Text
     * @description Verbatim transcript for this turn.
     */
    text: string;
}

export interface SpeechToTextWord {
    end?: number;
    speaker_id?: string;
    start?: number;
    text: string;
    /**
     * Type
     * @default word
     * @enum {string}
     */
    type?: 'word' | 'spacing' | 'audio_event';
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

export interface SpeakerConfig_1 {
    /**
     * Speaker ID
     * @description Speaker alias used in each turn.
     */
    speaker_id: string;
    /**
     * Voice
     * @description Prebuilt voice for this speaker.
     * @enum {string}
     */
    voice:
        | 'Achernar'
        | 'Achird'
        | 'Algenib'
        | 'Algieba'
        | 'Alnilam'
        | 'Aoede'
        | 'Autonoe'
        | 'Callirrhoe'
        | 'Charon'
        | 'Despina'
        | 'Enceladus'
        | 'Erinome'
        | 'Fenrir'
        | 'Gacrux'
        | 'Iapetus'
        | 'Kore'
        | 'Laomedeia'
        | 'Leda'
        | 'Orus'
        | 'Pulcherrima'
        | 'Puck'
        | 'Rasalgethi'
        | 'Sadachbia'
        | 'Sadaltager'
        | 'Schedar'
        | 'Sulafat'
        | 'Umbriel'
        | 'Vindemiatrix'
        | 'Zephyr'
        | 'Zubenelgenubi';
}

export interface SpeakerConfig {
    /**
     * Speaker Id
     * @description Alias used to identify this speaker in the prompt. Use this alias as a prefix in the prompt field, e.g. 'Alice: Hello! Bob: Hi there!'. Must be alphanumeric with no whitespace.
     * @example Speaker1
     * @example Alice
     * @example Narrator
     */
    speaker_id: string;
    /**
     * Voice
     * @description Voice preset for this speaker.
     * @enum {string}
     */
    voice:
        | 'Achernar'
        | 'Achird'
        | 'Algenib'
        | 'Algieba'
        | 'Alnilam'
        | 'Aoede'
        | 'Autonoe'
        | 'Callirrhoe'
        | 'Charon'
        | 'Despina'
        | 'Enceladus'
        | 'Erinome'
        | 'Fenrir'
        | 'Gacrux'
        | 'Iapetus'
        | 'Kore'
        | 'Laomedeia'
        | 'Leda'
        | 'Orus'
        | 'Pulcherrima'
        | 'Puck'
        | 'Rasalgethi'
        | 'Sadachbia'
        | 'Sadaltager'
        | 'Schedar'
        | 'Sulafat'
        | 'Umbriel'
        | 'Vindemiatrix'
        | 'Zephyr'
        | 'Zubenelgenubi';
}

export interface Speaker {
    audio_url: string;
    prompt: string;
    speaker_id: number;
}

export interface SmartResizeResult {
    /**
     * Aspect Ratio
     * @description The nano-banana-pro aspect ratio that was used internally for this target size.
     */
    aspect_ratio: string;
    /**
     * Description
     * @description The description of the generated images.
     */
    description: string;
    /**
     * Height
     * @description The requested target height in pixels.
     */
    height: number;
    /**
     * Images
     * @description The generated images.
     */
    images: ImageFile[];
    /**
     * Resolution
     * @description The nano-banana-pro resolution tier that was used internally for this target size.
     */
    resolution: string;
    /**
     * Width
     * @description The requested target width in pixels.
     */
    width: number;
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

export interface ShadowLightSourcePosition {
    /**
     * X
     * @description Horizontal light position, normalized to image center (-1 to 1). Leave unset to auto-estimate the light from the image.
     */
    x?: number;
    /**
     * Y
     * @description Vertical light position, normalized to image center (-1 to 1). Leave unset to auto-estimate the light from the image.
     */
    y?: number;
    /**
     * Z
     * @description Height above subject (0 to 2). Leave unset to auto-estimate the light from the image.
     */
    z?: number;
}

export interface ShadowLightSource {
    position?: ShadowLightSourcePosition;
    /**
     * Size
     * @description Apparent emitter size/softness. Higher = softer penumbra. Leave unset to auto-estimate the light from the image.
     */
    size?: number;
}

export interface Shadow {
    drop?: DropShadow;
    generative?: GenerativeShadow;
    /**
     * Type
     * @description Shadow style: 'Generative' (generative AI shadow) or 'Drop' (deterministic drop shadow). Leave unset for no shadow.
     */
    type?: 'Generative' | 'Drop';
}

export interface SfxSegmentMeta {
    /**
     * Skip Reason
     * @description Why the segment was left silent, when it was.
     */
    skip_reason?: string;
    /**
     * Skipped
     * @description Whether this segment was left silent. Always false on sfx-v1.0, which generates every segment.
     * @default false
     */
    skipped?: boolean;
    /**
     * Tags
     * @description Short display labels for the sounds in this segment; may be empty.
     */
    tags?: string[];
}

export interface SfxSegment {
    /**
     * End
     * @description Segment end time in seconds. Must equal the next segment's start (contiguous; no gaps/overlaps); the last segment's end must be <= the video duration.
     * @default 0
     */
    end?: number;
    /**
     * Prompt
     * @description SFX / foley description for this segment.
     * @default
     */
    prompt?: string;
    /**
     * Start
     * @description Segment start time in seconds (from video start). The FIRST segment's start must be 0.
     * @default 0
     */
    start?: number;
}

export interface SfxOutputSegment {
    /**
     * End
     * @description End in seconds on the source video timeline.
     */
    end: number;
    /**
     * Index
     * @description Position of the segment, in source video order.
     */
    index: number;
    meta: SfxSegmentMeta;
    /**
     * Start
     * @description Start in seconds on the source video timeline.
     */
    start: number;
}

export interface SegmentSamplingSettings {
    /**
     * Max Tokens
     * @description Maximum number of tokens to generate.
     */
    max_tokens?: number;
    /**
     * Temperature
     * @description Sampling temperature to use. Higher values will make the output more random, while lower values will make it more focused and deterministic.
     * @default 1
     */
    temperature?: number;
    /**
     * Top P
     * @description Nucleus sampling probability mass to use, between 0 and 1.
     * @default 1
     */
    top_p?: number;
}

export interface SeedDream50ProLayerBoundingBox {
    /**
     * Absolute
     * @description Layer bounds as [left, top, right, bottom] pixel coordinates in the output base image coordinate system.
     */
    absolute: number[];
    /**
     * Normalized
     * @description Layer bounds as [left, top, right, bottom] coordinates normalized to the integer range [0, 1000].
     */
    normalized: number[];
}

export interface SeedDream50ProLayer {
    bounding_box?: SeedDream50ProLayerBoundingBox;
    /**
     * Description
     * @description Detailed model-generated description of the layer. Omitted for the base image.
     */
    description?: string;
    image: Image;
    /**
     * Name
     * @description Model-generated label for the layer. Omitted for the base image.
     */
    name?: string;
    /**
     * Z Index
     * @description Stacking order from bottom to top. The base image always has z_index 0.
     */
    z_index: number;
}

export interface Seed2MiniMessage {
    /**
     * Content
     * @description The content of the message. Can be a string for text-only messages, or a list of content parts for multimodal messages (e.g. with images).
     */
    content: string | Record<string, never>[];
    /**
     * Role
     * @description The role of the message author.
     * @enum {string}
     */
    role: 'system' | 'user' | 'assistant';
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
     * Body Pose Params
     * @description Per-joint body pose parameters (axis-angle form) from the MHR model.
     */
    body_pose_params?: number[][];
    /**
     * Expr Params
     * @description MHR facial-expression parameters.
     */
    expr_params?: number[];
    /**
     * Focal Length
     * @description Estimated focal length
     */
    focal_length: number;
    /**
     * Global Rot
     * @description Global root rotation produced by MHR. Shape matches the upstream tensor (axis-angle [3] or rotation matrix [3, 3]).
     */
    global_rot?: { [x: string]: any }[];
    /**
     * Hand Pose Params
     * @description Per-joint hand pose parameters (axis-angle form) from the MHR model.
     */
    hand_pose_params?: number[][];
    /**
     * Keypoints 2D
     * @description 2D keypoints [[x, y], ...] - 70 MHR body keypoints in image coordinates. See `SAM3DBodyMetadata.keypoint_names` for the ordered name of each index.
     */
    keypoints_2d: number[][];
    /**
     * Keypoints 3D
     * @description 3D keypoints [[x, y, z], ...] - 70 MHR body keypoints in camera space. Ordering matches `keypoints_2d` / `SAM3DBodyMetadata.keypoint_names`.
     */
    keypoints_3d?: number[][];
    /**
     * Mhr Model Params
     * @description Packed MHR parameter vector (concatenated shape/pose/expression/scale). Shape is forwarded as-is from the upstream model.
     */
    mhr_model_params?: { [x: string]: any }[];
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
    /**
     * Pred Global Rots
     * @description Per-joint global rotations (world-space), typically [N_joints, 3, 3] rotation matrices. Needed for inverse linear-blend skinning / un-posing clients.
     */
    pred_global_rots?: { [x: string]: any }[];
    /**
     * Pred Joint Coords
     * @description Skeleton joint positions in world space [[x, y, z], ...]. One row per MHR joint.
     */
    pred_joint_coords?: number[][];
    /**
     * Pred Pose Raw
     * @description Raw pose transforms produced by the MHR decoder (pre-FK), forwarded as-is from the upstream model.
     */
    pred_pose_raw?: { [x: string]: any }[];
    /**
     * Scale Params
     * @description MHR scale parameters (isotropic or per-axis).
     */
    scale_params?: number[];
    /**
     * Shape Params
     * @description MHR identity (β) shape parameters. Enables local canonical-pose mesh reconstruction when combined with the MHR model.
     */
    shape_params?: number[];
}

export interface SAM3DBodyMetadata {
    /**
     * Keypoint Names
     * @description Ordered names of the 70 MHR keypoints returned by this endpoint. Index `i` in this list corresponds to index `i` in every person's `keypoints_2d` and `keypoints_3d` arrays. Sourced from facebookresearch/sam-3d-body `mhr70.py`.
     */
    keypoint_names?: string[];
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

export interface SAM2VideoOutput {
    boundingbox_frames_zip?: File;
    video: File;
}

export interface SAM2RLEOutput {
    boundingbox_frames_zip?: File;
    /**
     * Rle
     * @description Run Length Encoding of the mask.
     */
    rle: string | string[];
}

export interface SAM2RLEFileOutput {
    boundingbox_frames_zip?: File;
    rle: File;
}

export interface RodinGen25BbboxField {
    /**
     * Height
     * @description Height (y axis) dimension for the bounding box constraint.
     * @default 0
     */
    height?: number;
    /**
     * Length
     * @description Length (z axis) dimension for the bounding box constraint.
     * @default 0
     */
    length?: number;
    /**
     * Width
     * @description Width (x axis) dimension for the bounding box constraint.
     * @default 0
     */
    width?: number;
}

export interface RodinGen25Addons {
    /**
     * High Pack
     * @description Selecting HighPack generates 4K resolution texture instead of the default 2K. In Quad mode, the number of faces becomes ~16× the count set in the quality parameter.
     * @default false
     */
    high_pack?: boolean;
}

export interface RGBColor_2 {
    /**
     * B
     * @default 0
     */
    b?: number;
    /**
     * G
     * @default 0
     */
    g?: number;
    /**
     * R
     * @default 0
     */
    r?: number;
}

export interface RGBColor_1 {
    b: number;
    g: number;
    r: number;
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

export interface ReturnedSpeech {
    audio?: File;
    /**
     * Outcome
     * @description speech when audio holds the file, no_speech when no window of the input has speech (or it has no audio), failed when separating a window or building the file failed. The soundtracks come back either way.
     * @enum {string}
     */
    outcome: 'speech' | 'no_speech' | 'failed';
    /**
     * Windows
     * @description Windows the input was separated in
     */
    windows: number;
    /**
     * Windows Failed
     * @description Windows whose separation failed, or whose stem could not be read
     */
    windows_failed: number;
    /**
     * Windows With Speech
     * @description Windows that held speech
     */
    windows_with_speech: number;
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

export interface ReferenceCondition {
    /**
     * Type
     * @description Reference modality. Cross-modality list order is semantic.
     * @enum {string}
     */
    type: 'image' | 'video' | 'audio';
    /**
     * Url
     * @description URL of the reference media.
     */
    url: string;
}

export interface RayReframeSourcePosition {
    /**
     * H Norm
     * @description Height of the source rectangle as a fraction of output height.
     */
    h_norm: number;
    /**
     * W Norm
     * @description Width of the source rectangle as a fraction of output width.
     */
    w_norm: number;
    /**
     * X Norm
     * @description Left edge of the source rectangle as a fraction of output width.
     */
    x_norm: number;
    /**
     * Y Norm
     * @description Top edge of the source rectangle as a fraction of output height.
     */
    y_norm: number;
}

export interface RayEditTrajectoryControl {
    /**
     * Enabled
     * @description Enable motion-trajectory conditioning for the edit.
     * @default true
     */
    enabled?: boolean;
    /**
     * Sparsity
     * @description Motion-trajectory sparsity. Higher values use fewer motion anchors. Leave unset for the default.
     */
    sparsity?: number;
}

export interface RayEditPoseControl {
    /**
     * Enabled
     * @description Enable pose / skeleton conditioning for the edit.
     * @default true
     */
    enabled?: boolean;
    /**
     * Strength
     * @description Pose conditioning precision. 'precise' follows the source pose tightly; 'coarse' allows more freedom. Leave unset for the default.
     */
    strength?: 'precise' | 'coarse';
}

export interface RayEditNormalsControl {
    /**
     * Augmentation
     * @description Surface-normals augmentation. Higher values allow more reinterpretation of surface geometry. Leave unset for the default.
     */
    augmentation?: number;
    /**
     * Enabled
     * @description Enable surface-normals conditioning for the edit.
     * @default true
     */
    enabled?: boolean;
}

export interface RayEditFaceControl {
    /**
     * Enabled
     * @description Enable face-identity conditioning for the edit.
     * @default true
     */
    enabled?: boolean;
}

export interface RayEditDepthControl {
    /**
     * Blur
     * @description Depth blur. Higher values allow more geometric freedom. Leave unset for the default.
     */
    blur?: number;
    /**
     * Enabled
     * @description Enable depth / scene-geometry conditioning for the edit.
     * @default true
     */
    enabled?: boolean;
}

export interface RayEditControls {
    depth?: RayEditDepthControl;
    face?: RayEditFaceControl;
    normals?: RayEditNormalsControl;
    pose?: RayEditPoseControl;
    trajectory?: RayEditTrajectoryControl;
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
    height: number;
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

export interface PromptTokensDetails {
    /**
     * Cache Write Tokens
     * @default 0
     */
    cache_write_tokens?: number;
    /**
     * Cached Tokens
     * @default 0
     */
    cached_tokens?: number;
}

export interface PromptObject_1 {
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
     * Bounding Boxes
     * @description Bounding boxes defining the location of the object in the image.
     */
    bounding_boxes?: BoundingBox_1[];
    /**
     * Clothing
     * @description The clothing of the object in the image.
     */
    clothing?: string;
    /**
     * Colors
     * @description A list of colors associated with the object.
     */
    colors?: Color[];
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
    relationship?: string;
    /**
     * Relative Distance
     * @description The relative distance of the object from the camera or viewer.
     */
    relative_distance?: number;
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
    skin_color?: Color;
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

export interface PresetCustomization {
    /**
     * Position
     * @description Vertical placement of static subtitles on screen.
     */
    position?: 'top' | 'center' | 'bottom';
    /**
     * Shadow
     * @description Improves readability over bright or busy backgrounds.
     */
    shadow?: 'none' | 'min' | 'mid' | 'max';
    /**
     * Text customizations
     * @description Per-tier text styling for baseline and highlighted words.
     */
    text_customizations?: TextCustomizations;
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
     * @description Optional object identifier. Prompts sharing an object id refine the same object. When a text prompt is also given, the id selects which detected object the points refine.
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
     * @description Optional object identifier. Prompts sharing an object id refine the same object. When a text prompt is also given, the id selects which detected object the points refine.
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

export interface Point_1 {
    /**
     * X
     * @description The x coordinate.
     */
    x: number;
    /**
     * Y
     * @description The y coordinate.
     */
    y: number;
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

export interface PodcastConversation {
    /**
     * Text
     * @description Text spoken in this conversation turn, up to 400 characters.
     */
    text: string;
    /**
     * Voice
     * @description Built-in voice used for this conversation turn.
     * @enum {string}
     */
    voice: 'Ethan' | 'Victoria' | 'Jake' | 'Luna' | 'Emma';
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

export interface PhotographicCharacteristics_1 {
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
    [key: string]: any;
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

export interface OutputFormat_1 {
    /**
     * Bit Rate
     * @description Bit rate in bps. Only applicable for MP3 codec. Defaults to 128000 for MP3.
     */
    bit_rate?: 32000 | 64000 | 96000 | 128000 | 192000;
    /**
     * Codec
     * @description Audio codec. Supported: mp3, wav, pcm, mulaw, alaw.
     * @default mp3
     * @enum {string}
     */
    codec?: 'mp3' | 'wav' | 'pcm' | 'mulaw' | 'alaw';
    /**
     * Sample Rate
     * @description Sample rate in Hz.
     * @default 24000
     * @enum {integer}
     */
    sample_rate?: 8000 | 16000 | 22050 | 24000 | 44100 | 48000;
}

export interface OutputFormat {
    /**
     * Bit Rate
     * @description Output bit rate. Only used when container is 'mp3'.
     */
    bit_rate?: number;
    /**
     * Container
     * @description Output audio container format.
     * @default mp3
     * @enum {string}
     */
    container?: 'mp3' | 'raw';
    /**
     * Encoding
     * @description PCM encoding. Only used when container is 'raw'.
     */
    encoding?: 'pcm_s16le' | 'pcm_f32le' | 'pcm_mulaw';
    /**
     * Sample Rate
     * @description Output sample rate in Hz.
     * @default 44100
     */
    sample_rate?: number;
}

export interface OutpaintValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Video Url
     * @description URL to the full-canvas video whose surround should be outpainted.
     */
    video_url: string;
}

export interface OmniVideoElementInput {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     *
     *     Max file size: 50.0MB, Min width: 300px, Min height: 300px, Min aspect ratio: 0.40, Max aspect ratio: 2.50, Timeout: 20.0s
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

export interface ObjectRLE {
    /**
     * Box
     * @description Bounding box of this object's mask in normalized cxcywh coordinates.
     */
    box?: number[];
    /**
     * Object Id
     * @description The object's id, the same in every frame the object appears in.
     */
    object_id: number;
    /**
     * Rle
     * @description Run Length Encoding of this object's mask.
     */
    rle: string;
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

export interface MusicV2CompositionPlan {
    /**
     * Chunks
     * @description The chunks that make up the generation, in order. At most 30 chunks, totalling between 3000ms and 600000ms.
     */
    chunks: MusicGenerationChunk[];
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

export interface MusicGenerationChunk {
    audio_reference?: MusicAudioReference;
    /**
     * Context Adherence
     * @description How closely this chunk follows the context of its surrounding chunks. Low adherence lets the model deviate and be more creative, high adherence keeps it consistent with the surrounding context.
     */
    context_adherence?: 'low' | 'medium' | 'high';
    /**
     * Duration Ms
     * @description The duration of the chunk in milliseconds. Must be between 3000ms and 120000ms.
     */
    duration_ms: number;
    /**
     * Negative Styles
     * @description The styles and musical directions that should not be present in this chunk. Leaving this empty is a good default; only set it to explicitly avoid a particular style or direction.
     */
    negative_styles?: string[];
    /**
     * Positive Styles
     * @description The styles and musical directions that should be present in this chunk. Use English for best results. The styles of the first chunk matter most as they set the overall tone and genre; later chunks can add nuance, progression or change direction.
     * @example [
     *       "synthwave",
     *       "analog drum machine",
     *       "great production quality"
     *     ]
     */
    positive_styles: string[];
    /**
     * Text
     * @description The text to generate for this chunk. Can start with an optional section name in square brackets, e.g. [Verse 1], followed by lyric lines, plus inline directions in curly braces, e.g. {scratching}. Section names must be between 1 and 100 characters. At most 30 lines are allowed, each at most 200 characters.
     * @example [Verse 1]
     *     Neon rain on empty streets
     *     I keep walking to the beat
     */
    text: string;
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

export interface MusicAudioReference {
    /**
     * Audio Url
     * @description URL of the audio clip to use as the style reference.
     * @example https://storage.googleapis.com/falserverless/example_outputs/elevenlabs/music_generated.mp3
     */
    audio_url: string;
    /**
     * End Ms
     * @description Offset into the clip where the referenced window ends, in milliseconds. Defaults to 30000ms after start_ms, or the end of the clip if it is shorter. The window must be at most 30000ms long.
     */
    end_ms?: number;
    /**
     * Start Ms
     * @description Offset into the clip where the referenced window starts, in milliseconds.
     * @default 0
     */
    start_ms?: number;
    /**
     * Strength
     * @description How strongly the model follows the reference. Low lets it deviate and be more creative, high keeps it close to the reference.
     */
    strength?: 'low' | 'medium' | 'high' | 'xhigh';
}

export interface Moodboard {
    /**
     * Id
     * @description Krea moodboard identifier (UUID).
     */
    id: string;
    /**
     * Strength
     * @description How strongly the moodboard influences the generated image.
     * @default 0.23
     */
    strength?: number;
}

export interface ModelUrls_3 {
    fbx?: File;
    glb?: File;
    obj?: File;
    usdz?: File;
}

export interface ModelUrls_2 {
    fbx?: File;
    glb?: File;
    mtl?: File;
    obj?: File;
    texture?: File;
    usdz?: File;
}

export interface ModelUrls_1 {
    base_model?: File;
    /**
     * FBX
     * @description FBX format 3D model
     */
    fbx?: File;
    /**
     * GLB
     * @description GLB format 3D model
     */
    glb?: File;
    /**
     * PBR Model
     * @description PBR-textured model
     */
    pbr_model?: File;
}

export interface ModelUrls {
    blend?: File;
    fbx?: File;
    glb?: File;
    obj?: File;
    stl?: File;
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

export interface Margin {
    /**
     * All
     * @description Margin applied to all sides. '%' (0–49%) of the canvas dimension, or 'px' (>=0px).
     * @default 20%
     * @example 20%
     */
    all?: string;
    /**
     * Bottom
     * @description Bottom-side override of `all`. '%' (0–49%) or 'px' (>=0px).
     */
    bottom?: string;
    /**
     * Left
     * @description Left-side override of `all`. '%' (0–49%) or 'px' (>=0px).
     */
    left?: string;
    /**
     * Right
     * @description Right-side override of `all`. '%' (0–49%) or 'px' (>=0px).
     */
    right?: string;
    /**
     * Top
     * @description Top-side override of `all`. '%' (0–49%) or 'px' (>=0px).
     */
    top?: string;
}

export interface MapImageFile {
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
     * Map Type
     * @description Which PBR map this image represents.
     * @enum {string}
     */
    map_type: 'basecolor' | 'normal' | 'roughness' | 'metalness' | 'height';
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

export interface LyricsWord {
    end?: number;
    start?: number;
    text?: string;
}

export interface LyricsSection {
    end?: number;
    lines?: LyricsLine[];
    section_type?: 'intro' | 'verse' | 'pre-chorus' | 'chorus' | 'bridge' | 'break' | 'outro';
    start?: number;
}

export interface LyricsLine {
    end?: number;
    start?: number;
    text?: string;
    words?: LyricsWord[];
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
    scale?:
        | {
              [key: string]: number;
          }
        | number;
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
     * @description URL or path to a LoRA safetensors file. Or HF model name that resolves to safetensors weights.
     * @example https://huggingface.co/nerijs/pixel-art-xl/resolve/8bf4a4d9ea283e00a51fafda8e0539f8248ea037/pixel-art-xl.safetensors
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

export interface LoraTrainingFailure {
    /**
     * Denoiser
     * @description TRELLIS.2 denoiser whose training did not complete.
     * @enum {string}
     */
    denoiser: 'sparse_structure' | 'geometry' | 'texture';
    /**
     * Error
     * @description Reason the training did not complete.
     */
    error: string;
}

export interface LoRAInput_6 {
    /**
     * Path
     * @description URL or HuggingFace repo id (owner/repo) of the LoRA weights.
     * @example https://huggingface.co/owner/repo/resolve/main/lora.safetensors
     */
    path: string;
    /**
     * Scale
     * @description Strength of the LoRA (0.0 to 4.0).
     * @default 1
     */
    scale?: number;
    /**
     * Weight Name
     * @description Name of the LoRA weight file. Only used when `path` is a HuggingFace repo and it holds more than one LoRA.
     */
    weight_name?: string;
}

export interface LoRAInput_5 {
    /**
     * Path
     * @description URL to an Ideogram V4 LoRA weights file (.safetensors).
     */
    path: string;
    /**
     * Scale
     * @description Scale factor for the LoRA weights.
     * @default 1
     */
    scale?: number;
}

export interface LoRAInput_4 {
    /**
     * Path
     * @description URL to a FLUX 3 Klein LoRA (.safetensors), e.g. from flux-3-image-klein-trainer.
     */
    path: string;
    /**
     * Scale
     * @description Scale factor for LoRA application (0.0 to 4.0).
     * @default 1
     */
    scale?: number;
}

export interface LoRAInput_3 {
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

export interface LoRAInput_2 {
    /**
     * Path
     * @description Direct HTTP(S) download URL of the LoRA file (.safetensors). The file is downloaded through an SSRF-safe downloader before it is loaded. Max size: 3 GB.
     * @example https://example.com/path/to/lora.safetensors
     */
    path: string;
    /**
     * Scale
     * @description Strength of the LoRA application (0.0 to 2.0). Higher values = stronger effect on the generated video.
     * @default 1
     */
    scale?: number;
    /**
     * Transformer
     * @description Forward-compatibility flag for multi-transformer architectures. LTX-2.3 has a single transformer, so 'both' is the right choice for almost all users.
     * @default both
     * @enum {string}
     */
    transformer?: 'high' | 'low' | 'both';
}

export interface LoRAInput_1 {
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
    scale?: number;
}

export interface LoraAdapterResult {
    /**
     * Denoiser
     * @description TRELLIS.2 denoiser this LoRA adapter was trained for: sparse_structure, geometry, or texture.
     * @enum {string}
     */
    denoiser: 'sparse_structure' | 'geometry' | 'texture';
    /**
     * Learning Rate
     * @description Learning rate used for LoRA optimization.
     */
    learning_rate: number;
    lora_file: File;
    /**
     * Rank
     * @description LoRA rank used for training.
     * @enum {integer}
     */
    rank: 16 | 32 | 64;
    /**
     * Resolution
     * @description Resolution this LoRA adapter was trained at. Use the same resolution in trellis-2-lora inference.
     * @enum {integer}
     */
    resolution: 512 | 1024;
    /**
     * Training Steps
     * @description Number of training steps run.
     */
    training_steps: number;
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

export interface Lighting_1 {
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
    [key: string]: any;
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

export interface KlingV4Shot {
    /**
     * Duration
     * @description Shot duration in seconds.
     * @default 5
     */
    duration?: number;
    /**
     * Prompt
     * @description The prompt for this shot.
     */
    prompt: string;
}

export interface KlingV4Element {
    /**
     * Frontal Image Url
     * @description The frontal image of the element (main view).
     */
    frontal_image_url?: string;
    /**
     * Reference Image Urls
     * @description Additional views of the element from different angles (1-3).
     */
    reference_image_urls?: string[];
    /**
     * Video Url
     * @description A video of the element, used instead of images (3-8s).
     */
    video_url?: string;
    /**
     * Voice Id
     * @description Voice bound to this element. Create one with https://fal.ai/models/fal-ai/kling-video/create-voice
     */
    voice_id?: string;
}

export interface KlingV3MultiPromptElement {
    /**
     * Duration
     * @description The duration of this shot in seconds
     * @default 5
     * @enum {string}
     */
    duration?:
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '12'
        | '13'
        | '14'
        | '15';
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
    /**
     * Voice Id
     * @description The voice ID for this element. The voice will be binded to the element and references to this element will use the binded voice. Get voice IDs from the following endpoint: https://fal.ai/models/fal-ai/kling-video/create-voice
     */
    voice_id?: string;
}

export interface Keyframe_1 {
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

export interface Keyframe {
    /**
     * Frame Index
     * @description 0-based output frame index for this keyframe. Must be >= 1 (frame 0 is the restyled first frame from `image_url`) and less than the output frame count.
     * @example 80
     */
    frame_index: number;
    /**
     * Image Url
     * @description URL of a restyled keyframe image. It is pinned verbatim at `frame_index` to anchor identity over long videos. Its aspect ratio must match the output aspect ratio within 0.1.
     * @example https://storage.googleapis.com/falserverless/example_inputs/ltxv-image-input.jpg
     */
    image_url: string;
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

export interface InterpolateValidation {
    /**
     * End Image Url
     * @description URL to the last-frame keyframe image.
     */
    end_image_url: string;
    /**
     * Middle Image Url
     * @description Optional URL to a middle keyframe image; required when the run sets include_middle_keyframe=true (first+middle+last interpolation).
     */
    middle_image_url?: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Start Image Url
     * @description URL to the first-frame keyframe image.
     */
    start_image_url: string;
}

export interface InpaintValidation {
    /**
     * Mask Url
     * @description URL to the inpainting mask (image or video). Standard convention: WHITE marks the region to regenerate/edit, BLACK is kept unchanged. Resolution need not match the video; it is resized automatically.
     */
    mask_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Video Url
     * @description URL to the source video to inpaint.
     */
    video_url: string;
}

export interface ImageStyleReference {
    /**
     * Image Url
     * @description Publicly accessible URL of a reference image.
     */
    image_url: string;
    /**
     * Strength
     * @description How strongly the reference influences the generated image. Negative values push away from the reference.
     * @default 1
     */
    strength?: number;
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

export interface ImageReference {
    /**
     * Image Url
     * @description URL of the reference image
     * @example https://v3.fal.media/files/zebra/qL93Je8ezvzQgDOEzTjKF_KhGKZTEebZcDw6T5rwQPK_output.png
     */
    image_url: string;
    /**
     * Ref Name
     * @description A short name for this reference. Use @ref_name in the prompt to refer to this image.
     * @example character
     * @example dog
     * @example room
     */
    ref_name: string;
    /**
     * Type
     * @description Type of reference: 'subject' for character/object references, 'background' for scene/environment references
     * @default subject
     * @enum {string}
     */
    type?: 'subject' | 'background';
}

export interface ImagePrompt {
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

export interface ImageFrame {
    /**
     * Frames
     * @description Number of frames this image is held for in the output video. The on-screen duration is `frames / fps` seconds.
     */
    frames: number;
    /**
     * Url
     * @description URL where the image file can be accessed
     * @example https://v3.fal.media/files/koala/oei_-iPIYFnhdB8SxojND_qwen-edit-res.png
     */
    url: string;
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

export interface Image_2 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @default null
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * @description File data
     * @default null
     */
    file_data?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @default null
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @default null
     * @example 4404019
     */
    file_size?: number;
    /**
     * Height
     * @description The height of the image in pixels.
     * @default null
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
     * @default null
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
    height: number;
    url: string;
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

export interface IceServersOutput {
    iceservers: {
        [key: string]: { [x: string]: any } | null;
    }[];
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'iceservers';
}

export interface IceCandidateOutput {
    candidate: IceCandidate;
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'icecandidate';
}

export interface IceCandidate {
    candidate: string;
    /**
     * Sdpmid
     * @default null
     */
    sdpMid?: string;
    /**
     * Sdpmlineindex
     * @default null
     */
    sdpMLineIndex?: number;
}

export interface I2VValidation {
    /**
     * Image Url
     * @description An image to use as the first frame for image-to-video validation.
     */
    image_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
}

export interface H3MaxCameraKeyframe {
    /**
     * Azimuth
     * @description Horizontal camera angle around the subject, in degrees.
     */
    azimuth: number;
    /**
     * Distance
     * @description Camera distance from the subject in normalized scene units.
     */
    distance: number;
    /**
     * Elevation
     * @description Vertical camera angle around the subject, in degrees.
     */
    elevation: number;
    /**
     * Time
     * @description Normalized video time, from 0 at the start to 1 at the end.
     */
    time: number;
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

export interface GrokXSearchTool {
    /**
     * Allowed X Handles
     * @description Restrict results to posts from at most 20 X handles.
     * @default null
     */
    allowed_x_handles?: string[];
    /**
     * Enable Image Understanding
     * @description Allow the agent to inspect images found on X.
     * @default null
     */
    enable_image_understanding?: boolean;
    /**
     * Enable Video Understanding
     * @description Allow the agent to inspect videos found on X.
     * @default null
     */
    enable_video_understanding?: boolean;
    /**
     * Enabled
     * @description Whether to include x_search in session.tools. Disabled by default; set true to let the agent search X posts.
     * @default false
     */
    enabled?: boolean;
    /**
     * Excluded X Handles
     * @description Exclude posts from at most 20 X handles.
     * @default null
     */
    excluded_x_handles?: string[];
    /**
     * From Date
     * @description Earliest post date, as ISO YYYY-MM-DD.
     * @default null
     */
    from_date?: string;
    /**
     * To Date
     * @description Latest post date, as ISO YYYY-MM-DD.
     * @default null
     */
    to_date?: string;
}

export interface GrokWebSearchTool {
    /**
     * Allowed Domains
     * @description Restrict results to at most five domains, without protocol or path.
     * @default null
     */
    allowed_domains?: string[];
    /**
     * Enable Image Understanding
     * @description Allow the agent to inspect images found during web search.
     * @default null
     */
    enable_image_understanding?: boolean;
    /**
     * Enabled
     * @description Whether to include web_search in session.tools. Disabled by default; set true to let the agent search the web.
     * @default false
     */
    enabled?: boolean;
    /**
     * Excluded Domains
     * @description Exclude results from at most five domains, without protocol or path.
     * @default null
     */
    excluded_domains?: string[];
    /**
     * @description Optional location used to localize search results.
     * @default null
     */
    location?: GrokSearchLocation;
}

export interface GrokTurnDetectionConfiguration {
    /**
     * Idle Timeout (ms)
     * @description Idle time after an assistant response before xAI starts a proactive turn, in milliseconds.
     * @default null
     */
    idle_timeout_ms?: number;
    /**
     * Prefix Padding (ms)
     * @description Audio retained before detected speech, in milliseconds.
     * @default null
     */
    prefix_padding_ms?: number;
    /**
     * Silence Duration (ms)
     * @description Silence duration that ends a detected turn, in milliseconds.
     * @default null
     */
    silence_duration_ms?: number;
    /**
     * Threshold
     * @description VAD activation threshold; higher values require louder audio.
     * @default null
     */
    threshold?: number;
}

export interface GrokToolsConfiguration {
    /**
     * MCP Servers
     * @description Remote MCP servers that xAI connects to and executes.
     */
    mcp_servers?: GrokRemoteMCPTool[];
    /**
     * @description xAI-managed web search; off unless enabled is set true.
     * @default {
     *       "excluded_domains": null,
     *       "location": null,
     *       "allowed_domains": null,
     *       "enabled": false,
     *       "enable_image_understanding": null
     *     }
     */
    web_search?: GrokWebSearchTool;
    /**
     * @description xAI-managed X search; off unless enabled is set true.
     * @default {
     *       "enable_video_understanding": null,
     *       "excluded_x_handles": null,
     *       "allowed_x_handles": null,
     *       "to_date": null,
     *       "from_date": null,
     *       "enabled": false,
     *       "enable_image_understanding": null
     *     }
     */
    x_search?: GrokXSearchTool;
}

export interface GrokSearchLocation {
    /**
     * City
     * @description City used to localize web-search results.
     * @default null
     */
    city?: string;
    /**
     * Country
     * @description Country used to localize web-search results.
     * @default null
     */
    country?: string;
    /**
     * Region
     * @description Region used to localize web-search results.
     * @default null
     */
    region?: string;
    /**
     * Timezone
     * @description IANA timezone name, for example America/New_York.
     * @default null
     */
    timezone?: string;
}

export interface GrokRemoteMCPTool {
    /**
     * Allowed Tools
     * @description Optional allow-list of tool names exposed from this server.
     * @default null
     */
    allowed_tools?: string[];
    /**
     * Authorization
     * @description Sensitive authorization value forwarded only to xAI.
     * @default null
     */
    authorization?: string;
    /**
     * Enabled
     * @description False omits this server.
     * @default true
     */
    enabled?: boolean;
    /**
     * Headers
     * @description Sensitive MCP request headers forwarded only to xAI.
     * @default null
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * Server Description
     * @description Description of the capabilities exposed by this server.
     * @default null
     */
    server_description?: string;
    /**
     * Server Label
     * @description Label xAI uses to identify and prefix this server's tools.
     */
    server_label: string;
    /**
     * Server Url
     * Format: uri
     * @description Caller-selected HTTP(S) MCP endpoint. xAI makes the remote connection and supports Streaming HTTP/SSE transports. Use at your own risk; fal does not connect to or SSRF-fetch this URL.
     */
    server_url: string;
}

export interface GenerativeShadow {
    light_source?: ShadowLightSource;
    /**
     * Opacity
     * @description Final composited shadow opacity (0–1).
     * @default 0.2
     */
    opacity?: number;
}

export interface GeminiVideoPart {
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Opaque provider-issued thought signature. Replay it unchanged on its original part.
     */
    thought_signature?: string;
    /**
     * @description The video part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'video';
    /**
     * Video Url
     * @description Video URL or data URI (up to 15 MB and 120 seconds), or a YouTube URL. Supported by Flash Image only.
     */
    video_url: string;
}

export interface GeminiVideoMessage {
    /**
     * Parts
     * @description Ordered text, image, document, video, audio, and signature parts.
     */
    parts: (
        | GeminiTextPart
        | GeminiImagePart
        | GeminiDocumentPart
        | GeminiVideoPart
        | GeminiSignaturePart
        | GeminiAudioPart
    )[];
    /**
     * Role
     * @description Native Gemini conversation role.
     * @enum {string}
     */
    role: 'user' | 'model';
}

export interface GeminiTextPart {
    /**
     * Text
     * @description Text at this position in the conversation.
     */
    text: string;
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Opaque provider-issued thought signature. Replay it unchanged on its original part.
     */
    thought_signature?: string;
    /**
     * @description The text part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'text';
}

export interface GeminiSignaturePart {
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Provider-issued signature-only part, replayed unchanged.
     */
    thought_signature: string;
    /**
     * @description The signature part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'signature';
}

export interface GeminiMessage {
    /**
     * Parts
     * @description Ordered text, image, document, and signature parts.
     */
    parts: (GeminiTextPart | GeminiImagePart | GeminiDocumentPart | GeminiSignaturePart)[];
    /**
     * Role
     * @description Native Gemini conversation role.
     * @enum {string}
     */
    role: 'user' | 'model';
}

export interface GeminiImagePart {
    /**
     * Image Url
     * @description Original image URL or data URI. Replayed without resizing or re-encoding.
     */
    image_url: string;
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Opaque provider-issued thought signature. Replay it unchanged on its original part.
     */
    thought_signature?: string;
    /**
     * @description The image part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'image';
}

export interface GeminiDocumentPart {
    /**
     * File Url
     * @description PDF or UTF-8 plain-text document URL or data URI (up to 15 MB).
     */
    file_url: string;
    /**
     * Mime Type
     * @description The document's media type.
     * @enum {string}
     */
    mime_type: 'application/pdf' | 'text/plain';
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Opaque provider-issued thought signature. Replay it unchanged on its original part.
     */
    thought_signature?: string;
    /**
     * @description The document part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'document';
}

export interface GeminiConversation {
    /**
     * Messages
     * @description One complete provider conversation. Pass messages as history in the next request, retaining every signature and part.
     */
    messages: GeminiVideoMessage[];
}

export interface GeminiAudioPart {
    /**
     * Audio Url
     * @description Original audio URL or data URI from a previous Flash Image request (up to 15 MB).
     */
    audio_url: string;
    /**
     * Thought
     * @description Provider thought marker, preserved when replaying a returned conversation.
     */
    thought?: boolean;
    /**
     * Thought Signature
     * @description Opaque provider-issued thought signature. Replay it unchanged on its original part.
     */
    thought_signature?: string;
    /**
     * @description The audio part discriminator. (enum property replaced by openapi-typescript)
     * @enum {string}
     */
    type: 'audio';
}

export interface ForcedAlignmentWord {
    /**
     * End
     * @description End time in seconds
     */
    end: number;
    /**
     * Loss
     * @description Average alignment loss for the word
     */
    loss: number;
    /**
     * Start
     * @description Start time in seconds
     */
    start: number;
    /**
     * Text
     * @description The aligned character
     */
    text: string;
}

export interface ForcedAlignmentCharacter {
    /**
     * End
     * @description End time in seconds
     */
    end: number;
    /**
     * Start
     * @description Start time in seconds
     */
    start: number;
    /**
     * Text
     * @description The aligned character
     */
    text: string;
}

export interface Flux3Keyframe {
    /**
     * Frame Index
     * @description Frame position of this keyframe in the generated 24 fps video. Must be unique and at most `duration * 24`.
     */
    frame_index: number;
    /**
     * Image URL
     * @description URL of the keyframe image (PNG, JPEG, or WebP).
     */
    image_url: string;
}

export interface File_1 {
    /**
     * Content Type
     * @description The mime type of the file.
     * @default null
     * @example image/png
     */
    content_type?: string;
    /**
     * File Data
     * @description File data
     * @default null
     */
    file_data?: string;
    /**
     * File Name
     * @description The name of the file. It will be auto-generated if not provided.
     * @default null
     * @example z9RV14K95DvU.png
     */
    file_name?: string;
    /**
     * File Size
     * @description The size of the file in bytes.
     * @default null
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

export interface ExtendValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Video Url
     * @description URL to the video the model should temporally extend.
     */
    video_url: string;
}

export interface EventSegment {
    /**
     * End
     * @description End time in seconds.
     * @example 12.5
     */
    end: number;
    /**
     * Start
     * @description Start time in seconds.
     * @example 10.4
     */
    start: number;
    /**
     * Text
     * @description Short description of the event (caption mode only).
     */
    text?: string;
}

export interface ErrorOutput {
    error: string;
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'error';
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
    image_source: string;
}

export interface Embedding_1 {
    /**
     * Path
     * @description URL or the path to the embedding weights.
     */
    path: string;
    /**
     * Tokens
     * @description The tokens to map the embedding weights to. Use these tokens in your
     *                 prompts. When omitted, tokens are generated as <s0>, <s1>, ... to
     *                 match the number of vectors in the embedding file.
     */
    tokens?: string[];
}

export interface Embedding {
    /**
     * Path
     * @description URL or the path to the embedding weights.
     * @example https://huggingface.co/RyuusouI/Negativexld/resolve/20515981675c6e76d5b91e2343b958d27c5ad0ab/negativeXL_D.safetensors
     * @example https://filebin.net/3chfqasxpqu21y8n/my-custom-lora-v1.safetensors
     */
    path: string;
    /**
     * Tokens
     * @description The list of tokens to use for the embedding. When omitted, tokens
     *                 are generated as <s0>, <s1>, ... to match the number of vectors in
     *                 the embedding file.
     * @default null
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

export interface EditRegion {
    /**
     * Height
     * @description Height as a fraction of image height.
     */
    height: number;
    /**
     * Image Idx
     * @description Zero-based index into image_urls.
     */
    image_idx: number;
    /**
     * Label
     * @description Refer to this region as @label. Defaults to its one-based position.
     */
    label?: string;
    /**
     * Note
     * @description Edit instruction for this region; may reference other @labels.
     * @default
     */
    note?: string;
    /**
     * Width
     * @description Width as a fraction of image width.
     */
    width: number;
    /**
     * X
     * @description Left edge as a fraction of image width.
     */
    x: number;
    /**
     * Y
     * @description Top edge as a fraction of image height.
     */
    y: number;
}

export interface EditBoundingBox {
    box?: Box;
    /**
     * Description
     * @description What to draw in this box: the object and its look.
     * @example a large fluffy knitted dragon in terracotta and mustard yarn
     */
    description: string;
    /**
     * Label
     * @description Short name for the object in this box, e.g. `dragon`. Write `<dragon>` in the prompt to tie the box to those words; a box the prompt doesn't name is added to the scene. Defaults to `obj_<n>`.
     * @example dragon
     */
    label?: string;
    source_box?: Box;
    /**
     * Source Image Index
     * @description 0-based index into `image_urls` of the reference the object comes from. Leave unset for a new object.
     */
    source_image_index?: number;
    target_box?: Box;
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

export interface DropShadow {
    /**
     * Blur
     * @description Shadow blur strength (0 to 100). 0 is a hard-edged shadow; 100 is the softest, a radius of 5% of the smaller canvas dimension.
     * @default 24
     */
    blur?: number;
    /**
     * @description Shadow color (R/G/B). Defaults to black.
     * @default {
     *       "g": 0,
     *       "r": 0,
     *       "b": 0
     *     }
     */
    color?: RGBColor;
    /**
     * Horizontal
     * @description Horizontal shadow offset strength (-100 to 100). Positive moves the shadow right, negative moves it left. 100 is the maximum offset, 10% of the canvas width.
     * @default 50
     */
    horizontal?: number;
    /**
     * Opacity
     * @description Shadow opacity (0–1).
     * @default 0.25
     */
    opacity?: number;
    /**
     * Vertical
     * @description Vertical shadow offset strength (-100 to 100). Positive moves the shadow down, negative moves it up. 100 is the maximum offset, 10% of the canvas height.
     * @default 8
     */
    vertical?: number;
}

export interface DimensionEntry {
    /**
     * Name
     * @description Dimension to render. length/depth are intentionally disabled.
     * @enum {string}
     */
    name: 'height' | 'width_bottom' | 'width_top';
    /**
     * Position
     * @description Callout side; defaults by dimension name when omitted.
     */
    position?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Unit
     * @description Physical measurement unit.
     * @enum {string}
     */
    unit: 'mm' | 'cm' | 'm' | 'in' | '"' | 'ft' | "'";
    /**
     * Value
     * @description Physical measurement value.
     */
    value: number;
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

export interface DecisionsUsage {
    cost?: number;
    input_tokens: number;
    output_tokens: number;
    total_tokens?: number;
}

export interface DecisionsScoreQuestion {
    /**
     * Criteria
     * @description Ordered level descriptions, from the low end to the high end.
     */
    criteria: (string | Record<string, never> | unknown[])[];
    /**
     * Instructions
     * @description The property to score, as text or structured multimodal content.
     */
    instructions: string | Record<string, never> | { [x: string]: any }[];
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'score';
}

export interface DecisionsScoreAnswer {
    confidence?: number;
    legend?: {
        [key: string]: string | Record<string, never> | { [x: string]: any }[];
    };
    probabilities?: {
        [key: string]: number;
    };
    score: number;
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'score';
}

export interface DecisionsNoulQuestion {
    criteria?: DecisionsNoulCriteria;
    /**
     * Instructions
     * @description The yes/no question, as text or structured multimodal content.
     */
    instructions: string | Record<string, never> | { [x: string]: any }[];
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'noul';
}

export interface DecisionsNoulCriteria {
    /**
     * False
     * @description What should count as a no/false outcome.
     */
    false: string | Record<string, never> | { [x: string]: any }[];
    /**
     * True
     * @description What should count as a yes/true outcome.
     */
    true: string | Record<string, never> | { [x: string]: any }[];
}

export interface DecisionsNoulAnswer {
    /**
     * Noul
     * @description Probability from 0 to 1 that the answer is yes.
     */
    noul: number;
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'noul';
}

export interface DecisionsChoiceQuestion {
    /**
     * Criteria
     * @description Answer options mapped to descriptions of each option.
     */
    criteria: {
        [key: string]: string | Record<string, never> | { [x: string]: any }[];
    };
    /**
     * Instructions
     * @description The question, as text or structured multimodal content.
     */
    instructions: string | Record<string, never> | { [x: string]: any }[];
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'choice';
}

export interface DecisionsChoiceAnswer {
    choice: string;
    confidence?: number;
    probabilities?: {
        [key: string]: number;
    };
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'choice';
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
    scale?:
        | {
              [key: string]: number;
          }
        | number;
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

export interface Color {
    /**
     * Blue
     * @description The blue component of the color (0-255).
     */
    blue: number;
    /**
     * Green
     * @description The green component of the color (0-255).
     */
    green: number;
    /**
     * Name
     * @description The name of the color.
     */
    name?: string;
    /**
     * Red
     * @description The red component of the color (0-255).
     */
    red: number;
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

export interface CapacityInput {
    /**
     * Unit
     * @enum {string}
     */
    unit: 'fl_oz' | 'ml' | 'l' | 'qt' | 'gal' | 'cups';
    value: number;
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

export interface Box {
    /**
     * X Max
     * @description Right edge as a fraction of the image width (0-1).
     * @example 0.7
     */
    x_max: number;
    /**
     * X Min
     * @description Left edge as a fraction of the image width (0-1).
     * @example 0.3
     */
    x_min: number;
    /**
     * Y Max
     * @description Bottom edge as a fraction of the image height (0-1).
     * @example 0.9
     */
    y_max: number;
    /**
     * Y Min
     * @description Top edge as a fraction of the image height (0-1).
     * @example 0.4
     */
    y_min: number;
}

export interface BoundingBoxes {
    /**
     * Bboxes
     * @description List of bounding boxes
     */
    bboxes: BoundingBox_1[];
}

export interface BoundingBox_2 {
    bottom_right: Point_1;
    top_left: Point_1;
}

export interface BoundingBox_1 {
    box: Box;
    /**
     * Description
     * @description What to draw in this box: the object and its look.
     * @example a red fox with thick orange fur and a white-tipped tail
     */
    description: string;
    /**
     * Label
     * @description Short name for the object in this box, e.g. `fox`. Write `<fox>` in the prompt to tie the box to those words; a box the prompt doesn't name is added to the scene. Defaults to `obj_<n>`.
     * @example fox
     */
    label?: string;
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

export interface BasicAnimations {
    running_armature_glb?: File;
    running_fbx?: File;
    running_glb?: File;
    walking_armature_glb?: File;
    walking_fbx?: File;
    walking_glb?: File;
}

export interface Background {
    /**
     * @description Solid background color (R/G/B, 0–255). Applies when mode is 'Color'. Defaults to white.
     * @default {
     *       "g": 255,
     *       "r": 255,
     *       "b": 255
     *     }
     */
    color?: RGBColor;
    /**
     * Image Fit
     * @description How the background image fills the canvas: 'Cover' fills and crops, 'Contain' fits and letterboxes onto `color`, 'Stretch' distorts to fit.
     * @default Cover
     * @example Cover
     * @enum {string}
     */
    image_fit?: 'Cover' | 'Contain' | 'Stretch';
    /**
     * Image Url
     * @description Background image URL. Required when mode is 'Image'.
     */
    image_url?: string;
    /**
     * Mode
     * @description 'Color' fills with `color` (white by default); 'Transparent' leaves it transparent (always PNG); 'Image' composites onto `image_url`.
     * @default Color
     * @enum {string}
     */
    mode?: 'Transparent' | 'Color' | 'Image';
}

export interface AvatarVWatermark {
    /**
     * Image Url
     * @description HTTP(S) URL of the watermark image to overlay on the video.
     */
    image_url: string;
    /**
     * Opacity
     * @description Watermark opacity (0.0 = transparent, 1.0 = opaque).
     */
    opacity?: number;
    /**
     * Placement
     * @description Where to place the watermark on the video.
     */
    placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    /**
     * Scale
     * @description Watermark scale relative to the video (0.0 exclusive–2.0).
     */
    scale?: number;
}

export interface AvatarVBackground {
    /**
     * Type
     * @description Type of background. 'color' for a solid hex color, 'image' for an image URL.
     * @default color
     * @enum {string}
     */
    type?: 'color' | 'image';
    /**
     * Value
     * @description Background value — hex color for 'color' type, or HTTP(S) URL for 'image' type.
     * @default #FFFFFF
     * @example #FFFFFF
     * @example https://example.com/background.jpg
     */
    value?: string;
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

export interface AV2AVValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Reference Audio Url
     * @description Optional URL to a separate reference audio. If omitted, the audio is taken from reference_video_url's own track.
     */
    reference_audio_url?: string;
    /**
     * Reference Video Url
     * @description URL to the reference video (its audio track is also used as the audio reference) that conditions the generated audio+video.
     */
    reference_video_url: string;
}

export interface AV2AVMaskedValidation {
    /**
     * Mask Url
     * @description URL to the mask (image or video). WHITE marks the region to regenerate, BLACK is kept unchanged.
     */
    mask_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Reference Audio Url
     * @description Optional URL to a separate reference audio. If omitted, the audio is taken from reference_video_url's own track.
     */
    reference_audio_url?: string;
    /**
     * Reference Video Url
     * @description URL to the reference video (its audio track is also used as the audio reference) guiding the regenerated audio+video.
     */
    reference_video_url: string;
    /**
     * Video Url
     * @description URL to the source video. Its UNMASKED region is kept pixel-faithful and the masked region is regenerated.
     */
    video_url: string;
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

export interface AudioSetting25 {
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
    format?: 'mp3' | 'wav' | 'pcm';
    /**
     * Sample Rate
     * @description Sample rate of generated audio
     * @default 44100
     * @enum {integer}
     */
    sample_rate?: 16000 | 24000 | 32000 | 44100;
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

export interface AudioInpaintValidation {
    /**
     * Audio Url
     * @description URL to the audio clip to inpaint.
     */
    audio_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Time Ranges
     * @description Time ranges (in seconds, [start, end]) to REGENERATE/inpaint; the rest of the audio is kept. e.g. [[1.0, 2.0]].
     * @example [
     *       [
     *         1,
     *         2
     *       ]
     *     ]
     */
    time_ranges: [number, number][];
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

export interface AudioExtendValidation {
    /**
     * Audio Url
     * @description URL to the audio clip the model should temporally extend.
     */
    audio_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
}

export interface Audio_1 {
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

export interface Audio {
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

export interface AspectRatio {
    /**
     * Ratio
     * @description Aspect ratio for 4K resolution output
     * @default 1:1
     * @enum {string}
     */
    ratio?: '1:1' | '16:9' | '9:16' | '4:3' | '3:4';
}

export interface AnswerOutput {
    sdp: string;
    /**
     * @description discriminator enum property added by openapi-typescript
     * @enum {string}
     */
    type: 'answer';
}

export interface AnimationClip {
    /**
     * Action Id
     * @description The Meshy animation preset action ID applied to this clip.
     */
    action_id: number;
    animation_fbx?: File;
    animation_glb?: File;
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

export interface Aesthetics_2 {
    /**
     * Aesthetic Score
     * @description The aesthetic score of the image (e.g., 'very high', 'high', 'medium', 'low').
     */
    aesthetic_score?: string;
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
     * @description The preference score of the image (e.g., 'very high', 'high', 'medium', 'low').
     */
    preference_score?: string;
    [key: string]: any;
}

export interface Aesthetics_1 {
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

export interface Aesthetics {
    /**
     * Aesthetic Score
     * @description The aesthetic score of the image to be generated.
     */
    aesthetic_score?: string;
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
     * @description The preference score of the image to be generated.
     */
    preference_score?: string;
}

export interface A2VValidation {
    /**
     * Audio Url
     * @description URL to the conditioning audio track that drives the generated video.
     */
    audio_url: string;
    /**
     * Image Url
     * @description URL to the start image used as the first frame (a2v is image+audio -> video, so the model conditions on this frame and the audio rather than generating the first frame).
     */
    image_url: string;
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
}

export interface A2AValidation {
    /**
     * Prompt
     * @description The prompt to use for validation.
     */
    prompt: string;
    /**
     * Reference Audio Url
     * @description URL to the reference audio that conditions the generated audio.
     */
    reference_audio_url: string;
}

export {};
