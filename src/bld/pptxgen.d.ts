/// <reference types="node" />
import { AlignH, AlignV, CHART_TYPE, ChartType, JSZIP_OUTPUT_TYPE, OutputType, SCHEME_COLOR_NAMES, SHAPE_TYPE, SchemeColor, ShapeType } from './core-enums';
import { AddSlideProps, IPresentationProps, PresLayout, PresSlide, SectionProps, SlideLayout, SlideMasterProps, TableToSlidesProps } from './core-interfaces';
export default class PptxGenJS implements IPresentationProps {
    /**
     * Presentation layout name
     * Standard layouts:
     * - 'LAYOUT_4x3'   (10"    x 7.5")
     * - 'LAYOUT_16x9'  (10"    x 5.625")
     * - 'LAYOUT_16x10' (10"    x 6.25")
     * - 'LAYOUT_WIDE'  (13.33" x 7.5")
     * Custom layouts:
     * Use `pptx.defineLayout()` to create custom layouts (e.g.: 'A4')
     * @type {string}
     * @see https://support.office.com/en-us/article/Change-the-size-of-your-slides-040a811c-be43-40b9-8d04-0de5ed79987e
     */
    private _layout;
    set layout(value: string);
    get layout(): string;
    /**
     * PptxGenJS Library Version
     */
    private _version;
    get version(): string;
    /**
     * @type {string}
     */
    private _author;
    set author(value: string);
    get author(): string;
    /**
     * @type {string}
     */
    private _company;
    set company(value: string);
    get company(): string;
    /**
     * @type {string}
     * @note the `revision` value must be a whole number only (without "." or "," - otherwise, PPT will throw errors upon opening!)
     */
    private _revision;
    set revision(value: string);
    get revision(): string;
    /**
     * @type {string}
     */
    private _subject;
    set subject(value: string);
    get subject(): string;
    /**
     * @type {string}
     */
    private _title;
    set title(value: string);
    get title(): string;
    /**
     * Whether Right-to-Left (RTL) mode is enabled
     * @type {boolean}
     */
    private _rtlMode;
    set rtlMode(value: boolean);
    get rtlMode(): boolean;
    /** master slide layout object */
    private _masterSlide;
    get masterSlide(): PresSlide;
    /** this Presentation's Slide objects */
    private _slides;
    get slides(): PresSlide[];
    /** this Presentation's sections */
    private _sections;
    get sections(): SectionProps[];
    /** slide layout definition objects, used for generating slide layout files */
    private _slideLayouts;
    get slideLayouts(): SlideLayout[];
    private LAYOUTS;
    private _alignH;
    get AlignH(): typeof AlignH;
    private _alignV;
    get AlignV(): typeof AlignV;
    private _chartType;
    get ChartType(): typeof ChartType;
    private _outputType;
    get OutputType(): typeof OutputType;
    private _presLayout;
    get presLayout(): PresLayout;
    private _schemeColor;
    get SchemeColor(): typeof SchemeColor;
    private _shapeType;
    get ShapeType(): typeof ShapeType;
    /**
     * @depricated use `ChartType`
     */
    private _charts;
    get charts(): typeof CHART_TYPE;
    /**
     * @depricated use `SchemeColor`
     */
    private _colors;
    get colors(): typeof SCHEME_COLOR_NAMES;
    /**
     * @depricated use `ShapeType`
     */
    private _shapes;
    get shapes(): typeof SHAPE_TYPE;
    constructor();
    /**
     * Provides an API for `addTableDefinition` to create slides as needed for auto-paging
     * @param {string} masterName - slide master name
     * @return {PresSlide} new Slide
     */
    private addNewSlide;
    /**
     * Provides an API for `addTableDefinition` to get slide reference by number
     * @param {number} slideNum - slide number
     * @return {PresSlide} Slide
     * @since 3.0.0
     */
    private getSlide;
    /**
     * Enables the `Slide` class to set PptxGenJS [Presentation] master/layout slidenumbers
     * @param {SlideNumberProps} slideNum - slide number config
     */
    private setSlideNumber;
    /**
     * Create all chart and media rels for this Presentation
     * @param {PresSlide | SlideLayout} slide - slide with rels
     * @param {JSZip} zip - JSZip instance
     * @param {Promise<any>[]} chartPromises - promise array
     */
    private createChartMediaRels;
    /**
     * Create and export the .pptx file
     * @param {string} exportName - output file type
     * @param {Blob} blobContent - Blob content
     * @return {Promise<string>} Promise with file name
     */
    private writeFileToBrowser;
    /**
     * Create and export the .pptx file
     * @param {WRITE_OUTPUT_TYPE} outputType - output file type
     * @return {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} Promise with data or stream (node) or filename (browser)
     */
    private exportPresentation;
    /**
     * Export the current Presentation to stream
     * @returns {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} file stream
     */
    stream(): Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>;
    /**
     * Export the current Presentation as JSZip content with the selected type
     * @param {JSZIP_OUTPUT_TYPE} outputType - 'arraybuffer' | 'base64' | 'binarystring' | 'blob' | 'nodebuffer' | 'uint8array'
     * @returns {Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>} file content in selected type
     */
    write(outputType: JSZIP_OUTPUT_TYPE): Promise<string | ArrayBuffer | Blob | Buffer | Uint8Array>;
    /**
     * Export the current Presentation. Writes file to local file system if `fs` exists, otherwise, initiates download in browsers
     * @param {string} exportName - file name
     * @returns {Promise<string>} the presentation name
     */
    writeFile(exportName?: string): Promise<string>;
    /**
     * Add a new Section to Presentation
     * @param {ISectionProps} section - section properties
     * @example pptx.addSection({ title:'Charts' });
     */
    addSection(section: SectionProps): void;
    /**
     * Add a new Slide to Presentation
     * @param {AddSlideProps} options - slide options
     * @returns {PresSlide} the new Slide
     */
    addSlide(options?: AddSlideProps): PresSlide;
    /**
     * Create a custom Slide Layout in any size
     * @param {PresLayout} layout - layout properties
     * @example pptx.defineLayout({ name:'A3', width:16.5, height:11.7 });
     */
    defineLayout(layout: PresLayout): void;
    /**
     * Create a new slide master [layout] for the Presentation
     * @param {SlideMasterProps} props - layout properties
     */
    defineSlideMaster(props: SlideMasterProps): void;
    /**
     * Reproduces an HTML table as a PowerPoint table - including column widths, style, etc. - creates 1 or more slides as needed
     * @param {string} eleId - table HTML element ID
     * @param {TableToSlidesProps} options - generation options
     */
    tableToSlides(eleId: string, options?: TableToSlidesProps): void;
}
