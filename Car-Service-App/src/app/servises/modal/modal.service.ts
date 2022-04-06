import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {ModalComponent} from '../../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef!: ComponentRef<any>;
  private componentSubscriber!: Subject<string>;

  constructor( private resolver: ComponentFactoryResolver) { }

  public openModal(entry: ViewContainerRef, title: string, description: string): any {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.title = title;
    this.componentRef.instance.description = description;
    this.componentRef.instance.closeModal.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmModal.subscribe(() => this.confirmModal());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  public closeModal(): void {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  public confirmModal(): void {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}


