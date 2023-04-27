# Create folders
New-Item -ItemType Directory -Path "src\books"
New-Item -ItemType Directory -Path "src\courses"
New-Item -ItemType Directory -Path "src\evaluations"
New-Item -ItemType Directory -Path "src\errors"
New-Item -ItemType Directory -Path "src\guards"
New-Item -ItemType Directory -Path "src\interceptors"
New-Item -ItemType Directory -Path "src\middlewares"
New-Item -ItemType Directory -Path "src\nestjs\microservices"
New-Item -ItemType Directory -Path "src\nestjs\security"
New-Item -ItemType Directory -Path "src\pipes"
New-Item -ItemType Directory -Path "src\swagger"
New-Item -ItemType Directory -Path "src\testing"

# Create files
New-Item -ItemType File -Path "src\books\books.controller.ts"
New-Item -ItemType File -Path "src\books\books.entity.ts"
New-Item -ItemType File -Path "src\books\books.module.ts"
New-Item -ItemType File -Path "src\books\books.service.ts"

New-Item -ItemType File -Path "src\courses\courses.controller.ts"
New-Item -ItemType File -Path "src\courses\courses.entity.ts"
New-Item -ItemType File -Path "src\courses\courses.module.ts"
New-Item -ItemType File -Path "src\courses\courses.service.ts"

New-Item -ItemType File -Path "src\evaluations\evaluations.controller.ts"
New-Item -ItemType File -Path "src\evaluations\evaluations.entity.ts"
New-Item -ItemType File -Path "src\evaluations\evaluations.module.ts"
New-Item -ItemType File -Path "src\evaluations\evaluations.service.ts"

New-Item -ItemType File -Path "src\errors\error.middleware.ts"

New-Item -ItemType File -Path "src\guards\auth.guard.ts"

New-Item -ItemType File -Path "src\interceptors\logging.interceptor.ts"

New-Item -ItemType File -Path "src\middlewares\logger.middleware.ts"

New-Item -ItemType File -Path "src\nestjs\microservices\microservice.module.ts"
New-Item -ItemType File -Path "src\nestjs\microservices\microservice.service.ts"

New-Item -ItemType File -Path "src\nestjs\security\security.module.ts"

New-Item -ItemType File -Path "src\pipes\validation.pipe.ts"

New-Item -ItemType File -Path "src\swagger\swagger.module.ts"

New-Item -ItemType File -Path "src\testing\testing.service.ts"