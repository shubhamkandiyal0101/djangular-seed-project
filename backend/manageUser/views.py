from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

# @crossdomain(origin='*')

@csrf_exempt
def saveUser(request):
	print('request >> ',request)
	return HttpResponse(json.dumps({'message':'save user successfully'}), content_type="application/json")