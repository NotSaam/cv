export type Project = {
  slug: string;
  name: string;
  accent: 'cyan' | 'violet';
  tagline: string;
  summary: string;
  description: string;
  objective: string;
  architecture: string;
  state?: string;
  vision?: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: 'flakai',
    name: 'FLAKAI',
    accent: 'violet',
    tagline: 'Visión por computador · Deportes · IA',
    summary:
      'Análisis automático de fútbol desde vídeo: detecta eventos clave, recorta clips y genera informes.',
    description:
      'Sistema que procesa partidos de fútbol grabados en vídeo y detecta automáticamente eventos clave —goles, saques de banda, saques de esquina y faltas— recortando clips, exportando eventos estructurados y generando informes.',
    objective:
      'Un producto usable en entorno real (pre-comercial/comercial), priorizando precisión y fiabilidad operativa por encima de la complejidad.',
    architecture:
      'Pipeline por etapas: diagnóstico de entorno y selección de modo, detección de perfil de cámara, detección de eventos en varias fases, confirmación multi-señal (visual + OCR del marcador + audio) y postproceso con deduplicación. Exporta clips, JSON e informes en PDF.',
    state: 'En desarrollo activo · diseño integral definido, iterando hacia producto.',
    tech: ['Python', 'Visión por computador', 'OCR', 'SQLite / DuckDB', 'FFmpeg'],
    link: 'https://github.com/NotSaam',
  },
  {
    slug: 'flk0s',
    name: 'FLK0S',
    accent: 'cyan',
    tagline: 'Ciberseguridad enterprise · Ecosistema',
    summary:
      'Suite enterprise de ciberseguridad: Blue Team, Red Team, orquestación con IA y reporting bajo un SSO único.',
    description:
      'Suite enterprise de ciberseguridad: Blue Team, Red Team, orquestación con IA y reporting, bajo una identidad y un SSO únicos. Cuatro aplicaciones modulares sobre una plataforma compartida de identidad, diseño y observabilidad.',
    objective:
      'Que se sienta como un producto y no como cuatro: una sola sesión, una sola estética, un solo ecosistema cohesionado.',
    architecture:
      'Módulos CDP (defensa), RT (red team), AI (agentes ofensivos autónomos) y Reportes, unidos por un Auth Gateway con SSO HS256 y MFA, un Centro de Operaciones como hub, y observabilidad con OpenTelemetry tras Caddy y Docker.',
    vision:
      'Un ecosistema de seguridad modular y escalable donde la IA orquesta y conecta operaciones ofensivas y defensivas dentro de un mismo marco.',
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'SSO HS256', 'OpenTelemetry', 'Caddy', 'Docker'],
    link: 'https://github.com/NotSaam',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
