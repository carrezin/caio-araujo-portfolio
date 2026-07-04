import React from 'react'
import {
  Briefcase, Users, BarChart3, Database, Rocket, Scale,
  PhoneCall, ShieldCheck, MonitorPlay, FileSignature, MessageSquare, ServerCog, DatabaseZap, LayoutDashboard,
  Globe, Plug, Workflow, Settings2, Wrench, MailCheck, Headset, TrendingUp,
  Code2, Terminal, Boxes, Server,
  Building2, Lightbulb, MessagesSquare, Zap, RefreshCw,
  Search, ClipboardList, CheckCircle2, PackageCheck,
} from 'lucide-react'

// Mapeia nomes (strings usadas nos arquivos de data/) para componentes lucide.
const ICONS = {
  Briefcase, Users, BarChart3, Database, Rocket, Scale,
  PhoneCall, ShieldCheck, MonitorPlay, FileSignature, MessageSquare, ServerCog, DatabaseZap, LayoutDashboard,
  Globe, Plug, Workflow, Settings2, Wrench, MailCheck, Headset, TrendingUp,
  Code2, Terminal, Boxes, Server,
  Building2, Lightbulb, MessagesSquare, Zap, RefreshCw,
  Search, ClipboardList, CheckCircle2, PackageCheck,
}

const Icon = ({ name, className }) => {
  const LucideIcon = ICONS[name]
  if (!LucideIcon) return null
  return <LucideIcon className={className} />
}

export default Icon
