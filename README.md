# Category Blocking — Custom Web Filtering App

App custom de filtrado web por categorías construida sobre CrowdStrike Falcon Foundry.
Bloquea dominios (FQDN) por categorías utilizando Falcon Firewall Management.

## Cómo funciona

La app crea políticas de firewall a nivel de host que bloquean tráfico saliente hacia dominios específicos agrupados por categoría. Utiliza las APIs de FalconPy (`FirewallManagement`, `FirewallPolicies`) para:

1. Crear políticas de firewall con enforcement activo
2. Crear rule groups con reglas FQDN (dominio completo + wildcard)
3. Asignar políticas a host groups
4. Almacenar relaciones categoría ↔ rule group ↔ host group en collections de Foundry

**Importante:** Esta app opera en capa L3/L4 (firewall de host). No es un proxy HTTP (L7). Bloquea por dominio completo (FQDN), no por URL path ni contenido.

## Arquitectura

### Backend (Python Functions)
- `main.py` — Entry point, registra todos los handlers
- `app_core.py` — Instancia FUNC, factory de clientes FalconPy, versiones de collections
- `app_utils.py` — Utilidades: sanitización de URLs, construcción de reglas de firewall
- `handlers/policies.py` — CRUD de políticas, health check, simulación
- `handlers/categories.py` — CRUD de categorías, import CSV
- `handlers/analytics.py` — Analytics de eventos de firewall
- `handlers/relationships.py` — Gestión de relaciones categoría-policy-hostgroup

### Collections (Custom Storage)
- **domain** — Almacena URLs/dominios agrupados por categoría
- **relationship** — Relaciones entre categorías, rule groups, host groups y políticas

### UI Pages (React)
- **Category Blocking Policy** — Crear políticas de bloqueo por categoría
- **Custom Categories** — Gestionar categorías y dominios
- **Domain Analytics** — Visualización de datos de dominios
- **Firewall Rules** — Ver y gestionar reglas de firewall activas
- **Relationship Graph** — Visualizar relaciones entre componentes

## Endpoints API

### Políticas
| Método | Path | Descripción |
|--------|------|-------------|
| POST | /create-rule | Crear política con rule group y reglas FQDN |
| GET | /list-policies | Listar todas las políticas creadas por la app |
| POST | /update-policy | Actualizar política (recrea rule group) |
| POST | /delete-policy | Eliminar política y sus relaciones |
| GET | /simulate-policy | Simular si un FQDN sería bloqueado |
| GET | /check-enforcement | Verificar enforcement de una política específica |
| GET | /health-check | Verificación masiva de todas las políticas |

### Categorías
| Método | Path | Descripción |
|--------|------|-------------|
| GET | /list-categories | Listar categorías disponibles |
| GET | /search-categories | Buscar categorías por nombre |
| POST | /manage-categories | Crear o actualizar categorías |
| POST | /import-csv | Importar categorías desde CSV |

### Host Groups
| Método | Path | Descripción |
|--------|------|-------------|
| GET | /urlblock | Listar host groups disponibles |

### Relaciones
| Método | Path | Descripción |
|--------|------|-------------|
| POST | /manage-relationship | Crear/actualizar relación |
| GET | /get-relationship | Obtener información de relación |

### Analytics
| Método | Path | Descripción |
|--------|------|-------------|
| GET | /domain-analytics | Obtener analytics de eventos de firewall |

### Sistema
| Método | Path | Descripción |
|--------|------|-------------|
| GET | /healthz | Health check básico de la función |

## Prerequisitos para que el filtrado funcione

1. **Falcon Sensor** instalado y conectado al CID en cada endpoint
2. **Windows Firewall** (servicio MpsSvc) corriendo — Falcon lo activa automáticamente con enforcement
3. **Falcon Firewall Management** habilitado (licencia activa)
4. **Enforcement ON** en la política — sin esto, Falcon solo monitorea, NO bloquea
5. **Política asignada** a un host group con hosts
6. **Rule group adjunto** a la política con reglas FQDN

Usa el endpoint `/health-check` para verificar que todos estos prerequisitos se cumplan.

## Limitaciones conocidas (L3/L4)

- ❌ No puede mostrar página de advertencia (WARN) al usuario
- ❌ No puede forzar Safe Search (Google, Bing, YouTube)
- ❌ No puede filtrar por URL path (solo FQDN completo)
- ❌ No puede inspeccionar HTTPS / SSL decryption
- ❌ No puede filtrar por contenido de página web

## Límites técnicos de Foundry

| Recurso | Límite |
|---------|--------|
| Timeout de funciones | 900 segundos |
| Payload JSON (input + output) | 1018 KB |
| Memoria por función | 1024 MB |
| Ejecuciones concurrentes | 100 |
| Campos indexables por collection | 10 |

## Setup

1. Instalar la app desde Foundry App Manager
2. Ir a la página **Firewall Rules** y hacer clic en "Setup Application"
3. Importar categorías desde CSV o agregarlas manualmente en **Custom Categories**
4. Crear políticas de bloqueo en **Category Blocking Policy**
5. Verificar el estado con `/health-check`
