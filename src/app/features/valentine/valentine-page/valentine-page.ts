import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent, Moment } from '../../../shared/timeline/timeline';

function formatNumber(num: number): string {
  return num.toLocaleString('pt-BR');
}

interface TimelineMoment extends Moment {
  image?: string;
}

@Component({
  selector: 'app-valentine-page',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './valentine-page.html',
  styleUrl: './valentine-page.scss'
})
export class ValentinePageComponent implements OnInit, OnDestroy {
  isStarted = false;
  moments: TimelineMoment[] = [
    {
      date: '06/10/2022',
      description: 'Primeiro pastel que você pagou. E aqui eu já tinha comprado a aliança, só estava pensando como pedir.',
      image: 'assets/timeline-1.jpg'
    },
    {
      date: '06/03/2023',
      description: 'Primeiro show de comédia juntos',
      image: 'assets/timeline-2.jpg'
    },
    {
      date: '15/04/2023',
      description: 'Primeira viagem juntos para Pipa/RN',
      image: 'assets/timeline-3.jpg'
    },
    {
      date: '09/10/2023',
      description: 'Primeira comemoração de 1 ano',
      image: 'assets/timeline-4.jpg'
    },
    {
      date: '15/02/2024',
      description: 'Primeira viagem juntos só nós dois para Natal/RN',
      image: 'assets/timeline-5.jpg'
    },
    {
      date: '02/08/2024',
      description: 'Sua primeira conquista que eu pude ajudar',
      image: 'assets/timeline-6.jpg'
    },
    {
      date: '03/12/2024',
      description: 'Primeiro sonho em conjunto nosso realizado: as duas pestes de raiva diária',
      image: 'assets/timeline-7.jpg'
    },
    {
      date: '11/05/2025',
      description: 'Primeira corrida juntos',
      image: 'assets/timeline-8.jpg'
    },
    {
      date: '',
      description: 'continua... 💖',
      image: 'assets/continua.jpg'
    }
  ];

  startDate = new Date(2022, 9, 9, 0, 0, 0); // 9 de outubro de 2022
  totalMonths = 0;
  totalDays = 0;
  totalHours = 0;
  totalMinutes = 0;
  totalSeconds = 0;

  chronoYears = 0;
  chronoMonths = 0;
  chronoDays = 0;
  chronoHours = 0;
  chronoMinutes = 0;
  chronoSeconds = 0;

  intervalId: any;
  formatNumber = formatNumber;

  ngOnInit() {
    this.updateCounters();
    this.intervalId = setInterval(() => this.updateCounters(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateCounters() {
    const now = new Date();
    let diff = now.getTime() - this.startDate.getTime();

    // Totais
    this.totalSeconds = Math.floor(diff / 1000);
    this.totalMinutes = Math.floor(diff / (1000 * 60));
    this.totalHours = Math.floor(diff / (1000 * 60 * 60));
    this.totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = now.getFullYear() - this.startDate.getFullYear();
    const months = now.getMonth() - this.startDate.getMonth();
    const day = now.getDate() - this.startDate.getDate();
    this.totalMonths = years * 12 + months + (day >= 0 ? 0 : -1);

    // Cronômetro detalhado: anos, meses, dias, horas, minutos, segundos
    let y = now.getFullYear() - this.startDate.getFullYear();
    let m = now.getMonth() - this.startDate.getMonth();
    let d = now.getDate() - this.startDate.getDate();
    let h = now.getHours() - this.startDate.getHours();
    let min = now.getMinutes() - this.startDate.getMinutes();
    let s = now.getSeconds() - this.startDate.getSeconds();

    if (s < 0) { s += 60; min--; }
    if (min < 0) { min += 60; h--; }
    if (h < 0) { h += 24; d--; }
    if (d < 0) {
      m--;
      // Pega o último dia do mês anterior
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      d += prevMonth.getDate();
    }
    if (m < 0) { m += 12; y--; }

    this.chronoYears = y;
    this.chronoMonths = m;
    this.chronoDays = d;
    this.chronoHours = h;
    this.chronoMinutes = min;
    this.chronoSeconds = s;
  }

  startExperience() {
    this.isStarted = true;
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(error => {
        console.log('Erro ao tocar música:', error);
      });
    }
  }
}
