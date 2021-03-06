import {Injectable, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {Stamp} from "../_model/Stamp";

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  public CSS_UNIT = 96.0 / 72.0;
  // Limit canvas size to 5 mega-pixels on mobile.
  // Support: Android, iOS
  public MAX_CANVAS_PIXELS = 5242880;
  public areaWidth = window.innerWidth;
  public mc: any;

  private SCALE: number;
  private PREVIEWSCALE: number;

  private docScale: number;
  private pdfDocument: any;
  private pdfDocInfo: any;
  private pdfMetadata: any;
  private pdfName: string;
  private currentPageNum: number;
  public onAfterDraw = new Subject();
  public renderHighestPriority = new Subject();
  public scrollToBotoom = new Subject();
  public scrollToTop = new Subject();
  public stamps: Stamp[];

  constructor() {
    this.scale = 1;
    this.pageNum = 1;
  }

  @Input()
  public set pdf(pdfDocument: any) {
    this.pdfDocument = pdfDocument;
  }
  public get pdf() {
    return this.pdfDocument;
  }

  @Input()
  public set scale(scale: number) {
    this.SCALE = scale;
  }
  public get scale() {
    return this.SCALE;
  }

  @Input()
  public set realScale(scale: number) {
    this.docScale = scale;
  }
  public get realScale() {
    return this.docScale;
  }

  @Input()
  public set pageNum(pageNum: number) {
    this.currentPageNum = pageNum;
  }
  public get pageNum() {
    return this.currentPageNum;
  }

  @Input()
  public set name(name: string) {
    this.pdfName = name;
  }
  public get name() {
    return this.pdfName;
  }

  @Input()
  public set docInfo(docInfo: any) {
    this.pdfDocInfo = docInfo;
  }
  public get docInfo() {
    return this.pdfDocInfo;
  }

  @Input()
  public set metadata(metadata: any) {
    this.pdfMetadata = metadata;
  }
  public get metadata() {
    return this.pdfMetadata;
  }

  @Input()
  public set previewScale(scale: number) {
    this.PREVIEWSCALE = scale;
  }
  public get previewScale() {
    return this.PREVIEWSCALE;
  }
}
